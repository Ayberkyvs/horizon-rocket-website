import { ModeToggle } from './mode-toggle';
import LanguageToggle from './language-toggle';
import NavbarMenu, { NavbarMenuMobile } from './navbar-menu';
import {motion, useScroll, useTransform} from "framer-motion"
import langdataselector from '@/lib/utils/languagedata';
import { useContext } from 'react';
import { LanguageContext } from '@/AppLayout';
import { Button } from './ui/button';
import { MailIcon } from 'lucide-react';
import { LanguageData } from '../lib/utils/types';

export default function Header() {
  const { language } = useContext(LanguageContext)
  const { header } = langdataselector(language) as LanguageData
  const { scrollYProgress } = useScroll();

  const headerY = useTransform(
    scrollYProgress,
    [0, 0.2],
    ['0%','-100%'],
  );
  return (
    <motion.header className={`fixed flex flex-col w-full h-fit shadow-md z-[3]`}
    style={{y: headerY}}>
    <div className='flex justify-center items-center w-full h-fit bg-[#b12d2d] text-white text-sm p-1'>👀 Still Developing 👀</div>
    <div className={`flex w-full h-[60px] md:h-[80px] bg-background justify-center items-center`} style={{ backdropFilter: 'blur(5px)' }}>
      <div className='flex justify-between items-center w-full max-w-[1280px] h-full max-xl:px-6 max-md:px-2'>
        <a href="mailto:contact@horizonrocket.com" target="_blank" className='flex md:hidden'><Button className="w-8 h-8 p-2 m-0"><MailIcon className="w-full h-full" /></Button></a>
        <h3 className='max-md:absolute max-md:left-[50%] max-md:translate-x-[-50%] header--logotext text-2xl text-text max-sm:text-xl select-none' draggable={false}>HORIZON</h3>
        <NavbarMenu className="flex max-md:hidden" data={header} />
        <div className='flex gap-[2px]'>
          <ModeToggle />
          <LanguageToggle />
        </div>
      </div>
    </div>
    <NavbarMenuMobile className="flex overflow-hidden md:hidden w-full bg-background justify-center items-center" data={header}/>
    </motion.header>
  )
}