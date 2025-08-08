import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {Card, CardContent} from "@/components/ui/card";

const StatsCarousel = () => {
    return (
        <div className={"flex justify-center pt-8 overflow-hidden ms-0 me-0"}>
            <Carousel className="w-full max-w-xs">
                <CarouselContent showOverflow={true}>
                    <CarouselItem>
                        <Card className={"mt-1 h-full"}>
                            <CardContent className="flex items-center justify-center p-6">
                                <span className="text-4xl font-semibold">Current rank</span>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                    <CarouselItem>
                        <Card className={"mt-1 h-full"}>
                            <CardContent className="flex items-center justify-center p-6">
                                <span className="text-4xl font-semibold">Your luck</span>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                    <CarouselItem>
                        <Card className={"mt-1 h-full"}>
                            <CardContent className="flex items-center justify-center p-6">
                                <span className="text-4xl font-semibold">Most probable collection</span>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious variant={"default"}/>
                <CarouselNext variant={"default"}/>
            </Carousel>
        </div>
    )
}

export default StatsCarousel;