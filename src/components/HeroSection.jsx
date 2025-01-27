import KidImage from "../assets/heroKid.png";
import User2m from "../assets/User.png"

export default function HeroSection() {
  return (
    <section id="hero" >
      <div className="flex md:flex-row flex-col gap-8 items-center justify-center">
        <div className="w-[50%] flex items-start justify-center"
          style={{
            marginTop: "20px"
          }}
        >
          <div className="flex flex-col gap-8 w-[90%] mx-auto">
            <h4 className="text-sm uppercase self-start font-medium">Provide Hope For Homeless People</h4>
            <h1 className="text-4xl sm:text-5xl text-start font-extrabold ">
              Support <span className="text-yellow-400">Kids</span> &amp; Elderly <br /> With Donations!
            </h1>
            <p className="text-lg text-gray-300 text-start">
              Providing assistance through donations to children and elderly individuals for their well-being and development.
            </p>
            <div className="flex gap-12 items-start justify-start">
              <button className="yellowBtn h-[50px]">
                Donate Now
              </button>
              <div className="cricles flex ">
                <img src={User2m} alt="User" />
              </div>
            </div>

          </div>
        </div>

        <div className="flex justify-center w-[50%]"
          style={{
            marginTop: "20px"
          }}
        >
          <img
            src={KidImage}
            alt="Hero Kid"
            width={"400px"}
          />
        </div>
      </div>


      {/* //   <div className="text-center">
        //     <h3 className="text-3xl font-bold">850+</h3>
        //     <p className="text-sm text-gray-600">Total Donation Received</p>
        //   </div>
        //   <div className="text-center">
        //     <h3 className="text-3xl font-bold">$125K</h3>
        //     <p className="text-sm text-gray-600">Money Donated</p>
        //   </div>
        //   <div className="text-center">
        //     <h3 className="text-3xl font-bold">350+</h3>
        //     <p className="text-sm text-gray-600">Global Branches</p>
        //   </div>
        //   <div className="text-center">
        //     <h3 className="text-3xl font-bold">35+</h3>
        //     <p className="text-sm text-gray-600">Charity in Last Year</p>
        //   </div>
        // </div> */}

    </section>
  );
}
