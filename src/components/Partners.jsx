import React from 'react'

const Partners = () => {
    return (
        <div className='py-16 max-w-6xl mx-auto'>
            <h3 className='font-semibold text-3xl text-center'>Our Partners</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-7">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((partner, index) => (
                    <div key={index} className='flex justify-center items-center'>
                        <img src={`/partners/${partner}.png`} alt={`Partner ${partner}`} className='w-36 h-36 object-contain' />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Partners