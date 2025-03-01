/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import { Loader } from "lucide-react";

const EventModal = ({ isOpen, onClose, eventData, onSave, isEditMode, isLoading }) => {
    const [formData, setFormData] = useState({
        _id: "",
        title: "",
        picture: "",
        date: "",
        author: "",
    });

    const [previewUrl, setPreviewUrl] = useState("");

    useEffect(() => {
        if (eventData) {
            setFormData({
                ...eventData,
                title: eventData.title || "",
                date: eventData.date || "",
                author: eventData.author || "",
                picture: null
            });
            setPreviewUrl(eventData.picture || "");
        }
    }, [eventData]);

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
        form.append("date", formData.date);
        form.append("author", formData.author);
        if (formData.picture) {
            form.append("picture", formData.picture);
        }
        onSave(form);
    };

    const validateForm = () => {
        return formData.title.trim() !== "" &&
            formData.date.trim() !== "" &&
            formData.author.trim() !== "";
    };

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-3xl max-w-2xl w-full p-8">
                <h2 className="text-3xl font-bold mb-6">
                    {isEditMode ? "Edit Event" : "Add Event"}
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
                            placeholder="Enter event title"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Date
                        </label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Author
                        </label>
                        <input
                            type="text"
                            name="author"
                            value={formData.author}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter author name"
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
                </div>
                <div className="mt-6 flex justify-end space-x-4">
                    <button
                        onClick={onClose}
                        disabled={isLoading}
                        className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        disabled={!validateForm() || isLoading}
                        className={`px-4 py-2 rounded-lg text-white transition flex items-center justify-center min-w-[100px] ${validateForm() && !isLoading
                            ? "bg-green-500 hover:bg-green-600"
                            : "bg-gray-400 cursor-not-allowed"
                            }`}
                    >
                        {isLoading ? (
                            <Loader className="animate-spin w-5 h-5" />
                        ) : isEditMode ? (
                            "Update"
                        ) : (
                            "Create"
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EventModal;