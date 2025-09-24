'use client';

import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="mb-8"
        >
          <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-pink-300 shadow-2xl">
            <div className="w-full h-full bg-gradient-to-br from-pink-200 to-purple-300 flex items-center justify-center">
              <span className="text-6xl">🎉</span>
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent mb-6"
        >
          Happy Birthday
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-2xl md:text-3xl text-gray-700 mb-8"
        >
          So you&apos;re 22, you know what that means?
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="text-lg md:text-xl text-gray-600"
        >
          <p className="mb-4">🎂 Another year of awesome adventures!</p>
          <p>Let&apos;s celebrate Sakshi&apos;s special day! 🎈</p>
        </motion.div>
      </motion.div>
    </section>
  );
}