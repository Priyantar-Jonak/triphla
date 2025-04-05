"use client";

import Image from "next/image";
import { SignInButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { ThemeToggleButton } from "./ui/theme-toggle-button";

export default function Navbar() {
    return (
        <nav className="flex bg-[#060605] rounded-b-2xl relative px-2 justify-between items-center">
            <div className="flex space-x-2">
                <div className="my-7 ml-7 bg-white w-10 rounded-full flex items-center justify-center overflow-hidden">
                    <Image src="/dall.png" alt="Triphla Logo" width={128} height={128} />
                </div>
                <div className="text-lg text-white pt-7">triphla</div>
            </div>
            <div
                id="nav-part2"
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1.5vw",
                }}
                className="flex fix justify-center items-center gap-10"
            >
                <h4>
                    <a href="/">
                        Home
                    </a>
                </h4>
                <h4>
                    <a href="/interface">
                        Interface
                    </a>
                </h4>
                <h4>
                    <a href="/about">
                        About
                    </a>
                </h4>
                <h4>
                    <a href="/dashboard">
                        Dashboard
                     </a>
                </h4>
            </div>
            <div className="flex justify-center items-center pr-7">
                <SignedOut>
                    <div className="rounded-full mr-7 btn btn-sm btn-primary">
                        <SignInButton mode="modal">Sign In</SignInButton>
                    </div>
                </SignedOut>

                <SignedIn>
                    <div className="pr-7">
                        <UserButton />
                    </div>
                </SignedIn>
                <ThemeToggleButton />
            </div>
            <style jsx>{`
    nav {
        background-color: rgba(6, 6, 5, 0.7); /* Translucent background */
        backdrop-filter: blur(10px); /* Apply blur effect */
        -webkit-backdrop-filter: blur(10px);
    }

    #nav-part2 h4 {
        padding: 0.65vh 2.5vh;
        border-radius: 100px;
        color: #C59F60;
        position: relative; /* Ensure h4 creates a stacking context */
        transition: all ease 0.45s;
        overflow: hidden;
        z-index: 1; /* Ensure h4 has a stacking context */
    }

    #nav-part2 h4::after {
        content: "";
        position: absolute;
        height: 100%;
        width: 100%;
        background-color: #FFFFFF;
        left: 0;
        bottom: -100%;
        border-radius: 50%;
        transition: all ease 0.3s;
        z-index: 0; /* Place ::after below the a tag */
    }

    #nav-part2 h4:hover::after {
        bottom: 0;
        border-radius: 0;
    }

    #nav-part2 a {
        text-decoration: none;
        z-index: 9;
        position: relative;
    }

    #nav-part2 h4:hover a {
        color: #060605;
    }
`}</style>
        </nav>
    );
}
