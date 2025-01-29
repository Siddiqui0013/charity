import { Home, Flag, Heart, Newspaper, Calendar, Users, Wallet, Menu, X } from "lucide-react"
import { NavLink, useLocation } from "react-router-dom"
import { useState } from "react"

export default function Sidebar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const location = useLocation()

    const active = (href) => location.pathname === href

    const navItems = [
        {
            icon: <Home className="w-5 h-5" />,
            label: "Dashboard",
            href: "/dashboard",
        },
        {
            icon: <Flag className="w-5 h-5" />,
            label: "Campaigns",
            href: "/dashboard/campaigns",
        },
        {
            icon: <Heart className="w-5 h-5" />,
            label: "Volunteer",
            href: "/volunteer",
        },
        {
            icon: <Newspaper className="w-5 h-5" />,
            label: "News & Articles",
            href: "/news",
        },
        {
            icon: <Calendar className="w-5 h-5" />,
            label: "Events",
            href: "/events",
        },
        {
            icon: <Users className="w-5 h-5" />,
            label: "Team",
            href: "/team",
        },
        {
            icon: <Wallet className="w-5 h-5" />,
            label: "Payout",
            href: "/payout",
        },
    ]

    return (
        <>
            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md"
            >
                {!isSidebarOpen && <Menu className="w-6 h-6 text-gray-600" />}
            </button>

            {/* Overlay */}
            {isSidebarOpen && (
                <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsSidebarOpen(false)} />
            )}

            {/* Sidebar */}
            <div
                className={`fixed lg:static inset-y-0 left-0 z-40 w-64 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } min-h-screen bg-white border-r border-gray-200 px-3 py-6`}
            >
                <div className="mb-8 px-3 flex items-center justify-between">
                    <h2 className="text-gray-600 text-lg font-medium">Administrator</h2>
                    <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden p-1 hover:bg-gray-100 rounded-lg">
                        <X className="w-5 h-5 text-gray-600" />
                    </button>
                </div>

                <nav className="space-y-1">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.href}
                            to={item.href}
                            onClick={() => setIsSidebarOpen(false)}
                            className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-colors ${active(item.href) ? "bg-[#01705c] text-white" : "text-[#616161] hover:bg-gray-100"}`}
                        >
                            {item.icon}
                            <span className="font-medium">{item.label}</span>
                        </NavLink>
                    ))}
                </nav>
            </div>
        </>
    )
}


