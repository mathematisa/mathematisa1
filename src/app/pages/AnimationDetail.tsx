import { motion } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, BookOpen, Share2 } from 'lucide-react';

const animationData: Record<string, any> = {
  '1': {
    title: 'Understanding Integration',
    topic: 'Calculus',
    duration: '8 min',
    level: 'Intermediate',
    thumbnail: "figma:asset/a23e64c35c3743427a0824c0710fa10ecb18bd13.png",
    description: `Integration is one of the most fundamental concepts in calculus. This animation visualizes how we can calculate the area under a curve by approximating it with rectangles.

As we increase the number of rectangles and make them thinner, their combined area approaches the true area under the curve. This is the essence of integration – finding the exact area by taking the limit as the width of rectangles approaches zero.

The animation demonstrates:
• How Riemann sums approximate the area under f(x)
• The relationship between Δx and accuracy
• The visual meaning of ∫f(x)dx from a to b`,
    relatedTopics: ['Differentiation', 'Fundamental Theorem of Calculus', 'Area Problems'],
  },
  '2': {
    title: 'Sum of Natural Numbers',
    topic: 'Number Theory',
    duration: '6 min',
    level: 'Beginner',
    thumbnail: "figma:asset/9c3cffe2b9e5139e38c38d328c50fcf7f02f03d0.png",
    description: `This elegant visual proof reveals why the sum of the first n natural numbers equals n(n+1)/2.

By arranging numbers as blocks in a triangular pattern and duplicating the arrangement, we create a rectangle with dimensions n by (n+1). Since we used two triangles to make this rectangle, the original sum must be half the rectangle's area.

The animation shows:
• Visual arrangement of natural numbers
• The duplication trick to form a rectangle
• Why the formula Sn = n(n+1)/2 works geometrically`,
    relatedTopics: ['Arithmetic Sequences', 'Mathematical Proofs', 'Gauss Method'],
  },
  '3': {
    title: 'Determinant Trick',
    topic: 'Linear Algebra',
    duration: '7 min',
    level: 'Intermediate',
    thumbnail: "figma:asset/2eada4871e3a62664af3ffc72745ed4f97bddc99.png",
    description: `Computing the determinant of a 3×3 matrix doesn't have to be complicated. This visual method makes it intuitive and memorable.

The pattern-based approach involves copying the first two columns, then following diagonal paths to calculate positive and negative products. This systematic visual method eliminates the need to memorize complex expansion formulas.

The animation demonstrates:
• The visual pattern for 3×3 determinants
• Positive diagonals (top-left to bottom-right)
• Negative diagonals (bottom-left to top-right)
• How to organize the calculation: |M| = ad - bc`,
    relatedTopics: ['Matrix Operations', 'Linear Transformations', 'Cramer\'s Rule'],
  },
};

export function AnimationDetail() {
  const { id } = useParams<{ id: string }>();
  const animation = animationData[id || '1'] || animationData['1'];

  return (
    <div className="min-h-screen bg-black pt-24 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <Link to="/animations">
          <motion.button
            whileHover={{ x: -4 }}
            className="flex items-center gap-2 text-gray-400 hover:text-[#FC2490] transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Back to Animations
          </motion.button>
        </Link>

        {/* Video Player */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-gray-900 to-black border border-[#FC2490]/30 rounded-2xl overflow-hidden mb-8"
        >
          <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
            <img
              src={animation.thumbnail}
              alt={animation.title}
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-4 py-2 bg-[#FC2490]/20 text-[#FC2490] rounded-full text-sm">
              {animation.topic}
            </span>
            <div className="flex items-center gap-2 text-gray-400">
              <Clock size={18} />
              <span>{animation.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <BookOpen size={18} />
              <span>{animation.level}</span>
            </div>
            <button className="ml-auto flex items-center gap-2 text-gray-400 hover:text-[#FC2490] transition-colors">
              <Share2 size={18} />
              <span>Share</span>
            </button>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-[#F494D8] bg-clip-text text-transparent">
            {animation.title}
          </h1>

          <div className="prose prose-invert max-w-none mb-8">
            <div className="text-gray-300 whitespace-pre-line leading-relaxed">
              {animation.description}
            </div>
          </div>

          {/* Related Topics */}
          <div className="bg-gradient-to-br from-gray-900 to-black border border-[#FC2490]/30 rounded-xl p-6">
            <h3 className="text-white mb-4">Related Topics</h3>
            <div className="flex flex-wrap gap-3">
              {animation.relatedTopics.map((topic: string, index: number) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-800 border border-[#FC2490]/20 rounded-lg text-gray-300 text-sm"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
