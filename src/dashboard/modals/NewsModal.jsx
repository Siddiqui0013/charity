/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";

const NewsModal = ({ isOpen, onClose, newsData, onSave, isEditing }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [writerName, setWriterName] = useState("");

    useEffect(() => {
        if (isEditing && newsData) {
            setTitle(newsData.title);
            setDescription(newsData.description);
            setWriterName(newsData.writerName);
        } else {
            setTitle("");
            setDescription("");
            setWriterName("");
        }
    }, [isEditing, newsData]);

    const handleSave = () => {
        const news = {
            ...newsData,
            title,
            description,
            writerName,
        };
        onSave(news);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-3xl max-w-2xl w-full p-8">
                <h2 className="text-3xl font-bold mb-6">
                    {isEditing ? "Edit News Article" : "Add News Article"}
                </h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Title
                        </label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Description
                        </label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows="4"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Writer Name
                        </label>
                        <input
                            type="text"
                            value={writerName}
                            onChange={(e) => setWriterName(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
                <div className="mt-6 flex justify-end space-x-4">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
                    >
                        Close
                    </button>
                    <button
                        onClick={handleSave}
                        className="px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-700 transition"
                    >
                        {isEditing ? "Update" : "Add"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewsModal;