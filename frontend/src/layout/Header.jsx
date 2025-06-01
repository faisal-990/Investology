import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const liDesign = "hover:bg-white/20 rounded-md transition-colors duration-200";
  const listDesign = "block px-3 py-2 text-gray-800 hover:text-blue-600 transition-colors duration-200";

  return (
    <header className="bg-gradient-to-r from-red-500 via-slate-300 to-sky-400 p-4">
      <div className="flex items-center justify-between">
        {/* Logo or Title */}
        <div className="p-0 flex items-center gap-2">
          {/* Intellect SVG icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 text-blue-600 hover:text-yellow-500 hover:scale-150 hover:duration-500 transition-colors duration-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {/* Brain / intellect-like icon path */}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM12 12v8m0-8H8m4 0h4"
            />
          </svg>
          <span className="text-2xl font-bold">Investology</span>
        </div>

        {/* Desktop Navigation Menu */}
        <div className="hidden md:block md:rounded-lg md:hover:bg-indigo-200">
          <nav className="hidden md:block">
            <ul className="flex text-sm font-medium gap-2">
              <li className={liDesign}>
                <a className={listDesign} href="/">
                  Home
                </a>
              </li>
              <li className={liDesign}>
                <a className={listDesign} href="/portfolio">
                  Portfolio
                </a>
              </li>
              <li className={liDesign}>
                <a className={listDesign} href="/traders">
                  Meet Your Traders
                </a>
              </li>
              <li className={liDesign}>
                <a className={listDesign} href="/about-us">
                  About Us
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Desktop Login Button */}
        <div className="hidden md:block text-sm">
          <button className="hover:underline hover:bg-gradient-to-t hover:from-red-600 hover:via-slate-400 hover:to-sky-400 hover:scale-125 hover:translate-y-2 duration-500 px-3 py-1 rounded backdrop-blur-sm">
            LOGIN
          </button>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md text-gray-800 hover:text-blue-600 hover:bg-white/20 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-white/10 backdrop-blur-sm rounded-lg p-4">
          <nav>
            <ul className="space-y-2">
              <li className={liDesign}>
                <a 
                  className={listDesign} 
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
              </li>
              <li className={liDesign}>
                <a 
                  className={listDesign} 
                  href="/portfolio"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Portfolio
                </a>
              </li>
              <li className={liDesign}>
                <a 
                  className={listDesign} 
                  href="/traders"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Meet Your Traders
                </a>
              </li>
              <li className={liDesign}>
                <a 
                  className={listDesign} 
                  href="/about-us"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </a>
              </li>
            </ul>
            
            {/* Mobile Login Button */}
            <div className="mt-4 pt-4 border-t border-white/20">
              <button 
                className="w-full hover:underline hover:bg-gradient-to-t hover:from-red-600 hover:via-slate-400 hover:to-sky-400 hover:scale-105 duration-500 px-3 py-2 rounded backdrop-blur-sm text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                LOGIN
              </button>
            </div>
          </nav>
        </div>
      )}

      <div className="my-2 h-1 w-full bg-indigo-300"></div>
    </header>
  );
}
