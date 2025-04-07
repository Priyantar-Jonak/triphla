import { useState, useEffect, useRef } from 'react';

export default function AudioPlayer() {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef(null);

  // Use a static audio element that persists across renders
  useEffect(() => {
    if (!window.globalAudio) {
      window.globalAudio = new Audio('/bgm.mp3');
      window.globalAudio.loop = true;
      window.globalAudio.volume = 1;
    }
    audioRef.current = window.globalAudio;

    // Try to autoplay
    const playAudio = async () => {
      try {
        if (audioRef.current) {
          await audioRef.current.play();
          setIsMuted(false);
        }
      } catch (error) {
        console.log("Autoplay prevented:", error);
        setIsMuted(true);
      }
    };
    playAudio();

    // Cleanup
    return () => {
      // Don't stop the audio on unmount, just update the ref
      audioRef.current = null;
    };
  }, []);

  const toggleMute = () => {
    if (window.globalAudio) {
      if (isMuted) {
        window.globalAudio.play();
        window.globalAudio.muted = false;
      } else {
        window.globalAudio.muted = true;
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <button
      onClick={toggleMute}
      className="flex items-center justify-center p-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
      aria-label={isMuted ? "Unmute" : "Mute"}
    >
      {isMuted ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M11 5L6 9H2v6h4l5 4V5z" />
          <line x1="23" y1="9" x2="17" y2="15" />
          <line x1="17" y1="9" x2="23" y2="15" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M11 5L6 9H2v6h4l5 4V5z" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
        </svg>
      )}
    </button>
  );
}