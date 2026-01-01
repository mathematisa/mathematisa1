import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';

interface AnimationCardProps {
  id: string;
  title: string;
  description: string;
  topic: string;
  thumbnail: string;
}

export function AnimationCard({ id, title, description, topic, thumbnail }: AnimationCardProps) {
  return (
    <Link to={`/animations/${id}`}>
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        className="bg-gradient-to-br from-gray-900 to-black border border-[#FC2490]/30 rounded-xl overflow-hidden group cursor-pointer"
      >
        {/* Changed to 9:16 vertical reel format */}
        <div className="relative aspect-[9/16] bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center overflow-hidden">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="w-16 h-16 rounded-full bg-[#FC2490]/90 flex items-center justify-center group-hover:shadow-[0_0_30px_rgba(252,36,144,0.8)] transition-shadow"
            >
              <Play size={28} className="text-white ml-1" fill="white" />
            </motion.div>
          </div>
        </div>
        <div className="p-5">
          <div className="text-xs text-[#F494D8] mb-2 uppercase tracking-wider">{topic}</div>
          <h3 className="text-white mb-2">{title}</h3>
          <p className="text-gray-400 text-sm line-clamp-2">{description}</p>
        </div>
      </motion.div>
    </Link>
  );
}