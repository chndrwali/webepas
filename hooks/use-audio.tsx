'use client';

import type React from 'react';

import { useState, useEffect, useRef, createContext, useContext } from 'react';

// Define the context type
type AudioContextType = {
  isPlaying: boolean;
  togglePlay: () => void;
  play: () => void;
  pause: () => void;
};

// Create context with default values
const AudioContext = createContext<AudioContextType>({
  isPlaying: false,
  togglePlay: () => {},
  play: () => {},
  pause: () => {},
});

// Provider component
export const AudioProvider = ({ children }: { children: React.ReactNode }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio('/music/backsound.mp3');

    // Set up loop
    if (audioRef.current) {
      audioRef.current.loop = true;
    }

    // Cleanup on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const play = () => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.error('Audio playback failed:', error);
        });
    }
  };

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };

  return <AudioContext.Provider value={{ isPlaying, togglePlay, play, pause }}>{children}</AudioContext.Provider>;
};

// Custom hook to use the audio context
export const useAudio = () => {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};
