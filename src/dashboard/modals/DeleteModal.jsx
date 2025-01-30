import { Modal } from "flowbite-react";
import { Loader } from "lucide-react";

const DeleteModal = ({ isOpen, onClose, onDelete, isLoading }) => {
    const handleDelete = () => {
        onDelete();
    };

    return (
        <Modal show={isOpen} onClose={onClose}>
            <Modal.Header>Confirm Deletion</Modal.Header>
            <Modal.Body>Are you sure you want to delete this item?</Modal.Body>
            <Modal.Footer className="flex justify-end gap-3">
                <button className="text-gray-600 hover:text-gray-800 border border-gray-300 px-4 py-2 rounded-lg" onClick={onClose}>Cancel</button>
                <button disabled={isLoading} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg" onClick={handleDelete}>
                    {isLoading ? (
                        <Loader className="w-5 h-5 animate-spin" />
                    ) : (
                        "Delete"
                    )}
                </button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeleteModal;