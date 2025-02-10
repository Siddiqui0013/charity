import { useState, useEffect } from 'react'
import DonationCard from '../components/ui/DonationCard'
import Pagination from '../components/ui/Pagination'
import axiosInstance from '../api/axios'
import Skeleton from '../components/ui/Skeleton'

const Donation = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const itemsPerPage = 9

    useEffect(() => {
        const fetchDonations = async () => {
            setLoading(true)
            try {
                const response = await axiosInstance.get('/donations', {
                    params: {
                        page: currentPage,
                        per_page: itemsPerPage
                    }
                })
                setData(response.data.data)
                console.log(response.data);
                setTotalPages(Math.ceil(response.data.total / itemsPerPage))
            } catch (error) {
                console.error('Error fetching donations:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchDonations()
    }, [currentPage])

    const handlePageChange = (page) => {
        setCurrentPage(page)
        window.scrollTo({ top: 0, behavior: 'smooth' })
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
                        <DonationCard key={index} id={donation._id} image={donation.picture} title={donation.title} description={donation.description} raisedAmount={donation.reached} goalAmount={donation.goal} progress={donation.goal ? (donation.reached / donation.goal) * 100 : 0} />
                    ))
                )}
            </div>
            <div className='p-4 mt-6'>
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            </div>
        </div>
    )
}

export default Donation