import { Link } from 'react-router-dom';
import { Youtube, Twitter, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black border-t border-[#FC2490]/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#FC2490] to-[#F494D8] bg-clip-text text-transparent mb-4">
              MATHEMATISA
            </h3>
            <p className="text-gray-400 mb-4">
              See Mathematics, don't memorize it.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#FC2490] transition-colors"
              >
                <Youtube size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#FC2490] transition-colors"
              >
                <Twitter size={24} />
              </a>
              <a
                href="mailto:contact@mathematisa.com"
                className="text-gray-400 hover:text-[#FC2490] transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/animations" className="block text-gray-400 hover:text-[#FC2490] transition-colors">
                Animation Library
              </Link>
              <Link to="/courses" className="block text-gray-400 hover:text-[#FC2490] transition-colors">
                Courses
              </Link>
              <Link to="/about" className="block text-gray-400 hover:text-[#FC2490] transition-colors">
                About
              </Link>
              <Link to="/contact" className="block text-gray-400 hover:text-[#FC2490] transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Topics */}
          <div>
            <h4 className="font-semibold text-white mb-4">Topics</h4>
            <div className="space-y-2">
              <div className="text-gray-400">Calculus</div>
              <div className="text-gray-400">Trigonometry</div>
              <div className="text-gray-400">Geometry</div>
              <div className="text-gray-400">Number Theory</div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#FC2490]/20 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Mathematisa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
