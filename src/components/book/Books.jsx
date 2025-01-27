import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import book1 from "../../assets/book/book1.png";

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

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % books.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + books.length) % books.length);
  };

  return (
    <div className="bg-emerald-600 min-h-[500px] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="relative">
          <div className="absolute top-4 right-4 flex gap-2">
            {books.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  currentIndex === index ? "bg-yellow-400" : "bg-white/50"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 px-20 gap-8 items-center">
            <div className="text-white">
              <h1 className="text-4xl font-bold mb-6 leading-tight">
                {books[currentIndex].title}
              </h1>
              <p className="text-white/90 mb-8 leading-relaxed">
                {books[currentIndex].description}
              </p>
              <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-yellow-300 transition-colors duration-300 flex items-center gap-2">
                {books[currentIndex].ctaText}
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
                src={books[currentIndex].image}
                alt={books[currentIndex].title}
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