import { useState, useEffect } from "react";
import axiosInstance from "../api/axios";
import Skeleton from "./ui/Skeleton";

const DonationSection = () => {

  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const campaignsPerPage = isMobile ? 1 : 3;
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  useEffect(() => {

    const fetchCampaigns = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get('/donations', {
          params: {
            page: currentPage + 1,
            per_page: campaignsPerPage
          }
        })
        setData(response?.data.data || []);
        console.log(response.data);
        setTotalPages(response.data.total_pages);
      } catch (error) {
        console.error("Error fetching campaigns:", error);
        toast("Failed to fetch campaigns", "error");
      } finally {
        setLoading(false);
      }
    };
    fetchCampaigns();
  }, [currentPage]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <div>
          <p className="text-sm uppercase font-medium text-primary">DEDICATED TO ASSISTING THOSE IN NEED</p>
          <h2 className="text-3xl font-bold">
            Help & Donate Us <span className="text-primary">Now</span>
          </h2>
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 transition-all duration-300">
        {loading ? (
          [1, 2, 3].map((index) => (
            <div key={index} className="animate-pulse">
              <div className="h-60 bg-gray-200 rounded-t-3xl"></div>
              <div className="p-4 space-y-4 bg-white rounded-b-3xl">
                <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            </div>
          ))
        ) : (
          data.map((donation, idx) => (
            <div
              key={idx}
              className="flex-1 rounded-2xl my-2 shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2"
            >
              <img
                src={donation.picture}
                alt={donation.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold line-clamp-1">{donation.title}</h3>
                </div>
                <p className="text-gray-600 mb-6 text-sm line-clamp-2">
                  {donation.description}
                </p>
                <div className="space-y-4">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-primary rounded-full h-2"
                      style={{ width: `${donation.goal && ((donation.achieved || 0) / donation.goal) * 100}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">
                      Raised: ${donation.achieved || 0}
                    </span>
                    <span className="text-gray-600">
                      Goal: ${donation.goal}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      console.log("Donation number", idx + 1);
                    }}
                    className="w-full py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors"
                  >
                    Donate Now
                  </button>
                </div>
              </div>
            </div>
          )))}
      </div>
    </div>
  );
};

export default DonationSection;