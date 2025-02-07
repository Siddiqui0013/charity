import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axiosInstance from '../api/axios';

const ViewNews = () => {

    const { id } = useParams();
    const [news, setNews] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axiosInstance.get(`/news-article/${id}`).then((response) => {
            setNews(response.data.newsArticle);
        }).catch((error) => {
            console.error("Error fetching news article:", error);
        }).finally(() => {
            setLoading(false);
        })
    }, [id]);

    return (
        <div className='py-16 min-h-screen'>
            {loading ? (
                <div className='max-w-6xl mx-auto px-4'>
                    <div className="w-full">
                        <div className="h-96 bg-gray-300 animate-pulse md:rounded-xl rounded-lg"></div>
                    </div>
                    <h2 className="md:text-xl text-lg font-semibold mb-4 mt-7">
                        <div className="h-6 bg-gray-400 rounded animate-pulse"></div>
                    </h2>
                    <p className="md:text-base text-sm">
                        {Array(6).fill("").map((_, i) =>
                            <div key={i} className="h-4 bg-gray-300 rounded animate-pulse my-2"></div>
                        )}
                    </p>
                </div>
            ) : (
                <div className='max-w-6xl mx-auto px-4'>
                    <div className='w-full'>
                        <img src={news?.image} alt="" className='w-full max-h-96 object-cover md:rounded-xl rounded-lg' />
                    </div>
                    <h2 className='md:text-xl text-lg font-semibold mb-4 mt-7'>{news?.title}</h2>
                    <p className='md:text-base text-sm'>{news?.description}</p>
                </div>
            )}

        </div>
    )
}

export default ViewNews