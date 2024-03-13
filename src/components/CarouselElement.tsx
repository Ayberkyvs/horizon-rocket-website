import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { nanoid } from 'nanoid'

export default function CarouselElement({items, controls}: {items: JSX.Element[], controls: boolean}) {
  const carouselItems = items.map((item)=>(
    <CarouselItem key={nanoid()} className="flex justify-center items-center sm:basis-1/2 md:basis-1/3 lg:basis-1/4 h-auto">{item}</CarouselItem>
  ))
  return (
    <Carousel className='h-fit'>
        <CarouselContent>
            {carouselItems}
        </CarouselContent>
        <div className={`text-text bg-accent hidden ${controls ? "xl:flex" : "hidden"}`}>
        <CarouselNext />
        <CarouselPrevious />
        </div>
    </Carousel>
  )
}

