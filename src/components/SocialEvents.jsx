import React, { useState } from 'react';
import EventCard from './ui/EventCard';

const SocialEvents = () => {

    const allEvents = [
        {
            id: 1,
            title: 'Global Cause Fundraising Innovation',
            date: '30 Jan 2024',
            comments: 10,
            author: 'Dianne Russell',
            image: '/api/placeholder/400/200'
        },
        {
            id: 2,
            title: 'Innovative Fundraising For A worldwide',
            date: '30 Jan 2024',
            comments: 10,
            author: 'Albert Flores',
            image: '/api/placeholder/400/200'
        },
        {
            id: 3,
            title: 'Worldwide Cause Innovates Fundraising',
            date: '30 Jan 2024',
            comments: 10,
            author: 'Jane Cooper',
            image: '/api/placeholder/400/200'
        },
        // Add more events for next slides
        {
            id: 4,
            title: 'Community Support Initiative',
            date: '31 Jan 2024',
            comments: 8,
            author: 'Robert Johnson',
            image: '/api/placeholder/400/200'
        },
        {
            id: 5,
            title: 'Global Health Campaign',
            date: '31 Jan 2024',
            comments: 12,
            author: 'Sarah Smith',
            image: '/api/placeholder/400/200'
        },
        {
            id: 6,
            title: 'Education For All Movement',
            date: '31 Jan 2024',
            comments: 15,
            author: 'Michael Brown',
            image: '/api/placeholder/400/200'
        }
    ];

    const [currentPage, setCurrentPage] = useState(0);
    const eventsPerPage = 3;
    const totalPages = Math.ceil(allEvents.length / eventsPerPage);

    const currentEvents = allEvents.slice(
        currentPage * eventsPerPage,
        (currentPage + 1) * eventsPerPage
    );

    const handlePrev = () => {
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    };

    const handleNext = () => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <p className="text-sm text-green-600 uppercase mb-1">
                        UPCOMING ACTIVITIES OR FUNCTIONS
                    </p>
                    <h2 className="text-3xl font-bold">Trending Social Events</h2>
                </div>

                <div className="flex items-center gap-6">
                    <div className="flex gap-2">
                        <button
                            onClick={handlePrev}
                            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <div className="flex gap-1 items-center">
                            {[...Array(totalPages)].map((_, index) => (
                                <div
                                    key={index}
                                    className={`w-2 h-2 rounded-full transition-colors ${currentPage === index ? 'bg-green-600' : 'bg-gray-300'
                                        }`}
                                />
                            ))}
                        </div>
                        <button
                            onClick={handleNext}
                            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className="space-y-6 transition-all duration-300">
                {currentEvents.map((event) => (
                    <EventCard key={event.id} event={event} />
                ))}
            </div>
        </div>
    );
};

export default SocialEvents;