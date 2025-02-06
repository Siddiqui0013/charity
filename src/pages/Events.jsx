import { Calendar } from "lucide-react"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axiosInstance from "../api/axios"
import Skeleton from "../components/ui/Skeleton"
import Pagination from "../components/ui/Pagination"

export default function Events() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const itemsPerPage = 12

    const handlePageChange = (newPage) => {
        setPage(newPage);
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axiosInstance.get("/social-events", {
                    params: {
                        page: page,
                        per_page: itemsPerPage
                    }
                });
                setEvents(response.data.data);
                console.log(response.data);
                setTotalPages(response.data.total_pages);
                setLoading(false)
            } catch (error) {
                console.error("Error fetching events:", error);
            }
        }
        fetchData();
        }
    , [page])    

    if (loading) {
        return (
            <div className="max-w-7xl mx-auto px-2 sm:px-6">
                <div className="flex justify-between my-5 p-2">
                    <Skeleton className="bg-black w-28 h-5" />
                    <Skeleton className="bg-black w-32 h-8" />
                </div>
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 sm:gap-5">
                    {[1, 2, 3, 4, 5, 6].map((index) => (
                        <div key={index} className="animate-pulse">
                            <div className="h-48 bg-gray-200 rounded-t-3xl"></div>
                            <div className="p-4 space-y-4 bg-white rounded-b-3xl">
                                <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                                <div className="h-4 bg-gray-200 rounded w-full"></div>
                                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="px-4 md:px-8 py-12 max-w-7xl mx-auto">


            {/* Header */}
            <div className="mb-14 flex flex-col items-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#252839] mb-4 text-center">
                    Up &apos;coming Activities Or Functions
                </h1>
                <div className="flex items-center gap-2 text-gray-400">
                    <Link to="/" className="hover:text-[#01705c]">
                        Home
                    </Link>
                    <span>/</span>
                    <span className="text-[#01705c]">Events Listing</span>
                </div>
            </div>

            {/* Events Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {events.map((event) => (
                    <div key={event._id} 
                    onClick={() => window.location.href = `/event/${event._id}`}
                    className="bg-white shadow-md hover:shadow-xl transition-shadow rounded-xl overflow-hidden">
                        {/* Event Image */}
                        <div className="relative w-full min-h-52">
                            <img src={event.picture} alt={event.title} className="object-cover mb-8" />
                        </div>

                        {/* Event Content */}
                        <div className="md:p-6 p-4">
                            {/* Meta Info */}
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-2 text-gray-500">
                                    <Calendar className="w-4 h-4" />
                                    <span className="text-sm">{(event.date).split("T")[0]}</span>
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{event.title}</h3>

                            {/* Host Info */}
                            <div className="flex items-center gap-3">
                                <div>
                                    <div className="text-gray-400 text-sm">Hosted By</div>
                                    <div className="font-medium text-gray-900">{event.author}</div>
                                </div>
                            </div>

                            {/* Action Button */}
                            {/* <button
                                className={`w-full py-3 rounded-xl text-center transition-colors ${event.isActive
                                    ? "bg-[#01705c] text-white hover:bg-[#01705c]/90"
                                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                                    }`}
                            >
                                Request For Join
                            </button> */}
                        </div>
                    </div>
                ))}
            </div>
                                    <div className="mt-7">
                                        <Pagination
                                            currentPage={page}
                                            totalPages={totalPages}
                                            onPageChange={handlePageChange}
                                        />
                                    </div>
        </div>
    )
}


