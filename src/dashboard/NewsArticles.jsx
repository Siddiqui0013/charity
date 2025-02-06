import { useState, useEffect } from "react";
import NewsModal from "./modals/NewsModal";
import axiosInstance from "../api/axios";
import { useToast } from "../hooks/useToast";
import DeleteModal from "./modals/DeleteModal";
import Pagination from "../components/ui/Pagination";

const NewsArticles = () => {
    const [data, setData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [isEditMode, setIsEditMode] = useState(false);
    const [loading, setLoading] = useState(true);
    const [apiLoader, setApiLoader] = useState(false);
    const toast = useToast();

    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const handlePageChange = (newPage) => {
        setPage(newPage);
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                setLoading(true);
                const response = await axiosInstance.get("/news-articles", {
                    params: {
                        page: page,
                        per_page: 19
                    }
                });
                setData(response.data.data || []);
                setTotalPages(response.data.total_pages);
    
            } catch (error) {
                console.error("Error fetching articles:", error);
                toast("Failed to fetch articles", "error");
            } finally {
                setLoading(false);
            }
        };
        fetchArticles();
    }, [page]);


    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const handleDeleteModalOpen = (article) => {
        setSelectedArticle(article);
        setIsDeleteModalOpen(true);
    }

    const handleDeleteModalClose = () => {
        setSelectedArticle(null);
        setIsDeleteModalOpen(false);
    }

    const handleDelete = async () => {
        try {
            setApiLoader(true);
            await axiosInstance.delete(`/news-article/${selectedArticle._id}`);
            setData((prevData) => prevData.filter((article) => article._id !== selectedArticle._id));
            toast("Article deleted successfully", "success");
        } catch (error) {
            console.error("Error deleting article:", error);
            toast("Failed to delete article", "error");
        } finally {
            setApiLoader(false);
            handleDeleteModalClose();
        }
    };

    const handleEdit = (article) => {
        setSelectedArticle(article);
        setIsEditMode(true);
        setIsModalOpen(true);
    };

    const handleAdd = () => {
        setSelectedArticle(null);
        setIsEditMode(false);
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        setSelectedArticle(null);
        setIsEditMode(false);
    };

    const handleSave = async (articleData) => {
        try {
            setApiLoader(true);
            const config = {
                headers: { 'Content-Type': 'multipart/form-data' }
            };
            if (isEditMode) {
                console.log("Data from modal for editing", articleData);
                const response = await axiosInstance.put(`/news-article/${selectedArticle._id}`, articleData, config);
                setData(prevData =>
                    prevData.map(item =>
                        item._id === selectedArticle._id ? response.data.data : item
                    )
                );
                toast("Article updated successfully", "success");
            } else {
                const response = await axiosInstance.post("/news-article", articleData, config);
                setData(prevData => [...prevData, response.data.data]);
                toast("Article added successfully", "success");
            }
            handleModalClose();
        } catch (error) {
            console.log("Data from modal for editing", articleData);
            console.error("Error saving article:", error);
            toast("Failed to save article", "error");
        } finally {
            setApiLoader(false);
        }
    };

    if (loading) {
        return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div key={index} className="animate-pulse">
                            <div className="h-48 bg-gray-200 rounded-t-xl"></div>
                            <div className="p-4 space-y-4 bg-white rounded-b-xl">
                                <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                                <div className="h-4 bg-gray-200 rounded w-full"></div>
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
                <h1 className="text-3xl font-bold text-gray-800">News Articles</h1>
                <button
                    onClick={handleAdd}
                    className="px-4 py-2 bg-primary hover:bg-[#014e3d] text-white rounded-xl"
                >
                    Add Article
                </button>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 sm:gap-5">
                {data.map((article) => (
                    <div
                        key={article._id}
                        className="relative bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition-shadow"
                    >
                        <div className="w-full h-48 bg-gray-200">
                            <img
                                src={article.image || "/placeholder.svg"}
                                alt={article.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-4">
                            <div className="space-y-3">
                                <h2 className="text-xl font-semibold text-gray-800">
                                    {article.title}
                                </h2>
                                <p className="text-gray-600 text-sm line-clamp-3">
                                    {article.description}
                                </p>
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 p-3 space-x-2">
                            <button
                                onClick={() => handleEdit(article)}
                                className="px-3 text-sm py-1 text-white rounded-md bg-primary"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDeleteModalOpen(article)}
                                className="px-3 text-sm py-1 bg-red-500 text-white rounded-md"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-7">
                <Pagination
                    currentPage={page}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>

            <NewsModal
                isOpen={isModalOpen}
                onClose={handleModalClose}
                articleData={selectedArticle}
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

export default NewsArticles;