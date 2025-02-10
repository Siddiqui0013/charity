import { useState, useEffect } from 'react';
import EventCard from './ui/EventCard';
import axiosInstance from '../api/axios';
import Skeleton from "./ui/Skeleton";

const SocialEvents = () => {
    const [allEvents, setAllEvents] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const eventsPerPage = 3;

    useEffect(() => {
        const fetchEvents = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axiosInstance.get('/social-events', {
                    params: {
                        page: currentPage + 1, 
                        per_page: isMobile ? 1 : eventsPerPage
                    }
                });
                setAllEvents(response.data.data || []);
                setTotalPages(response.data.total_pages);
            } catch (error) {
                console.error('Error fetching events:', error);
                setError('Failed to load events.');
            } finally {
                setLoading(false);
            }
        };
        fetchEvents();
    }, [currentPage]);

    useEffect(() => {
        const checkIsMobile = () => setIsMobile(window.innerWidth < 768);
        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);
        return () => window.removeEventListener('resize', checkIsMobile);
    }, []);

    const handlePrev = () => {
        setCurrentPage((prev) => (prev > 0 ? prev - 1 : 0));
    };

    const handleNext = () => {
        setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev));
    };

    return (
        <div className="max-w-4xl min-h-[600px] mx-auto p-6">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <p className="text-sm text-green-600 uppercase mb-1">UPCOMING ACTIVITIES OR FUNCTIONS</p>
                    <h2 className="text-3xl font-bold">Trending Social Events</h2>
                </div>
                <div className="flex items-center gap-6">
                    <button onClick={handlePrev} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <div className="flex gap-1 items-center">
                        {[...Array(totalPages)].map((_, index) => (
                            <div
                                key={index}
                                className={`w-2 h-2 rounded-full transition-colors ${currentPage === index ? 'bg-green-600' : 'bg-gray-300'}`}
                            />
                        ))}
                    </div>
                    <button onClick={handleNext} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="space-y-6 transition-all duration-300">
                {loading ? 
                    Array.from({ length: eventsPerPage }, (_, index) => <>
                    <Skeleton key={index} />
                    <Skeleton key={index + 1} />
                    <Skeleton key={index + 2} />
                    </> ) : error ? (
                    <p className="text-red-500">{error}</p>
                ) : (
                    allEvents.map((event) => <EventCard key={event.id} event={event} />)
                )}
            </div>
        </div>
    );
};

export default SocialEvents;
