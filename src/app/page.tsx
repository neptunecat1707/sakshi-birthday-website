'use client';

import { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { ActivitiesSection } from '@/components/ActivitiesSection';
import { PlaylistSection } from '@/components/PlaylistSection';
import { WishesSection } from '@/components/WishesSection';
import { FinalSurpriseSection } from '@/components/FinalSurpriseSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  useEffect(() => {
    // Trigger confetti on page load with multiple bursts
    const timer1 = setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 1500);

    const timer2 = setTimeout(() => {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { x: 0.2, y: 0.7 }
      });
    }, 2000);

    const timer3 = setTimeout(() => {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { x: 0.8, y: 0.7 }
      });
    }, 2500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
      <Header />
      <HeroSection />
      <ActivitiesSection />
      <PlaylistSection />
      <WishesSection />
      <FinalSurpriseSection />
      <Footer />
    </div>
  );
}
