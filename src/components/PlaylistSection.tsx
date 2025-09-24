'use client';

import { motion } from 'framer-motion';
import { Music, Play } from 'lucide-react';
import confetti from 'canvas-confetti';

export function PlaylistSection() {
  const handlePlaylistClick = () => {
    // Trigger confetti animation
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const songs = [
    { title: "Happy Birthday", artist: "Traditional", duration: "02:35" },
    { title: "Celebration", artist: "Kool & The Gang", duration: "03:59" },
    { title: "Good as Hell", artist: "Lizzo", duration: "04:17" },
    { title: "Can't Stop the Feeling", artist: "Justin Timberlake", duration: "03:56" },
    { title: "Uptown Funk", artist: "Bruno Mars", duration: "04:30" }
  ];

  return (
    <section className="w-full py-20 bg-gradient-to-br from-zinc-900 to-zinc-800">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center space-y-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="font-bold tracking-tighter text-3xl md:text-4xl text-white">
              Birthday Playlist
            </h2>
            <div className="w-24 h-24 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <Music className="w-12 h-12 text-white" />
            </div>
            <p className="text-sm text-zinc-400">
              Here are some songs we think you might like
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-zinc-800 rounded-xl p-6 max-w-md w-full border border-zinc-700 shadow-2xl"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg">
                <Music className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-semibold text-white text-lg">Happy Sakshi Day</h3>
                <p className="text-sm text-zinc-400">Birthday Mix</p>
                <p className="text-xs text-zinc-500">Save on Spotify</p>
              </div>
            </div>

            <div className="space-y-3 text-left mb-6">
              {songs.map((song, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="flex justify-between items-center py-2 px-3 rounded-lg hover:bg-zinc-700/50 transition-colors duration-200"
                >
                  <div>
                    <span className="text-sm text-white font-medium">{index + 1}. {song.title}</span>
                    <p className="text-xs text-zinc-400">{song.artist}</p>
                  </div>
                  <span className="text-xs text-zinc-400">{song.duration}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePlaylistClick}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300"
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
            className="text-lg text-zinc-400 max-w-2xl mx-auto"
          >
            A carefully curated collection of songs to make your special day even more memorable! 🎵
          </motion.p>
        </div>
      </div>
    </section>
  );
}