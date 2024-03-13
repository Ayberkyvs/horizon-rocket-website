import {HeadingElement, HeadingElementSubtitle, HeadingElementTitle }from './HeadingElement/HeadingElement'
import SlideDown from "./SlideDown";
import CardElement from "./CardElement";
import AlphaHorizon from "../assets/alphahorizon.webp"
import Hugin from "../assets/hugin.webp"
import CarouselElement from './CarouselElement';

export default function OurProject() {
  const data = [
    {
      Title: "Alpha-HORIZON",
      Description: "Our model rocket Alpha-HORIZON was designed by our team to launch payloads up to 4kg up to 9650ft.",
      Content: {
        Title: "Technical Specifitications",
        Diameter: "Diameter: 126mm",
        Weight: "Weight: 21,998kg",
        Payload: "Portable Payload: 4kg",
        MaxAlt: "Max Altitude: 9650ft (2940 meters)",
        MaxSpeed: "Max Speed: 234 m/s (Mach 0.7)"
      },
      ModelLink: "https://prod.spline.design/CbqDrF8lmNLfrGQ6/scene.splinecode",
      Image: AlphaHorizon,
    },
    {
      Title: "Hugin",
      Description: "Our Earth Observation Module, Hugin, was produced to provide real-time images from medium altitude and has been made reusable with its reinforced design.",
      Content: {
        Title: "Technical Specifitications",
        Size: "Size: 86mm x 86mm x 235mm",
        Weight: "Weight: 4kg",
        Resolution: "Video Image Resolution: 1080p 30FPS"
      },
      ModelLink: "",
      Image: Hugin,
    }
  ]

  const Cards = data.map((item)=> (
    <CardElement className="h-full" img={item.Image} data={item}/>
  ))
  return (
    <section className="relative flex justify-center items-center w-full h-fit bg-center bg-cover mb-20 max-xl:px-5" id='ourproject'>
      <div className="flex flex-col max-w-[1280px] w-full h-full">
        <div className="w-full h-fit">
          <SlideDown>
            <HeadingElement alignitems='start' className='mb-10'>
              <>
              <HeadingElementSubtitle><span>Our Projects</span></HeadingElementSubtitle>
              <HeadingElementTitle><span>Take a look</span></HeadingElementTitle>
              </>
            </HeadingElement>
          </SlideDown>
        </div>
        <div>
          <CarouselElement items={Cards} controls={false}/>
        </div>
      </div>
    </section>
  )
}
