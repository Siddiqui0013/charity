import { Outlet } from "react-router-dom"
import Sidebar from "../components/dashbaord/Sidebar"
import { useAuth } from "../hooks/useAuth"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const DashboardLayout = () => {
    const isAdmin = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (!isAdmin) {
            navigate('/')
        }
    }, [isAdmin, navigate])

    return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar />
            <div className="flex-1 pl-0 md:pl-64">
                <div className="p-3 sm:p-4 md:p-6 pt-16 lg:pt-6">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout

