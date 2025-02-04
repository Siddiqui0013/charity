/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import { Loader } from "lucide-react";

const CampaignModal = ({ isOpen, onClose, campaignData, onSave, isEditMode, isLoading }) => {
    const [formData, setFormData] = useState({
        _id: "",
        title: "",
        description: "",
        goal: "",
        picture: null
    });
    const [previewUrl, setPreviewUrl] = useState("");

    useEffect(() => {
        if (campaignData) {
            setFormData({
                ...campaignData,
                title: campaignData.title || "",
                description: campaignData.description || "",
                goal: campaignData.goal || "",
                picture: null
            });
            setPreviewUrl(campaignData.picture || "");
        }
    }, [campaignData]);

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;

        if (type === "file") {
            const file = files[0];
            if (file) {
                setFormData(prev => ({
                    ...prev,
                    picture: file
                }));
                setPreviewUrl(URL.createObjectURL(file));
            }
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSave = () => {
        const form = new FormData();
        form.append("_id", formData._id);
        form.append("title", formData.title);
        form.append("description", formData.description);
        form.append("goal", formData.goal);

        if (formData.picture) {
            form.append("picture", formData.picture);
        }

        onSave(form);
    };

    const validateForm = () => {
        return formData.title.trim() !== "" &&
            formData.description.trim() !== "" &&
            formData.goal > 0;
    };

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white md:rounded-3xl sm:rounded-xl rounded max-w-2xl w-full sm:p-8 p-5">
                <h2 className="text-3xl font-bold mb-6">
                    {isEditMode ? "Edit Campaign" : "Add Campaign"}
                </h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Description
                        </label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows="4"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Upload Image
                        </label>
                        <div className="flex items-center justify-between">
                        <input
                            type="file"
                            name="picture"
                            accept="image/*"
                            onChange={handleChange}
                            className="w-[80%] px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {previewUrl && (
                            <div className="mt-2">
                                <img 
                                    src={previewUrl} 
                                    alt="Preview" 
                                    className="w-20 h-20 object-cover rounded-lg"
                                />
                            </div>
                        )}
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Goal Amount
                        </label>
                        <input
                            type="number"
                            name="goal"
                            value={formData.goal}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
                <div className="mt-6 flex justify-end space-x-4">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        disabled={!validateForm()}
                        className={`px-4 py-2 rounded-lg text-white transition ${validateForm()
                            ? "bg-green-500 hover:bg-green-600"
                            : "bg-gray-400 cursor-not-allowed"
                            }`}
                    >
                        {isLoading ? <Loader className="animate-spin" /> : isEditMode ? "Update" : "Create"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CampaignModal;