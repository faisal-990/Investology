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

function FeatureCarousel() {
  const features = [
    {
      title: 'Expert invest for you',
      description:
        'Let your profile be managed by experts , like how you always wandered , they do it !!',
    },
    {
      title: 'Real-Time Market Data',
      description: 'Stay updated with live market trends and data.',
    },
    {
      title: 'Customizable Dashboards',
      description: 'Tailor your dashboard to fit your trading style.',
    },
    {
      title: 'Advanced Analytics',
      description: 'Gain insights with our advanced analytical tools.',
    },
    {
      title: 'Secure Transactions',
      description: 'Experience safe and secure trading operations.',
    },
    {
      title: '24/7 Support',
      description: 'Get assistance whenever you need it.',
    },
  ];
  return (
    <section className="hover:bg-gradient-to-t hover:slate-600 rounded-xl flex flex-col items-center">
      <div className="hover:scale-125 hover:translate-y-2 duration-500 mb-5 bg-indigo-200 inline-block p-2 rounded-xl">
        <strong className="text-center block text-2xl font-bold">
          Features
        </strong>
      </div>
      <div className="flex justify-center ">
        <Carousel className="w-64 max-w-3xl sm:w-1/2">
          <CarouselContent className="m-2">
            {features.map((feature, index) => (
              <CarouselItem key={index} className="p-4 ">
                <Card className=" bg-slate-300 h-full items-center">
                  <CardHeader>
                    <CardTitle className="font-bold md:text-2xl">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="p-8 text-l text-pretty md:text-xl">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {/* Additional content can go here */}
                    {/* add images like graphs to make this interactive*/}
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

export default FeatureCarousel;
