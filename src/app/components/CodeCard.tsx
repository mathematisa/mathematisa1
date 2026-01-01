import { motion } from 'motion/react';
import { Code, ExternalLink } from 'lucide-react';

interface CodeCardProps {
  id: string;
  title: string;
  description: string;
  price: string;
  thumbnail: string;
  checkoutUrl: string;
  category: string;
}

export function CodeCard({ title, description, price, thumbnail, checkoutUrl, category }: CodeCardProps) {
  const handleGetCode = () => {
    window.open(checkoutUrl, '_blank');
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="bg-gradient-to-br from-gray-900 to-black border border-[#FC2490]/30 rounded-xl overflow-hidden group cursor-pointer"
    >
      {/* 4:3 Thumbnail */}
      <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3">
          <div className="px-3 py-1 bg-black/80 backdrop-blur-sm rounded-full text-[#FC2490] text-sm font-medium border border-[#FC2490]/30">
            ${price}
          </div>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <Code size={16} className="text-[#F494D8]" />
          <div className="text-xs text-[#F494D8] uppercase tracking-wider">{category}</div>
        </div>
        <h3 className="text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm line-clamp-2 mb-4">{description}</p>
        
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleGetCode}
          className="w-full py-2.5 bg-gradient-to-r from-[#FC2490] to-[#F494D8] text-white rounded-lg font-medium hover:shadow-lg hover:shadow-[#FC2490]/50 transition-shadow flex items-center justify-center gap-2"
        >
          Get Code
          <ExternalLink size={16} />
        </motion.button>
      </div>
    </motion.div>
  );
}
