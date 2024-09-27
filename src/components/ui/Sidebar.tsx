import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import {
  Grid,
  Users,
  Calendar,
  User,
  Briefcase,
  HelpCircle,
  Settings,
  X,
} from "lucide-react";

import { useSidebar } from "../../context/SidebarContext";

import BrandLogo from "../../assets/brand-logo.svg";
import BrandName from "../../assets/brand-name.svg";
import { cn } from "../../utils/cn";

const menuItems = [
  { icon: Grid, label: "Dashboard", path: "/" },
  { icon: Users, label: "Recruitment", path: "/recruitment" },
  { icon: Calendar, label: "Schedule", path: "/schedule" },
  { icon: User, label: "Employee", path: "/employee" },
  { icon: Briefcase, label: "Department", path: "/department" },
];

export default function Sidebar() {
  const { screenSize, isSidebarOpen, handleCloseSidebar } = useSidebar();
  const shouldShowCompleteSidebar = isSidebarOpen || screenSize === "desktop";


  return (
    <AnimatePresence>
      {(isSidebarOpen || screenSize !== "mobile") && (
        <motion.aside
          className={cn(
            "fit-content absolute flex top-0 left-0 z-10 bg-[#fdfdfd] min-h-screen border-r flex-col gap-14 py-4 px-3 md:static md:px-3 lg:px-4"
          )}
          animate={{
            width:
              isSidebarOpen
                ? "auto"
                : "fit-content",
          }}
          exit={{ width: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <div className="flex items-center gap-1.5">
            <img src={BrandLogo} alt="" className="w-10 h-10" />
            {shouldShowCompleteSidebar && <img src={BrandName} alt="" />}
            {isSidebarOpen && screenSize === "mobile" && (
              <button onClick={handleCloseSidebar} className="ml-auto">
                <X />
              </button>
            )}
          </div>

          <nav
            className={
              (cn("flex flex-col items-center gap-2 lg:items-start"),
              isSidebarOpen && "items-start")
            }
          >
            <h3 className="text-xs text-[#686868] font-medium lg:text-sm">
              MAIN MENU
            </h3>
            <ul className="flex flex-col gap-3">
              {menuItems.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  className={({ isActive }) =>
                    cn(
                      "w-full flex items-center gap-4 p-4 text-[#686868]",
                      isActive ? "text-[#FF5151]" : "hover:bg-gray-100"
                    )
                  }
                >
                  <item.icon size={20} />
                  {shouldShowCompleteSidebar && <span>{item.label}</span>}
                </NavLink>
              ))}
            </ul>
          </nav>
          <nav
            className={
              (cn("flex flex-col items-center gap-2 lg:items-start"),
              isSidebarOpen && "items-start")
            }
          >
            <h3 className="text-xs text-[#686868] font-medium lg:text-sm">
              OTHER
            </h3>
            <ul className="w-full flex flex-col gap-1.5">
              <NavLink
                to="/support"
                className={({ isActive }) =>
                  cn(
                    "w-full flex items-center gap-4 p-4 text-[#686868]",
                    isActive ? "text-[#FF5151]" : "hover:bg-gray-100"
                  )
                }
              >
                <HelpCircle size={20} />
                {shouldShowCompleteSidebar && <span>Support</span>}
              </NavLink>
              <NavLink
                to="/settings"
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-4 p-4 text-[#686868]",
                    isActive ? "text-[#FF5151]" : "hover:bg-gray-100"
                  )
                }
              >
                <Settings size={20} />
                {shouldShowCompleteSidebar && <span>Settings</span>}
              </NavLink>
            </ul>
          </nav>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
