import Hero from './components/Hero'
import OurTeam from './components/OurTeam'
import AboutUs from './components/AboutUs'
import OurProject from './components/OurProject'
import Mufa from "./assets/background/mufa-cloud2.webp"
import OurSponsors from './components/OurSponsors'

export default function HomePage() {
    return (
    <main className='flex flex-col justify-center items-center w-full h-full mx-auto'>
        <Hero />
        <div className={`absolute flex top-[70vh] w-full h-[400px] overflow-hidden z-[1]`}>
            <img src={Mufa} alt="Mufa Cloud Photo" className='w-full h-full object-cover'/>
        </div>
        <div className={`absolute flex top-[170vh] w-full h-[500px] overflow-hidden bg-[url("./assets/background/kara-sistemleri-bulut.webp")] bg-center z-[1]`}>
        </div>
        <div className='fade-section w-full bg-gradient-to-b from-blue-100 via-blue-300 to-blue-500 dark:bg-gradient-to-b dark:from-gray-900 dark:via-gray-700 dark:to-gray-500'>
        <AboutUs />
        <OurProject />
        </div>
        <OurTeam />
        <OurSponsors />
    </main>
    )
}
