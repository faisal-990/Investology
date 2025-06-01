import { DollarSign } from 'lucide-react';

function Header() {
  const liDesign =
    'md:font-bold md:text-slate-900 hover:scale-125 hover:translate-y-1';
  const listDesign =
    'hover:bg-deep-night px-2 py-1 rounded hover:underline  duration-400';

  return (
    <header className=" bg-deep-night p-4">
      <div className="flex items-center justify-between">
        {/* Logo or Title */}
        <div className="p-0">
          <div className="flex items-center gap-1">
            <DollarSign className="w-6 h-6 text-green-600 hover:text-yellow-500 transition-colors duration-200" />
          </div>
          <div className="text-lg font-bold">Investing Meets Ideology</div>
        </div>

        {/* Navigation Menu */}
        <div className="hidden sm:block sm:rounded-lg sm:hover:bg-indigo-200">
          <nav className="hidden sm:block">
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

        {/* Login Button */}
        <div className="text-sm">
          <button className="hover:underline bg-white/20 px-3 py-1 rounded backdrop-blur-sm">
            LOGIN
          </button>
        </div>
      </div>
      <div className="my-2 h-1 w-full bg-indigo-300"></div>
    </header>
  );
}

export default Header;
