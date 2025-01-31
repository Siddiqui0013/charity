
import { useState, useEffect } from "react";
import TeamModal from "./modals/TeamModal";
import axiosInstance from "../api/axios";
import { useToast } from "../hooks/useToast";
import DeleteModal from "./modals/DeleteModal";

const TeamMembers = () => {
    const [data, setData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);
    const [isEditMode, setIsEditMode] = useState(false);
    const [loading, setLoading] = useState(true);
    const [apiLoader, setApiLoader] = useState(false);
    const toast = useToast();

    useEffect(() => {
        const fetchTeamMembers = async () => {
            try {
                setLoading(true);
                const response = await axiosInstance.get("/team-members");
                setData(response.data.data || []);
                console.log(response.data);
                
            } catch (error) {
                console.error("Error fetching team members:", error);
                toast("Failed to fetch team members", "error");
            } finally {
                setLoading(false);
            }
        };
        fetchTeamMembers();
    }, []);


    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const handleDeleteModalOpen = (member) => {
        setSelectedMember(member);
        setIsDeleteModalOpen(true);
    }

    const handleDeleteModalClose = () => {
        setSelectedMember(null);
        setIsDeleteModalOpen(false);
    }

    const handleDelete = async () => {
        try {
            setApiLoader(true);
            await axiosInstance.delete(`/team-member/${selectedMember._id}`);
            setData((prevData) => prevData.filter((member) => member._id !== selectedMember._id));
            toast("Team member deleted successfully", "success");
        } catch (error) {
            console.error("Error deleting team member:", error);
            toast("Failed to delete team member", "error");
        } finally {
            setApiLoader(false);
            handleDeleteModalClose();
        }
    };

    const handleEdit = (member) => {
        setSelectedMember(member);
        setIsEditMode(true);
        setIsModalOpen(true);
    };

    const handleAdd = () => {
        setSelectedMember(null);
        setIsEditMode(false);
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        setSelectedMember(null);
        setIsEditMode(false);
    };

    const handleSave = async (memberData) => {
        try {
            setApiLoader(true);
            if (isEditMode) {
                const response = await axiosInstance.put(`/team-member/${memberData._id}`, memberData);
                setData(prevData =>
                    prevData.map(item =>
                        item._id === memberData._id ? response.data.data : item
                    )
                );
                toast("Team member updated successfully", "success");
            } else {
                const response = await axiosInstance.post("/team-member", memberData);
                setData(prevData => [...prevData, response.data.data]);
                toast("Team member added successfully", "success");
            }
            handleModalClose();
        } catch (error) {
            console.error("Error saving team member:", error);
            toast("Failed to save team member", "error");
        } finally {
            setApiLoader(false);
        }
    };

    if (loading) {
        return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5">
                    {Array.from({ length: 8 }).map((_, index) => (
                        <div key={index} className="animate-pulse">
                            <div className="aspect-square bg-gray-200 rounded-full"></div>
                            <div className="p-4 space-y-4">
                                <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
                                <div className="h-3 bg-gray-200 rounded w-1/2 mx-auto"></div>
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
                <h1 className="text-3xl font-bold text-gray-800">Team Members</h1>
                <button
                    onClick={handleAdd}
                    className="px-4 py-2 bg-primary hover:bg-[#014e3d] text-white rounded-xl"
                >
                    Add Member
                </button>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 sm:gap-5">
                {data.map((member) => (
                    <div
                        key={member._id}
                        className="relative bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition-shadow py-2"
                    >
                        <div className="aspect-square w-full bg-gray-200 mb-4">
                            <img
                                src={member.image? member.image : "/placeholder.svg"}
                                alt={member.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="text-center">
                            <h2 className="text-xl font-semibold text-gray-800">
                                {member.name}
                            </h2>
                            <p className="text-gray-600 text-sm mt-1">
                                {member.role}
                            </p>
                        </div>
                        <div className="absolute top-2 right-2 space-x-2">
                            <button
                                onClick={() => handleEdit(member)}
                                className="px-3 text-sm py-1 text-white rounded-md bg-primary"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDeleteModalOpen(member)}
                                className="px-3 text-sm py-1 bg-red-500 text-white rounded-md"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <TeamModal
                isOpen={isModalOpen}
                onClose={handleModalClose}
                memberData={selectedMember}
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

export default TeamMembers;