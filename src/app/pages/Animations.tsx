import { motion } from 'motion/react';
import { useState } from 'react';
import { AnimationCard } from '../components/AnimationCard';
import { Search } from 'lucide-react';

const allAnimations = [
  {
    id: '1',
    title: 'Understanding Integration',
    description: 'Visualize how integration calculates the area under curves through dynamic rectangles that approach the true area as they become infinitesimally small.',
    topic: 'Calculus',
    thumbnail: "figma:asset/a23e64c35c3743427a0824c0710fa10ecb18bd13.png",
  },
  {
    id: '2',
    title: 'Sum of Natural Numbers',
    description: 'Discover the elegant geometric proof behind the formula n(n+1)/2 for summing natural numbers using visual arrangements.',
    topic: 'Number Theory',
    thumbnail: "figma:asset/9c3cffe2b9e5139e38c38d328c50fcf7f02f03d0.png",
  },
  {
    id: '3',
    title: 'Determinant Trick',
    description: 'Master the visual method for calculating 3×3 matrix determinants using the pattern-based approach.',
    topic: 'Linear Algebra',
    thumbnail: "figma:asset/2eada4871e3a62664af3ffc72745ed4f97bddc99.png",
  },
  {
    id: '4',
    title: 'Pythagorean Theorem Proof',
    description: 'See the beautiful geometric proof of a² + b² = c² through area rearrangement.',
    topic: 'Geometry',
    thumbnail: "figma:asset/a23e64c35c3743427a0824c0710fa10ecb18bd13.png",
  },
  {
    id: '5',
    title: 'Trigonometric Identities',
    description: 'Understand sine and cosine relationships through the unit circle visualization.',
    topic: 'Trigonometry',
    thumbnail: "figma:asset/9c3cffe2b9e5139e38c38d328c50fcf7f02f03d0.png",
  },
  {
    id: '6',
    title: 'Euler\'s Formula',
    description: 'Explore the stunning connection between exponentials and trigonometry in the complex plane.',
    topic: 'Calculus',
    thumbnail: "figma:asset/2eada4871e3a62664af3ffc72745ed4f97bddc99.png",
  },
];

const topics = ['All', 'Calculus', 'Geometry', 'Trigonometry', 'Number Theory', 'Linear Algebra'];

export function Animations() {
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAnimations = allAnimations.filter((animation) => {
    const matchesTopic = selectedTopic === 'All' || animation.topic === selectedTopic;
    const matchesSearch = animation.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          animation.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTopic && matchesSearch;
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
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-[#F494D8] bg-clip-text text-transparent">
            Animation Library
          </h1>
          <p className="text-gray-400 text-lg">
            Explore our collection of visual mathematical explanations
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
              placeholder="Search animations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-gray-900 border border-[#FC2490]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FC2490] transition-colors"
            />
          </div>

          <div className="flex flex-wrap gap-3">
            {topics.map((topic) => (
              <button
                key={topic}
                onClick={() => setSelectedTopic(topic)}
                className={`px-6 py-2 rounded-full transition-all ${
                  selectedTopic === topic
                    ? 'bg-gradient-to-r from-[#FC2490] to-[#F494D8] text-white'
                    : 'bg-gray-900 border border-[#FC2490]/30 text-gray-300 hover:border-[#FC2490] hover:text-white'
                }`}
              >
                {topic}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Animations Grid */}
        {filteredAnimations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAnimations.map((animation, index) => (
              <motion.div
                key={animation.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <AnimationCard {...animation} />
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-gray-400 text-lg">No animations found. Try a different search or topic.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
