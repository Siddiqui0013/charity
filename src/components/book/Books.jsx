import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import axiosInstance from "../../api/axios";

const BookSlider = () => {

  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex === totalPages - 1 ? 0 : prevIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? totalPages - 1 : prevIndex - 1);
  };

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axiosInstance.get("/books", {
          params: {
            page: currentIndex + 1,
            per_page: 1
          }
        });
        setData(response.data.data || []);
        console.log(response);

        setTotalPages(response.data.total_pages);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    fetchBooks();
  }, [currentIndex]);

  return (
    <div className="bg-emerald-600 min-h-[500px] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="relative">
          <div className="absolute -top-5 right-4 flex gap-2">
            {[...Array(totalPages)].map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${currentIndex === index ? "bg-yellow-400" : "bg-white/50"
                  }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 px-20 min-h-80 gap-8 items-center">
            <div className="text-white">
              <h1 className="text-4xl font-bold mb-6 leading-tight">
                {data[0]?.title}
              </h1>
              <p className="text-white/90 mb-8 leading-relaxed">
                {data[0]?.description}
              </p>
            </div>
            <div className="relative">
              <img
                src={data[0]?.image}
                alt={data[0]?.title}
                loading="lazy"
                className="w-full max-w-md mx-auto "
              />
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookSlider;