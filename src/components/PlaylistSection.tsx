'use client';

import { motion } from 'framer-motion';
import { Music, Play } from 'lucide-react';

export function PlaylistSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-purple-100 to-pink-100">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Birthday Playlist
          </h2>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-3xl p-8 shadow-2xl max-w-md mx-auto mb-8"
          >
            <div className="w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg">
              <div className="w-full h-full bg-gradient-to-br from-purple-400 via-pink-400 to-red-400 flex items-center justify-center">
                <Music className="w-20 h-20 text-white" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Sakshi&apos;s 22nd Birthday Mix
            </h3>
            
            <p className="text-gray-600 mb-6">
              Here are some songs we think you might like
            </p>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 mx-auto hover:shadow-lg transition-all duration-300"
            >
              <Play className="w-5 h-5" />
              Play Playlist
            </motion.button>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600"
          >
            A carefully curated collection of songs to make your special day even more memorable! 🎵
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}