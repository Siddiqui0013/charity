import { useState, useEffect } from "react";
import TeamMemberImg from "../../assets/team/teamMember.png";
import axiosInstance from "../../api/axios";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function OurTeam() {

  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const membersPerPage = isMobile ? 1 : 4;


  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get("/team-members", {
          params: {
            page: currentPage + 1,
            per_page: membersPerPage
          }
        });
        setData(response.data.data || []);
        setTotalPages(response.data.total_pages);

      } catch (error) {
        console.error("Error fetching team members:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTeamMembers();
  }, [currentPage,]);


  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);


  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className="min-h-[600px] flex flex-col gap-8 items-center bg-[url('./src/assets/team/bg.png')] pt-12 bg-cover bg-no-repeat">
      <div className="text-center mb-8">
        <span className="text-sm font-medium text-primary mb-2 block">
          TEAM
        </span>
        <h2 className="text-3xl font-bold text-gray-900">Meet Our Team</h2>
      </div>

      <div className="w-full max-w-7xl px-4">
        <div className="flex items-center justify-end gap-4 mb-6">
          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex gap-1 items-center">
              {[...Array(totalPages)].map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${currentPage === index ? 'bg-primary' : 'bg-gray-300'
                    }`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 transition-all duration-300">
          {loading ? (
            Array(4).fill("").map((val, index) => (
              <div key={index}>
                <div className="bg-gray-200 md:h-28 md:w-28 w-24 h-24 rounded-full animate-pulse mx-auto"></div>
                <div className="bg-gray-200 h-5 rounded-lg animate-pulse mt-4"></div>
                <div className="bg-gray-200 h-3 rounded-lg animate-pulse mt-3 w-[95%] mx-auto"></div>
                <div className="bg-gray-200 h-3 rounded-lg animate-pulse mt-3 w-[95%] mx-auto"></div>
                <div className="bg-gray-200 h-3 rounded-lg animate-pulse mt-3 w-[95%] mx-auto"></div>
              </div>
            ))
          ) : (
            data.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center"
              >
                <div className="mb-4">
                  <div className="w-48 h-48">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-medium text-gray-900">{member.name}</h3>
              </div>
            ))
          )}

        </div>
      </div>

      <div className="flex items-center w-fit px-12 mb-10 shadow-lg py-4 rounded-full cursor-pointer gap-2 justify-around bg-primary">
        <span className="text-white">View All Team</span>
        <ArrowRight color="white" size={16} />
      </div>
    </div>
  );
}