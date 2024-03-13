import SlideDown from './SlideDown'
import {HeadingElement, HeadingElementSubtitle, HeadingElementTitle }from './HeadingElement/HeadingElement'
import PersonCard from './PersonCard'
import Ali from "../assets/persons/ali.webp"
import Arda from "../assets/persons/arda.webp"
import Ayberk from "../assets/persons/ayberk.webp"
import Begüm from "../assets/persons/begüm.webp"
import Burak from "../assets/persons/burak.webp"
import Can from "../assets/persons/can.webp"
import Derin from "../assets/persons/derin.webp"
import Ece from "../assets/persons/ece.webp"
import Eray from "../assets/persons/eray.webp"
import Görkem from "../assets/persons/görkem.webp"
import Okan from "../assets/persons/okan.webp"
import OsmanNuri from "../assets/persons/osmannuri.webp"
import Simge from "../assets/persons/simge.webp"
import Tunay from "../assets/persons/tunay.webp"
import Yakup from "../assets/persons/yakup.webp"
import CarouselElement from './CarouselElement'

export default function OurTeam() {
    const data = [
      {
        name: "Osman Nuri",
        lastname: "Şahin",
        role: "Team Advisor",
        description: "Horizon Rocket Team is advised by Dr. Osman Nuri ŞAHİN, an Assistant Professor at Izmir University of Economics, Faculty of Engineering.",
        unit: "Advisor",
        socials: {
          linkedin: "",
          email: "",
        },
        pp: OsmanNuri,
      },
      {
        name: "Ali",
        lastname: "Bezirkan",
        role: "Payload & Analysis",
        description: "He is a 3rd-year student of Aerospace Engineering at Izmir University of Economics. He is involved in the design of the payload, responsible for the static analysis of both the rocket and the payload.",
        unit: "Mechanic",
        socials: {
          linkedin: "https://www.linkedin.com/in/ali-bezirkan/",
          email: "alibezirkan_@hotmail.com",
        },
        pp: Ali,
      },
      {
        name: "Arda",
        lastname: "Demirdöğen",
        role: "Avionics Unit Manager",
        description: "He is a 3rd-year student of Electrical-Electronics Engineering at Izmir University of Economics. He is responsible for the avionics unit. He oversees the design and production of flight computers for both the rocket and the payload.",
        unit: "Avionics",
        socials: {
          linkedin: "https://www.linkedin.com/in/arda-demird%C3%B6%C4%9Fen-72b237240",
          email: "ardademirdogen@gmail.com",
        },
        pp: Arda,
      },
      {
        name: "Ayberk",
        lastname: "Yavaş",
        role: "Web & .Net",
        description: "He is a 2nd-year student of Computer Programming at Izmir University of Economics. He is responsible for web services and Graphical User Interface(GUI).",
        unit: "Software",
        socials: {
          linkedin: "https://www.linkedin.com/in/ayberksch/",
          email: "contact@ayberkyavas.com",
        },
        pp: Ayberk,
      },
      {
        name: "Begüm",
        lastname: "Gençer",
        role: "Recovery System Algorithm",
        description: "She is a 4th-year student of Software Engineering at Izmir University of Economics. She is responsible for writing the recovery system algorithm.",
        unit: "Software",
        socials: {
          linkedin: "",
          email: "",
        },
        pp: Begüm,
      },
      {
        name: "Burakcan",
        lastname: "Akçit",
        role: "Team Leader",
        description: "He's a 3rd-year Aerospace Engineering student at Izmir University of Economics. Responsible for theoretical rocket design using OpenRocket, 3D design with CAD apps, team coordination, project planning, and ensuring timely production progress.",
        unit: "Mechanic",
        socials: {
          linkedin: "",
          email: "",
        },
        pp: Burak,
      },
      {
        name: "Can",
        lastname: "Uysal",
        role: "Software Unit Manager",
        description: "He is a 3rd-year student of Aerospace Engineering at Izmir University of Economics. He is responsible for the software unit.",
        unit: "Software",
        socials: {
          linkedin: "",
          email: "",
        },
        pp: Can,
      },
      {
        name: "Derin",
        lastname: "Önal",
        role: "Flight Computer",
        description: "He is a 3rd-year student of Electrical-Electronics Engineering at Izmir University of Economics. He is responsible for the design and production of the rocket's flight computer.",
        unit: "Avionics",
        socials: {
          linkedin: "https://www.linkedin.com/in/derinonal?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          email: "derinonal3001@gmail.com",
        },
        pp: Derin,
      },
      {
        name: "Ece Naz",
        lastname: "Kızılkaya",
        role: "Materials & Production",
        description: "She is a 3rd-year student of Aerospace Engineering at Izmir University of Economics. She is responsible for selecting suitable materials for the rocket and overseeing its production.",
        unit: "Mechanic",
        socials: {
          linkedin: "https://www.linkedin.com/in/ece-naz-kizilkaya-6355b820a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          email: "ecenazkizilkaya11@gmail.com",
        },
        pp: Ece,
      },
      {
        name: "Eray Özcan",
        lastname: "Kılıç",
        role: "Payload Flight Computer",
        description: "He is a 3rd-year student of Electrical-Electronics Engineering at Izmir University of Economics. He is responsible for the design and production of the flight computer for the payload.",
        unit: "Avionics",
        socials: {
          linkedin: "https://www.linkedin.com/in/erayozcankilic",
          email: "eraykiliciue@gmail.com",
        },
        pp: Eray,
      },
      {
        name: "Görkem Efe",
        lastname: "Akkaya",
        role: "Aerodynamic Analysis",
        description: "He is a 3rd-year Aerospace Engineering student at Izmir University of Economics, responsible for the mechanical unit, involved in rocket and payload design, and conducts aerodynamic analysis for both.",
        unit: "Mechanic",
        socials: {
          linkedin: "https://www.linkedin.com/in/g%C3%B6rkem-efe-akkaya-413930233/",
          email: "gorkemefeakkaya@gmail.com",
        },
        pp: Görkem,
      },
      {
        name: "Okan",
        lastname: "Ok",
        role: "Separation & Recovery",
        description: "He is a 3rd-year student of Aerospace Engineering at Izmir University of Economics. He is responsible for the separation and recovery systems of the rocket.",
        unit: "Mechanic",
        socials: {
          linkedin: "",
          email: "",
        },
        pp: Okan,
      },
      {
        name: "Simge",
        lastname: "Karakaş",
        role: "Finance & Promotion",
        description: "She is a 3rd-year student of Industrial Engineering at Izmir University of Economics. She is responsible for the finance and promotion unit.",
        unit: "Finance",
        socials: {
          linkedin: "",
          email: "",
        },
        pp: Simge,
      },
      {
        name: "Tunay",
        lastname: "Koluaçık",
        role: "Data Filtering",
        description: "He is a 2nd-year student of Computer Engineering at Izmir University of Economics. He is responsible for data filtering.",
        unit: "Software",
        socials: {
          linkedin: "",
          email: "",
        },
        pp: Tunay,
      },
      {
        name: "Yakup",
        lastname: "Atıcı",
        role: "Software Controller",
        description: "He is a 3rd-year student of Software Engineering at Izmir University of Economics. He is the software controller and developer.",
        unit: "Software",
        socials: {
          linkedin: "",
          email: "",
        },
        pp: Yakup,
      },   
    ]
    const cards = data.map((item)=>{
      return <PersonCard data={item} />
    })
  return (
    <section className='flex justify-center relative team w-full h-screen' id='ourteam'>
      <div className='absolute bg-black w-full h-full opacity-30 dark:opacity-80'>
      </div>
      <div className='w-full h-fit max-w-[1280px] z-[1]'>
      <div className='w-full h-fit flex justify-end items-center'>
        <SlideDown>
        <HeadingElement alignitems='end' className='mt-10 px-6 xl:px-0'>
          <>
          <HeadingElementSubtitle><span className='text-white'> Our Team </span></HeadingElementSubtitle>
          <HeadingElementTitle><span className='text-white'> Meet The Team </span></HeadingElementTitle>
          </>
        </HeadingElement>
      </SlideDown>
      </div>
      <div className='w-full h-fit mt-10'>
        <CarouselElement items={cards} controls={true}/>
      </div>
      </div>
    </section>
  )


}

{/* <section className="team relative flex justify-center items-center w-full h-auto border-2"> 
<div className='bg-black w-full h-full opacity-30 dark:opacity-80'>
</div>
<div className='absolute flex flex-col max-w-[1280px] w-full h-full justify-start items-end border-2'>
<SlideDown>
  <HeadingElement alignitems='end' className='mt-10 px-6 xl:px-0'>
    <>
    <HeadingElementSubtitle><span className='text-white'>Our Team</span></HeadingElementSubtitle>
    <HeadingElementTitle><span className='text-white'>Meet The Team</span></HeadingElementTitle>
    </>
  </HeadingElement>
</SlideDown>
<div className='w-full h-fit mt-10 border-2'>
  <CarouselElement items={cards} controls={true}/>
</div>
</div>
</section> */}