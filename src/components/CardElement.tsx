import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import DrawerElement from './DrawerElement';

  export default function CardElement({img = "", data, className=""}: { img: string, data: any, className: string}) {
    const contents = Object.entries(data.Content); 
    const [firstKey, firstValue] = contents.shift() || ["", ""];
    
    return (
      <Card className={`flex flex-col justify-start w-[300px] h-fit bg-header-background text-text ${className}`}>
        <CardHeader>
          <img src={img} alt={data.Title} className='rounded-xl mb-5 border-black border-[1px]' draggable={false}></img>
          <CardTitle>{data.Title}</CardTitle>
          <CardDescription>{data.Description}</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className='flex flex-col gap-1'>
            {/* İlk öğeyi CardTitle olarak yazdır */}
            <li key={firstKey}><CardTitle>{firstValue as string}</CardTitle></li>
            {/* Geri kalan öğeleri normal şekilde döngüde işle */}
            {contents.map(([key, value]) => (
              <li key={key}><CardDescription>{value as string}</CardDescription></li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="flex justify-between">
          <DrawerElement link={data.ModelLink} isActive={data.ModelLink === "" ? true : false} data={data}/>
        </CardFooter>
      </Card>
    )
  }
  
  // <Button variant="outline" className='bg-primary text-white' disabled={btndisabled} onClick={() => {}}>3D Model</Button>