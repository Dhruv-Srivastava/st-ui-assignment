import { useState } from "react";
import DropdownMenu from "./Dropdown";
import { ChevronDown } from "lucide-react";

import UserIcon from "../../assets/user.svg";

export default function Avatar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  return (
    <div className="relative">
      <button
        className="relative flex items-center gap-1.5"
        onClick={toggleDropdown}
      >
        <img src={UserIcon} alt="User" className="w-8 h-8 rounded-full" />
        <span className="ml-2 mr-1 hidden sm:inline">Admitra John</span>
        <ChevronDown size={16} />
      </button>
      <DropdownMenu
        isOpen={isDropdownOpen}
        onClose={() => setIsDropdownOpen(false)}
      />
    </div>
  );
}
