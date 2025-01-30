import { useState, useEffect } from 'react'
import DonateChart from '../components/dashbaord/DonateChart'
import axiosInstance from '../api/axios';
import Skeleton from '../components/ui/Skeleton';

const Main = () => {

    // const metrics = [
    //     {
    //         title: "Total Donations",
    //         value: "53.577,22",
    //         format: "currency",
    //     },
    //     {
    //         title: "Active Campaigns",
    //         value: 53,
    //     },
    //     {
    //         title: "New Donors This Month",
    //         value: 12,
    //     },
    //     {
    //         title: "Volunteer Registrations",
    //         value: 15,
    //     },
    // ]

    // const metrics2 = [
    //     { title: "Campaigns", value: 10 },
    //     { title: "Volunteer", value: 10 },
    //     { title: "News & Articles", value: 10 },
    //     { title: "Events", value: 10 },
    //     { title: "Team", value: 10 },
    //     { title: "Donations", value: 10 },
    // ]

    const [metrics, setMetrics] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axiosInstance.get('/count').then(({ data }) => setMetrics(data.data)).finally(() => setLoading(false));
    }, []);

    return (
        <div>

            {/* <div className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {metrics.map((metric, index) => (
                        <div key={index} className="bg-white rounded-2xl p-5 shadow border border-gray-100">
                            <h3 className="text-gray-600 text-lg mb-2 text-center">{metric.title}</h3>
                            <div className="flex flex-col gap-2 items-center justify-center">
                                <div className="text-4xl font-semibold">
                                    {metric.format === "currency" ? "$" : ""}
                                    {metric.value}
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div> */}


            <div className="grid grid-cols-2 md:grid-cols-3 p-4 lg:grid-cols-6 gap-4">
                {loading ? (
                    [1, 2, 3, 4, 5, 6].map((_, i) => (
                        <Skeleton key={i} variant="card" className="w-full h-32" />
                    ))
                ) : (
                    Object.entries(metrics).map(([key, value], index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center"
                        >
                            <h3 className="text-gray-600 text-base mb-2">{key.replace(/total/g, "")}</h3>
                            <div className="text-3xl font-bold text-gray-900">{value}</div>
                        </div>
                    ))
                )}
            </div>

            <div className="sm:p-4 p-2">
                <DonateChart />
            </div>
        </div>
    )
}

export default Main