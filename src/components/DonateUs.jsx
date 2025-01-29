import { useState, useEffect } from "react";

const DonationSection = () => {
  const donations = [
    {
      title: "Popya Mobile App",
      image: "https://placehold.co/600x400",
      description: "Support our mobile app development to help connect donors with those in need. Your donation will help us provide essential resources and services.",
      raised: 85000,
      goal: 102000,
      progress: 85
    },
    {
      title: "Awareness Campaigns",
      image: "https://placehold.co/600x400",
      description: "Help us spread awareness about poverty and homelessness through targeted campaigns. Together we can make a difference.",
      raised: 58000,
      goal: 82000,
      progress: 70
    },
    {
      title: "Media Outreach",
      image: "https://placehold.co/600x400",
      description: "Support our media initiatives to reach more people and create lasting impact in communities worldwide.",
      raised: 510800,
      goal: 650000,
      progress: 80
    },
    {
      title: "Education Program",
      image: "https://placehold.co/600x400",
      description: "Help provide education and learning resources to underprivileged children and youth in need.",
      raised: 75000,
      goal: 100000,
      progress: 75
    },
    {
      title: "Healthcare Support",
      image: "https://placehold.co/600x400",
      description: "Support medical care and health services for those who cannot afford essential healthcare.",
      raised: 92000,
      goal: 120000,
      progress: 77
    },
    {
      title: "Healthcare Support",
      image: "https://placehold.co/600x400",
      description: "Support medical care and health services for those who cannot afford essential healthcare.",
      raised: 92000,
      goal: 120000,
      progress: 77
    }
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const campaignsPerPage = isMobile ? 1 : 3;
  const totalPages = Math.ceil(donations.length / campaignsPerPage);
  
  const currentDonations = donations.slice(
    currentPage * campaignsPerPage,
    (currentPage + 1) * campaignsPerPage
  );

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <div>
          <p className="text-sm uppercase font-medium text-primary">DEDICATED TO ASSISTING THOSE IN NEED</p>
          <h2 className="text-3xl font-bold">
            Help & Donate Us <span className="text-primary">Now</span>
          </h2>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex gap-1 items-center">
              {[...Array(totalPages)].map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentPage === index ? 'bg-green-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 transition-all duration-300">
        {currentDonations.map((donation, idx) => (
          <div 
            key={idx}
            className="flex-1 rounded-2xl my-2 shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2"
          >
            <img
              src={donation.image}
              alt={donation.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">{donation.title}</h3>
              </div>
              <p className="text-gray-600 mb-6 text-sm">
                {donation.description}
              </p>
              <div className="space-y-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-primary rounded-full h-2"
                    style={{ width: `${donation.progress}%` }}
                  />
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">
                    Raised: ${donation.raised.toLocaleString()}
                  </span>
                  <span className="text-gray-600">
                    Goal: ${donation.goal.toLocaleString()}
                  </span>
                </div>
                <button 
                  onClick={() => {
                    console.log("Donation number", idx + 1);
                  }}
                  className="w-full py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors"
                >
                  Donate Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonationSection;