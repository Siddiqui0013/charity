import { Home, Flag, Heart, Newspaper, Calendar, Users, Menu, BookOpen , X, LogOut, Loader } from "lucide-react"
import { NavLink, useLocation, useNavigate } from "react-router-dom"
import { useState } from "react"
import axiosInstance from "../../api/axios"
import { useToast } from "../../hooks/useToast"

export default function Sidebar() {

    const [loader, setLoader] = useState(false)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const toast = useToast()
    const location = useLocation()
    const navigate = useNavigate()

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
            href: "/dashboard/volunteer",
        },
        {
            icon: <Newspaper className="w-5 h-5" />,
            label: "News & Articles",
            href: "/dashboard/news",
        },
        {
            icon: <Calendar className="w-5 h-5" />,
            label: "Events",
            href: "/dashboard/events",
        },
        {
            icon: <BookOpen className="w-5 h-5" />,
            label: "Books",
            href: "/dashboard/books",
        },
        {
            icon: <Users className="w-5 h-5" />,
            label: "Team",
            href: "/dashboard/team",
        },
    ]

    const handleLogout = async () => {
        try {
            setLoader(true)
            await axiosInstance.post("/logout")
            localStorage.removeItem("authToken")
            toast("Logout successful", "success")
            navigate("/login")
        } catch (error) {
            toast("Failed to logout", "error")
            console.log(error)
        } finally {
            setLoader(false)
        }

    }

    return (
        <>
            <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md"
            >
                {!isSidebarOpen && <Menu className="w-6 h-6 text-gray-600" />}
            </button>

            {isSidebarOpen && (
                <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsSidebarOpen(false)} />
            )}

<div
    className={`fixed lg:fixed inset-y-0 left-0 z-40 w-64 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
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
                <button disabled={loader} className="flex items-center gap-3 px-3 py-3 rounded-lg transition-colors text-white font-medium w-full hover:bg-primary/90 bg-primary mt-8" onClick={handleLogout}>
                    {loader ? (
                        <>
                            <Loader className="w-5 h-5 animate-spin" />
                            <span>Loading...</span>
                        </>
                    ) : (
                        <>
                            <LogOut className="w-5 h-5" />
                            <span>Sign Out</span>
                        </>
                    )}
                </button>

            </div>
        </>
    )
}