import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { AnimationCard } from '../components/AnimationCard';
import { ArrowRight, Sparkles, Eye, Lightbulb } from 'lucide-react';

const featuredAnimations = [
  {
    id: '1',
    title: 'Understanding Integration',
    description: 'Visualize how integration calculates the area under curves through dynamic rectangles.',
    topic: 'Calculus',
    thumbnail: "figma:asset/a23e64c35c3743427a0824c0710fa10ecb18bd13.png",
  },
  {
    id: '2',
    title: 'Sum of Natural Numbers',
    description: 'Discover the elegant geometric proof behind the formula for summing natural numbers.',
    topic: 'Number Theory',
    thumbnail: "figma:asset/9c3cffe2b9e5139e38c38d328c50fcf7f02f03d0.png",
  },
  {
    id: '3',
    title: 'Determinant Trick',
    description: 'Master the visual method for calculating 3×3 matrix determinants effortlessly.',
    topic: 'Linear Algebra',
    thumbnail: "figma:asset/2eada4871e3a62664af3ffc72745ed4f97bddc99.png",
  },
];

export function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FC2490]/10 via-transparent to-transparent"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#FC2490]/10 border border-[#FC2490]/30 rounded-full mb-6"
            >
              <Sparkles size={18} className="text-[#FC2490]" />
              <span className="text-[#F494D8]">Visual Learning Revolution</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-[#F494D8] to-[#FC2490] bg-clip-text text-transparent">
              See Mathematics,
              <br />
              Don't Memorize It
            </h1>
            
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Transform abstract mathematical concepts into beautiful, intuitive visual animations that make learning engaging and memorable.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/animations">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-[#FC2490] to-[#F494D8] text-white rounded-lg font-medium flex items-center gap-2 hover:shadow-lg hover:shadow-[#FC2490]/50 transition-shadow"
                >
                  Explore Animations
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
              <Link to="/courses">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gray-900 border border-[#FC2490]/30 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
                >
                  View Courses
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-[#F494D8] bg-clip-text text-transparent">
              Why Mathematisa?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We believe mathematics should be visual, intuitive, and accessible to everyone.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 bg-gradient-to-br from-gray-900 to-black border border-[#FC2490]/30 rounded-xl"
            >
              <div className="w-14 h-14 bg-[#FC2490]/10 rounded-lg flex items-center justify-center mb-4">
                <Eye size={28} className="text-[#FC2490]" />
              </div>
              <h3 className="text-white mb-3">Visual First</h3>
              <p className="text-gray-400">
                Every concept is explained through dynamic animations that reveal the underlying patterns and beauty of mathematics.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 bg-gradient-to-br from-gray-900 to-black border border-[#FC2490]/30 rounded-xl"
            >
              <div className="w-14 h-14 bg-[#FC2490]/10 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb size={28} className="text-[#FC2490]" />
              </div>
              <h3 className="text-white mb-3">Intuitive Learning</h3>
              <p className="text-gray-400">
                Understand the 'why' behind formulas and theorems through step-by-step visual proofs and explorations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-8 bg-gradient-to-br from-gray-900 to-black border border-[#FC2490]/30 rounded-xl"
            >
              <div className="w-14 h-14 bg-[#FC2490]/10 rounded-lg flex items-center justify-center mb-4">
                <Sparkles size={28} className="text-[#FC2490]" />
              </div>
              <h3 className="text-white mb-3">Engaging Content</h3>
              <p className="text-gray-400">
                From school students to math enthusiasts, our content makes complex topics accessible and enjoyable.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Animations Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-between mb-12"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-white to-[#F494D8] bg-clip-text text-transparent">
                Featured Animations
              </h2>
              <p className="text-gray-400">Discover our most popular visual explanations</p>
            </div>
            <Link
              to="/animations"
              className="hidden md:flex items-center gap-2 text-[#FC2490] hover:text-[#F494D8] transition-colors"
            >
              View All
              <ArrowRight size={20} />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredAnimations.map((animation, index) => (
              <motion.div
                key={animation.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <AnimationCard {...animation} />
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link
              to="/animations"
              className="inline-flex items-center gap-2 text-[#FC2490] hover:text-[#F494D8] transition-colors"
            >
              View All Animations
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden bg-gradient-to-br from-[#FC2490] to-[#F494D8] rounded-2xl p-12 text-center"
          >
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Ready to Transform Your Math Learning?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of students and educators who are experiencing mathematics in a whole new way.
              </p>
              <Link to="/animations">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-[#FC2490] rounded-lg font-medium hover:shadow-xl transition-shadow"
                >
                  Get Started Now
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
