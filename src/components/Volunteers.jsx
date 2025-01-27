import React from 'react'
import { ArrowRight } from 'lucide-react'

const Volunteers = () => {
    const positions = [
        {
            title: 'Health',
            image: '/volunteers/health.jpg',
        },
        {
            title: 'Education',
            image: '/volunteers/education.jpg',
        },
        {
            title: 'Protection',
            image: '/volunteers/protection.jpg',
        },
        {
            title: 'Emergency',
            image: '/volunteers/emergency.jpg',
        }
    ];
    return (
        <div className='py-16'>
            <div className='bg-[url("/volunteerbg.png")] bg-cover bg-center bg-no-repeat xl:w-[80%] md:w-3/4 sm:w-[90%] w-[98%] mx-auto min-h-32 text-white md:p-8 p-4 lg:h-[350px] h-full rounded-3xl'>
                <div className='flex-col flex gap-4 lg:w-1/2 md:w-3/4 sm:w-4/5 w-full'>
                    <h6>Become a volunteer</h6>
                    <h2 className='sm:text-4xl text-3xl font-semibold'>Come together with us to create a brighter life and a beautiful future.</h2>
                    <button className='bg-[#FFD249] text-white px-4 py-2 rounded-md flex items-center gap-2 font-medium whitespace-nowrap w-fit mt-5'>
                        Read More
                        <ArrowRight size={17} />
                    </button>
                </div>
            </div>
            <div className="bg-[url('/volunteers/vlntbg.png')] bg-cover bg-no-repeat bg-bottom mt-9">
                <div className="max-w-6xl mx-auto px-4 py-12">
                    <h1 className="text-4xl font-bold text-center mb-4">
                        Volunteer Positions Available
                    </h1>

                    <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                        Provide FREE Services To Check Healthcare And Prescribe Basic Resources Like Food And Medical.
                        They Do Medication And Refer Patients To A Program Just As They Do Any Other Specialty And Improve Health To People Who Are Seeking Medical Care.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:px-0 px-3">
                        {positions.map((position, index) => (
                            <div key={index} className="bg-gray-100 rounded-lg overflow-hidden transition-all duration-300 hover:transform hover:scale-105 hover:bg-gray-300">
                                <img
                                    src={position.image}
                                    alt={position.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold mb-2">{position.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <button className="bg-primary text-white px-6 py-2 rounded-lg font-medium inline-flex items-center gap-2 hover:bg-emerald-700 transition-colors">
                            Read more
                            <span className="text-lg">→</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Volunteers