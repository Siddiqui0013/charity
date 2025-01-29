import { useState } from "react";
import NewsModal from "./modals/NewsModal";

const NewsArticles = () => {
    const [data, setData] = useState([
        {
            id: 1,
            image: "https://placehold.co/600x400",
            title: "School Teacher",
            description: "An inspiring story about a school teacher making a difference.",
            writerName: "John Doe",
        },
        {
            id: 2,
            image: "https://placehold.co/600x400",
            title: "Content Creator",
            description: "A day in the life of a creative content creator.",
            writerName: "Jane Smith",
        },
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedNews, setSelectedNews] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
        console.log(`Deleted news with id: ${id}`);
    };

    const handleEdit = (news) => {
        setSelectedNews(news);
        setIsEditing(true);
        setIsModalOpen(true);
        console.log(`Editing news with id: ${news.id}`);
    };

    const handleAdd = () => {
        setSelectedNews(null);
        setIsEditing(false);
        setIsModalOpen(true);
        console.log("Adding new news");
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        setSelectedNews(null);
    };

    const handleSave = (news) => {
            console.log("Updated news:", news);
        setIsModalOpen(false);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center mb-4 p-2">
                <h1 className="text-3xl font-semibold">News & Articles</h1>
                <button
                    onClick={handleAdd}
                    className="px-4 py-2 text-white rounded-xl bg-primary hover:bg-[#014e3d]"
                >
                    Add News
                </button>
            </div>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 sm:gap-5">
                {data.map((news) => (
                    <div
                        key={news.id}
                        className="relative max-w-xl bg-white rounded-3xl overflow-hidden shadow hover:shadow-xl transition-shadow"
                    >
                        <div className="w-full h-64 bg-gray-200">
                            <img
                                src={news.image || "/placeholder.svg"}
                                alt={news.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="sm:p-6 p-4 space-y-4">
                            <div className="space-y-3">
                                <h2 className="lg:text-2xl text-xl font-bold text-gray-800">
                                    {news.title}
                                </h2>
                                <p className="text-gray-400 text-base">
                                    {news.description}
                                </p>
                                <p className="text-gray-600 text-sm italic">
                                    Written by: {news.writerName}
                                </p>
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 p-3 space-x-2 group-hover:flex">
                            <button
                                onClick={() => handleEdit(news)}
                                className="px-4 py-2 text-white rounded-xl bg-primary"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(news.id)}
                                className="px-4 py-2 bg-red-500 text-white rounded-xl"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {isModalOpen && (
                <NewsModal
                    isOpen={isModalOpen}
                    onClose={handleModalClose}
                    newsData={selectedNews}
                    onSave={handleSave}
                    isEditing={isEditing}
                />
            )}
        </div>
    );
};

export default NewsArticles;