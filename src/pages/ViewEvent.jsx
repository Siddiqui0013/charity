import { useState, useEffect } from "react";
import axiosInstance from "../api/axios";

export default function ViewEvent() {
  const [event, setEvent] = useState({});

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axiosInstance.get(`/social-event/${window.location.pathname.split("/")[2]}`);
        setEvent(response.data.socialEvent);
      } catch (error) {
        console.error("Error fetching event:", error);
      }
    };
    fetchEvent();
  }, []);

  return (
    <div className="min-h-screen bg-white p-4 md:p-8 max-w-7xl mx-auto">
      <div className="relative h-[400px] w-full mb-12 rounded-lg overflow-hidden bg-gray-200">
        <img
          src={event.picture}
          alt="Event"
          loading="lazy"
          className="object-cover w-full h-full"
        />
      </div>

      <h1 className="text-4xl font-bold text-[#252839] mb-6">{event.title}</h1>

      <p className="text-gray-600 mb-12">{event.description}</p>

      <h2 className="text-2xl font-bold text-[#252839] mb-4">Date</h2>
      <p className="text-gray-500 mb-12">{( event.date && (event.date).split("T")[0])}</p>

      <h2 className="text-2xl font-bold text-[#252839] mb-4">Author Name</h2>
      <p className="text-gray-900 font-medium">{event.author}</p>
    </div>
  );
}
