import SceneLoader from "./SceneLoader";
export default function Hero() {
  console.log(Date.now())
  return (
    <section className='hero relative w-full h-screen flex flex-col justify-center items-center'>
      <div className="absolute flex flex-col justify-center items-center header--logotext w-full h-fit text-white text-[40px] md:text-[60px] leading-[52px] md:leading-[78px] drop-shadow-xl z-[0]">
        <span>ALPHA-</span> 
        <span>HORIZON</span> 
      </div>
      <div className="w-full h-full z-[1] overflow-hidden">
        <SceneLoader scene="https://prod.spline.design/IJKICVwq5ilUt6bj/scene.splinecode" className="" />
      </div>
    </section>
  )
}