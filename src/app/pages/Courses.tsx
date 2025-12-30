import { motion } from 'motion/react';
import { CourseCard } from '../components/CourseCard';

const courses = [
  {
    title: 'Visual Calculus',
    description: 'Master calculus through stunning visual explanations of limits, derivatives, and integrals.',
    duration: '12 hours',
    lessons: 24,
    level: 'Intermediate',
  },
  {
    title: 'Trigonometry Simplified',
    description: 'Understand sine, cosine, and all trig identities through geometric visualizations.',
    duration: '8 hours',
    lessons: 16,
    level: 'Beginner',
  },
  {
    title: 'Geometry Proofs',
    description: 'Learn elegant visual proofs of classic geometric theorems and constructions.',
    duration: '10 hours',
    lessons: 20,
    level: 'Intermediate',
  },
  {
    title: 'Linear Algebra Visualized',
    description: 'See matrices, transformations, and eigenvalues come alive through animations.',
    duration: '15 hours',
    lessons: 30,
    level: 'Advanced',
  },
  {
    title: 'Number Theory Fundamentals',
    description: 'Explore patterns in numbers through visual proofs and interactive explorations.',
    duration: '9 hours',
    lessons: 18,
    level: 'Beginner',
  },
  {
    title: 'Complex Analysis',
    description: 'Navigate the beautiful world of complex numbers and functions visually.',
    duration: '14 hours',
    lessons: 28,
    level: 'Advanced',
  },
];

export function Courses() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-[#F494D8] bg-clip-text text-transparent">
            Learning Paths
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Structured courses designed to build your mathematical intuition step by step through visual learning.
          </p>
        </motion.div>

        {/* Filter Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {['All Levels', 'Beginner', 'Intermediate', 'Advanced'].map((level) => (
            <button
              key={level}
              className="px-6 py-2 bg-gray-900 border border-[#FC2490]/30 text-gray-300 rounded-full hover:border-[#FC2490] hover:text-white transition-all"
            >
              {level}
            </button>
          ))}
        </motion.div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <CourseCard {...course} />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center bg-gradient-to-br from-gray-900 to-black border border-[#FC2490]/30 rounded-2xl p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Can't find what you're looking for?
          </h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            We're constantly adding new courses and content. Subscribe to our newsletter to get notified about new releases.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-[#FC2490] to-[#F494D8] text-white rounded-lg font-medium hover:shadow-lg hover:shadow-[#FC2490]/50 transition-shadow"
          >
            Subscribe for Updates
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
