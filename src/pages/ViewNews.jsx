import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axiosInstance from '../api/axios';

const ViewNews = () => {

    const { id } = useParams();
    const [news, setNews] = useState({});

    useEffect(() => {
        axiosInstance.get(`/news-article/${id}`).then((response) => {
            console.log(response.data);

            setNews(response.data.newsArticle);
        }).catch((error) => {
            console.error("Error fetching news article:", error);
        });
    }, [id]);

    return (
        <div className='py-16 min-h-screen'>
            <div className='max-w-7xl mx-auto px-4'>
                <div className='w-full'>
                    <img src={news?.image} alt="" className='w-full max-h-80 object-cover' />
                </div>
                <h2 className='md:text-xl text-lg font-semibold mb-4 mt-7'>{news?.title}</h2>
                <p className='md:text-base text-sm'>{news?.description}</p>
            </div>
        </div>
    )
}

export default ViewNews