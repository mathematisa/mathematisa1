import { motion } from 'motion/react';
import { Heart, Target, Users, Zap } from 'lucide-react';

export function About() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-[#F494D8] bg-clip-text text-transparent">
            About Mathematisa
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            We're on a mission to transform mathematics education by making it visual, intuitive, and accessible to everyone.
          </p>
        </motion.div>

        {/* Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-gray-900 to-black border border-[#FC2490]/30 rounded-2xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#FC2490]/10 rounded-lg flex items-center justify-center">
                <Heart size={24} className="text-[#FC2490]" />
              </div>
              <h2 className="text-3xl font-bold text-white">Our Vision</h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Mathematics is one of the most beautiful subjects in the world, yet it's often taught in ways that obscure its elegance. We believe that every mathematical concept has an intuitive visual representation that can make it accessible and engaging.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Mathematisa was born from the frustration of watching brilliant students struggle with mathematics not because they lacked ability, but because traditional teaching methods relied too heavily on memorization rather than understanding.
            </p>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#FC2490]/30 rounded-xl p-6">
              <div className="w-12 h-12 bg-[#FC2490]/10 rounded-lg flex items-center justify-center mb-4">
                <Target size={24} className="text-[#FC2490]" />
              </div>
              <h3 className="text-white mb-3">Visual First</h3>
              <p className="text-gray-400">
                Every concept should be explained visually before algebraically. Understanding comes from seeing patterns and relationships.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#FC2490]/30 rounded-xl p-6">
              <div className="w-12 h-12 bg-[#FC2490]/10 rounded-lg flex items-center justify-center mb-4">
                <Users size={24} className="text-[#FC2490]" />
              </div>
              <h3 className="text-white mb-3">Accessible</h3>
              <p className="text-gray-400">
                Mathematics should be accessible to everyone, regardless of their background or prior experience.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#FC2490]/30 rounded-xl p-6">
              <div className="w-12 h-12 bg-[#FC2490]/10 rounded-lg flex items-center justify-center mb-4">
                <Zap size={24} className="text-[#FC2490]" />
              </div>
              <h3 className="text-white mb-3">Engaging</h3>
              <p className="text-gray-400">
                Learning should be an exciting journey of discovery, not a chore of memorization.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#FC2490]/30 rounded-xl p-6">
              <div className="w-12 h-12 bg-[#FC2490]/10 rounded-lg flex items-center justify-center mb-4">
                <Heart size={24} className="text-[#FC2490]" />
              </div>
              <h3 className="text-white mb-3">Beauty</h3>
              <p className="text-gray-400">
                We showcase the inherent beauty and elegance of mathematics that often gets lost in traditional education.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed mb-4">
              Mathematisa started as a small YouTube channel dedicated to creating visual explanations of mathematical concepts. What began as a hobby quickly grew into a passion project when we saw how transformative visual learning could be.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Students who had struggled for years with topics like calculus and linear algebra were having "aha!" moments watching our animations. Teachers were using our content to supplement their lessons. Math enthusiasts were rediscovering their love for the subject.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Today, we're building a comprehensive platform that brings together the best of visual mathematics education. From individual animations to complete courses, we're committed to helping everyone experience the joy and beauty of mathematical thinking.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We believe that when you truly <span className="text-[#FC2490] font-medium">see mathematics</span>, you don't need to memorize it – you understand it.
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center bg-gradient-to-br from-[#FC2490] to-[#F494D8] rounded-2xl p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Our Community
          </h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Be part of the visual mathematics revolution. Subscribe to our YouTube channel and follow us on social media.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-[#FC2490] rounded-lg font-medium hover:shadow-xl transition-shadow"
          >
            Subscribe on YouTube
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
