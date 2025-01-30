import { useState, useEffect } from "react";
import CampaignModal from "./modals/CampaignModal";
import axiosInstance from "../api/axios";
import { useToast } from "../hooks/useToast"; // Assuming you have the toast hook set up

const Campaigns = () => {
    const [data, setData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCampaign, setSelectedCampaign] = useState(null);
    const [isEditMode, setIsEditMode] = useState(false);
    const [loading, setLoading] = useState(true);
    const [apiLoader, setApiLoader] = useState(false);
    const toast = useToast();

    // Fetch campaigns on component mount
    useEffect(() => {
        fetchCampaigns();
    }, []);

    const fetchCampaigns = async () => {
        try {
            setLoading(true);
            const response = await fetch("https://project116-backend.vercel.app/api/donations");
            const data = await response.json();
            console.log(data);

            setData(data.data);
        } catch (error) {
            console.error("Error fetching campaigns:", error);
            toast("Failed to fetch campaigns", "error");
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axiosInstance.delete(`/donation/${id}`);
            setData((prevData) => prevData.filter((campaign) => campaign.id !== id));
            toast("Campaign deleted successfully", "success");
        } catch (error) {
            console.error("Error deleting campaign:", error);
            toast("Failed to delete campaign", "error");
        }
    };

    const handleEdit = (campaign) => {
        setSelectedCampaign(campaign);
        setIsEditMode(true);
        setIsModalOpen(true);
    };

    const handleAdd = () => {
        setSelectedCampaign(null);
        setIsEditMode(false);
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        setSelectedCampaign(null);
        setIsEditMode(false);
    };

    const handleSave = async (campaignData) => {
        try {
            setApiLoader(true);
            if (isEditMode) {
                // Update existing campaign
                const response = await axiosInstance.put(`/donation/${campaignData.id}`, campaignData);
                setData(prevData =>
                    prevData.map(item =>
                        item.id === campaignData.id ? response.data : item
                    )
                );
                toast("Campaign updated successfully", "success");
            } else {
                // Add new campaign
                try {
                    const response = await axiosInstance.post("/donation", campaignData);
                    setData(prevData => [...prevData, response.data]);
                    toast("Campaign created successfully", "success");
                } catch (error) {
                    toast("Failed to create campaign", "error");
                }
            }
            handleModalClose();
        } catch (error) {
            console.error("Error saving campaign:", error);
            toast("Failed to save campaign", "error");
        } finally {
            setApiLoader(false);
        }
    };

    if (loading) {
        return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 sm:gap-5">
                    {[1, 2, 3].map((index) => (
                        <div key={index} className="animate-pulse">
                            <div className="h-64 bg-gray-200 rounded-t-3xl"></div>
                            <div className="p-4 space-y-4 bg-white rounded-b-3xl">
                                <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                                <div className="h-4 bg-gray-200 rounded w-full"></div>
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
                <h1 className="text-3xl font-bold text-gray-800">Campaigns</h1>
                <button
                    onClick={handleAdd}
                    className="bg-primary hover:bg-[#014e3d] text-white px-4 py-2 rounded-md"
                >
                    Add Campaign
                </button>
            </div>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 sm:gap-5">
                {data?.map((campaign) => (
                    <div
                        key={campaign.id}
                        className="relative max-w-xl bg-white rounded-3xl overflow-hidden shadow hover:shadow-xl transition-shadow"
                    >
                        <div className="w-full h-48 bg-gray-200">
                            <img
                                src={campaign.picture || "/placeholder.svg"}
                                alt={campaign.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="sm:p-6 p-4 space-y-3">
                            <div className="space-y-1">
                                <h2 className="lg:text-lg font-semibold text-gray-800">
                                    {campaign.title}
                                </h2>
                                <p className="text-gray-400 text-base">
                                    {campaign.description}
                                </p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">
                                    <strong>Raised:</strong> ${campaign.reached}
                                </p>
                                <p className="text-sm text-gray-600">
                                    <strong>Goal:</strong> ${campaign.goal}
                                </p>
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 p-3 space-x-2">
                            <button
                                onClick={() => handleEdit(campaign)}
                                className="px-4 py-2 text-white rounded-xl bg-primary"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(campaign.id)}
                                className="px-4 py-2 bg-red-500 text-white rounded-xl"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <CampaignModal
                isOpen={isModalOpen}
                onClose={handleModalClose}
                campaignData={selectedCampaign}
                onSave={handleSave}
                isEditMode={isEditMode}
            />
        </div>
    );
};

export default Campaigns;