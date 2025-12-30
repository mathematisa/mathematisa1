import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-[#FC2490]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-[#FC2490] to-[#F494D8] bg-clip-text text-transparent">
              MATHEMATISA
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-[#FC2490] transition-colors">
              Home
            </Link>
            <Link to="/animations" className="text-gray-300 hover:text-[#FC2490] transition-colors">
              Animations
            </Link>
            <Link to="/courses" className="text-gray-300 hover:text-[#FC2490] transition-colors">
              Courses
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-[#FC2490] transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-[#FC2490] transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-[#FC2490] transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black/95 border-t border-[#FC2490]/20">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-gray-300 hover:text-[#FC2490] hover:bg-[#FC2490]/10 rounded-lg transition-colors"
            >
              Home
            </Link>
            <Link
              to="/animations"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-gray-300 hover:text-[#FC2490] hover:bg-[#FC2490]/10 rounded-lg transition-colors"
            >
              Animations
            </Link>
            <Link
              to="/courses"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-gray-300 hover:text-[#FC2490] hover:bg-[#FC2490]/10 rounded-lg transition-colors"
            >
              Courses
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-gray-300 hover:text-[#FC2490] hover:bg-[#FC2490]/10 rounded-lg transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-gray-300 hover:text-[#FC2490] hover:bg-[#FC2490]/10 rounded-lg transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
