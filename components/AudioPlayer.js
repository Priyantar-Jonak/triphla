import { useState, useEffect, useRef } from 'react';

export default function AudioPlayer() {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (!window.globalAudio) {
      window.globalAudio = new Audio('/bgm.mp3');
      window.globalAudio.loop = true;
      window.globalAudio.volume = 1;
    }
    audioRef.current = window.globalAudio;

    const playAudio = async () => {
      try {
        if (audioRef.current) {
          audioRef.current.volume = 1;
          const playPromise = audioRef.current.play();
          if (playPromise !== undefined) {
            playPromise
              .then(() => {
                setIsMuted(false);
                console.log('Autoplay successful');
              })
              .catch(error => {
                setIsMuted(true);
                console.log('Autoplay prevented:', error);
              });
          }
        }
      } catch (error) {
        console.log("Audio setup error:", error);
        setIsMuted(true);
      }
    };

    playAudio();

    const handleFirstClick = () => {
      if (audioRef.current && audioRef.current.paused) {
        playAudio();
      }
      document.removeEventListener('click', handleFirstClick);
    };

    document.addEventListener('click', handleFirstClick);

    return () => {
      document.removeEventListener('click', handleFirstClick);
    };
  }, []);

  const toggleMute = () => {
    if (window.globalAudio) {
      if (isMuted) {
        const playPromise = window.globalAudio.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              window.globalAudio.muted = false;
              setIsMuted(false);
            })
            .catch(error => {
              console.log('Play prevented:', error);
            });
        }
      } else {
        window.globalAudio.muted = true;
        setIsMuted(true);
      }
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