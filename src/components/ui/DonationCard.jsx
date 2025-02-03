import { Facebook, Instagram, PhoneIcon as WhatsApp, ChevronRight } from "lucide-react"

export default function DonationCard({
    image = "/placeholder.svg?height=300&width=600",
    title = "New School Teachers",
    description = "Welcoming new school teachers to inspire and educate, shaping a brighter future for students together.",
    raisedAmount = 9600,
    goalAmount = 12000,
    progress = 75,
}) {
    return (
        <div className="bg-white md:rounded-3xl rounded-lg overflow-hidden shadow hover:shadow-xl transition-shadow">
            {/* Image */}
            <div className="w-full h-56 bg-gray-200">
                <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
            </div>

            {/* Content */}
            <div className="sm:p-5 p-3 space-y-4">

                {/* Title and Description */}
                <div className="space-y-1">
                    <h2 className="lg:text-lg text-base font-semibold text-gray-800 line-clamp-2">{title}</h2>
                    <p className="text-gray-400 md:text-base text-sm line-clamp-3">{description}</p>
                </div>

                {/* Progress Section */}
                <div className="flex items-center gap-10">
                    {/* Progress Circle */}
                    <div className="relative w-20 h-20">
                        <svg className="w-full h-full" viewBox="0 0 36 36">
                            <path
                                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                                fill="none"
                                stroke="#eee"
                                strokeWidth="3"
                            />
                            <path
                                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                                fill="none"
                                stroke="#ffd249"
                                strokeWidth="3"
                                strokeDasharray={`${progress}, 100`}
                            />
                            <text x="19" y="22" className="text-[10px] font-medium" textAnchor="middle">
                                {progress}%
                            </text>
                        </svg>
                    </div>

                    {/* Amounts */}
                    <div className="flex items-center gap-3 font-semibold text-sm">
                        <div>
                            <span className="text-[#01705c]">Raised</span>
                            <div>${raisedAmount.toLocaleString()}</div>
                        </div>
                        <span className="text-gray-400">-</span>
                        <div>
                            <span className="text-[#01705c]">Goal</span>
                            <div>${goalAmount.toLocaleString()}</div>
                        </div>
                    </div>
                </div>

                {/* Donate Button and Social Links */}
                <div className="flex items-center justify-between">
                    <button className="bg-[#01705c] text-white px-6 py-2.5 rounded-xl flex items-center gap-2 hover:bg-[#01705c]/90 transition-colors">
                        Donate Now
                        <ChevronRight className="w-5 h-5" />
                    </button>

                    <div className="flex gap-4">
                        <button className="text-gray-400 hover:text-[#01705c] transition-colors">
                            <Facebook className="w-6 h-6" />
                        </button>
                        <button className="text-gray-400 hover:text-[#01705c] transition-colors">
                            <WhatsApp className="w-6 h-6" />
                        </button>
                        <button className="text-gray-400 hover:text-[#01705c] transition-colors">
                            <Instagram className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

