import React, { useState } from 'react'
import DonationCard from '../components/ui/DonationCard'
import Pagination from '../components/ui/Pagination'

const Donation = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = 10
    return (
        <div className='py-14 max-w-7xl mx-auto px-4 sm:px-6'>
            <h1 className='mb-7 font-semibold md:text-4xl text-3xl text-center'>Donation Listing</h1>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 sm:gap-5">
                {Array.from({ length: 6 }).map((_, idx) => (
                    <DonationCard key={idx} />
                ))}
            </div>
            <div className='p-4 mt-6'>
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
            </div>
        </div>
    )
}

export default Donation