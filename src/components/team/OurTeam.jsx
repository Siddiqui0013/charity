import { useState, useEffect } from "react";
import TeamMemberImg from "../../assets/team/teamMember.png";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function OurTeam() {
  const teamMembers = [
    {
      name: "Esther Howard",
      image: TeamMemberImg,
    },
    {
      name: "Dianne Russell",
      image: TeamMemberImg,
    },
    {
      name: "Darlene Robertson",
      image: TeamMemberImg,
    },
    {
      name: "Brooklyn Simmons",
      image: TeamMemberImg,
    },
    {
      name: "John Smith",
      image: TeamMemberImg,
    },
    {
      name: "Sarah Johnson",
      image: TeamMemberImg,
    },
    {
      name: "Michael Brown",
      image: TeamMemberImg,
    },
    {
      name: "Emily Davis",
      image: TeamMemberImg,
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const membersPerPage = isMobile ? 1 : 4;
  const totalPages = Math.ceil(teamMembers.length / membersPerPage);
  
  const currentMembers = teamMembers.slice(
    currentPage * membersPerPage,
    (currentPage + 1) * membersPerPage
  );

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
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
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentPage === index ? 'bg-primary' : 'bg-gray-300'
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
          {currentMembers.map((member, index) => (
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
          ))}
        </div>
      </div>

      <div className="flex items-center w-fit px-12 mb-10 shadow-lg py-4 rounded-full cursor-pointer gap-2 justify-around bg-primary">
        <span className="text-white">View All Team</span>
        <ArrowRight color="white" size={16} />
      </div>
    </div>
  );
}