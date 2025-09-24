'use client';

import { motion } from 'framer-motion';

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-30 bg-zinc-950/80 backdrop-blur-sm border-b border-zinc-800"
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center">
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Sakshi&apos;s 22nd Birthday 🎉
          </motion.a>
        </div>
      </nav>
    </motion.header>
  );
}