import next from "next";
import Link from "next/link";
import Image from "next/image";
import { SignInButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";

export default function Navbar() {
    return (
        <nav className="flex relative px-2 justify-between items-center">
            <div className="flex space-x-2">
                <div className="my-7 ml-7 bg-white w-10 rounded-full flex items-center justify-center overflow-hidden">
                    <Image src="/dall.png" alt="Triphla Logo" width={128} height={128} />
                </div>
                <div className="my-9">triphla</div>
            </div>
            <div className="flex pr-3 font-light fix justify-center items-center gap-10">
                <Link href="/" className="text-white hover:text-slate-300">
                    Home
                </Link>
                <Link
                    href="/interface"
                    className="text-white hover:text-slate-300"
                >
                    Interface
                </Link>
                <Link href="/about" className="text-white hover:text-slate-300">
                    About
                </Link>

            </div>
            <div className="flex pr-7">
                <SignedOut>
                    <div className="rounded-full btn btn-active">
                        <SignInButton mode="modal" />
                    </div>
                </SignedOut>

                <SignedIn>
                    <div className="pr-7">
                        <UserButton />
                    </div>
                </SignedIn>

            </div>
        </nav>
    );
}
