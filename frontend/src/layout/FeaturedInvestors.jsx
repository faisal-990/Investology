import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

function FeaturedInvestors() {
  const investors = [
    {
      name: 'Warren Buffett',
      principles: [
        'Invest in businesses you understand.',
        'Focus on long-term intrinsic value over short-term market fluctuations.',
        'Seek a margin of safety when purchasing stocks.',
        'Be fearful when others are greedy, and greedy when others are fearful.',
      ],
    },
    {
      name: 'Peter Lynch',
      principles: [
        'Invest in what you know.',
        'Conduct thorough research before investing.',
        "Look for 'tenbaggers'—stocks that can increase tenfold.",
        'Avoid market timing; stay invested for the long term.',
      ],
    },
    {
      name: 'Benjamin Graham',
      principles: [
        'Emphasize value investing: buy undervalued stocks with strong fundamentals.',
        "Perform fundamental analysis to assess a company's true worth.",
        'Prioritize a margin of safety to minimize investment risks.',
        'Be patient and disciplined in investment decisions.',
      ],
    },
    {
      name: 'George Soros',
      principles: [
        'Understand and anticipate macroeconomic trends.',
        'Be prepared to act decisively on market insights.',
        'Recognize the role of market psychology in price movements.',
        'Accept that markets are inherently unpredictable.',
      ],
    },
    {
      name: 'John Templeton',
      principles: [
        'Adopt a contrarian approach: buy when others are selling.',
        'Seek global investment opportunities.',
        'Focus on undervalued stocks with growth potential.',
        'Maintain a long-term perspective and disciplined strategy.',
      ],
    },
    {
      name: 'Seth Klarman',
      principles: [
        'Practice value investing with a focus on margin of safety.',
        'Be willing to hold cash when opportunities are scarce.',
        'Invest in undervalued or distressed assets.',
        'Exercise patience and discipline in investment choices.',
      ],
    },
    {
      name: 'Jim Simons',
      principles: [
        'Utilize quantitative models and algorithms for trading.',
        'Employ data-driven strategies over traditional analysis.',
        'Leverage statistical and mathematical expertise.',
        'Continuously refine models based on new data.',
      ],
    },
    {
      name: 'Ray Dalio',
      principles: [
        "Diversify investments to manage risk ('All Weather' strategy).",
        'Understand economic cycles and their impact on markets.',
        'Emphasize radical transparency and open-mindedness.',
        'Balance risk and reward through strategic asset allocation.',
      ],
    },
    {
      name: 'Howard Marks',
      principles: [
        'Focus on risk management and capital preservation.',
        'Understand market cycles to inform investment timing.',
        'Adopt a contrarian mindset when appropriate.',
        'Be patient and wait for favorable investment conditions.',
      ],
    },
    {
      name: 'Nicolas Darvas',
      principles: [
        "Implement the 'Box Theory' to identify breakout stocks.",
        'Use technical analysis to determine entry and exit points.',
        'Set stop-loss orders to protect against significant losses.',
        'Allow winning trades to run while cutting losses quickly.',
      ],
    },
  ];

  return (
    <section className=" p-10 hover:bg-gradient-to-r hover:from-red-400 hover:to-sky-400 rounded-xl flex flex-col items-center">
      <div className="  hover:scale-125 hover:duration-500 hover:translate-x-2 mb-5 bg-indigo-200 inline-block p-2 rounded-xl">
        <strong className="text-center block text-2xl font-bold">
          Mimic Famous Investors' Strategies
        </strong>
      </div>
      <div className="flex justify-center">
        <Carousel className="w-64 max-w-2xl md:w-full">
          <CarouselContent>
            {investors.map((investor, index) => (
              <CarouselItem key={index} className="p-4 ">
                <Card className="bg-slate-400 h-auto items-center">
                  <CardHeader>
                    <CardTitle className="font-extrabold text-2xl">
                      {investor.name}
                    </CardTitle>
                    <CardDescription>
                      <ul className="md:text-xl font-bold  text-black list-disc list-inside">
                        {investor.principles.map((principle, idx) => (
                          <li key={idx}>{principle}</li>
                        ))}
                      </ul>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="mb-16">
                    {/* Additional content can go here */}
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}

export default FeaturedInvestors;
