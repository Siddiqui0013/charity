"use client"

import { Line, LineChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"
import { ChevronDown } from "lucide-react"


export default function DonateChart() {
    const data = [
        { date: "1 Dec", sales: 18000, orders: 12000 },
        { date: "7 Dec", sales: 15000, orders: 12500 },
        { date: "14 Dec", sales: 17000, orders: 11000 },
        { date: "21 Dec", sales: 7000, orders: 7000 },
        { date: "28 Dec", sales: 3000, orders: 8000 },
        { date: "1 Jan", sales: 22109, orders: 11000 },
        { date: "7 Jan", sales: 28000, orders: 25000 },
    ]

    return (
        <div className="w-full bg-white rounded-2xl sm:p-5 p-3 space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold">Overall Sales</h2>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#c26bbc]" />
                            <span className="text-sm text-gray-600">Sales</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#3fb8a9]" />
                            <span className="text-sm text-gray-600">Order</span>
                        </div>
                    </div>
                    <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 flex items-center gap-2">
                        Weekly
                        <ChevronDown className="h-4 w-4" />
                    </button>
                </div>
            </div>

            <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
                        <XAxis dataKey="date" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis
                            stroke="#888888"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                            tickFormatter={(value) => `${value / 1000}k`}
                        />
                        <Tooltip
                            content={({ active, payload }) => {
                                if (active && payload && payload.length) {
                                    const date = payload[0].payload.date
                                    const salesValue = payload[0].value
                                    const ordersValue = payload[1].value
                                    const isHighlighted = date === "1 Jan"

                                    return (
                                        <div className="rounded-lg border bg-white p-2 shadow-sm">
                                            <div className="grid grid-cols-2 gap-2">
                                                <div className="flex flex-col">
                                                    <span className="text-[0.70rem] uppercase text-gray-500">{date}</span>
                                                    {isHighlighted && (
                                                        <div className="inline-flex items-center rounded-md bg-[#dcf7f4] px-2 py-1 text-xs font-medium text-[#3fb8a9]">
                                                            +20%
                                                        </div>
                                                    )}
                                                    <span className="font-bold text-black">${salesValue.toLocaleString()}</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                                return null
                            }}
                        />
                        <Line
                            type="monotone"
                            dataKey="sales"
                            stroke="#c26bbc"
                            strokeWidth={2}
                            dot={false}
                            activeDot={{ r: 4, fill: "#c26bbc" }}
                        />
                        <Line
                            type="monotone"
                            dataKey="orders"
                            stroke="#3fb8a9"
                            strokeWidth={2}
                            strokeDasharray="5 5"
                            dot={false}
                            activeDot={{ r: 4, fill: "#3fb8a9" }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

