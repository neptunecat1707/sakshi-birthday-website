'use client';

import { motion } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 bg-gradient-to-r from-purple-900 to-pink-900 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-lg font-medium">
            © {currentYear} Sakshi
          </p>
          <p className="text-purple-200 mt-2">
            Made with 💜 for an amazing person
          </p>
        </motion.div>
      </div>
    </footer>
  );
}