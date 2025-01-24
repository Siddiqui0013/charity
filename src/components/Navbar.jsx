import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-green-700 text-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-around h-16">
        <div className="flex items-center">
          {/* <img
            src="/logo.png"
            alt="Logo"
            className="h-10 w-auto"
          /> */}

          <span className="ml-2 text-xl font-bold">Charityed</span>
        </div>

        <div className="hidden md:flex text-xl gap-8 items-center">
          <a href="#" className="hover:text-gray-200">
            Home
          </a>
          <a href="#" className="hover:text-gray-200">
            About Us
          </a>
          <a href="#" className="hover:text-gray-200">
            Donation
          </a>
          <a href="#" className="hover:text-gray-200">
            Events
          </a>
          <a href="#" className="hover:text-gray-200">
            Services
          </a>
          <a href="#" className="hover:text-gray-200">
            Blog
          </a>
        </div>

        <button className="md:block hidden yellowBtn">
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
        <div className="md:hidden bg-green-700">
          <a href="#" className="block px-4 py-2 hover:bg-green-600">
            Home
          </a>
          <a href="#" className="block px-4 py-2 hover:bg-green-600">
            About Us
          </a>
          <a href="#" className="block px-4 py-2 hover:bg-green-600">
            Donation
          </a>
          <a href="#" className="block px-4 py-2 hover:bg-green-600">
            Events
          </a>
          <a href="#" className="block px-4 py-2 hover:bg-green-600">
            Services
          </a>
          <a href="#" className="block px-4 py-2 hover:bg-green-600">
            Blog
          </a>
          <button className="bg-yellow-400 text-black w-full py-2 hover:bg-yellow-500">
            Donate Now
          </button>
        </div>
       )}
    </nav>
  );
}
