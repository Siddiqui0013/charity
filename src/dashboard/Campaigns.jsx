import { useState } from "react";
import CampaignModal from "./modals/CampaignModal";

const Campaigns = () => {

    const [data, setData] = useState([
        {
            id: 1,
            image: "https://placehold.co/600x400",
            title: "New School Teachers",
            description:
                "Welcoming new school teachers to inspire and educate, shaping a brighter future for students together.",
            raisedAmount: 9600,
            goalAmount: 12000,
        },
        {
            id: 2,
            image: "https://placehold.co/600x400",
            title: "New School Teachers campaign 2",
            description:
                "Welcoming new school teachers to inspire and educate, shaping a brighter future for students together.",
            raisedAmount: 9600,
            goalAmount: 12000,
        },
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCampaign, setSelectedCampaign] = useState(null);
    const [isEditMode, setIsEditMode] = useState(false);
    const handleDelete = (id) => {
        setData((prevData) => prevData.filter((campaign) => campaign.id !== id));
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
    };

    const handleSave = (updatedCampaign) => {
        console.log("Updated campaign:", updatedCampaign);
        setIsModalOpen(false);
    };

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
                {data.map((campaign) => (
                    <div
                        key={campaign.id}
                        className="relative max-w-xl bg-white rounded-3xl overflow-hidden shadow hover:shadow-xl transition-shadow"
                    >
                        <div className="w-full h-64 bg-gray-200">
                            <img
                                src={campaign.image || "/placeholder.svg"}
                                alt={campaign.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="sm:p-6 p-4 space-y-4">
                            <div className="space-y-3">
                                <h2 className="lg:text-2xl text-xl font-bold text-gray-800">
                                    {campaign.title}
                                </h2>
                                <p className="text-gray-400 text-base">
                                    {campaign.description}
                                </p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">
                                    <strong>Raised:</strong> ${campaign.raisedAmount}
                                </p>
                                <p className="text-sm text-gray-600">
                                    <strong>Goal:</strong> ${campaign.goalAmount}
                                </p>
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 p-3 space-x-2 group-hover:flex">
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
            />
        </div>
    );
};

export default Campaigns;