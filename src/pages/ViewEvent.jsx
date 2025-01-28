import { Video } from "lucide-react"

export default function ViewEvent() {

    const statistics = [
        {
            value: "20k+",
            label: "Remarkable Volunteer Efforts",
        },
        {
            value: "300+",
            label: "Effective Campaign Initiatives",
        },
        {
            value: "500+",
            label: "Regular Donor Support",
        },
    ]

    const scheduleDetails = [
        {
            label: "Start Date",
            value: "15 February 2024",
        },
        {
            label: "Time",
            value: "8:00 Am To 6:00 PM",
        },
        {
            label: "Cost",
            value: "$550.00",
        },
        {
            label: "Address",
            value: "Keas 69 Str. 15234, Calandra Athens, Greece",
        },
    ]

    const organizerDetails = [
        {
            label: "Full Name",
            value: "Dianne Russell",
        },
        {
            label: "Phone No.",
            value: "+12345 67890",
        },
        {
            label: "Email",
            value: "Testing123@Gmail.Com",
        },
    ]

    return (
        <div className="min-h-screen bg-white p-4 md:p-8 max-w-7xl mx-auto">
            {/* Hero Section */}
            <div className="grid lg:grid-cols-4 gap-8 mb-12">
                {/* Video Section */}
                <div className="lg:col-span-3 relative h-[400px] md:rounded-3xl rounded-lg overflow-hidden bg-gray-200">
                    <div className="absolute top-4 left-4 bg-black/20 p-2 rounded-full backdrop-blur-sm">
                        <Video className="w-6 h-6 text-white" />
                    </div>
                    <img
                        src="https://via.placeholder.com/600/92c952"
                        alt="Event video thumbnail"
                        loading="lazy"
                        className="object-cover"
                    />
                </div>

                {/* Statistics */}
                <div className="space-y-8">
                    {statistics.map((stat, index) => (
                        <div key={index} className="text-center p-4 bg-gray-50 rounded-xl">
                            <div className="text-[#01705c] text-4xl font-bold mb-2">{stat.value}</div>
                            <div className="text-gray-600 text-sm">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Event Title */}
            <h1 className="text-4xl font-bold text-[#252839] mb-6">Heritage Remembrance Day Luncheon Event</h1>

            {/* Description */}
            <div className="space-y-6 text-gray-600 mb-12">
                <p>
                    Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                    make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                    PageMaker including versions of Lorem Ipsum.
                </p>
                <p>
                    Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                    make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was popularized in the 1960s.
                </p>
                <p>
                    Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                    make a type specimen book.
                </p>
            </div>

            {/* Schedule Details */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold text-[#252839] mb-6">Schedule Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {scheduleDetails.map((detail, index) => (
                        <div key={index} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                            <div className="text-gray-500 text-sm mb-1">{detail.label}</div>
                            <div className="text-gray-900 font-medium">{detail.value}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Organizer Details */}
            <div>
                <h2 className="text-2xl font-bold text-[#252839] mb-6">Organizer Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {organizerDetails.map((detail, index) => (
                        <div key={index} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                            <div className="text-gray-500 text-sm mb-1">{detail.label}</div>
                            <div className="text-gray-900 font-medium">{detail.value}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

