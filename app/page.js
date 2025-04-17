import axios from "axios"; // Keep axios if other parts need it, or remove if unused after changes.
import Navbar from "@/components/Navbar";
import { SignedOut } from "@clerk/nextjs";
import Card from "@/components/cards";
import Typing from "@/components/typing";
import Image from "next/image";
import Link from "next/link";
import OutlineButton from "@/components/outlinebutton";
import Squares from "@/components/backgroundPaths";
import { TimelineDemo } from "@/components/time";
import BidirectionalSlider from "@/components/bidirectionalslider";
import { Newspaper } from "lucide-react";
// Removed useState and useEffect

const NEWS_API= process.VITE_NEWS_API || "https://triphla-yv9t.onrender.com/api/stock-news";
async function fetchNews() {
  try {
    // Using fetch API for server-side fetching and revalidation (ISR)
    const response = await fetch(NEWS_API, {
      method: 'POST', // Assuming POST is required as per original code
      headers: {
        'Content-Type': 'application/json', // Add headers if needed by the API
      },
      // Add body if the POST request needs data: body: JSON.stringify({ key: 'value' })
      next: { revalidate: 3600 } // Revalidate every hour (3600 seconds)
    });

    if (!response.ok) {
      // Log detailed error for server-side debugging
      console.error(`Error fetching stock news: ${response.status} ${response.statusText}`);
      const errorBody = await response.text();
      console.error("Error body:", errorBody);
      return null; // Return null or throw an error
    }
    const newsData = await response.json();
    console.log(newsData);
    return newsData;
  } catch (error) {
    console.error("Error fetching stock news:", error);
    return null; // Return null or handle error appropriately
  }
}

export default async function Home() {
  const news = await fetchNews();
  const newsArr = JSON.parse(news);
  
  return (
    <div className="w-full ">
      <div data-theme="coffee" className="relative overflow-hidden min-h-[90vh] rounded-xl bg-gradient-to-b from-gray-900 to-black ">
        <div className="absolute inset-0 z-0">
          <Squares />
        </div>
      
        <main className="z-10 relative flex items-center justify-center min-h-[90vh] px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-6">
              {/* Main Headings with Progressive Size Increase */}
              <div className="space-y-4 pt-10">
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                  <span className=" inline-block animate-fade-in-up bg-gradient-to-b from-gray-300 via-gray-500 to-gray-700 text-transparent bg-clip-text">
                    Think Smarter
                  </span>
                </h1>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                  <span className="inline-block animate-fade-in-up delay-100 bg-gradient-to-b from-gray-100 via-gray-300 to-gray-500 text-transparent bg-clip-text">
                    Invest Wiser
                  </span>
                </h1>
                <div className="flex items-center justify-center space-x-3">
                  <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
                    <span className="inline-block animate-fade-in-up delay-200">
                      with <span className="bg-clip-text">Triphla</span>
                    </span>
                  </h1>
                </div>
              </div>

              {/* Enhanced Subheading */}
              <div className="animate-fade-in-up delay-300 mt-8">
                <p className="text-lg sm:text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Your professional companion for mastering the Indian stock market with 
                  <span className="text-primary font-semibold"> precision</span> and
                  <span className="text-primary font-semibold"> confidence</span>
                </p>
              </div>

              {/* Centered CTA Section */}
              <div className=" animate-fade-in-up delay-400">
                <div className="flex flex-col items-center justify-center ">
                  {/* Main CTA Button */}
                  <Link 
                    href="/interface" 
                    className="relative group md:scale-125"
                  >
                    <OutlineButton/>
                  </Link>

                  {/* Social Proof */}
                  {/* <div className="flex items-center justify-center space-x-3 text-gray-400 bg-gray-800/30 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-700/50">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-primary/20 border border-gray-700"></div>
                      <div className="w-8 h-8 rounded-full bg-primary/30 border border-gray-700"></div>
                      <div className="w-8 h-8 rounded-full bg-primary/40 border border-gray-700"></div>
                    </div>
                    <p className="text-sm">
                      Join <span className="text-white font-semibold">10,000+</span> investors
                    </p>
                  </div> */}
                </div>
              </div>

              {/* Features Grid */}
              <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto animate-fade-in-up delay-500"
              style={{
                marginBottom: '64px'
              }}
              >
                <div className="group p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 border border-gray-700/50">
                  <div className="h-12 w-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    AI-Powered Analysis
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Get real-time insights and personalized recommendations powered by advanced AI algorithms
                  </p>
                </div>

                <div className="group  p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 border border-gray-700/50">
                  <div className="h-12 w-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Smart Portfolio
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Track, analyze, and optimize your investments with advanced risk management tools
                  </p>
                </div>

                <div className="group p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 border border-gray-700/50">
                  <div className="h-12 w-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Market Intelligence
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Stay ahead with live market updates and comprehensive sector analysis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Rest of your components */}
      <div className="w-full py-8">
        <BidirectionalSlider news={newsArr} />
      </div>
      <div className="py-8">
        <TimelineDemo />
      </div>
    </div>
  );
}
