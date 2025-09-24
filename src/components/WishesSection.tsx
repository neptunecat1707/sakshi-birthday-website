'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Edit, Trash2, Heart, User } from 'lucide-react';
import { Wish, WishSlot } from '@/types';
import { WishModal } from './WishModal';

const initialSlots: WishSlot[] = [
  { id: '1', recipientName: 'Friend 1' },
  { id: '2', recipientName: 'Friend 2' },
  { id: '3', recipientName: 'Friend 3' },
  { id: '4', recipientName: 'Family Member 1' },
  { id: '5', recipientName: 'Family Member 2' },
  { id: '6', recipientName: 'Colleague 1' },
  { id: '7', recipientName: 'Colleague 2' },
  { id: '8', recipientName: 'Special Someone' },
  { id: '9', recipientName: 'Mystery Person' },
];

export function WishesSection() {
  const [wishSlots, setWishSlots] = useState<WishSlot[]>(initialSlots);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSlot, setEditingSlot] = useState<WishSlot | null>(null);

  // Load wishes from localStorage on component mount
  useEffect(() => {
    const savedWishes = localStorage.getItem('sakshi-wishes');
    if (savedWishes) {
      try {
        const parsedWishes = JSON.parse(savedWishes);
        setWishSlots(parsedWishes);
      } catch (error) {
        console.error('Error loading wishes:', error);
      }
    }
  }, []);

  // Save wishes to localStorage whenever wishSlots changes
  useEffect(() => {
    localStorage.setItem('sakshi-wishes', JSON.stringify(wishSlots));
  }, [wishSlots]);

  const handleAddWish = (slotId: string, wish: Omit<Wish, 'id' | 'createdAt'>) => {
    const newWish: Wish = {
      ...wish,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };

    setWishSlots(prev => prev.map(slot => 
      slot.id === slotId 
        ? { ...slot, wish: newWish }
        : slot
    ));
  };

  const handleEditWish = (slotId: string, updatedWish: Omit<Wish, 'id' | 'createdAt'>) => {
    setWishSlots(prev => prev.map(slot => 
      slot.id === slotId && slot.wish
        ? { 
            ...slot, 
            wish: { 
              ...slot.wish, 
              ...updatedWish 
            }
          }
        : slot
    ));
  };

  const handleDeleteWish = (slotId: string) => {
    setWishSlots(prev => prev.map(slot => 
      slot.id === slotId 
        ? { ...slot, wish: undefined }
        : slot
    ));
  };

  const openModal = (slot: WishSlot) => {
    setEditingSlot(slot);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingSlot(null);
  };

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
            Get Wish&apos;d
          </h2>
          <p className="text-xl text-gray-600">
            Some things we could&apos;ve told you on WhatsApp but it&apos;s cooler this way
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishSlots.map((slot, index) => (
            <motion.div
              key={slot.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {slot.wish ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Heart className="w-5 h-5 text-pink-500" />
                      <span className="font-semibold text-gray-800">
                        {slot.wish.recipientName}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => openModal(slot)}
                        className="p-1 text-blue-500 hover:bg-blue-50 rounded"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteWish(slot.id)}
                        className="p-1 text-red-500 hover:bg-red-50 rounded"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  
                  {slot.wish.image && (
                    <div className="w-full h-32 rounded-lg overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={slot.wish.image} 
                        alt="Wish" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  
                  <p className="text-gray-700 leading-relaxed">
                    {slot.wish.message}
                  </p>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <User className="w-4 h-4" />
                    <span>From: {slot.wish.authorName}</span>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                    <Plus className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {slot.recipientName}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4">
                    No wish yet
                  </p>
                  <button
                    onClick={() => openModal(slot)}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    Add Wish
                  </button>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600">
            Since you&apos;ve finished reading all this, you can now come back to WhatsApp and thank us. 
            <br />
            <span className="font-semibold text-purple-600">Happy Birthday Sakshi! 🎉</span>
          </p>
        </motion.div>
      </div>

      <AnimatePresence>
        {isModalOpen && editingSlot && (
          <WishModal
            slot={editingSlot}
            onClose={closeModal}
            onSave={(wish) => {
              if (editingSlot.wish) {
                handleEditWish(editingSlot.id, wish);
              } else {
                handleAddWish(editingSlot.id, wish);
              }
              closeModal();
            }}
          />
        )}
      </AnimatePresence>
    </section>
  );
}