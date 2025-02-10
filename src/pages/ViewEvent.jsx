import { useState, useEffect } from "react";
import axiosInstance from "../api/axios";

export default function ViewEvent() {
  const [event, setEvent] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get(`/social-event/${window.location.pathname.split("/")[2]}`);
        setEvent(response.data.socialEvent);
      } catch (error) {
        console.error("Error fetching event:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchEvent();
  }, []);

  return (
    <div className="min-h-screen bg-white px-3 md:px-5 md:py-8 py-5 max-w-6xl mx-auto">
      <div className="relative h-[400px] w-full mb-12 rounded-lg overflow-hidden bg-gray-200">
        <img
          src={event.picture}
          alt="Event"
          loading="lazy"
          className="object-cover w-full h-full"
        />
      </div>
      {loading ? (
        <div>
          <div className="h-6 bg-gray-200 animate-pulse mb-5 rounded"></div>
          <div>
            {Array(6).fill("").map((val, index) =>
              <div className="h-2 bg-gray-200 animate-pulse my-2 rounded-lg"></div>
            )}
          </div>
          <div className="h-4 w-12 bg-gray-200 animate-pulse mb-3 rounded mt-5"></div>
          <div className="bg-gray-200 animate-pulse h-2 w-16 rounded-lg"></div>
        </div>
      ) : (

        <div>
          <h1 className="text-2xl font-bold text-[#252839] mb-6">{event.title}</h1>

          <p className="text-gray-600 mb-12">{event.description}</p>

          <h2 className="text-lg font-bold text-[#252839] mb-4">Date</h2>
          <p className="text-gray-500 mb-12">{(event.date && (event.date).split("T")[0])}</p>

          <h2 className="text-lg font-bold text-[#252839] mb-4">Author Name</h2>
          <p className="text-gray-900 font-medium">{event.author}</p>
        </div>
      )}
    </div>
  );
}
