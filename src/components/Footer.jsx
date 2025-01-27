import { Facebook, Linkedin, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-emerald-700 text-white">
            <div className="container mx-auto px-4 py-12 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Description Section */}
                    <div className="space-y-4">
                        <p className="text-sm leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut et dolore
                            magna aliqua.
                        </p>
                    </div>

                    {/* Explore Links */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-lg">Explore Links</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                                <span className="w-1 h-1 bg-white rounded-full"></span>
                                <a href="#" className="text-sm hover:underline">
                                    About Company
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1 h-1 bg-white rounded-full"></span>
                                <a href="#" className="text-sm hover:underline">
                                    Latest Projects
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1 h-1 bg-white rounded-full"></span>
                                <a href="#" className="text-sm hover:underline">
                                    Latest Blog
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1 h-1 bg-white rounded-full"></span>
                                <a href="#" className="text-sm hover:underline">
                                    Our Testimonials
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1 h-1 bg-white rounded-full"></span>
                                <a href="#" className="text-sm hover:underline">
                                    Our Mission
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-lg">SUPPORT US</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                                <span className="w-1 h-1 bg-white rounded-full"></span>
                                <a href="#" className="text-sm hover:underline">
                                    About
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1 h-1 bg-white rounded-full"></span>
                                <a href="#" className="text-sm hover:underline">
                                    How it Works
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1 h-1 bg-white rounded-full"></span>
                                <a href="#" className="text-sm hover:underline">
                                    Knowledge Hub
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1 h-1 bg-white rounded-full"></span>
                                <a href="#" className="text-sm hover:underline">
                                    Success Stories
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1 h-1 bg-white rounded-full"></span>
                                <a href="#" className="text-sm hover:underline">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Get in Touch */}
                    <div className="space-y-6">
                        <h3 className="font-semibold text-lg">GET IN TOUCH</h3>
                        <div className="flex items-center gap-2">
                            <input
                                type="email"
                                placeholder="Enter Your Email..."
                                className="bg-transparent border-white placeholder:text-white/70 px-3 py-1 outline-none w-full rounded-md"
                            />
                            <button className="bg-white text-emerald-700 px-4 py-2 rounded-md">
                                Submit
                            </button>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4" />
                                <span className="text-sm">donation@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="w-4 h-4" />
                                <span className="text-sm">(+88) 111-222-333</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                <span className="text-sm">Tropical Cyclone, Volcano</span>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <a href="#" className="hover:opacity-80">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="hover:opacity-80">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="hover:opacity-80">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="hover:opacity-80">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="hover:opacity-80">
                                <Youtube className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-white/10">
                <div className="container mx-auto px-4 py-4">
                    <p className="text-sm text-center">Copyright@charityed 2024 All right Received</p>
                </div>
            </div>
        </footer>
    )
}

