import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import book1 from "../../assets/book/book1.png";
import axiosInstance from "../../api/axios";

const BookSlider = () => {
  const books = [
    {
      title: "Swallow Your Pride: It's Normal To Cry As A Man",
      description: "This Book Delves Into The Unique Challenges That Men Face When It Comes To Expressing Emotions And Seeking Help For Mental Health Issues. It Explores The Societal Pressure On Men To Be Tough And Stoic And Provides Insights On How Men Can Overcome These Barriers To Embrace Vulnerability And Lead A More Fulfilling Life. With Practical Steps And Real-Life Stories, This Book Helps Men Navigate A World That Often Perpetuates Traditional Masculinity And Take Control Of His Mental Health.",
      image: book1,
      ctaText: "Read More"
    },
    {
      title: "Breaking the Silence: A Guide to Men's Mental Wellness",
      description: "An insightful journey into understanding and addressing men's mental health challenges in today's world. This comprehensive guide offers practical strategies, expert advice, and real-world examples to help men build emotional resilience and maintain mental wellness while navigating modern life's complexities.",
      image: "/api/placeholder/500/600",
      ctaText: "Learn More"
    },
    {
      title: "The Modern Man's Guide to Emotional Intelligence",
      description: "Discover how to develop and harness emotional intelligence in both personal and professional settings. This book provides a roadmap for men to better understand their emotions, build stronger relationships, and achieve greater success while maintaining authentic self-expression.",
      image: "/api/placeholder/500/600",
      ctaText: "Explore Now"
    }
  ];

  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex === totalPages - 1 ? 0 : prevIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? totalPages - 1 : prevIndex - 1);
  };

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
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
        toast("Failed to fetch books", "error");
      } finally {
        setLoading(false);
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

          <div className="grid grid-cols-1 lg:grid-cols-2 px-20 gap-8 items-center">
            <div className="text-white">
              <h1 className="text-4xl font-bold mb-6 leading-tight">
                {data[0]?.title}
              </h1>
              <p className="text-white/90 mb-8 leading-relaxed">
                {data[0]?.description}
              </p>
              <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-yellow-300 transition-colors duration-300 flex items-center gap-2">
                {data[0]?.ctaText}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
            <div className="relative">
              <img
                src={data[0]?.image}
                alt={data[0]?.title}
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