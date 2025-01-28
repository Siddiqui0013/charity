import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate()
    return (
        <div className='py-16 w-full h-full flex justify-center items-center gap-10 lg:flex-row flex-col lg:px-20 sm:px-6 px-3'>
            <div>
                <img src="/About.png" alt="" />
            </div>
            <div className='flex flex-col'>
                <h4 className='text-primary font-medium uppercase mb-1'>About Us</h4>
                <h2 className='uppercase font-semibold sm:text-3xl text-2xl mb-3'>
                    Supporting individuals facing challenges <span className='text-primary'>globally</span>
                </h2>
                <p className='mb-3'>Dedicated to uplifting lives globally, we provide aid to individuals navigating diverse challenges. Our mission is to empower, inspire resilience, and foster positive change, creating a brighter future for communities worldwide.</p>
                <p>
                    Globally dedicated to uplifting lives, we empower individuals, inspire resilience, and foster positive change for a brighter future in communities worldwide.
                </p>
                <div className="flex md:flex-row flex-col md:justify-between md:items-center my-6 gap-2">
                    <div className='flex items-center gap-3'>
                        <div className="rounded-full bg-slate-200 p-3 whitespace-nowrap">
                            <img src="/Donation.png" className='w-9 h-9' alt="" />
                        </div>
                        <div>
                            <h3 className='font-semibold'>Donation</h3>
                            <p>Support change Donate for a better world today.</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <div className="rounded-full bg-slate-200 p-3 whitespace-nowrap">
                            <img src="/Volunteer.png" className='w-9 h-9' alt="" />
                        </div>
                        <div>
                            <h3 className='font-semibold'>Volunteer</h3>
                            <p>Join us. Volunteer for positive community impact now.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <button 
                    onClick={() => navigate('/about')}
                    className='bg-primary text-white px-4 py-2 rounded-md flex items-center gap-2 font-medium whitespace-nowrap mt-5'>
                        Read More
                        
                        <ArrowRight size={17} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default About