import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-green-700 text-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center">
          {/* <img
            src="/logo.png"
            alt="Logo"
            className="h-10 w-auto"
          /> */}

          <span className="ml-2 text-xl font-bold cursor-pointer"
            onClick={() => navigate("/")}
          >Charityed</span>
        </div>

        <div className="hidden md:flex text-xl gap-8 items-center">
          <span
          onClick={() => navigate("/")}
          className="hover:text-gray-200 cursor-pointer">
            Home
          </span>
          <span 
          className="hover:text-gray-200 cursor-pointer"
          onClick={() => navigate("/about")}
          >
            About Us
          </span>
          <span className="hover:text-gray-200 cursor-pointer"
          onClick={() => navigate("/donation")}
          >
            Donation
          </span>
          <span className="hover:text-gray-200 cursor-pointer"
          onClick={() => navigate("/events")}
          >
            Events
          </span>
          <span className="hover:text-gray-200 cursor-pointer"
          onClick={() => navigate("/news")}
          >
            News and Articles
          </span>
        </div>

        <button className="md:block hidden yellowBtn ">
            Donate Now
          </button>

        <div className="md:hidden flex items-center ">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden py-6 bg-green-700 flex flex-col gap-2 items-center">
          <span className="block px-4 py-2 hover:bg-green-600" 
          onClick={() => navigate("/")}
          >
            Home
          </span>
          <span className="block px-4 py-2 hover:bg-green-600"
          onClick={() => navigate("/about")}
          >
            About Us
          </span>
          <span className="block px-4 py-2 hover:bg-green-600"
          onClick={() => navigate("/donation")}
          >
            Donation
          </span>
          <span className="block px-4 py-2 hover:bg-green-600"
          onClick={() => navigate("/events")}
          >
            Events
          </span>
          <span className="block px-4 py-2 hover:bg-green-600">
            News and Articles
          </span>
          <button className="yellowBtn ">
            Donate Now
          </button>
        </div>
       )}
    </nav>
  );
}
