import { Phone, BookText, ExternalLink, AmbulanceIcon as FirstAid } from "lucide-react"
import Testimonials from "../components/Testimonials"
import OurTeam from "../components/team/OurTeam"

export default function About() {
    return (
        <>
            <div className="w-full px-4 py-8">
                <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-center">About Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {/* Medical & Blood Card */}
                    <div className="bg-[#01705c] rounded-2xl p-6 text-center shadow-lg">
                        <div className="bg-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                            <FirstAid className="w-8 h-8 text-[#01705c]" />
                        </div>
                        <h3 className="text-white text-xl font-semibold mb-3">Medical & Blood</h3>
                        <p className="text-white/90 text-sm leading-relaxed">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry&apos;s standard dummy text ever since the
                        </p>
                    </div>

                    {/* Awareness Campaigns Card */}
                    <div className="bg-[#252839] rounded-2xl p-6 text-center shadow-lg">
                        <div className="bg-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                            <ExternalLink className="w-8 h-8 text-[#252839]" />
                        </div>
                        <h3 className="text-white text-xl font-semibold mb-3">Awareness Campaigns</h3>
                        <p className="text-white/90 text-sm leading-relaxed">
                            Physical and virtual events promoting education and prevention of GBV, suicide, and mental health stigma.
                        </p>
                    </div>

                    {/* Media Outreach Card */}
                    <div className="bg-[#9ac4f8] rounded-2xl p-6 text-center shadow-lg">
                        <div className="bg-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                            <Phone className="w-8 h-8 text-[#9ac4f8]" />
                        </div>
                        <h3 className="text-[#252839] text-xl font-semibold mb-3">Media Outreach</h3>
                        <p className="text-[#252839]/90 text-sm leading-relaxed">
                            Podcasts and digital content featuring experts and survivor stories.
                        </p>
                    </div>

                    {/* Books Card */}
                    <div className="bg-[#99edcc] rounded-2xl p-6 text-center shadow-lg">
                        <div className="bg-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                            <BookText className="w-8 h-8 text-[#99edcc]" />
                        </div>
                        <h3 className="text-[#252839] text-xl font-semibold mb-3">Books</h3>
                        <p className="text-[#252839]/90 text-sm leading-relaxed">
                            Publications by Co-Founder Leonard Akathingo addressing key societal challenges and inspiring change.
                        </p>
                    </div>
                </div>
            </div>

            <div className="px-4 py-16">
                <div className="max-w-7xl mx-auto text-center">
                    {/* Top section */}
                    <span className="text-[#01705c] text-sm font-medium mb-4 block">About US</span>

                    {/* Main heading */}
                    <h1 className="text-[#252839] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 max-w-4xl mx-auto leading-tight">
                        Global Challenges Aid And Assistance Support
                    </h1>

                    {/* Description text */}
                    <p className="text-gray-500 mb-12 max-w-5xl mx-auto leading-relaxed">
                        We provide comprehensive aid and assistance to individuals facing diverse global challenges, offering support
                        to empower resilience and foster positive change. Our mission is to stand alongside communities worldwide,
                        ensuring a brighter future for all. We offer extensive aid to those confronting diverse global challenges,
                        empowering resilience and fostering positive change. Our mission stands with communities worldwide, ensuring a
                        brighter future for all through comprehensive assistance and support.
                    </p>

                    {/* Button group */}
                    <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
                        <button className="bg-slate-100 text-black px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors">
                            About Foundation
                        </button>
                        <button className="bg-slate-100 text-black px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors">
                            Our Mission
                        </button>
                        <button className="bg-slate-100 text-black px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors">
                            Our Vision
                        </button>
                    </div>

                    {/* Additional description text */}
                    <div className="space-y-8">
                        <p className="text-gray-500 max-w-5xl mx-auto leading-relaxed">
                            We provide comprehensive aid and assistance to individuals facing diverse global challenges, offering
                            support to empower resilience and foster positive change. We offer extensive aid to those confronting
                            diverse global challenges, empowering resilience and fostering positive change.
                        </p>

                        <p className="text-gray-500 max-w-5xl mx-auto leading-relaxed">
                            We provide comprehensive aid and assistance to individuals facing diverse global challenges, offering
                            support to empower resilience and foster positive change. Our mission is to stand alongside communities
                            worldwide, ensuring a brighter future for all. We offer extensive aid to those confronting diverse global
                            challenges, empowering resilience and fostering positive change. Our mission stands with communities
                            worldwide, ensuring a brighter future for all through comprehensive assistance and support.
                        </p>
                    </div>
                </div>
            </div>

            <OurTeam />
            <Testimonials />

        </>
    )
}

