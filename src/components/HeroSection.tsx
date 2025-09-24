'use client';

import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="w-full pt-[120px] md:pt-[150px] pb-[100px] bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 min-h-screen flex items-center">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center space-y-8 text-center h-full justify-center">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 10 }}
            className="relative"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gradient-to-r from-purple-400 to-pink-400 shadow-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <span className="text-5xl md:text-6xl">🎉</span>
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
              <span className="text-lg">✨</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="font-bold tracking-tighter text-4xl md:text-6xl lg:text-7xl bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Happy Birthday{' '}
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Sakshi
              </span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-xl md:text-2xl text-zinc-300 max-w-2xl mx-auto"
            >
              So you&apos;re 22, you know what that means?
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="space-y-4 text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto"
          >
            <p className="flex items-center justify-center gap-2">
              <span className="text-2xl">🎂</span>
              Another year of awesome adventures!
            </p>
            <p className="flex items-center justify-center gap-2">
              <span className="text-2xl">🎈</span>
              Let&apos;s celebrate your special day!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.5 }}
            className="pt-8"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 mb-6">
              <span className="text-lg">🎊</span>
              <span>Welcome to the celebration!</span>
              <span className="text-lg">🎊</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            className="pt-4"
          >
            <button
              onClick={() => {
                const wishesSection = document.getElementById('wishes-section');
                wishesSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent hover:from-pink-400 hover:via-purple-400 hover:to-pink-400 transition-all duration-300 cursor-pointer hover:scale-105 transform"
            >
              Continue
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}