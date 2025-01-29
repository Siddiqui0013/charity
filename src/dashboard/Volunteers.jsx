import { useState } from "react";
import VolunteerModal from "./modals/VolunteersModal";

const Volunteers = () => {

    const [data, setData] = useState([
        {
            id: 1,
            image: "https://placehold.co/600x400",
            title: "School Teacher",
        },
        {
            id: 2,
            image: "https://placehold.co/600x400",
            title: "Content Creator",
        },
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [ selectedVolunteer, setSelectedVolunteer] = useState(null);

    const handleDelete = (id) => {
        console.log(`Deleted with id: ${id}`);
    };

    const handleEdit = (campaign) => {
        setSelectedVolunteer(campaign);
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        setSelectedVolunteer(null);
    };

    const handleUpdate = () => {
        console.log("Updated data:", selectedVolunteer);
        setIsModalOpen(false);
    };

    return (
        <div className=" max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center mb-4 p-2">
                <h1 className="text-3xl font-bold text-gray-800">Volunteers</h1>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-4 py-2 bg-primary hover:bg-[#014e3d] text-white rounded-xl"
                >
                    Add Volunteer
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
                        </div>
                        <div className="absolute top-0 right-0 p-3 space-x-2  group-hover:flex">
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

            <VolunteerModal
                isOpen={isModalOpen}
                onClose={handleModalClose}
                volunteerData={selectedVolunteer}
                onUpdate={handleUpdate}
            />
        </div>
    );
};

export default Volunteers;
