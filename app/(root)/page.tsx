'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { gsap } from 'gsap';

export default function Home() {
  const router = useRouter();
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animasi GSAP pada elemen gambar
    gsap.fromTo(imageRef.current, { opacity: 0, scale: 0.5, y: 50 }, { opacity: 1, scale: 1, y: 0, duration: 1.5, ease: 'power3.out' });

    // Redirect setelah 10 detik
    const timer = setTimeout(() => {
      router.push('/home');
    }, 10000);

    // Membersihkan timer saat komponen di-unmount
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex items-center justify-center pt-28 sm:pt-0" ref={imageRef}>
      <Image src="/images/handphone.png" alt="Handphone" width={200} height={200} />
    </div>
  );
}
