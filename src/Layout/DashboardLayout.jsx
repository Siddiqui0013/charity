import React from "react"
import { Outlet } from "react-router-dom"
import Sidebar from "../components/dashbaord/Sidebar"

const DashboardLayout = () => {
    return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar />
            <div className="flex-1">
                <div className="p-3 sm:p-4 md:p-6 pt-16 lg:pt-6">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout

