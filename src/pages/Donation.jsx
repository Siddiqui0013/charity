import { useState, useEffect } from 'react'
import DonationCard from '../components/ui/DonationCard'
import Pagination from '../components/ui/Pagination'
import axiosInstance from '../api/axios'
import Skeleton from '../components/ui/Skeleton'

const Donation = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = 10

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    useEffect(() => {
        fetchDonations()
    }, [])

    const fetchDonations = async () => {
        try {
            const response = await axiosInstance.get('/donations')
            setData(response.data.data)
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className='py-14 max-w-7xl mx-auto px-4 sm:px-6'>
            <h1 className='mb-7 font-semibold md:text-4xl text-3xl text-center'>Donation Listing</h1>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 sm:gap-6">
                {loading ? (
                    Array.from({ length: 6 }).map((_, index) =>
                        <Skeleton key={index} className='h-64 w-full' variant='card' />
                    )
                ) : (
                    data.map((donation, index) => (
                        <DonationCard key={index} image={donation.picture} title={donation.title} description={donation.description} raisedAmount={donation.reached} goalAmount={donation.goal} progress={donation.goal ? (donation.reached / donation.goal) * 100 : 0} />
                    ))
                )}
            </div>
            <div className='p-4 mt-6'>
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
            </div>
        </div>
    )
}

export default Donation