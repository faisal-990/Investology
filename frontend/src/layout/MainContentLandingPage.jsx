import { Button } from '@/components/ui/button';
import FeatureCarousel from './FeatureCarousel';
import FeaturedInvestors from './FeaturedInvestors';

function MainContentLandingPage() {
  return (
    <section>
      <div className="bg-gradient-to-r from-red-900 to-sky-500 flex flex-col items-center">
        {/* Short information and What it is */}
        <div className="inline-block text-center rounded-xl hover:bg-indigo-200">
          <div className="inline-block p-2 rounded-xl bg-indigo-200 mb-5 shadow-lg">
            <h4 className="md:text-3xl">
              <strong>Minimal Trade Simulator</strong>
            </h4>
          </div>
          <p className="text-pretty mb-2 sm:mb-4">
            Experience Calm, Focused Trading Simulation
          </p>
          <p className="text-pretty">
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
        <div className="mx-auto my-auto m-5 p-0.5 h-1 w-1/2 bg-cyan-300"></div>
        {/* Features Section */}
        <div className="flex justify-center w-full mt-8 mb-8">
          <FeatureCarousel />
        </div>
        <div className="p-0.5 h-1 w-1/2 bg-cyan-300"></div>
        {/* Featured Trader Section */}
        <div>
          <FeaturedInvestors />
        </div>
        <div className="p-0.5 h-1/6 w-1/2 bg-cyan-300"></div>
      </div>
    </section>
  );
}

export default MainContentLandingPage;
