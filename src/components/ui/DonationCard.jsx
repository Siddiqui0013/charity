/* eslint-disable react/prop-types */
import { Facebook, Instagram, PhoneIcon as WhatsApp, ChevronRight } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function DonationCard({ id, image, title, description, raisedAmount, goalAmount}) {
    
    const navigate = useNavigate()
    return (
        <div className="bg-white md:rounded-3xl rounded-lg overflow-hidden flex flex-col justify-around shadow hover:shadow-xl transition-shadow">

            <div className="w-full h-56 bg-gray-200">
                <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
            </div>

            <div className="sm:p-5 p-3 space-y-4">

                <div className="space-y-1">
                    <h2 className="lg:text-lg text-base font-semibold text-gray-800 line-clamp-1">{title}</h2>
                    <p className="text-gray-400 md:text-base text-sm line-clamp-2">{description}</p>
                </div>

                <div className="flex items-center gap-10">

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

                <div className="flex items-center justify-between">
                    <button
                    onClick={ () => navigate(`/donation/${id}`)}
                    className="bg-[#01705c] text-white px-6 py-2.5 rounded-xl flex items-center gap-2 hover:bg-[#01705c]/90 transition-colors">
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

