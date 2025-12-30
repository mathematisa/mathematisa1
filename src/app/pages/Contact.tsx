import { motion } from 'motion/react';
import { Mail, Youtube, Twitter, MessageCircle } from 'lucide-react';

export function Contact() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-[#F494D8] bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-400">
            We'd love to hear from you! Whether you have questions, feedback, or just want to say hi.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <motion.a
            href="mailto:contact@mathematisa.com"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.05, y: -4 }}
            className="bg-gradient-to-br from-gray-900 to-black border border-[#FC2490]/30 rounded-xl p-8 group cursor-pointer"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-[#FC2490]/10 rounded-lg flex items-center justify-center group-hover:bg-[#FC2490]/20 transition-colors">
                <Mail size={28} className="text-[#FC2490]" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Email Us</h3>
                <p className="text-gray-400 text-sm">contact@mathematisa.com</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              For general inquiries, collaborations, or support questions.
            </p>
          </motion.a>

          <motion.a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05, y: -4 }}
            className="bg-gradient-to-br from-gray-900 to-black border border-[#FC2490]/30 rounded-xl p-8 group cursor-pointer"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-[#FC2490]/10 rounded-lg flex items-center justify-center group-hover:bg-[#FC2490]/20 transition-colors">
                <Youtube size={28} className="text-[#FC2490]" />
              </div>
              <div>
                <h3 className="text-white font-semibold">YouTube</h3>
                <p className="text-gray-400 text-sm">@mathematisa</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Subscribe to our channel for weekly visual math explanations.
            </p>
          </motion.a>

          <motion.a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.05, y: -4 }}
            className="bg-gradient-to-br from-gray-900 to-black border border-[#FC2490]/30 rounded-xl p-8 group cursor-pointer"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-[#FC2490]/10 rounded-lg flex items-center justify-center group-hover:bg-[#FC2490]/20 transition-colors">
                <Twitter size={28} className="text-[#FC2490]" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Twitter</h3>
                <p className="text-gray-400 text-sm">@mathematisa</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Follow us for daily math insights and updates.
            </p>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-gray-900 to-black border border-[#FC2490]/30 rounded-xl p-8"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-[#FC2490]/10 rounded-lg flex items-center justify-center">
                <MessageCircle size={28} className="text-[#FC2490]" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Community</h3>
                <p className="text-gray-400 text-sm">Join the discussion</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Connect with fellow math enthusiasts and learners in our community.
            </p>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-br from-gray-900 to-black border border-[#FC2490]/30 rounded-2xl p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-800 border border-[#FC2490]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FC2490] transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-800 border border-[#FC2490]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FC2490] transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-gray-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 bg-gray-800 border border-[#FC2490]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FC2490] transition-colors"
                placeholder="What is this about?"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-3 bg-gray-800 border border-[#FC2490]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FC2490] transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-gradient-to-r from-[#FC2490] to-[#F494D8] text-white rounded-lg font-medium hover:shadow-lg hover:shadow-[#FC2490]/50 transition-shadow"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Info Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-500 text-sm">
            We typically respond within 24-48 hours. For urgent matters, please email us directly.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
