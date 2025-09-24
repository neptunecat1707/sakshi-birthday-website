'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Gift, Star, Cake } from 'lucide-react';
import confetti from 'canvas-confetti';

export function FinalSurpriseSection() {
  const [isGiftRevealed, setIsGiftRevealed] = useState(false);
  const [isLetterOpen, setIsLetterOpen] = useState(false);

  const createConfetti = () => {
    // Multiple confetti bursts
    const colors = ['#a855f7', '#ec4899', '#f59e0b', '#10b981', '#3b82f6'];
    
    // First burst
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: colors
    });

    // Second burst from left
    setTimeout(() => {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { x: 0.2, y: 0.7 },
        colors: colors
      });
    }, 500);

    // Third burst from right
    setTimeout(() => {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { x: 0.8, y: 0.7 },
        colors: colors
      });
    }, 1000);
  };

  const handleGiftClick = () => {
    setIsGiftRevealed(true);
    confetti({
      particleCount: 50,
      spread: 45,
      origin: { y: 0.6 },
      colors: ['#a855f7', '#ec4899', '#f59e0b']
    });
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-6">
            My Final Surprise
          </h1>
          <p className="text-xl text-zinc-300">
            Because you deserve all the love in the world
          </p>
        </motion.div>

        {/* Animated Heart */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-pink-400 text-8xl"
          >
            <Heart className="w-20 h-20 fill-current" />
          </motion.div>
        </motion.div>

        {/* Promise Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-zinc-800 border border-zinc-700 rounded-2xl p-8 shadow-2xl mb-8"
        >
          <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            My Promise To You
          </h2>
          <p className="text-lg text-zinc-300 mb-6 text-center">
            On your special day, I promise to always:
          </p>
          
          <div className="space-y-4 max-w-2xl mx-auto">
            {[
              { icon: Heart, text: "Love you unconditionally through all of life&apos;s ups and downs" },
              { icon: Star, text: "Support your dreams and be your biggest cheerleader" },
              { icon: '😊', text: "Make you smile and laugh, even on the hardest days" },
              { icon: '∞', text: "Cherish every moment we spend together, now and forever" }
            ].map((promise, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-4 bg-zinc-700/50 rounded-xl"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                  {typeof promise.icon === 'string' ? (
                    <span className="text-white text-lg">{promise.icon}</span>
                  ) : (
                    <promise.icon className="w-6 h-6 text-white" />
                  )}
                </div>
                <span className="text-zinc-200">{promise.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Love Letter */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-zinc-800 border border-zinc-700 rounded-2xl p-8 shadow-2xl mb-8"
        >
          <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            A Special Message
          </h2>
          
          <div className="bg-zinc-700/50 rounded-xl p-6">
            <button
              onClick={() => setIsLetterOpen(!isLetterOpen)}
              className="w-full text-left text-xl font-medium text-purple-400 hover:text-pink-400 transition-colors duration-300 flex items-center justify-between"
            >
              Click to read my love letter to you...
              <motion.span
                animate={{ rotate: isLetterOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                ▼
              </motion.span>
            </button>
            
            <motion.div
              initial={false}
              animate={{ 
                height: isLetterOpen ? 'auto' : 0,
                opacity: isLetterOpen ? 1 : 0
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-6 space-y-4 text-zinc-300">
                <p className="italic">&ldquo;My dearest Sakshi,</p>
                <p>As you celebrate another year of your beautiful life, I find myself reflecting on how incredibly lucky I am to have you by my side. Your birthday is not just a celebration of you, but a celebration of all the joy and love you bring into my life every single day.</p>
                <p>Your smile, your laugh, your kindness, and your strength inspire me more than you&apos;ll ever know. You make me want to be the best version of myself, and for that, I am eternally grateful.</p>
                <p>On this special day, I want you to know that my heart is yours, completely and forever. I promise to stand by you through every triumph and every challenge, to hold your hand when you need support, and to dance with you when your heart is full of joy.</p>
                <p>Happy Birthday, my love. Here&apos;s to another year of beautiful memories together.</p>
                <p className="italic text-right">With all my love,</p>
                <p className="italic text-right">Your loving partner&rdquo;</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Virtual Gift */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Your Virtual Gift
          </h2>
          <p className="text-lg text-zinc-300 mb-8">
            Click to unwrap your virtual gift (with a hint of what&apos;s coming in real life)
          </p>
          
          <div className="relative mx-auto w-64 h-64 cursor-pointer" onClick={handleGiftClick}>
            <motion.div
              animate={{ 
                scale: isGiftRevealed ? 0 : 1,
                opacity: isGiftRevealed ? 0 : 1
              }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl"
            >
              <Gift className="w-24 h-24 text-white" />
            </motion.div>
            
            <motion.div
              animate={{ 
                scale: isGiftRevealed ? 1 : 0,
                opacity: isGiftRevealed ? 1 : 0
              }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute inset-0 bg-zinc-800 border border-zinc-600 rounded-2xl flex items-center justify-center shadow-2xl"
            >
              <div className="text-center p-6">
                <Star className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                <p className="text-purple-400 font-bold text-lg mb-2">A hint of your real gift...</p>
                <p className="text-zinc-300 text-sm">Check under your pillow for a special surprise!</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Final Birthday Wish */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Happy Birthday Sakshi!
          </h2>
          <p className="text-xl text-zinc-300 mb-8">
            May this year bring you all the happiness you deserve
          </p>
          
          <button
            onClick={createConfetti}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:from-purple-500 hover:to-pink-500 transition-all duration-300 flex items-center gap-3 mx-auto"
          >
            Celebrate! <Cake className="w-6 h-6" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}