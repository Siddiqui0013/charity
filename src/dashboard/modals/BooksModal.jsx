/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import { Loader } from "lucide-react";

const BookModal = ({ isOpen, onClose, bookData, onSave, isEditMode, isLoading }) => {
    const [formData, setFormData] = useState({
        _id: "",
        title: "",
        description: "",
        image: ""
    });

    useEffect(() => {
        if (bookData) {
            setFormData({
                ...bookData,
                title: bookData.title || "",
                description: bookData.description || "",
                image: bookData.image || ""
            });
        } else {
            setFormData({
                _id: "",
                title: "",
                description: "",
                image: ""
            });
        }
    }, [bookData]);

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
            image: formData.image.trim() || undefined  // Convert empty string to undefined
        };

        if (isEditMode && bookData) {
            updatedData._id = bookData._id;
        }

        onSave(updatedData);
    };

    const validateForm = () => {
        return formData.title.trim() !== "";
    };

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-3xl max-w-2xl w-full p-8">
                <h2 className="text-3xl font-bold mb-6">
                    {isEditMode ? "Edit Book" : "Add Book"}
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
                            placeholder="Enter book title"
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
                            placeholder="Enter book description"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Upload Image
                        </label>
                        <input
                            type="file"
                            name="picture"
                            accept="image/*"
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {previewUrl && (
                            <div className="mt-2">
                                <img
                                    src={previewUrl}
                                    alt="Preview"
                                    className="w-32 h-32 object-cover rounded-lg"
                                />
                            </div>
                        )}
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
                        className={`px-4 py-2 rounded-lg text-white transition ${validateForm() && !isLoading
                                ? "bg-green-500 hover:bg-green-600"
                                : "bg-gray-400 cursor-not-allowed"
                            }`}
                    >
                        {isLoading ? <Loader className="w-5 h-5 animate-spin" /> : isEditMode ? "Update" : "Create"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookModal;