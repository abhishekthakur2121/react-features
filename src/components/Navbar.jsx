import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <header className="bg-yellow-800 flex items-center px-6 py-4 space-x-4">
 
      <div className="flex-grow text-center font-semibold text-white text-lg">
        This is made for just learning purposes
      </div>

     
      <div className="flex flex-col items-end text-white text-sm space-y-1">
        <button
          onClick={handleContactClick}
          className="underline text-blue-200 hover:text-blue-400"
        >
          Contact
        </button>

        <span>
          LinkedIn:
          <a
            href="https://www.linkedin.com/in/abhishek-thakur-9aa954218"
            className="underline text-blue-200 ml-1 hover:text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            Abhishek Thakur
          </a>
        </span>
      </div>
    </header>
  );
}

export default Navbar;
