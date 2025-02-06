import React, { useState, useEffect, useMemo } from 'react'
import axiosInstance from '../api/axios'
import Pagination from '../components/ui/Pagination';
import { useToast } from '../hooks/useToast';
import { Link } from 'react-router-dom';

const News = () => {

    const toast = useToast();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const handlePageChange = (newPage) => {
        setPage(newPage);
        window.scrollTo(0, 0);
    }

    const fetchArticles = useMemo(() => {
        const fetch = async () => {
            try {
                setLoading(true);
                const response = await axiosInstance.get("/news-articles", {
                    params: {
                        page: page,
                        per_page: 12
                    }
                });
                setData(response.data.data || []);
                setTotalPages(response.data.total_pages);

            } catch (error) {
                console.error("Error fetching articles:", error);
                toast("Failed to fetch articles", "error");
            } finally {
                setLoading(false);
            }
        };
        return fetch;
    }, [page, setLoading, setData, setTotalPages]);

    useEffect(() => {
        fetchArticles();
    }, [fetchArticles]);

    if (loading) {
        return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
                <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                    {Array.from({ length: 8 }).map((_, index) => (
                        <div key={index} className="animate-pulse">
                            <div className="h-48 bg-gray-200 rounded-t-xl"></div>
                            <div className="p-4 space-y-4 bg-white rounded-b-xl">
                                <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                                <div className="h-4 bg-gray-200 rounded w-full"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className='py-16'>
            <h3 className='font-semibold text-3xl text-center mb-10'>Latest News & Articles</h3>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 sm:gap-5 max-w-7xl mx-auto">
                {data.map((article) => (
                    <Link
                        to={`/news/${article._id}`}
                        key={article._id}
                        className="relative bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition-shadow"
                    >
                        <div className="w-full h-48 bg-gray-200">
                            <img
                                src={article.image || "/placeholder.svg"}
                                alt={article.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-4">
                            <div className="space-y-3">
                                <h2 className="text-xl font-semibold text-gray-800 line-clamp-1">
                                    {article.title}
                                </h2>
                                <p className="text-gray-600 text-sm line-clamp-2">
                                    {article.description}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="mt-7">
                <Pagination
                    currentPage={page}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    )
}

export default News