/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const CampaignModal = ({ isOpen, onClose, campaignData, onSave }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [raisedAmount, setRaisedAmount] = useState("");
    const [goalAmount, setGoalAmount] = useState("");

    useEffect(() => {
        if (campaignData) {
            setTitle(campaignData.title);
            setDescription(campaignData.description);
            setRaisedAmount(campaignData.raisedAmount);
            setGoalAmount(campaignData.goalAmount);
        } else {
            setTitle("");
            setDescription("");
            setRaisedAmount("");
            setGoalAmount("");
        }
    }, [campaignData]);

    if (!isOpen) return null;

    const handleSave = () => {
        const updatedData = {
            ...campaignData,
            title,
            description,
            raisedAmount: parseFloat(raisedAmount),
            goalAmount: parseFloat(goalAmount),
        };
        onSave(updatedData);
    };

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-3xl max-w-2xl w-full p-8">
                <h2 className="text-3xl font-bold mb-6">
                    {campaignData ? "Edit Campaign" : "Add Campaign"}
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
                    <div className="flex space-x-4">
                        <div className="w-1/2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Raised Amount
                            </label>
                            <input
                                type="number"
                                value={raisedAmount}
                                onChange={(e) => setRaisedAmount(e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="w-1/2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Goal Amount
                            </label>
                            <input
                                type="number"
                                value={goalAmount}
                                onChange={(e) => setGoalAmount(e.target.value)}
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
                        Close
                    </button>
                    <button
                        onClick={handleSave}
                        className="px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-700 transition"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CampaignModal;
