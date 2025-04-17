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
import step1pic1 from "../public/homepage.png"
import step1pic2 from "../public/Screenshot 2025-04-04 232558.png"

export function TimelineDemo() {
  const data = [
    {
      title: " STEP-1 ",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base lg:text-lg font-normal mb-8">
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
              <p className="text-green-800 dark:text-green-200 text-base md:text-lg font-medium">
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

            <ul className="list-disc list-inside text-base md:text-lg mt-2 text-neutral-700 dark:text-neutral-300">
              <li><span className="font-semibold text-primary">NIFTY 50</span> - Track India&apos;s leading index</li>
              <li><span className="font-semibold text-primary">SENSEX</span> - Monitor BSE&apos;s performance</li>
              <li><span className="font-semibold text-primary">Bank NIFTY</span> - Follow banking sector trends</li>
              <li><span className="font-semibold text-primary">Top Indian Stocks</span> - Watch market leaders</li>
</ul>

            <div className="col-span-2 bg-gray-100 dark:bg-gray-800 p-4 md:p-6 rounded-lg shadow-md mt-6">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-primary mb-3">
                Your Investment Journey Starts Here
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-neutral-700 dark:text-neutral-300 mb-4">
                As you begin your journey with us, you&apos;ll gain access to:
              </p>

              <ul className="list-none space-y-3 md:space-y-4">
                <li className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                  <span className="text-green-500 font-semibold text-base md:text-lg whitespace-nowrap">
                    ✨ Expert Analysis:
                  </span>
                  <span className="text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-400">
                    Real-time market insights tailored for Indian investors.
                  </span>
    </li>
                <li className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                  <span className="text-blue-500 font-semibold text-base md:text-lg whitespace-nowrap">
                    📊 Smart Tracking:
                  </span>
                  <span className="text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-400">
                    Monitor your portfolio with advanced analytics.
                  </span>
    </li>
                <li className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                  <span className="text-yellow-500 font-semibold text-base md:text-lg whitespace-nowrap">
                    🤖 AI Guidance:
                  </span>
                  <span className="text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-400">
                    Get personalized recommendations for your investment goals.
                  </span>
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
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg lg:text-xl font-normal mb-8">
            <strong>🎓 Fantastic Progress! You're Now Ready to Master Financial Concepts! 🌟</strong>
          </p>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800 mb-6">
            <p className="text-blue-800 dark:text-blue-200 text-base md:text-lg font-medium">
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
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg lg:text-xl font-normal mb-8">
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
        <div className="space-y-6">
          {/* Header */}
          <div className="text-center sm:text-left">
            <p className="text-neutral-800 dark:text-neutral-200 text-base sm:text-lg md:text-xl font-semibold mb-2">
              <span className="inline-block animate-bounce mr-2">🤖</span>
              Have Questions? Your AI Financial Assistant is Here to Help!
              <span className="inline-block animate-pulse ml-2">💡</span>
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* AI Assistant Features */}
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-4 sm:p-6 rounded-xl border border-blue-200/50 dark:border-blue-800/50">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-3">
                  Smart AI Assistant Features
                </h3>
                <ul className="space-y-3">
                  {[
                    "Real-time market analysis and insights",
                    "Personalized investment recommendations",
                    "Risk assessment and portfolio optimization",
                    "Market trend predictions and alerts"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-4 sm:p-6 rounded-xl border border-green-200/50 dark:border-green-800/50">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-green-600 dark:text-green-400 mb-3">
                  24/7 Support
                </h3>
                <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300">
                  Get instant answers to your investment queries anytime, anywhere. Our AI assistant is always ready to help you make informed decisions.
                </p>
              </div>
            </div>

            {/* Interactive Chat Demo */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="bg-gray-50 dark:bg-gray-900 p-4 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-sm sm:text-base font-medium text-gray-800 dark:text-gray-200">
                  AI Chat Assistant
                </h3>
              </div>
              
              <div className="p-4 space-y-4">
                {/* Chat Messages */}
                <div className="space-y-3">
                  {/* User Message */}
                  <div className="flex justify-end">
                    <div className="bg-primary/10 text-primary rounded-lg py-2 px-4 max-w-[80%] sm:max-w-[70%]">
                      <p className="text-xs sm:text-sm">
                        How should I diversify my portfolio?
                      </p>
                    </div>
                  </div>

                  {/* AI Response */}
                  <div className="flex justify-start">
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-lg py-2 px-4 max-w-[80%] sm:max-w-[70%]">
                      <p className="text-sm sm:text-base text-gray-800 dark:text-gray-200">
                        Based on your risk profile, I recommend:
                        <br />• 40% in Large-cap stocks
                        <br />• 30% in Mid-cap funds
                        <br />• 20% in Debt instruments
                        <br />• 10% in Gold ETFs
                      </p>
                    </div>
                  </div>
                </div>

                {/* Chat Input */}
                <div className="flex items-center gap-2 mt-4 border-t border-gray-200 dark:border-gray-700 pt-4">
                  <input
                    type="text"
                    placeholder="Ask about your investments..."
                    className="flex-1 text-xs sm:text-sm p-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                    disabled
                  />
                  <button className="bg-primary text-white px-3 py-2 rounded-lg text-xs sm:text-sm">
                    Ask AI
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Tips Section */}
          <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-4 sm:p-6">
            <h4 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
              Pro Tips for Using AI Assistant
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Ask specific questions about stocks or sectors",
                "Request real-time market analysis",
                "Get personalized investment strategies"
              ].map((tip, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-gray-800 p-3 rounded-lg border border-gray-200 dark:border-gray-700"
                >
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    💡 {tip}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "STEP-4",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg lg:text-xl  font-normal mb-4">
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

  <p className="text-neutral-700 dark:text-neutral-300 text-base md:text-lg leading-relaxed">
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
