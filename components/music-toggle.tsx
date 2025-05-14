'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface MusicToggleProps {
  audioSrc?: string;
}

export const MusicToggle = ({ audioSrc = '/audio/background-music.mp3' }: MusicToggleProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(audioSrc);
    audioRef.current.loop = true;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
      }
    };
  }, [audioSrc]);

  const playMusic = () => {
    if (!audioRef.current || isPlaying) return;

    audioRef.current.play().catch((error) => {
      console.error('Audio playback failed:', error);
    });
    setIsPlaying(true);
  };

  const stopMusic = () => {
    if (!audioRef.current || !isPlaying) return;

    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setIsPlaying(false);
  };

  return (
    <div className="flex justify-between w-full absolute top-0 z-50 px-4">
      {/* Left button (Play Music) */}
      <motion.button className={`transition-transform ${isPlaying ? 'opacity-50' : 'opacity-100'}`} onClick={playMusic} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} disabled={isPlaying}>
        <Image src="/icon/play.png" alt="Play Music" width={50} height={50} />
      </motion.button>

      {/* Right button (Stop Music) */}
      <motion.button onClick={stopMusic} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className={`transition-transform ${isPlaying ? 'opacity-100' : 'opacity-50'}`} disabled={!isPlaying}>
        <Image src="/icon/sound-off.png" alt="Stop Music" width={50} height={50} />
      </motion.button>
    </div>
  );
};
