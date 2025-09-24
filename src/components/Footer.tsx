'use client';

import { motion } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 bg-zinc-950 border-t border-zinc-800 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <div className="flex items-center justify-center gap-2 text-2xl mb-4">
            <span>🎉</span>
            <span>🎂</span>
            <span>🎈</span>
          </div>
          <p className="text-lg font-medium bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            © {currentYear} Sakshi
          </p>
          <p className="text-zinc-400 text-sm">
            Made with 💜 for an amazing person turning 22
          </p>
          <div className="pt-4 text-xs text-zinc-500">
            <p>🌟 Here&apos;s to another year of adventures, laughter, and dreams coming true! 🌟</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}