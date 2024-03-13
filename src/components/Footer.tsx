import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { MailIcon } from "lucide-react";
import Teknofest from "../assets/teknofest.svg"

export default function Footer() {
  return (
    <div className="relative bottom-0">
    <div className="flex flex-row justify-center items-center w-full h-[80px] bg-background gap-5 border-t border-text">
    <div className="flex gap-2 w-fit h-fit">
        <a href="https://www.instagram.com/horizonroket" target="_blank"><Button className="w-8 h-8 p-2 m-0"><InstagramLogoIcon className="w-full h-full"/></Button></a>
        <a href="mailto:contact@horizonrocket.com" target="_blank"><Button className="w-8 h-8 p-2 m-0"><MailIcon className="w-full h-full" /></Button></a>
        <a href="https://www.teknofest.org/en/" target="_blank"><Button className="w-8 h-8 p-2 m-0"><img src={Teknofest} className="w-full h-full" title="TeknoFest" alt="Teknofest Logo Svg"/></Button></a>
    </div>
    </div>
        <div className="flex justify-center items-center w-full h-[50px] text-text bg-background text-sm">
        <p>Copyright ©2024 Horizon Rocket. Developed by <a href="https://www.linkedin.com/in/ayberksch/" target="_blank" className="text-accent underline">YAVAS</a></p>
    </div>
    </div>
  )
}
