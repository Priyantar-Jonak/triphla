import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import step2pic1 from "../public/Screenshot 2025-04-03 182951.png"
import step2pic2 from "../public/Screenshot 2025-04-03 182849.png"
import step3pic1 from "../public/Screenshot 2025-04-03 222206.png"
import step3pic2 from "../public/Screenshot 2025-04-03 222235.png"
import step4pic1 from "../public/Screenshot 2025-04-04 002158.png"
import step4pic2 from "../public/Screenshot 2025-04-04 002229.png"
import step4pic3 from "../public/Screenshot 2025-04-04 002243.png"
import step4pic4 from "../public/Screenshot 2025-04-04 002300.png"
import step1pic1 from "../public/Screenshot 2025-04-04 232524.png"
import step1pic2 from "../public/Screenshot 2025-04-04 232558.png"

export function TimelineDemo() {
  const data = [
    {
      title: " STEP-1 ",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            <strong>🎉 Congratulations on Taking Your First Step Towards Smart Investing! 🎉</strong>
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={step1pic1}
              alt="Real-time market dashboard"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={step1pic2}
              alt="Portfolio analysis"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
              <p className="text-green-800 dark:text-green-200 text-sm font-medium">
                Welcome to Triphla! You&apos;ve just completed Step 1 by exploring our platform. 
                You&apos;re now on your way to mastering smart investment strategies! 🚀
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
              <p className="text-blue-800 dark:text-blue-200 text-sm font-medium">
                What&apos;s Next? Discover our powerful tools and features designed specifically for Indian investors like you! 
              </p>
            </div>

            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mt-4 leading-relaxed">
              <span className="text-lg md:text-xl font-semibold text-primary">Your Journey to Smart Investing Begins Here</span>
              <br /><br />
              Get ready to experience our comprehensive suite of tools, including <span className="font-medium text-green-600">Live Updates</span> on major Indian indices and stocks:
            </p>

            <ul className="list-disc list-inside text-sm md:text-base mt-2 text-neutral-700 dark:text-neutral-300">
              <li><span className="font-semibold text-primary">NIFTY 50</span> - Track India&apos;s leading index</li>
              <li><span className="font-semibold text-primary">SENSEX</span> - Monitor BSE&apos;s performance</li>
              <li><span className="font-semibold text-primary">Bank NIFTY</span> - Follow banking sector trends</li>
              <li><span className="font-semibold text-primary">Top Indian Stocks</span> - Watch market leaders</li>
            </ul>

            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md mt-6">
              <h3 className="text-lg md:text-xl font-semibold text-primary">Your Investment Journey Starts Here</h3>
              <p className="text-sm md:text-base mt-2 text-neutral-700 dark:text-neutral-300">
                As you begin your journey with us, you&apos;ll gain access to:
              </p>

              <ul className="list-none mt-3 space-y-2">
                <li className="flex items-center">
                  <span className="text-green-500 font-semibold">✨ Expert Analysis:</span>
                  <span className="ml-2">Real-time market insights tailored for Indian investors.</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 font-semibold">📊 Smart Tracking:</span>
                  <span className="ml-2">Monitor your portfolio with advanced analytics.</span>
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-500 font-semibold">🤖 AI Guidance:</span>
                  <span className="ml-2">Get personalized recommendations for your investment goals.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "STEP-2",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            <strong>🎓 Fantastic Progress! You're Now Ready to Master Financial Concepts! 🌟</strong>
          </p>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800 mb-6">
            <p className="text-blue-800 dark:text-blue-200 text-sm font-medium">
              Congratulations on reaching the learning phase! Get ready to enhance your financial knowledge through our interactive learning module. 📚
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={step4pic1}
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
             
            <Image
              src={step4pic2}
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
             
             <Image
              src={step4pic3}
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
             <Image
              src={step4pic4}
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
           
          </div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mt-4">
            <strong>Your Path to Financial Wisdom Begins Here! 🚀</strong>
            <br /><br />
            <strong>Financial Learning Module &ndash; Interactive &amp; Engaging Financial Education</strong>  
            <br /><br />
            🔹 <strong>Introduction to the Stock Market</strong> &ndash; This section provides a comprehensive overview of the stock market, detailing its functions and significance in the global economy. Users gain insights into key benefits such as capital growth, diversification, and dividend income, while also understanding potential risks like market volatility and economic downturns.  
            <br /><br />
            🔹 <strong>Fun Facts &amp; Insights</strong> &ndash; Explore fascinating financial facts that make learning enjoyable. This section presents historical insights, including the establishment of the first stock exchange in Amsterdam in 1602, and explains why a rising market is referred to as a &ldquo;bull market.&rdquo; These engaging facts enhance financial awareness and spark curiosity.  
            <br /><br />
            🔹 <strong>Interactive Quiz</strong> &ndash; Reinforce knowledge through a multiple-choice quiz covering essential financial topics such as stock definitions, market capitalization, and investment principles. This interactive approach ensures better retention and deeper understanding.  
            <br /><br />
            🔹 <strong>Term Matching Activity</strong> &ndash; Strengthen financial vocabulary through an interactive matching exercise. Users connect key financial terms such as &ldquo;stock market,&rdquo; &ldquo;dividend,&rdquo; &ldquo;bull market,&rdquo; and &ldquo;bear market&rdquo; with their correct definitions, making complex concepts easier to grasp.  
            <br /><br />
            With structured content, engaging visuals, and hands-on exercises, the Financial Learning Module serves as a valuable tool for individuals looking to improve their financial literacy in an accessible and effective way.  
          </p>
        </div>
      ),
    },
    {
      title: "STEP-3",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            <strong>🌟 Outstanding! You're Now Ready to Access Your Smart Investment Dashboard! 📊</strong>
          </p>
          
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800 mb-6">
            <p className="text-purple-800 dark:text-purple-200 text-sm font-medium">
              Amazing progress! You've mastered the basics, and now it's time to explore your personalized AI-powered dashboard. Let's make your investments work smarter! 💪
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src={step2pic1}
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
             <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mt-4">
                <strong>Financial Planning Form:</strong> This tool allows users to input essential financial details such as income, expenses, expected bonuses, investment horizon, risk tolerance, and financial goals. Based on the provided data, it generates a personalized financial report, offering insights into savings, investment strategies, and long-term financial planning.
              </p>
            <Image
              src={step2pic2}
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mt-4">
                <strong>AI-Powered Financial Chatbot:</strong> This chatbot serves as a virtual financial advisor, offering expert guidance on investment planning, savings strategies, risk assessment, and retirement planning. Users can engage in real-time conversations to receive tailored financial advice and recommendations, helping them achieve their financial goals efficiently.
              </p>
           
          </div>
        </div>
      ),
    },
    {
      title: "STEP-3.5",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            <strong>🤖 Have Questions? Your AI Financial Assistant is Here to Help! 💡</strong>
          </p>

          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-lg border border-indigo-200 dark:border-indigo-800 mb-6">
            <h3 className="text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-3">
              🎯 Before Moving to Your Personalized Plan
            </h3>
            <p className="text-neutral-700 dark:text-neutral-300">
              Take a moment to clear any doubts with our AI-powered financial assistant. We're here to ensure you're fully confident in your investment journey!
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-primary mb-4">
                Ask About Anything! 🗣️
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">💬</span>
                  <span>"How do I analyze market trends?"</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">💬</span>
                  <span>"What's the best investment strategy for me?"</span>
                </li>
                <li className="flex items-center">
                  <span className="text-purple-500 mr-2">💬</span>
                  <span>"Explain mutual funds vs. stocks"</span>
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-500 mr-2">💬</span>
                  <span>"How to diversify my portfolio?"</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-b from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-4">
                Why Use Our AI Assistant? ��
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-500 text-lg mr-2">✨</span>
                  <span>24/7 instant responses to your queries</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 text-lg mr-2">✨</span>
                  <span>Personalized advice based on your profile</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 text-lg mr-2">✨</span>
                  <span>Up-to-date market insights and analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 text-lg mr-2">✨</span>
                  <span>Simple explanations for complex topics</span>
                </li>
              </ul>
            </div>

            <div className="col-span-2 bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
              <h4 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-3">
                🎉 Ready to Chat?
              </h4>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                Our AI assistant is trained on the latest Indian market data and can help you with:
              </p>
              <ul className="grid grid-cols-2 gap-4">
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">🎯</span>
                  <span>NIFTY & SENSEX analysis</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">🎯</span>
                  <span>Sector-specific insights</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">🎯</span>
                  <span>Risk assessment</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">🎯</span>
                  <span>Investment strategies</span>
                </li>
              </ul>
            </div>

            <div className="col-span-2 bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800 mt-4">
              <p className="text-yellow-800 dark:text-yellow-200 text-sm font-medium text-center">
                💡 Pro Tip: The more you interact with our AI assistant, the more personalized your investment journey becomes!
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "STEP-4",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          <strong>AI-Powered Investment Dashboard </strong>

          </p>
        
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={step3pic1}
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={step3pic2}
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
         
          </div>
          <div className="bg-white dark:bg-neutral-900 p-6 rounded-lg shadow-md">
  <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
   
  </h2>

  <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base leading-relaxed">
    This intelligent investment dashboard provides a 
    <strong> comprehensive analysis </strong> of your portfolio, helping you make informed financial decisions. 
    It leverages <strong> AI-driven insights </strong> to assess risk, diversification, and market sentiment, 
    while offering <strong> actionable recommendations </strong> to optimize your holdings.
  </p>

  <div className="mt-6">
    <h3 className="text-lg md:text-xl font-semibold text-neutral-900 dark:text-white mb-3">
      Key Features:
    </h3>

    <ul className="space-y-4">
      <li className="flex items-start">
        <span className="text-blue-500 text-lg">🔹</span>
        <p className="ml-2 text-neutral-700 dark:text-neutral-300">
          <strong>AI Insights & Recommendations</strong> – Personalized suggestions based on your portfolio's risk, 
          stock performance, and market trends. AI highlights key areas like sector concentration and major price movements.
        </p>
      </li>

      <li className="flex items-start">
        <span className="text-blue-500 text-lg">🔹</span>
        <p className="ml-2 text-neutral-700 dark:text-neutral-300">
          <strong>Portfolio Overview</strong> – Instantly access your <strong>total portfolio value</strong>, 
          <strong>risk level</strong>, and <strong>diversification status</strong>. Get real-time warnings if your risk is high 
          and AI-backed suggestions to rebalance.
        </p>
      </li>

      <li className="flex items-start">
        <span className="text-blue-500 text-lg">🔹</span>
        <p className="ml-2 text-neutral-700 dark:text-neutral-300">
          <strong>Holdings Breakdown</strong> – A detailed overview of your stocks, including 
          <strong> current price, percentage change, risk level, sentiment analysis,</strong> 
          and AI-recommended actions (e.g., Hold, Buy More) to assist in quick decision-making.
        </p>
      </li>

      <li className="flex items-start">
        <span className="text-blue-500 text-lg">🔹</span>
        <p className="ml-2 text-neutral-700 dark:text-neutral-300">
          <strong>Asset Allocation & Sector Distribution</strong> – Interactive visual charts display your 
          investment distribution across <strong>stocks, mutual funds, ETFs, and crypto</strong>, along with 
          sector-wise exposure (Tech, Finance, Energy, etc.).
        </p>
      </li>

      <li className="flex items-start">
        <span className="text-blue-500 text-lg">🔹</span>
        <p className="ml-2 text-neutral-700 dark:text-neutral-300">
          <strong>Market Sentiment Analysis</strong> – AI continuously evaluates <strong>overall market trends</strong>, 
          providing insights on whether the sentiment is <strong>Bullish, Neutral,</strong> or <strong>Bearish</strong> 
          to help navigate market conditions effectively.
        </p>
      </li>
    </ul>
  </div>

  <p className="mt-6 text-neutral-700 dark:text-neutral-300 text-sm md:text-base leading-relaxed">
    This <strong>user-friendly and data-driven platform</strong> empowers investors with 
    <strong>real-time insights, risk assessment, and strategic recommendations</strong> for smarter investing. 📊💡
  </p>
</div>

        </div>
      ),
    }
    
    
  ];
  return (
    <div className="min-h-screen w-full">
      <div className="relative top-0 left-0 w-full">
        <Timeline data={data} />
      </div>
    </div>
  );
}
