import { Calendar, MessageCircle } from "lucide-react"
import { Link } from "react-router-dom"

export default function Events() {
    const events = [
        {
            id: 1,
            date: "30 Jan 2024",
            comments: 10,
            title: "Heritage Remembrance Day Luncheon Event",
            host: {
                name: "Dianne Russell",
                image: "https://via.placeholder.com/40x40?text=Dianne+Russell",
            },
            image: "https://via.placeholder.com/300x400?text=Heritage+Remembrance+Day+Luncheon+Event",
            isActive: true,
        },
        {
            id: 2,
            date: "30 Jan 2024",
            comments: 10,
            title: "Innovative Fundraising For A worldwide Cause",
            host: {
                name: "Albert Flores",
                image: "https://via.placeholder.com/40x40?text=Albert+Flores",
            },
            image: "https://via.placeholder.com/300x400?text=Innovative+Fundraising+For+A+worldwide+Cause",
        },
        {
            id: 3,
            date: "30 Jan 2024",
            comments: 10,
            title: "Innovative Fundraising For A worldwide Cause",
            host: {
                name: "Jane Cooper",
                image: "https://via.placeholder.com/40x40?text=Jane+Cooper",
            },
            image: "https://via.placeholder.com/300x400?text=Innovative+Fundraising+For+A+worldwide+Cause",
        },
    ]

    return (
        <div className="px-4 md:px-8 py-12 max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-14 flex flex-col items-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#252839] mb-4 text-center">
                    Up 'coming Activities Or Functions
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {events.map((event) => (
                    <div key={event.id} className="bg-white shadow-md hover:shadow-xl transition-shadow rounded-xl overflow-hidden">
                        {/* Event Image */}
                        <div className="relative h-64 w-full">
                            <img src={event.image} alt={event.title} fill className="object-cover" />
                        </div>

                        {/* Event Content */}
                        <div className="md:p-6 p-4">
                            {/* Meta Info */}
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-2 text-gray-500">
                                    <Calendar className="w-4 h-4" />
                                    <span className="text-sm">{event.date}</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-500">
                                    <MessageCircle className="w-4 h-4" />
                                    <span className="text-sm">Comment ({event.comments})</span>
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{event.title}</h3>

                            {/* Host Info */}
                            <div className="flex items-center gap-3 mb-6">
                                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                                    <img
                                        src={event.host.image}
                                        alt={event.host.name}

                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <div className="text-gray-400 text-sm">Hosted By</div>
                                    <div className="font-medium text-gray-900">{event.host.name}</div>
                                </div>
                            </div>

                            {/* Action Button */}
                            <button
                                className={`w-full py-3 rounded-xl text-center transition-colors ${event.isActive
                                    ? "bg-[#01705c] text-white hover:bg-[#01705c]/90"
                                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                                    }`}
                            >
                                Request For Join
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}


