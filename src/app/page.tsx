'use client';

import { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { HeroSection } from '@/components/HeroSection';
import { ActivitiesSection } from '@/components/ActivitiesSection';
import { PlaylistSection } from '@/components/PlaylistSection';
import { WishesSection } from '@/components/WishesSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  useEffect(() => {
    // Trigger confetti on page load
    const timer = setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      <HeroSection />
      <ActivitiesSection />
      <PlaylistSection />
      <WishesSection />
      <Footer />
    </div>
  );
}
