import { useState, useEffect } from "react";
import VolunteerModal from "./modals/VolunteersModal";
import axiosInstance from "../api/axios";
import { useToast } from "../hooks/useToast";
import DeleteModal from "./modals/DeleteModal";

const Volunteers = () => {
    const [data, setData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedVolunteer, setSelectedVolunteer] = useState(null);
    const [isEditMode, setIsEditMode] = useState(false);
    const [loading, setLoading] = useState(true);
    const [apiLoader, setApiLoader] = useState(false);
    const toast = useToast();

    useEffect(() => {
        const fetchVolunteers = async () => {
            try {
                setLoading(true);
                const response = await axiosInstance.get("/volunteers");
                setData(response.data.data || []);
                console.log(response.data); 
            } catch (error) {
                console.error("Error fetching volunteers:", error);
                toast("Failed to fetch volunteers", "error");
            } finally {
                setLoading(false);
            }
        };
        fetchVolunteers();
    }, []);


    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const handleDeleteModalOpen = (volunteer) => {
        setSelectedVolunteer(volunteer);
        setIsDeleteModalOpen(true);
    }

    const handleDeleteModalClose = () => {
        setSelectedVolunteer(null);
        setIsDeleteModalOpen(false);
    }
    const handleDelete = async () => {
        try {
            setApiLoader(true);
            await axiosInstance.delete(`/volunteer/${selectedVolunteer._id}`);
            setData((prevData) => prevData.filter((volunteer) => volunteer._id !== selectedVolunteer._id));
            toast("Volunteer deleted successfully", "success");
        } catch (error) {
            console.error("Error deleting volunteer:", error);
            toast("Failed to delete volunteer", "error");
        } finally {
            setApiLoader(false);
            handleDeleteModalClose();
        }
    };

    const handleEdit = (volunteer) => {
        setSelectedVolunteer(volunteer);
        setIsEditMode(true);
        setIsModalOpen(true);
    };

    const handleAdd = () => {
        setSelectedVolunteer(null);
        setIsEditMode(false);
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        setSelectedVolunteer(null);
        setIsEditMode(false);
    };

    const handleSave = async (volunteerData) => {
        try {
            setApiLoader(true);
            if (isEditMode) {
                // Update existing volunteer
                const response = await axiosInstance.put(`/volunteer/${volunteerData._id}`, volunteerData);
                setData(prevData =>
                    prevData.map(item =>
                        item._id === volunteerData._id ? response.data.updatedVolunteer : item
                    )
                );
                toast("Volunteer updated successfully", "success");
            } else {
                // Add new volunteer
                const response = await axiosInstance.post("/volunteer", volunteerData);
                setData(prevData => [...prevData, response.data.volunteer]);
                toast("Volunteer added successfully", "success");
            }
            handleModalClose();
        } catch (error) {
            console.error("Error saving volunteer:", error);
            toast("Failed to save volunteer", "error");
        } finally {
            setApiLoader(false);
        }
    };

    if (loading) {
        return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 sm:gap-5">
                    {Array.from({ length: 8 }).map((index) => (
                        <div key={index} className="animate-pulse">
                            <div className="h-52 bg-gray-200 rounded-t-3xl"></div>
                            <div className="p-4 space-y-4 bg-white rounded-b-3xl">
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
        <div className="max-w-7xl mx-auto px-2 sm:px-6">
            <div className="flex justify-between items-center mb-4 p-2">
                <h1 className="text-3xl font-bold text-gray-800">Volunteers</h1>
                <button
                    onClick={handleAdd}
                    className="px-4 py-2 bg-primary hover:bg-[#014e3d] text-white rounded-xl"
                >
                    Add Volunteer
                </button>
            </div>
            <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 sm:gap-5">
                {data.map((volunteer) => (
                    <div
                        key={volunteer._id}
                        className="relative bg-white lg:rounded-3xl rounded-xl overflow-hidden shadow hover:shadow-xl transition-shadow"
                    >
                        <div className="w-full h-52 bg-gray-200">
                            <img
                                src={volunteer.image || "/placeholder.svg"}
                                alt={volunteer.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="sm:p-4 p-3">
                            <div className="space-y-3">
                                <h2 className="text-xl text-center font-semibold text-gray-800">
                                    {volunteer.title}
                                </h2>
                                <p className="text-gray-400 text-center sm:text-sm text-xs">
                                    {volunteer.description}
                                </p>
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 p-3 space-x-2">
                            <button
                                onClick={() => handleEdit(volunteer)}
                                className="px-3 text-sm py-1 text-white rounded-md bg-primary"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDeleteModalOpen(volunteer)}
                                className="px-3 text-sm py-1 bg-red-500 text-white rounded-md"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <VolunteerModal
                isOpen={isModalOpen}
                onClose={handleModalClose}
                volunteerData={selectedVolunteer}
                onSave={handleSave}
                isEditMode={isEditMode}
                isLoading={apiLoader}
            />

            <DeleteModal
                isOpen={isDeleteModalOpen}
                onClose={handleDeleteModalClose}
                isLoading={apiLoader}
                onDelete={handleDelete}
            />
        </div>
    );
};

export default Volunteers;