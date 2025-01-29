import DonateChart from '../components/dashbaord/DonateChart'

const Main = () => {
    const metrics = [
        {
            title: "Total Donations",
            value: "53.577,22",
            change: 30,
            format: "currency",
        },
        {
            title: "Active Campaigns",
            value: 53,
            change: -10,
        },
        {
            title: "New Donors This Month",
            value: 12,
            change: 30,
        },
        {
            title: "Volunteer Registrations",
            value: 15,
            change: -10,
        },
    ]
    const metrics2 = [
        { title: "Campaigns", value: 10 },
        { title: "Volunteer", value: 10 },
        { title: "News & Articles", value: 10 },
        { title: "Events", value: 10 },
        { title: "Team", value: 10 },
        { title: "Donations", value: 10 },
    ]

    return (
        <div>

            <div className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {metrics.map((metric, index) => (
                        <div key={index} className="bg-white rounded-2xl p-5 shadow border border-gray-100">
                            <h3 className="text-gray-600 text-lg mb-2 text-center">{metric.title}</h3>
                            <div className="flex flex-col gap-2 items-center justify-center">
                                <div className="text-4xl font-semibold">
                                    {metric.format === "currency" ? "$" : ""}
                                    {metric.value}
                                </div>
                                <div className="flex items-center gap-2">
                                    <span
                                        className={`px-2 py-1 rounded-full text-sm ${metric.change > 0 ? "bg-[#dcf7f4] text-[#3fb8a9]" : "bg-[#ffe5e5] text-[#f91212]"
                                            }`}
                                    >
                                        {metric.change > 0 ? "+" : ""}
                                        {metric.change}%
                                    </span>
                                    <span className="text-gray-500 text-sm">from last week</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            <div className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {metrics2.map((metric, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center"
                        >
                            <h3 className="text-gray-600 text-base mb-2">{metric.title}</h3>
                            <div className="text-3xl font-bold text-gray-900">{metric.value}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="sm:p-4 p-2">
                <DonateChart />
            </div>
        </div>
    )
}

export default Main