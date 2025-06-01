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
    <section className="flex flex-col items-center">
      <div className="mb-5 bg-indigo-200 inline-block p-2 rounded-xl">
        <strong className="text-center block text-2xl font-bold">
          Features
        </strong>
      </div>
      <div className="flex justify-center ">
        <Carousel className="w-64 max-w-2xl md:w-3/4">
          <CarouselContent>
            {features.map((feature, index) => (
              <CarouselItem key={index} className="p-4 md:basis-1/2">
                <Card className="h-full items-center">
                  <CardHeader>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
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

export default FeatureCarousel;
