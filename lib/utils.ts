import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getInitials = (name: string): string =>
  name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

class GameSounds {
  private correctSound: HTMLAudioElement | null = null;
  private wrongSound: HTMLAudioElement | null = null;

  constructor() {
    if (typeof window !== 'undefined') {
      this.correctSound = new Audio('/music/correct.mp3');
      this.wrongSound = new Audio('/music/wrong.mp3');
    }
  }

  playCorrect(): void {
    if (this.correctSound) {
      this.correctSound.currentTime = 0;
      this.correctSound.play().catch((e: Error) => console.log('Audio play failed:', e));
    }
  }

  playWrong(): void {
    if (this.wrongSound) {
      this.wrongSound.currentTime = 0;
      this.wrongSound.play().catch((e: Error) => console.log('Audio play failed:', e));
    }
  }
}

export const gameSounds = typeof window !== 'undefined' ? new GameSounds() : null;
