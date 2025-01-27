import HeroSection from '../components/HeroSection'
import WhoWeAre from '../components/WhoWeAre'
import { ArrowRight } from 'lucide-react'
import About from '../components/About'
import Volunteers from '../components/Volunteers'
import SocialEvents from '../components/SocialEvents'
import OurTeam from '../components/team/OurTeam'
import DonateUs from '../components/DonateUs'
import NewsArticles from '../components/NewsArticles'

const Home = () => {
    return (
        <main>
            <HeroSection />
            <WhoWeAre />
            <div className='bg-[url("/divider.png")] bg-cover bg-no-repeat w-full min-h-20 py-10'>
                <div className='lg:w-[85%] md:w-10/12 md:px-0 sm:px-6 px-3 mx-auto h-full flex justify-between items-center text-white sm:gap-0 gap-3'>
                    <div className='flex flex-col gap-2'>
                        <h5>Join Our New Session</h5>
                        <h2 className='font-semibold text-3xl sm:block hidden'>
                            Lets Make A Difference In <br />
                            The <span className='text-[#FFD249]'>Lives Of Others</span>
                        </h2>
                        <h2 className='font-semibold sm:text-3xl text-2xl sm:hidden block'>
                            Lets Make A Difference In The <span className='text-[#FFD249]'>Lives Of Others</span>
                        </h2>
                    </div>
                    <div>
                        <button className='bg-[#FFD249] text-white px-4 py-2 rounded-md flex items-center space-x-3 font-medium whitespace-nowrap'>
                            <span>Join With Us</span>
                            <ArrowRight size={17} />
                        </button>
                    </div>
                </div>
            </div>
            <About />
            <Volunteers />
            <SocialEvents />
            <OurTeam />
            <DonateUs />
            <NewsArticles />
        </main>
    )
}

export default Home