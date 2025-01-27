import HeroSlider1 from "../assets/hero/heroSlider1.png";
import HeroSlider2 from "../assets/hero/heroSlider2.png";
import HeroSlider3 from "../assets/hero/heroSlider3.png";
import Polygon from "../assets/Polygon.png";
import { Carousel } from "flowbite-react";

const HeroSection = function () {
	return (
		<div className="h-screen"
    id="hero">
			<Carousel className="w-full" slide={true} leftControl={<span className="bg-[#252838]"></span>} rightControl={<span className="bg-[#252838]"></span>}>
				<div className="flex md:flex-row flex-col gap-8 md:w-[90%] w-full mx-auto items-center">
					<div className="md:w-[50%] w-full flex items-center justify-center">
						<div className="flex flex-col gap-8 w-[90%] mx-auto">
							<h4 className="text-sm uppercase self-start font-medium">
								Provide Hope For Homeless People
							</h4>
							<h1 className="text-4xl sm:text-5xl text-start font-extrabold ">
								Support <span className="text-secondary">Kids</span> &amp;
								Elderly <br /> With Donations!
							</h1>
							<p className="text-lg text-gray-300 text-start">
								Providing assistance through donations to children and elderly
								individuals for their well-being and development.
							</p>
							<div className="flex gap-12 flex-wrap items-center justify-start">
								<div 
                onClick={() => { console.log("clicked");
                }}
                className="flex items-center px-8 py-4 rounded-xl cursor-pointer gap-2 justify-around bg-primary">
					<img src={Polygon} width={16} height={16} />
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
						<img src={HeroSlider1} alt="Hero Kid" width={"400px"} />
					</div>
				</div>


				<div className="flex md:flex-row flex-col gap-8 md:w-[90%] w-full mx-auto items-center">
					<div className="w-full md:w-[50%] flex items-center justify-center">
						<div className="flex flex-col gap-8 w-[90%] mx-auto">
							<h4 className="text-sm uppercase self-start font-medium text-white">
								Need Help You to Help Others
							</h4>
							<h1 className="text-4xl sm:text-5xl text-start font-extrabold text-white">
								Collaborating To
								<br />
								Eradicate <span className="text-secondary">Hunger</span>
							</h1>
							<p className="text-lg text-gray-300 text-start">
								Joining Forces To Eliminate Hunger And Build A Hunger-Free
								Future Through Donations Here And Cooperation
							</p>

							<div className="flex flex-wrap gap-12 items-center">
								<div className="flex items-center px-8 py-4 rounded-xl cursor-pointer gap-2 justify-around bg-primary">
								<img src={Polygon} width={16} height={16} />
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
						<img src={HeroSlider2} alt="Hero Kid" width={"400px"} />
					</div>

				</div>

				<div className="flex md:flex-row flex-col gap-8 md:w-[90%] w-full mx-auto items-center">
					<div className="w-full md:w-[50%] flex items-center justify-center">
						<div className="flex flex-col gap-8 w-[90%] mx-auto">
							<h4 className="text-sm uppercase self-start font-medium text-white">
								Need Help You to Help Others
							</h4>
							<h1 className="text-4xl sm:text-5xl text-start font-extrabold text-white">
								Support Kids & Seniors- <br />
								Make a Difference Today!
							</h1>
							<p className="text-lg text-gray-300 text-start">
								Your generosity has the power to bring hope and happiness to
								those who need it most. By supporting kids and the elderly
								through your donations
							</p>

							<div className="flex flex-wrap gap-12 items-center">
								<div className="flex items-center px-8 py-4 rounded-xl cursor-pointer gap-2 justify-around bg-primary">
								<img src={Polygon} width={16} height={16} />
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
						<img src={HeroSlider3} alt="Hero Kid" width={"400px"} />
					</div>
				</div>
			</Carousel>
		</div>
	);
};

export default HeroSection;
