import Link from "next/link";
import Image from "next/image";
import { SignInButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import {ThemeToggleButton} from "./ui/theme-toggle-button"; // Corrected import name

export default function Navbar() {
    return (
        <nav className="flex relative px-2 justify-between items-center">
            <div className="flex space-x-2">
                <div className="my-7 ml-7 bg-white w-10 rounded-full flex items-center justify-center overflow-hidden">
                    <Image src="/dall.png" alt="Triphla Logo" width={128} height={128} />
                </div>
                <div className="font-semibold text-lg text-foreground">triphla</div> {/* Added font weight/size */}
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
                <Link href="/dashboard" className="text-white hover:text-slate-300">
                    Dashboard
                </Link>
                
            </div>
            <div className="flex pr-7">
                <SignedOut>
                    {/* Consider using a standard button component if available */}
                    <div className="rounded-full btn btn-sm btn-primary"> {/* Adjusted button size/style */}
                        <SignInButton mode="modal">Sign In</SignInButton> {/* Added text */}
                    </div>
                </SignedOut>

                <SignedIn>
                    <div className="pr-7">
                        <UserButton />
                    </div>
                </SignedIn>
                <ThemeToggleButton />
            </div>
        </nav>
    );
}
