import { motion } from 'motion/react';
import { BookOpen, Clock } from 'lucide-react';

interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  lessons: number;
  level: string;
}

export function CourseCard({ title, description, duration, lessons, level }: CourseCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="bg-gradient-to-br from-gray-900 to-black border border-[#FC2490]/30 rounded-xl p-6 cursor-pointer group"
    >
      <div className="flex items-center justify-between mb-4">
        <span className="px-3 py-1 bg-[#FC2490]/20 text-[#FC2490] rounded-full text-sm">
          {level}
        </span>
        <BookOpen size={24} className="text-[#F494D8]" />
      </div>
      
      <h3 className="text-white mb-3">{title}</h3>
      <p className="text-gray-400 text-sm mb-4">{description}</p>
      
      <div className="flex items-center gap-4 text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <Clock size={16} />
          <span>{duration}</span>
        </div>
        <div>{lessons} lessons</div>
      </div>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-6 w-full py-2 bg-gradient-to-r from-[#FC2490] to-[#F494D8] text-white rounded-lg font-medium hover:shadow-lg hover:shadow-[#FC2490]/50 transition-shadow"
      >
        Start Learning
      </motion.button>
    </motion.div>
  );
}
