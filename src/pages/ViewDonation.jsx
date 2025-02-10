import { Download } from "lucide-react"
import { useState, useEffect } from "react"
import axiosInstance from "../api/axios"

export default function ViewDonation() {

    const [donation, setDonation] = useState(null)
    const quickAmounts = [1000, 2000, 3000, 4000, 5000]
    const donationId = window.location.pathname.split("/")[2]

    useEffect(() => {
        const fetchDonation = async () => {
            try {
                const response = await axiosInstance.get(`/donation/${donationId}`)
                setDonation(response.data.data)
                console.log(response.data.data);
            } catch (error) {
                console.log(error)
            }
        }
        fetchDonation()
        }, [ donationId])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="sm:p-4 p-3 md:p-6 max-w-6xl mx-auto">
            
            <div className="w-full h-[400px] rounded-3xl overflow-hidden mb-8">
                <img src={donation?.picture} alt={donation?.title} className="object-cover w-full" />
            </div>

            <div className="mb-6">
                <h1 className="text-3xl font-bold">{donation?.title}</h1>
            </div>

            <p className="text-gray-800 mb-8">{donation?.description}</p>

            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Target</h2>
                <div className="bg-slate-100 p-4 rounded-2xl flex items-center gap-6">
                    <div className="relative w-16 h-16">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                            <circle cx="18" cy="18" r="16" fill="none" stroke="#333" strokeWidth="4" />
                            <circle
                                cx="18"
                                cy="18"
                                r="16"
                                fill="none"
                                stroke="#ffd249"
                                strokeWidth="4"
                                strokeDasharray={`${(75 * 100) / 100}, 100`}
                            />
                        </svg>
                        <span className="absolute inset-0 flex items-center justify-center text-sm font-medium">75%</span>
                    </div>
                    <div className="flex gap-4 text-sm">
                        <div>
                            <div className="text-gray-500">Goal</div>
                            <div className="font-medium">{donation?.goal}</div>
                        </div>
                        <div>
                            <div className="text-gray-500">Raised</div>
                            <div className="font-medium">{donation?.reached}</div>
                        </div>
                        <div>
                            <div className="text-gray-500">To Go</div>
                            <div className="font-medium">{((donation?.goal) - (donation?.reached))}</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Payment Method */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Select Payment Method</h2>
                <div className="flex gap-4 mb-6">
                    <button className="bg-[#01705c] text-white px-6 py-3 rounded-lg">Net Banking</button>
                    <button className="bg-white/10 px-6 py-3 rounded-lg">Credit & Debits</button>
                    <button className="bg-white/10 px-6 py-3 rounded-lg">PayPal</button>
                </div>
            </div>

            {/* Form */}
            <form className="space-y-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm text-gray-600 mb-2">Full Name*</label>
                        <input
                            type="text"
                            placeholder="Kathryn Murphy"
                            className="w-full bg-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#01705c]"
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-gray-600 mb-2">Email Address*</label>
                        <input
                            type="email"
                            placeholder="jessica.hanson@example.com"
                            className="w-full bg-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#01705c]"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm text-gray-600 mb-2">Address*</label>
                    <input
                        type="text"
                        placeholder="1351 Ranchview Dr, Richardson, California 62639"
                        className="w-full bg-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#01705c]"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                        <label className="block text-sm text-gray-600 mb-2">Post Code*</label>
                        <input
                            type="text"
                            placeholder="1025 LM Amsterdam"
                            className="w-full bg-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#01705c]"
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-gray-600 mb-2">City*</label>
                        <input
                            type="text"
                            placeholder="Europe"
                            className="w-full bg-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#01705c]"
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-gray-600 mb-2">House No / Area near*</label>
                        <input
                            type="text"
                            placeholder="B-550"
                            className="w-full bg-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#01705c]"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm text-gray-600 mb-2">Enter Amount</label>
                    <input
                        type="number"
                        placeholder="$680.00"
                        className="w-full bg-white/10 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-[#01705c]"
                    />
                    <div className="flex flex-wrap gap-4">
                        {quickAmounts.map((amount) => (
                            <button
                                key={amount}
                                type="button"
                                className="bg-slate-50 border border-gray-200 px-4 py-2 rounded-lg hover:bg-[#01705c] hover:text-white transition-colors"
                            >
                                ${amount}.00
                            </button>
                        ))}
                        <button type="button" className="bg-[#01705c] text-white px-4 py-2 rounded-lg">
                            Custom Amount
                        </button>
                    </div>
                </div>

                <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded text-[#01705c]" />
                    <span className="text-sm text-gray-600">Dedicate My Donation In Honor Or In Memory Of Someone</span>
                </label>

                <div className="flex gap-4">
                    <button type="submit" className="bg-[#01705c] text-white px-8 py-3 rounded-lg hover:bg-[#01705c]/90 transition-colors">
                        Donate Now
                    </button>
                    <button
                        type="button"
                        className="flex items-center gap-2 bg-slate-100 px-8 py-3 rounded-lg hover:bg-slate-200 transition-colors"
                    >
                        <Download className="w-5 h-5" />
                        Download Receipt
                    </button>
                </div>
            </form>

            {/* Mission Section */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Our Mission & Objective</h2>
                <div className="space-y-4 text-gray-600">
                    <p>
                        Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                    </p>
                    <p>
                        Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                    </p>
                    <p>
                        Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text.
                    </p>
                </div>
            </div>

        </div>
    )
}

