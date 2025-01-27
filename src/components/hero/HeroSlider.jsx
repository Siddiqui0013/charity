import HeroSlider1 from "../../assets/heroSlider1.png";
import HeroSlider2 from "../../assets/heroSlider2.png";
import { ArrowRight } from "lucide-react";
import { Carousel } from "flowbite-react";

const HeroSlider = function() {
  return (
    <div className="h-screen">
      <Carousel className="w-full" slide={false} >

      <div className="flex md:flex-row flex-col gap-8 md:w-[90%] w-full mx-auto items-center">    

<div className="md:w-[50%] w-full flex items-center justify-center">
  <div className="flex flex-col gap-8 w-[90%] mx-auto">
  <h4 className="text-sm uppercase self-start font-medium">Provide Hope For Homeless People</h4>
  <h1 className="text-4xl sm:text-5xl text-start font-extrabold ">
    Support <span className="text-secondary">Kids</span> &amp; Elderly <br /> With Donations!
  </h1>
  <p className="text-lg text-gray-300 text-start">
    Providing assistance through donations to children and elderly individuals for their well-being and development.
  </p>
  <div className="flex gap-12 flex-wrap items-center justify-start">

              <div className="flex items-center px-8 py-4 rounded-xl cursor-pointer gap-2 justify-around bg-primary">
            <ArrowRight size={20} className="text-white" />
              <span>Donate Now</span>
            </div>   

            <div className="flex items-center gap-4">
              <div className="flex -space-x-4">
                <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                <div className="w-10 h-10 rounded-full bg-gray-400"></div>
                <div className="w-10 h-10 rounded-full bg-gray-500"></div>
              </div>
              <span className="text-gray-300">+10 Millions Donate</span>
            </div>
  </div>

  </div>
</div>

<div className="flex justify-center w-[50%]">
  <img
    src={HeroSlider1}
    alt="Hero Kid"
    width={"400px"}
  />
</div>
        </div>

        <div className="flex md:flex-row flex-col gap-8 md:w-[90%] w-full mx-auto items-center">
      <div className="w-full md:w-[50%] flex items-center justify-center">
        <div className="flex flex-col gap-8 w-[90%] mx-auto">
          <h4 className="text-sm uppercase self-start font-medium text-white">
            How Need Help You
          </h4>
          <h1 className="text-4xl sm:text-5xl text-start font-extrabold text-white">
            Collaborating To<br />
            Eradicate <span className="text-secondary">Hunger</span>
          </h1>
          <p className="text-lg text-gray-300 text-start">
            Joining Forces To Eliminate Hunger And Build A Hunger-Free Future
            Through Donations Here And Cooperation
          </p>
          
          <div className="flex flex-wrap gap-12 items-center">

            <div className="flex items-center px-8 py-4 rounded-xl cursor-pointer gap-2 justify-around bg-primary">
            <ArrowRight size={20} className="text-white" />
              <span>Donate Now</span>
            </div>   

            <div className="flex items-center gap-4">
              <div className="flex -space-x-4">
                <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                <div className="w-10 h-10 rounded-full bg-gray-400"></div>
                <div className="w-10 h-10 rounded-full bg-gray-500"></div>
              </div>
              <span className="text-gray-300">+10 Millions Donate</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center w-[50%]">
      <img
    src={HeroSlider2}
    alt="Hero Kid"
    width={"400px"}
  />
      </div>
    </div>

      </Carousel>
    </div>
  );
}

export default HeroSlider;