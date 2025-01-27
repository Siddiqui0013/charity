const NewsGrid = () => {

  const newsItems = [
    {
      id: 1,
      image: "https://placehold.co/600x400",
      title: "Lorem ipsum dolor sit amet",
      category: "NEWS"
    },
    {
      id: 2,
      image: "https://placehold.co/600x400",
      title: "Lorem ipsum dolor sit amet",
      category: "BOOKS"
    },
    {
      id: 3,
      image: "https://placehold.co/600x400",
      title: "Lorem ipsum dolor sit amet",
      category: "SPORTS"
    },
    {
      id: 4,
      image: "https://placehold.co/600x400",
      title: "Lorem ipsum dolor sit amet",
      category: "BOOKS"
    },
    {
      id: 5,
      image: "https://placehold.co/600x400",
      title: "Lorem ipsum dolor sit amet",
      category: "BOOKS"
    },
    {
      id: 6,
      image: "https://placehold.co/600x400",
      title: "Lorem ipsum dolor sit amet",
      category: "BOOKS"
    }
  ];

  return (
    <div className="max-w-6xl text-center mx-auto px-4">
      <div className="text-center my-12">
        <span className="text-sm font-medium text-primary mb-2 block">
          NEWS FEED
        </span>
        <h2 className="text-3xl font-bold text-gray-900">Latest News & <span className="text-primary">Articles</span></h2>
      </div>

      <div className="grid grid-cols-12 grid-rows-12 gap-3 my-12">
        {newsItems.map((item) => (
          <div
            key={item.id}
            className={`relative rounded-lg overflow-hidden shadow-lg ${item.id === 1
                ? "lg:col-span-6 lg:row-span-5 col-span-12 row-span-12"
                : item.id === 2
                  ? "lg:col-span-3 lg:row-span-7 col-span-12 row-span-12"
                  : item.id === 3
                    ? "lg:col-span-3 lg:row-span-7 col-span-12 row-span-12"
                    : item.id === 4
                      ? "lg:col-span-3 lg:row-span-7 col-span-12 row-span-12"
                      : item.id === 5
                        ? "lg:col-span-3 lg:row-span-7 col-span-12 row-span-12"
                        : "lg:col-span-6 lg:row-span-5 col-span-12 row-span-12"
              }`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-35"></div>
            <div className="absolute bottom-0 flex flex-col items-start left-0 p-4 text-white">
              <span className="text-xs font-semibold">{item.category}</span>
              <h3 className="text-lg font-semibold mt-1">{item.title}</h3>
              <button className="mt-2 px-4 py-1 bg-white text-black text-sm font-medium rounded-full hover:bg-gray-100 transition-colors">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsGrid;