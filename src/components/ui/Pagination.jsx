/* eslint-disable react/prop-types */
import { useEffect } from "react"
import { ArrowRight, ArrowLeft } from "lucide-react"

export default function Pagination({ currentPage = 1, totalPages = 10, onPageChange }) {

    const getPageNumbers = () => {
        const delta = 2
        const range = []
        const rangeWithDots = []

        for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
            range.push(i)
        }

        if (currentPage - delta > 2) {
            rangeWithDots.push(1, "...")
        } else {
            rangeWithDots.push(1)
        }

        rangeWithDots.push(...range)

        if (currentPage + delta < totalPages - 1) {
            rangeWithDots.push("...", totalPages)
        } else if (totalPages > 1) {
            rangeWithDots.push(totalPages)
        }

        return rangeWithDots
    }

    useEffect(() => {
        onPageChange(currentPage)
    }, [currentPage])

    useEffect(() => {
        getPageNumbers()
    }, [totalPages, currentPage])

    return (
        <nav className="flex items-center justify-center space-x-2">

            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white rounded-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50 disabled:hover:bg-white disabled:cursor-not-allowed"
            >
                <ArrowLeft className="w-5 h-5" />
                <span className="sr-only">Previous page</span>
            </button>


            <div className="flex items-center space-x-2">
                {getPageNumbers().map((pageNumber, index) => (
                    <button
                        key={index}
                        onClick={() => (typeof pageNumber === "number" ? onPageChange(pageNumber) : null)}
                        disabled={pageNumber === "..."}
                        className={`flex items-center justify-center px-3 h-8 text-sm font-medium rounded-full ${pageNumber === currentPage
                            ? "text-white bg-primary"
                            : pageNumber === "..."
                                ? "text-gray-500 cursor-default"
                                : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                            }`}
                    >
                        {pageNumber}
                    </button>
                ))}
            </div>


            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white rounded-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50 disabled:hover:bg-white disabled:cursor-not-allowed"
            >
                <ArrowRight className="w-5 h-5" />
                <span className="sr-only">Next page</span>
            </button>
        </nav>
    )
}

