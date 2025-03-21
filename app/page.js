import Navbar from "@/components/Navbar";
import { SignedOut } from "@clerk/nextjs";
import OutlineButton from "@/components/outlinebutton";

export default function Home() {
  return (
    <div data-theme="coffee" className="w-full rounded-xl">
      <Navbar />
      <main className="pt-10 place-items-center">

        <div className="relative pt-7 w-[50vw] h-[35vh] place-items-center">
          <div className="leading-none h-[12vh] rounded-t-[3vw] rounded-b-[3vw] w-[35vw]"><h1 className="text-6xl text-center">Your AI partner</h1></div>
          <div className="leading-none -mt-3 h-[12vh] rounded-b-[2vw] w-[30vw]"><h1 className="text-6xl text-center">for all things</h1></div>
          <div className="leading-none -mt-3 h-[12vh] flex w-[27vw] rounded-b-[2vw] justify-center">
            <div><h1 className="text-6xl text-center">crypto</h1></div>
            
            <SignedOut>
              <OutlineButton></OutlineButton>
            </SignedOut>
          </div>

        </div>
      </main>
      <footer className="">

      </footer>
    </div>
  );
}
