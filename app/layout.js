import { React, Suspense } from "react";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "next-themes"; // Import ThemeProvider
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" className="scroll-smooth" suppressHydrationWarning> {/* Add suppressHydrationWarning */}
        <head>
          {/* <link rel="icon" href="/dall.png" /> */}
          <title>Triphla</title>
        </head>
        <body> {/* Remove data-theme and grid classes if not needed globally */}
          <ThemeProvider
            attribute="class" // Use class-based theme switching (Tailwind default)
            defaultTheme="system" // Default to system preference
            enableSystem
            disableTransitionOnChange
          >
            <div className="w-full h-full"> {/* Ensure flex container takes full width/height */}
              {children}
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
