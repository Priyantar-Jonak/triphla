"use client";

import next from "next";

const BlurBottom = () => {
    return (
        <>
            <div id="qq" className="absolute w-full h-[5vh] bottom-0 z-1">

            </div>
            <style jsx>{`
            #qq {
                background-color: rgba(6, 6, 5, 0.7);
                backdrop-filter: blur(9vw);
                -webkit-backdrop-filter: blur(10px);
            }
        `}</style>
        </>
    );
};

export default BlurBottom;