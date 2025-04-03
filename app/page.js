"use client";
import { useEffect } from "react";
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
import { useState } from "react";


const NEWS_API= process.VITE_NEWS_API || "http://localhost:8000/api/stock-news";

export default function Home() {
  
  const [news, setNews] = useState(null)

  useEffect(() => {
    console.log("hi")
    axios.post(NEWS_API)
        .then(response => {
            setNews(response.data)
            console.log(news)
        })
        .catch(error => {
            console.error("Error fetching stock news:", error);
        });
    }, [news]);

    // await new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve();
    //   }, 10000);
    // });
  const images = [
    { src: '/images/image1.jpg', alt: 'Image 1' },
    { src: '/images/image2.jpg', alt: 'Image 2' },
    { src: '/images/image3.jpg', alt: 'Image 3' },
    { src: '/images/image4.jpg', alt: 'Image 4' },
    { src: '/images/image5.jpg', alt: 'Image 5' },
    { src: '/images/image6.jpg', alt: 'Image 6' },
  ];

  return (
    

    <div>
      <div data-theme="coffee" className="relative overflow-hidden h-[80vh] rounded-xl">
        <div className="absolute inset-0 z-0">
          <Squares />
        </div>
      
        {/* <StockNews/> This will fetch and log the stock news */}
        
        <Navbar className="relative z-10" />
        <main className="z-2 top-14 relative place-items-center">
          <div className="grid w-[70vw] h-1 place-items-center">
            <div className="leading-none">
              <h1 className="text-[7.5vw] text-center">Your AI partner</h1>
            </div>
            <div className="leading-none">
              <h1 className="text-[7.5vw] text-center">for all things</h1>
            </div>
            <div className="flex justify-center">
              <div className="-mt-5">
                <h1 className="text-[7.5vw] text-center">Finance</h1>
              </div>
              <div className="pt-4">
                <Link href="/chat">
                  <OutlineButton />
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>


      <div className="w-screen">
          <h2 className="text-3xl font-bold text-center mt-4"></h2>
          <BidirectionalSlider images={images} />
        </div>
      <div className="flex gap-3 ml-3 mb-4 -mt-8">
        <div className="relative rounded-xl w-[45vw] h-[25.6vw] overflow-hidden">
          <Image
            src="/bitc.jpeg"
            alt="Dall"
            layout="fill"
            objectFit="cover"
            className="opacity-60"
          />
          <div className="absolute pl-16 right-0 w-[27.5vw] h-full">
            <span data-theme="coffee" className="mt-12 opacity-90 flex items-center justify-center w-10 h-10 rounded-full">
              <i className="ri-chat-ai-fill"></i>
            </span>
            <div className="pb-10">
              <Typing />
              <div data-theme="coffee" className="opacity-90 absolute text-xs flex items-center justify-between rounded-full mb-5 px-5 bottom-0 w-[18.5vw] h-[5vh]">
                LEARN MORE
                <Link href="/about">
                  <i className="ri-add-fill"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex gap-3">
          <Card id="1" />
          <Card id="2" />
        </div>
      </div>
      <div className="absolute mb-3 mx-3 rounded-xl overflow-hidden">
        <TimelineDemo />
      </div>
    </div>
  );
}
