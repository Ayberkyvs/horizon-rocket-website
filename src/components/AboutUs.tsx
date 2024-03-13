import SlideDown from './SlideDown'
import {HeadingElement, HeadingElementSubtitle, HeadingElementTitle }from './HeadingElement/HeadingElement'
import AboutUsCard from './AboutUsCard';
import { Antenna } from 'lucide-react';
import { Goal } from 'lucide-react';
import { Telescope } from 'lucide-react';
import { Separator } from "@/components/ui/separator"
import langdataselector from '@/lib/utils/languagedata';
import { LanguageContext } from '@/AppLayout';
import { useContext } from 'react';
import { LanguageData } from '../lib/utils/types';

function AboutUs() {
const { language } = useContext(LanguageContext)
const { aboutus } = langdataselector(language) as LanguageData
  return (
    <section className='aboutus flex flex-col justify-center items-center w-full h-auto min-h-screen overflow-hidden mb-20 max-xl:px-5 max-md:pt-5 mt-20' id='aboutus' >
        <div className='flex flex-col w-full max-w-[1280px] h-auto'>
            <div className='flex flex-col-reverse w-full md:flex-row justify-between max-md:items-end'>
                <p className='text-base md:text-lg text-justify text-text w-full px-4 md:p-0 md:w-1/2 font-light z-[2]'>
                {aboutus?.paragraph}
                </p>
                <SlideDown>
                <HeadingElement alignitems='end' className='max-md:mb-5'>
                    <>
                    <HeadingElementSubtitle><span>{aboutus?.subTitle}</span></HeadingElementSubtitle>
                    <HeadingElementTitle><span>{aboutus?.title}</span></HeadingElementTitle>
                    </>
                </HeadingElement>
                </SlideDown>
            </div>
            <Separator className='bg-text mt-10'/>
            <SlideDown>
                <div className='flex flex-col md:flex-row w-full h-full mt-10 mb-10 gap-10 px-4 md:px-0'>
                    <AboutUsCard className="max-md:w-full" icon={<Antenna className='w-[40px] h-[40px]'/>} title='Our Mission' paragraph="Our team aims to contribute to the development of 
                    future engineers and scientists by strengthening students' engineering skills through practical experiences. As the Horizon Rocket Team, we are committed to producing innovative 
                    solutions to achieve success in rocket competitions and represent our school in the best possible way. Throughout this process, we strive to enhance team members' personal and professional 
                    development by fostering teamwork and leadership skills."/>
                    <AboutUsCard className="max-md:w-full" icon={<Telescope className='w-[40px] h-[40px]'/>} title='Our Vision' paragraph='In our journey towards establishing a systematic structure to pass on our experiences to 
                    future generations, we aim to set an example for our peers who share the same goal as us. We have embraced the vision of guiding determined and dedicated engineering candidates in the years to come. To achieve 
                    this goal, we have deemed it appropriate to establish a club.'/>
                    <AboutUsCard className="max-md:w-full" icon={<Goal className='w-[40px] h-[40px]'/>} title='Our Goals' paragraph="The Horizon Rocket Team aims to make a name for itself in our country by achieving outstanding engineering 
                    success in rocket competitions. For the year 2024, our goal is to participate in and achieve success in the TEKNOFEST Middle Altitude Rocket Competition. With the success we achieve here, we aim to increase the number of competition 
                    categories we participate in, thereby bringing together more competent engineering candidates under one roof."/>
                </div>
            </SlideDown>
        </div>
    </section>
  )
}

export default AboutUs
