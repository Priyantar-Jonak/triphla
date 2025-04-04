from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import requests
from duckduckgo_search import DDGS
from phi.agent import Agent
from phi.model.groq import Groq
import os
from dotenv import load_dotenv
from google.cloud import aiplatform
from vertexai.language_models import TextGenerationModel
from cleaning_response import clean_response

# Load environment variables
load_dotenv()
GROQ_API_KEY = os.getenv('GROQ_API_KEY')
GOOGLE_CLOUD_PROJECT = os.getenv('GOOGLE_CLOUD_PROJECT')
GOOGLE_APPLICATION_CREDENTIALS = os.getenv('GOOGLE_APPLICATION_CREDENTIALS')

# Check for required environment variables
if not GROQ_API_KEY:
    raise ValueError("❌ Error: GROQ_API_KEY is not set. Make sure the .env file is configured correctly.")
if not GOOGLE_CLOUD_PROJECT:
    raise ValueError("❌ Error: GOOGLE_CLOUD_PROJECT is not set. Make sure the .env file is configured correctly.")
if not GOOGLE_APPLICATION_CREDENTIALS:
    raise ValueError("❌ Error: GOOGLE_APPLICATION_CREDENTIALS is not set. Make sure the .env file is configured correctly.")
if not os.path.exists(GOOGLE_APPLICATION_CREDENTIALS):
    raise ValueError(f"❌ Error: Credentials file not found at {GOOGLE_APPLICATION_CREDENTIALS}")

# Initialize Vertex AI
try:
    aiplatform.init(project=GOOGLE_CLOUD_PROJECT)
    text_model = TextGenerationModel.from_pretrained("text-bison-32k")
except Exception as e:
    print(f"❌ Error initializing Vertex AI: {str(e)}")
    print("Please check your Google Cloud credentials and project settings.")
    print("Make sure you have enabled the Vertex AI API and have the correct IAM permissions.")
    raise

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define Sentiment Analysis Agent
sentiment_agent = Agent(
    name="Sentiment Analysis Agent",
    role="Analyze financial news headlines for sentiment",
    model=Groq(id="llama-3.1-8b-instant", api_key=GROQ_API_KEY),
    instructions=[
        "Analyze financial news headlines and classify sentiment as either Bullish or Bearish",
        "Consider market impact, investor sentiment, and economic implications",
        "Only respond with either 'Bullish' or 'Bearish'",
        "No explanations or additional text",
        "If uncertain, lean towards Bearish"
    ],
    show_tools_calls=True,
    markdown=True,
)

# Define Web Scraping Agent
stock_news_agent = Agent(
    name="Stock News Agent",
    role="Fetch latest Indian stock market headlines and links using DuckDuckGo API",
    model=Groq(id="llama-3.1-8b-instant", api_key=GROQ_API_KEY),
    instructions=[
        "Retrieve the latest headlines about the Indian stock market.",
        "Provide the source link for each headline.",
        "Ensure news comes from reputable financial sources.",
        "Return the data in JSON format, structured as: [{'headline': '...', 'link': '...'}]" ,
        "No extra lines of info ,return onlny the json file"
    ],
    show_tools_calls=True,
    markdown=True,
)

async def analyze_sentiment(text):
    """Analyze sentiment using Groq agent"""
    try:
        prompt = f"Analyze this financial news headline and classify as Bullish or Bearish: {text}"
        response = await sentiment_agent.arun(prompt)
        sentiment = response.content.strip().lower()
        
        # Map the response to Bullish/Bearish
        if "bullish" in sentiment:
            return "Bullish"
        return "Bearish"
    except Exception as e:
        print(f"Error in sentiment analysis: {str(e)}")
        return "error"

@app.post("/api/stock-news")
async def get_stock_news():
    try:
        # Search for latest Indian stock market news
        query = "Indian stock market news"
        news_data = []
        
        with DDGS() as ddgs:
            results = ddgs.news(query, region='in-en', max_results=10)
            for result in results:
                sentiment = await analyze_sentiment(result["title"])  # Analyze sentiment
                news_data.append({
                    "headline": result["title"],
                    "link": result["url"],
                    "sentiment": sentiment
                })
        
        # Process news through LLaMA agent for better formatting
        response = await stock_news_agent.arun(f"Format the following news headlines with sentiment analysis in structured JSON format: {news_data}")
        response_text = response.content if hasattr(response, 'content') else str(response)
        cleaned_response = clean_response(response_text)
        print(cleaned_response)
        return cleaned_response
    
    except Exception as e:
        error_msg = str(e)
        print(f"Error in chat endpoint: {error_msg}")
        if "API key" in error_msg.lower():
            raise HTTPException(status_code=500, detail="API key configuration error")
        elif "rate limit" in error_msg.lower():
            raise HTTPException(status_code=429, detail="Too many requests. Please try again later")
        else:
            raise HTTPException(status_code=500, detail=f"An error occurred: {error_msg}")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)