import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import SoftwareBanner from "../assets/banner/software.webp"
import AvionicsBanner from "../assets/banner/avionics.webp"
import MechanicBanner from "../assets/banner/mechanic.webp"
import AdvisorBanner from "../assets/banner/advisor.webp"
import FinanceBanner from "../assets/banner/finance.webp"
import { LinkedInLogoIcon } from "@radix-ui/react-icons"
import { Mail } from "lucide-react"

function PersonCard({data}: {data:any}) {
const team = data.unit === "Software" ? SoftwareBanner : data.unit === "Mechanic" ? MechanicBanner : data.unit === "Avionics" ? AvionicsBanner : data.unit === "Advisor" ? AdvisorBanner : FinanceBanner
  return (
    <Card className="flex flex-col justify-between bg-header-background w-[300px] h-full text-text">
        <div className="flex flex-col justify-start">
        <img src={team} alt={`Profile Banner of team ${data.unit}`} className="relative rounded-md border-b-[2px] border-text" draggable={false}/>
        <div className="relative flex-inline rounded-full w-20 h-20 top-[-40px] left-[50%] translate-x-[-50%] border-[2px] border-text">
            <img src={data.pp} alt={`Profile Picture of ${data.name + " " + data.lastname}`} className="w-full h-full object-cover rounded-full" draggable={false}/>
        </div>
          <CardHeader className="mt-0 pt-0">
              <CardTitle>{data.name + " " +data.lastname}</CardTitle>
              <CardDescription>{data.role}</CardDescription>
          </CardHeader>
          <CardContent className="place-self-center">
              <p>{data.description}</p>
          </CardContent>
        </div>
        <CardFooter className="gap-2">
            {data.socials.linkedin && <a href={data.socials.linkedin}><LinkedInLogoIcon className="text-[#00A0DC] w-8 h-8 rounded"/></a>}
            {data.socials.email && <a href={"mailto:" + data.socials.email}><Mail className="text-[#00A0DC] w-8 h-8 rounded"/></a>}
        </CardFooter>
    </Card>

  )
}

export default PersonCard