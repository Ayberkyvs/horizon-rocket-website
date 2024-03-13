import { HeadingElement, HeadingElementTitle, HeadingElementSubtitle } from "./HeadingElement/HeadingElement";
import SlideDown from "./SlideDown";
import SponsorCards from "./SponsorCards";

export default function OurSponsors() {
  return (
    <section className="oursponsors relative flex justify-center w-full h-screen bg-background" id="sponsors">
      <div className="absolute w-full h-full bg-black/40 dark:bg-black/70"></div>
        <div className="w-full max-w-[1280px] h-full max-xl:px-5 max-md:pt-5 z-[1]">
            <div className="w-full h-fit mt-10">
                <SlideDown>
                  <HeadingElement alignitems='start'>
                  <>
                  <HeadingElementSubtitle><span className="text-white">Our Sponsors</span></HeadingElementSubtitle>
                  <HeadingElementTitle><span className="text-white">Thanks for Support</span></HeadingElementTitle>
                  </>
                  </HeadingElement>
                </SlideDown>
            </div>
            <div className="relative top-[40%] translate-y-[-50%] w-full h-fit ">
              <SponsorCards />
            </div>
        </div>
    </section>
  )
}

// import { Chart } from "react-google-charts";
{/* <div className="rounded-xl overflow-hidden h-[400px] border-2">
  <Chart
  chartType="PieChart"
  data={data}
  options={options}
  width={"100%"}
  height={"100%"}
  />
</div> */}
