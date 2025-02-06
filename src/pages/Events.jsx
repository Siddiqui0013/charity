import { Calendar } from "lucide-react"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axiosInstance from "../api/axios"

export default function Events() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance.get("/social-events");
                setEvents(response.data.data);
                console.log(response.data);
            } catch (error) {
                console.error("Error fetching events:", error);
            }
        }
        fetchData();
        }
    , [])    

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
                    <div key={event.id} className="bg-white shadow-md hover:shadow-xl transition-shadow rounded-xl overflow-hidden">
                        {/* Event Image */}
                        <div className="relative h-64 w-full">
                            <img src={event.picture} alt={event.title} className="object-cover" />
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
                            <div className="flex items-center gap-3 mb-6">
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
        </div>
    )
}


