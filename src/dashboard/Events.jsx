import { useState, useEffect } from "react";
import { Calendar } from "lucide-react";
import axiosInstance from "../api/axios";
import { useToast } from "../hooks/useToast";
import EventModal from "./modals/EventModal";
import DeleteModal from "./modals/DeleteModal";

const Events = () => {
    const [data, setData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [isEditMode, setIsEditMode] = useState(false);
    const [loading, setLoading] = useState(true);
    const [apiLoader, setApiLoader] = useState(false);
    const toast = useToast();

    const fetchEvents = async () => {
        try {
            setLoading(true);
            const response = await axiosInstance.get("/social-events");
            setData(response.data.socialEvents || []);
        } catch (error) {
            console.error("Error fetching Events:", error);
            toast("Failed to fetch Events", "error");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const handleDeleteModalOpen = (event) => {
        setSelectedEvent(event);
        setIsDeleteModalOpen(true);
    };

    const handleDeleteModalClose = () => {
        setSelectedEvent(null);
        setIsDeleteModalOpen(false);
    };

    const handleDelete = async () => {
        try {
            setApiLoader(true);
            await axiosInstance.delete(`/social-events/${selectedEvent._id}`);
            setData((prevData) => prevData.filter((event) => event._id !== selectedEvent._id));
            toast("Event deleted successfully", "success");
        } catch (error) {
            console.error("Error deleting Event:", error);
            toast("Failed to delete Event", "error");
        } finally {
            setApiLoader(false);
            handleDeleteModalClose();
        }
    };

    const handleEdit = (event) => {
        setSelectedEvent(event);
        setIsEditMode(true);
        setIsModalOpen(true);
    };

    const handleAdd = () => {
        setSelectedEvent(null);
        setIsEditMode(false);
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        setSelectedEvent(null);
        setIsEditMode(false);
    };

    const handleSave = async (eventData) => {
        try {
            setApiLoader(true);
            console.log(eventData);

            if (isEditMode) {
                const response = await axiosInstance.put(`/social-events/${eventData._id}`, eventData);
                setData(prevData =>
                    prevData.map(item =>
                        item._id === eventData._id ? response.data.updatedEvent : item
                    )
                );
                toast("Event updated successfully", "success");
            } else {
                const response = await axiosInstance.post("/social-events", eventData);
                setData(prevData => [...prevData, response.data.socialEvent]);
                toast("Event created successfully", "success");
            }
            handleModalClose();
        } catch (error) {
            console.error("Error saving Event:", error);
            toast("Failed to save Event", "error");
        } finally {
            setApiLoader(false);
        }
    };

    if (loading) {
        return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 sm:gap-5">
                    {Array.from({ length: 8 }).map((index) => (
                        <div key={index} className="animate-pulse">
                            <div className="h-32 bg-gray-200 rounded-t-3xl"></div>
                            <div className="p-4 space-y-4 bg-white rounded-b-3xl">
                                <div className="flex gap-2">
                                    <div className="h-5 w-5 bg-gray-200 rounded"></div>
                                    <div className="h-5 bg-gray-200 rounded w-24"></div>
                                </div>
                                <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center mb-4 p-2">
                <h1 className="text-3xl font-bold text-gray-800">Events</h1>
                <button
                    onClick={handleAdd}
                    className="bg-primary hover:bg-[#014e3d] text-white px-4 py-2 rounded-md"
                >
                    Add Event
                </button>
            </div>
            <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 sm:gap-5">
                {data?.map((event) => (
                    <div
                        key={event._id}
                        className="relative max-w-xl bg-white sm:rounded-3xl rounded-xl overflow-hidden shadow hover:shadow-xl transition-shadow"
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
                                    <p className="text-gray-600">{new Date(event.date).toLocaleDateString()}</p>
                                </div>
                                <h2 className="lg:text-lg font-semibold text-gray-800">
                                    {event.title}
                                </h2>
                                <p className="sm:text-base text-sm text-gray-600">{event.author}</p>
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 p-3 space-x-2">
                            <button
                                onClick={() => handleEdit(event)}
                                className="px-4 py-2 text-white rounded-xl bg-primary"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDeleteModalOpen(event)}
                                className="px-4 py-2 bg-red-500 text-white rounded-xl"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <EventModal
                isOpen={isModalOpen}
                onClose={handleModalClose}
                eventData={selectedEvent}
                onSave={handleSave}
                isEditMode={isEditMode}
                isLoading={apiLoader}
            />

            <DeleteModal
                isOpen={isDeleteModalOpen}
                onClose={handleDeleteModalClose}
                onDelete={handleDelete}
                isLoading={apiLoader}
            />
        </div>
    );
};

export default Events;