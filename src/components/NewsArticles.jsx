import { useEffect, useState } from "react";
import axiosInstance from "../api/axios";
import { useNavigate } from "react-router-dom";

const NewsGrid = () => {

  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get("/news-articles", {
          params: {
            page: page,
            per_page: 6
          }
        });
        setData(response.data.data || []);
        setTotalPages(response.data.total_pages);

      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, [page]);

  return (
    <div className="max-w-6xl text-center mx-auto px-4">
      <div className="text-center my-12">
        <span className="text-sm font-medium text-primary mb-2 block">
          NEWS FEED
        </span>
        <h2 className="text-3xl font-bold text-gray-900">Latest News & <span className="text-primary">Articles</span></h2>
      </div>

      <div className="grid grid-cols-12 grid-rows-12 gap-3 my-12">
        {loading ? (
          Array(6).fill("").map((val, index) => (
            <div
              key={index}
              className={`relative rounded-lg overflow-hidden shadow-lg ${index === 0
                ? "lg:col-span-6 lg:row-span-5 col-span-12 row-span-12"
                : index === 1
                  ? "lg:col-span-3 lg:row-span-7 col-span-12 row-span-12"
                  : index === 2
                    ? "lg:col-span-3 lg:row-span-7 col-span-12 row-span-12"
                    : index === 3
                      ? "lg:col-span-3 lg:row-span-7 col-span-12 row-span-12"
                      : index === 4
                        ? "lg:col-span-3 lg:row-span-7 col-span-12 row-span-12"
                        : "lg:col-span-6 lg:row-span-5 col-span-12 row-span-12"
                }`}
            >
              <div className="bg-gray-200 animate-pulse h-48"></div>
            </div>
          ))
        ) : (
          data.map((item, index) => (
            <div
              key={item._id}
              className={`relative rounded-lg overflow-hidden shadow-lg ${index === 0
                ? "lg:col-span-6 lg:row-span-5 col-span-12 row-span-12"
                : index === 1
                  ? "lg:col-span-3 lg:row-span-7 col-span-12 row-span-12"
                  : index === 2
                    ? "lg:col-span-3 lg:row-span-7 col-span-12 row-span-12"
                    : index === 3
                      ? "lg:col-span-3 lg:row-span-7 col-span-12 row-span-12"
                      : index === 4
                        ? "lg:col-span-3 lg:row-span-7 col-span-12 row-span-12"
                        : "lg:col-span-6 lg:row-span-5 col-span-12 row-span-12"
                }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-fill"
              />
              <div className="absolute inset-0 bg-black opacity-35"></div>
              <div className="absolute bottom-0 flex flex-col items-start left-0 p-4 text-white">
                <span className="text-xs font-semibold">{item.category}</span>
                <h3 className="text-lg font-semibold mt-1">{item.title}</h3>
                <button onClick={() => navigate(`/news/${item._id}`)} className="mt-2 px-4 py-1 bg-white text-black text-sm font-medium rounded-full hover:bg-gray-100 transition-colors">
                  Read More
                </button>
              </div>
            </div>
          )))}

      </div>
    </div>
  );
};

export default NewsGrid;