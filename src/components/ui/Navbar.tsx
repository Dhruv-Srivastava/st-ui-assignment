import {
  Search,
  MessageSquare,
  ChevronDown,
  Menu,
  BellDot,
} from "lucide-react";

import { useSidebar } from "../../context/SidebarContext";
import Avatar from "./Avatar";

export default function Navbar() {
  const { isSidebarOpen, handleOpenSidebar, handleCloseSidebar, screenSize } =
    useSidebar();

  function handleToggleSidebar() {
    if (isSidebarOpen) handleCloseSidebar();
    else handleOpenSidebar();
  }

  return (
    <header className="border-b py-4 px-4 md:px-2 lg:px-8 flex justify-between items-center">
      <div className="flex items-center gap-5">
        <button onClick={handleToggleSidebar} className="lg:hidden">
          <Menu className="text-[#B2B2B2]" size={20} />
        </button>
        <div className="relative h-5 md:h-auto">
          {screenSize !== "mobile" && (
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}

          <button>
            <Search
              className="text-[#B2B2B2] md:absolute md:top-2.5 md:left-1 md:ml-2.5 md:z-10"
              size={20}
            />
          </button>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <BellDot size={20} className="text-red-500 animate-bounce" />
        <MessageSquare size={20} className="text-gray-500" />
        <Avatar />
      </div>
    </header>
  );
}
