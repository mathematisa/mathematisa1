import { motion } from 'motion/react';
import { useState } from 'react';
import { CodeCard } from '../components/CodeCard';
import { Search, Code } from 'lucide-react';

const codeProducts = [
  {
    id: '1',
    title: 'Calculus Integration Animation',
    description: 'Complete Manim code for visualizing Riemann sums and integration.',
    price: '29',
    category: 'Calculus',
    thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80',
    checkoutUrl: 'https://lemonsqueezy.com/checkout/example',
  },
  {
    id: '2',
    title: 'Pythagorean Theorem Proof',
    description: 'Animated geometric proof with customizable parameters.',
    price: '19',
    category: 'Geometry',
    thumbnail: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&q=80',
    checkoutUrl: 'https://lemonsqueezy.com/checkout/example',
  },
  {
    id: '3',
    title: 'Matrix Transformation Pack',
    description: 'Linear algebra transformations with interactive controls.',
    price: '39',
    category: 'Linear Algebra',
    thumbnail: 'https://images.unsplash.com/photo-1635070041409-e63e783ce3b0?w=800&q=80',
    checkoutUrl: 'https://lemonsqueezy.com/checkout/example',
  },
  {
    id: '4',
    title: 'Trigonometric Functions',
    description: 'Unit circle and wave animations for sine, cosine, and tangent.',
    price: '24',
    category: 'Trigonometry',
    thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80',
    checkoutUrl: 'https://lemonsqueezy.com/checkout/example',
  },
  {
    id: '5',
    title: 'Complex Numbers Visualizer',
    description: 'Explore complex plane with animated transformations.',
    price: '34',
    category: 'Complex Analysis',
    thumbnail: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&q=80',
    checkoutUrl: 'https://lemonsqueezy.com/checkout/example',
  },
  {
    id: '6',
    title: 'Fourier Series Animation',
    description: 'Beautiful Fourier series decomposition with customizable waves.',
    price: '44',
    category: 'Calculus',
    thumbnail: 'https://images.unsplash.com/photo-1635070041409-e63e783ce3b0?w=800&q=80',
    checkoutUrl: 'https://lemonsqueezy.com/checkout/example',
  },
];

const categories = ['All', 'Calculus', 'Geometry', 'Linear Algebra', 'Trigonometry', 'Complex Analysis'];

export function Marketplace() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = codeProducts.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
          <div className="flex items-center gap-3 mb-4">
            <Code size={40} className="text-[#FC2490]" />
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-[#F494D8] bg-clip-text text-transparent">
              Code Marketplace
            </h1>
          </div>
          <p className="text-gray-400 text-lg">
            Professional Manim templates and source codes for your math animations
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search code templates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-gray-900 border border-[#FC2490]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FC2490] transition-colors"
            />
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-[#FC2490] to-[#F494D8] text-white'
                    : 'bg-gray-900 border border-[#FC2490]/30 text-gray-300 hover:border-[#FC2490] hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <CodeCard {...product} />
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-gray-400 text-lg">No code products found. Try a different search or category.</p>
          </motion.div>
        )}

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-br from-gray-900 to-black border border-[#FC2490]/30 rounded-2xl p-8"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Why Buy Our Code Templates?</h2>
          <div className="grid md:grid-cols-3 gap-6 text-gray-400">
            <div>
              <h3 className="text-white font-semibold mb-2">Production Ready</h3>
              <p className="text-sm">Clean, commented code that works out of the box with Manim.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Customizable</h3>
              <p className="text-sm">Easy to modify parameters and adapt to your needs.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Support Included</h3>
              <p className="text-sm">Get help if you need assistance with the code.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}