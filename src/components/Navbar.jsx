import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ items }) => {
  return (
    <nav className="bg-white border-b border-gray-200 shadow pt-2">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <div className="text-2xl font-semibold text-blue-600 cursor-pointer">
            Auto-Weight
          </div>
        </Link>

        {/* Buttons */}
        <div className="space-x-4">
          {items.map((element) => (
            <Link to={element[1]}>
              <button className="text-blue-600 font-medium text-xl">
                {element[0]}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
