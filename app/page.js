import axios from "axios";
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

async function fetchNews() {
  try {
    const response = await fetch(NEWS_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 3600 }
    });

    if (!response.ok) {
      console.error(`Error fetching stock news: ${response.status} ${response.statusText}`);
      const errorBody = await response.text();
      console.error("Error body:", errorBody);
      return null;
    }
    const newsData = await response.json();
    console.log(newsData);
    return newsData;
  } catch (error) {
    console.error("Error fetching stock news:", error);
    return null;
  }
}

export default async function Home() {
  const news = await fetchNews();
  const newsArr = JSON.parse(news || "[]");
  console.log("Parsed news data:", typeof newsArr);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div data-theme="coffee" className="relative overflow-hidden h-[80vh] rounded-xl">
        <div className="absolute inset-0 z-0">
          <Squares />
        </div>

        <main className="z-2 top-16 relative grid place-items-center px-4 md:px-8">
          <div className="grid w-full max-w-6xl gap-3 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            Think Smarter
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            Invest Wiser
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            with triphla
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"></h1>
              <Link href="/interface">
                <OutlineButton />
              </Link>
            </div>
          </div>
        </main>
      </div>

      {/* News Section */}
      <div className="w-full px-4 md:px-8 mt-10">
        <BidirectionalSlider news={newsArr} />
      </div>

      {/* Timeline Section */}
      <div className="w-full px-4 md:px-8 mt-12">
        <TimelineDemo />
      {/* </div> */}
    </div>
  );
}
