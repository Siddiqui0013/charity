import { useState, useEffect } from "react";
import BookModal from "./modals/BooksModal";
import axiosInstance from "../api/axios";
import { useToast } from "../hooks/useToast";
import DeleteModal from "./modals/DeleteModal";
import Pagination from "../components/ui/Pagination";

const Books = () => {
    const [data, setData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);
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
        fetchBooks();
    }, [page]);

    const fetchBooks = async () => {
        try {
            setLoading(true);
            const response = await axiosInstance.get("/books");
            setData(response.data.data || []);
            setTotalPages(response.data.total_pages);
        } catch (error) {
            console.error("Error fetching books:", error);
            toast("Failed to fetch books", "error");
        } finally {
            setLoading(false);
        }
    };

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const handleDeleteModalOpen = (book) => {
        setSelectedBook(book);
        setIsDeleteModalOpen(true);
    }

    const handleDeleteModalClose = () => {
        setSelectedBook(null);
        setIsDeleteModalOpen(false);
    }

    const handleDelete = async () => {
        try {
            setApiLoader(true);
            await axiosInstance.delete(`/book/${selectedBook._id}`);
            setData((prevData) => prevData.filter((book) => book._id !== selectedBook._id));
            toast("Book deleted successfully", "success");
        } catch (error) {
            console.error("Error deleting book:", error);
            toast("Failed to delete book", "error");
        } finally {
            setApiLoader(false);
            handleDeleteModalClose();
        }
    };

    const handleEdit = (book) => {
        setSelectedBook(book);
        setIsEditMode(true);
        setIsModalOpen(true);
    };

    const handleAdd = () => {
        setSelectedBook(null);
        setIsEditMode(false);
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        setSelectedBook(null);
        setIsEditMode(false);
    };

    const handleSave = async (bookData) => {
        try {
            setApiLoader(true);
            if (isEditMode) {
                const response = await axiosInstance.put(`/book/${bookData._id}`, bookData);
                setData(prevData =>
                    prevData.map(item =>
                        item._id === bookData._id ? response.data.data : item
                    )
                );
                toast("Book updated successfully", "success");
            } else {
                const response = await axiosInstance.post("/book", bookData);
                setData(prevData => [...prevData, response.data.data]);
                toast("Book added successfully", "success");
            }
            handleModalClose();
        } catch (error) {
            console.error("Error saving book:", error);
            toast("Failed to save book", "error");
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
                <h1 className="text-3xl font-bold text-gray-800">Books</h1>
                <button
                    onClick={handleAdd}
                    className="px-4 py-2 bg-primary hover:bg-[#014e3d] text-white rounded-xl"
                >
                    Add Book
                </button>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 sm:gap-5">
                {data.map((book) => (
                    <div
                        key={book._id}
                        className="relative bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition-shadow"
                    >
                        <div className="w-full h-48 bg-gray-200">
                            <img
                                src={book.image || "/placeholder.svg"}
                                alt={book.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-4">
                            <div className="space-y-3">
                                <h2 className="text-xl font-semibold text-gray-800">
                                    {book.title}
                                </h2>
                                <p className="text-gray-600 text-sm line-clamp-3">
                                    {book.description}
                                </p>
                            </div>
                        </div>
                        <div className="absolute top-2 right-2 space-x-2">
                            <button
                                onClick={() => handleEdit(book)}
                                className="px-3 text-sm py-1 text-white rounded-md bg-primary"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDeleteModalOpen(book)}
                                className="px-3 text-sm py-1 bg-red-500 text-white rounded-md"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-6">
                <Pagination
                    currentPage={page}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>

            <BookModal
                isOpen={isModalOpen}
                onClose={handleModalClose}
                bookData={selectedBook}
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

export default Books;