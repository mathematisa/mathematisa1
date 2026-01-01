import { motion } from 'motion/react';
import { useState } from 'react';
import { DashboardSidebar } from '../components/DashboardSidebar';
import { Upload, Plus } from 'lucide-react';

type PostType = 'animation' | 'code';

export function CreatePost() {
  const [postType, setPostType] = useState<PostType>('animation');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    price: '',
    checkoutUrl: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Publishing:', postType, formData);
    // Handle form submission
  };

  const categories = ['Calculus', 'Geometry', 'Linear Algebra', 'Trigonometry', 'Complex Analysis', 'Number Theory'];

  return (
    <div className="flex min-h-screen bg-black pt-16">
      <DashboardSidebar />
      
      <div className="flex-1 p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-white mb-8">Create New Post</h1>

          {/* Tab Selector */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setPostType('animation')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                postType === 'animation'
                  ? 'bg-gradient-to-r from-[#FC2490] to-[#F494D8] text-white'
                  : 'bg-gray-900 border border-[#FC2490]/30 text-gray-300 hover:border-[#FC2490]'
              }`}
            >
              Add Animation
            </button>
            <button
              onClick={() => setPostType('code')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                postType === 'code'
                  ? 'bg-gradient-to-r from-[#FC2490] to-[#F494D8] text-white'
                  : 'bg-gray-900 border border-[#FC2490]/30 text-gray-300 hover:border-[#FC2490]'
              }`}
            >
              Add Code Product
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="max-w-3xl">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#FC2490]/30 rounded-xl p-8 space-y-6">
              {/* Title */}
              <div>
                <label htmlFor="title" className="block text-white mb-2 font-medium">
                  Title *
                </label>
                <input
                  type="text"
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Enter title..."
                  className="w-full px-4 py-3 bg-gray-800 border border-[#FC2490]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FC2490] transition-colors"
                  required
                />
              </div>

              {/* Description */}
              <div>
                <label htmlFor="description" className="block text-white mb-2 font-medium">
                  Description *
                </label>
                <textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Describe your content..."
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800 border border-[#FC2490]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FC2490] transition-colors resize-none"
                  required
                />
              </div>

              {/* Thumbnail Upload */}
              <div>
                <label className="block text-white mb-2 font-medium">
                  Upload Thumbnail *
                </label>
                <div className="border-2 border-dashed border-[#FC2490]/30 rounded-lg p-8 text-center hover:border-[#FC2490] transition-colors cursor-pointer">
                  <Upload size={40} className="mx-auto text-gray-400 mb-3" />
                  <p className="text-gray-400 mb-2">Click to upload or drag and drop</p>
                  <p className="text-gray-500 text-sm">
                    {postType === 'animation' ? 'Recommended: 9:16 ratio (1080x1920)' : 'Recommended: 4:3 ratio (1200x900)'}
                  </p>
                  <input type="file" className="hidden" accept="image/*" />
                </div>
              </div>

              {/* Category */}
              <div>
                <label htmlFor="category" className="block text-white mb-2 font-medium">
                  Category *
                </label>
                <select
                  id="category"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800 border border-[#FC2490]/30 rounded-lg text-white focus:outline-none focus:border-[#FC2490] transition-colors"
                  required
                >
                  <option value="">Select category...</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              {/* Price and Checkout (Only for Code Products) */}
              {postType === 'code' && (
                <>
                  <div>
                    <label htmlFor="price" className="block text-white mb-2 font-medium">
                      Price (USD) *
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                      <input
                        type="number"
                        id="price"
                        value={formData.price}
                        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                        placeholder="0.00"
                        className="w-full pl-8 pr-4 py-3 bg-gray-800 border border-[#FC2490]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FC2490] transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="checkoutUrl" className="block text-white mb-2 font-medium">
                      LemonSqueezy Checkout Link *
                    </label>
                    <input
                      type="url"
                      id="checkoutUrl"
                      value={formData.checkoutUrl}
                      onChange={(e) => setFormData({ ...formData, checkoutUrl: e.target.value })}
                      placeholder="https://lemonsqueezy.com/checkout/..."
                      className="w-full px-4 py-3 bg-gray-800 border border-[#FC2490]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FC2490] transition-colors"
                      required
                    />
                  </div>
                </>
              )}

              {/* Submit Button */}
              <div className="pt-4">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-[#FC2490] to-[#F494D8] text-white rounded-lg font-medium hover:shadow-lg hover:shadow-[#FC2490]/50 transition-shadow flex items-center justify-center gap-2"
                >
                  <Plus size={20} />
                  Publish {postType === 'animation' ? 'Animation' : 'Code Product'}
                </motion.button>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
