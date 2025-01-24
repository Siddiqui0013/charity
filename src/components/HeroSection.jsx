import KidImage from "../assets/heroKid.png";

export default function HeroSection() {
    return (
      <section id="hero" >
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          <div className="space-y-6 w-[45%]">
            <h4 className="text-sm uppercase tracking-widest font-medium">Provide Hope For Homeless People</h4>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-snug">
              Support <span className="text-yellow-400">Kids</span> &amp; Elderly <br /> With Donations!
            </h1>
            <p className="text-lg text-gray-300">
              Providing assistance through donations to children and elderly individuals for their well-being and development.
            </p>
            <button className="bg-green-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-green-600">
              Donate Now
            </button>
          </div>
  
          <div className=" w-[45%]">
            <img
              src={KidImage}
              alt="Hero Kid"
              className="rounded-lg border-4 border-yellow-400"
            />
            <div className="bg-yellow-400 text-black text-sm font-semibold px-4 py-2 rounded-full">
              24h
            </div>
          </div>
        </div>

        {/* <div className="mt-16 bg-white text-black rounded-lg py-6 px-8 grid grid-cols-2 md:grid-cols-4 gap-8 shadow-lg">
          <div className="text-center">
            <h3 className="text-3xl font-bold">850+</h3>
            <p className="text-sm text-gray-600">Total Donation Received</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold">$125K</h3>
            <p className="text-sm text-gray-600">Money Donated</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold">350+</h3>
            <p className="text-sm text-gray-600">Global Branches</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold">35+</h3>
            <p className="text-sm text-gray-600">Charity in Last Year</p>
          </div>
        </div> */}

      </section>
    );
  }
  