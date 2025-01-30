import { useState, useEffect } from "react";
import { Calendar } from "lucide-react";
// import CampaignModal from "./modals/CampaignModal";
import axiosInstance from "../api/axios";
import { useToast } from "../hooks/useToast"; 

const Events = () => {


    const [data, setData] = useState([
        {
            id: 1,
            title: "Event 1",
            date: "Description of Event 1",
            picture: "https://via.placeholder.com/150",
            author : "John Doe"
        }
    ]);
    // const [isModalOpen, setIsModalOpen] = useState(false);
    // const [selectedEvent, setselectedEvent] = useState(null);
    // const [isEditMode, setIsEditMode] = useState(false);
    // const [loading, setLoading] = useState(true);
    // const [apiLoader, setApiLoader] = useState(false);
    const toast = useToast();

    // useEffect(() => {
    //     const fetchEvents = async () => {
    //         try {
    //             setLoading(true);
    //             const response = axiosInstance.get("/donations");
    //             const data = await response;
    //             console.log(data);
    //             setData(data.data);
    //         } catch (error) {
    //             console.error("Error fetching Events:", error);
    //             toast("Failed to fetch Events", "error");
    //         } finally {
    //             setLoading(false);
    //         }
    //     };
    //     fetchEvents();
    // }, []);

    const handleDelete = async (id) => {
        try {
            await axiosInstance.delete(`/donation/${id}`);
            setData((prevData) => prevData.filter((event) => event.id !== id));
            toast("Event deleted successfully", "success");
        } catch (error) {
            console.error("Error deleting Event:", error);
            toast("Failed to delete Event", "error");
        }
    };

    // const handleEdit = (event) => {
    //     setselectedEvent(event);
    //     setIsEditMode(true);
    //     setIsModalOpen(true);
    // };

    // const handleAdd = () => {
    //     setselectedEvent(null);
    //     setIsEditMode(false);
    //     setIsModalOpen(true);
    // };

    // const handleModalClose = () => {
    //     setIsModalOpen(false);
    //     setselectedEvent(null);
    //     setIsEditMode(false);
    // };

    // const handleSave = async (eventData) => {
    //     try {
    //         setApiLoader(true);
    //         if (isEditMode) {
    //             const response = await axiosInstance.put(`/donation/${eventData.id}`, eventData);
    //             setData(prevData =>
    //                 prevData.map(item =>
    //                     item.id === eventData.id ? response.data : item
    //                 )
    //             );
    //             toast("Event updated successfully", "success");
    //         } else {
    //             try {
    //                 const response = await axiosInstance.post("/donation", eventData);
    //                 setData(prevData => [...prevData, response.data]);
    //                 toast("Event created successfully", "success");
    //             } catch (error) {
    //                 toast("Failed to create Event", "error");
    //                 console.log(error);
    //             }
    //         }
    //         handleModalClose();
    //     } catch (error) {
    //         console.error("Error saving Event:", error);
    //         toast("Failed to save Event", "error");
    //     } finally {
    //         setApiLoader(false);
    //     }
    // };

    // if (loading) {
    //     return (
    //         <div className="max-w-7xl mx-auto px-4 sm:px-6">
    //             <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 sm:gap-5">
    //                 {[1, 2, 3].map((index) => (
    //                     <div key={index} className="animate-pulse">
    //                         <div className="h-64 bg-gray-200 rounded-t-3xl"></div>
    //                         <div className="p-4 space-y-4 bg-white rounded-b-3xl">
    //                             <div className="h-6 bg-gray-200 rounded w-3/4"></div>
    //                             <div className="h-4 bg-gray-200 rounded w-full"></div>
    //                             <div className="h-4 bg-gray-200 rounded w-1/2"></div>
    //                         </div>
    //                     </div>
    //                 ))}
    //             </div>
    //         </div>
    //     );
    // }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center mb-4 p-2">
                <h1 className="text-3xl font-bold text-gray-800">Events</h1>
                <button
                    // onClick={handleAdd}
                    className="bg-primary hover:bg-[#014e3d] text-white px-4 py-2 rounded-md"
                >
                    Add Event
                </button>
            </div>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 sm:gap-5">
                {data?.map((event) => (
                    <div
                        key={event.id}
                        className="relative max-w-xl bg-white rounded-3xl overflow-hidden shadow hover:shadow-xl transition-shadow"
                    >
                        <div className="w-full h-48 bg-gray-200">
                            <img
                                src={event.picture || "/placeholder.svg"}
                                alt={event.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="sm:p-6 p-4 flex flex-col justify-between">
                            <div className="space-y-1">
                                <div className="flex gap-2">
                                <Calendar className="w-5 h-5" />
                                <p className=" text-gray-600">{event.date}</p>
                                </div>

                                <h2 className="lg:text-lg font-semibold text-gray-800">
                                    {event.title}
                                </h2>
                                <p>{event.author}</p>
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 p-3 space-x-2">
                            <button
                                // onClick={() => handleEdit(event)}
                                className="px-4 py-2 text-white rounded-xl bg-primary"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(event.id)}
                                className="px-4 py-2 bg-red-500 text-white rounded-xl"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* <EventModal
                isOpen={isModalOpen}
                onClose={handleModalClose}
                eventData={selectedEvent}
                onSave={handleSave}
                isEditMode={isEditMode}
            /> */}
        </div>
    );
};

export default Events;