/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import { Loader } from "lucide-react";

const EventModal = ({ isOpen, onClose, eventData, onSave, isEditMode, isLoading }) => {
    const [formData, setFormData] = useState({
        title: "",
        picture: "",
        date : "",
        author : "", 
    });

    useEffect(() => {
        if (eventData) {
            setFormData({
                title: eventData.title || "",
                picture: eventData.picture || "",
                date : eventData.date || "",
                author : eventData.author || "",
            });
        }
    }, [eventData]);

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSave = () => {
        const updatedData = {
            ...formData,
            date : formData.date,
            author : formData.author,};

        if (isEditMode && eventData) {
            updatedData.id = eventData.id;
        }

        onSave(updatedData);
    };

    const validateForm = () => {
        return formData.title.trim() !== "" &&
            formData.description.trim() !== "" &&
            formData.goal > 0;
    };

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-3xl max-w-2xl w-full p-8">
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
                            Image URL
                        </label>
                        <input
                            type="text"
                            name="picture"
                            value={formData.picture}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="https://example.com/image.jpg"
                        />
                    </div>
                    <div className="flex space-x-4">
                        <div className="w-1/2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Raised Amount
                            </label>
                            <input
                                type="number"
                                name="reached"
                                value={formData.reached}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="w-1/2">
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