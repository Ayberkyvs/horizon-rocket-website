import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import SceneLoader from "./SceneLoader"

export default function DrawerElement({ link, isActive, data }: {link:string, isActive: boolean, data:any}) {
  return (
    <Drawer>
    <DrawerTrigger disabled={isActive}>
      <Button variant={`${isActive ? "destructive" : "outline"}`} disabled={isActive} className="bg-primary text-white">3D Model</Button>
    </DrawerTrigger>
    <DrawerContent className="text-text flex justify-center items-center">
      <div className="w-full max-w-[800px]">
        <DrawerHeader>
          <DrawerTitle>{data.Title}</DrawerTitle>
          <DrawerDescription>{data.Description}</DrawerDescription>
          <div className="w-full h-[300px]">
            <SceneLoader scene={link} className=""/>
          </div>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose>
            <Button variant="destructive">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </div>
    </DrawerContent>
    </Drawer>
  )
}

