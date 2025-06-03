import { Button } from '@/components/ui/button';
import FeatureCarousel from './FeatureCarousel';
import FeaturedInvestors from './FeaturedInvestors';

function MainContentLandingPage() {
  return (
    <section>
      <div className="bg-gradient-to-r from-red-900 to-sky-500 flex flex-col items-center">
        {/* Short information and What it is */}
        <div className="inline-block text-center rounded-xl hover:bg-slate-600 m-32">
          <div className="inline-block p-2 rounded-xl bg-indigo-200 mt-16 mb-16 shadow-lg">
            <h4 className="text:2xl md:text-3xl lg:4xl lg:scale-130 lg:duration-500 duration-500">
              <strong>Minimal Trade Simulator</strong>
            </h4>
          </div>
          <p className="text-pretty text-white mb-4 sm:mb-4 md:text-xl">
            <strong> Experience Calm, Focused Trading Simulation </strong>
          </p>
          <p className="text-pretty md:text-xl">
            A subtle, distraction-free environment to practice trading, explore
            strategies, and learn from top traders' principles — before the
            number game begins.
          </p>
          <div className="flex justify-center my-10">
            <Button
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold 
                     py-2 px-4 text-base 
                     md:py-3 md:px-6 md:text-2xl 
                     rounded-xl shadow-gray-200 
                     transition-all duration-300 ease-in-out 
                     transform hover:scale-125 hover:translate-x-4"
            >
              Investing Became Easy
            </Button>
          </div>
        </div>
        <div className="m-32 p-0.5 h-1 w-1/2 bg-slate-600"></div>
        {/* Features Section */}
        <div className="flex justify-center w-full mt-8 mb-8 ">
          <FeatureCarousel />
        </div>
        <div className="p-0.5 h-1 w-1/2 m-32 bg-slate-600"></div>
        {/* Featured Trader Section */}
        <div>
          <FeaturedInvestors />
        </div>
        <div className="p-0.5 h-1/6 w-1/2 m-32 bg-slate-600"></div>
      </div>
    </section>
  );
}

export default MainContentLandingPage;
