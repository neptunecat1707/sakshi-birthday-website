'use client';

import { motion } from 'framer-motion';

const activities = [
  {
    title: "Start a New Adventure",
    description: "While you could do this before turning 22, it's more fun when you're wiser and ready for bigger challenges.",
    emoji: "🌟",
    color: "from-yellow-400 to-orange-500"
  },
  {
    title: "Get a Dream Job",
    description: "So you can stop asking your parents for money and start building your own empire. Also, this will help you plan amazing trips!",
    emoji: "💼",
    color: "from-blue-400 to-purple-500"
  },
  {
    title: "Ask your crush out",
    description: "Well, this has nothing to do with turning 22, but being more mature should make you less of a coward. Stop wondering and go make a move!",
    emoji: "💕",
    color: "from-pink-400 to-red-500"
  },
  {
    title: "Get Driver's License",
    description: "Time to hit the road and explore the world on your own terms. Freedom awaits!",
    emoji: "🚗",
    color: "from-green-400 to-teal-500"
  },
  {
    title: "Learn Something New",
    description: "Pick up that hobby you've been putting off. Whether it's painting, coding, or dancing - now's the time!",
    emoji: "📚",
    color: "from-indigo-400 to-purple-500"
  },
  {
    title: "Travel Solo",
    description: "Nothing beats the confidence boost of navigating a new place all by yourself. Plus, the stories you'll have!",
    emoji: "✈️",
    color: "from-cyan-400 to-blue-500"
  }
];

export function ActivitiesSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Turning 22 can be amazing...
          </h2>
          <p className="text-xl text-gray-600">
            So here are some things you can do to make it even better
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${activity.color} flex items-center justify-center mb-4 mx-auto`}>
                <span className="text-2xl">{activity.emoji}</span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                {activity.title}
              </h3>
              
              <p className="text-gray-600 text-center leading-relaxed">
                {activity.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}