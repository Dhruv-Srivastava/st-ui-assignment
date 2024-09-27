import { motion } from "framer-motion";

import { MoreHorizontal, Pin } from "lucide-react";
import { cn } from "../../utils/cn";

interface Announcement {
  title: string;
  time: string;
  id: string;
}

export default function AnnouncementCard({
  announcement,
  isPinned,
  onPinChange = () => {},
}: {
  announcement: Announcement;
  isPinned: boolean;
  onPinChange: (id: string) => void;
}) {
  return (
    <motion.li
      className="grid grid-cols-2 gap-2 align-middle bg-[#FAFAFA] rounded-md px-3.5 py-2"
      layout
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <p className="text-[#303030] text-sm font-normal col-span-2 md:col-span-1">
        {announcement.title}
      </p>
      <p className="text-xs text-[#686868] font-normal">{announcement.time}</p>
      <div className="flex justify-end items-center gap-3.5 md:gap-6 md:row-start-1 md:col-start-2 md:row-span-2 lg:gap-5 ">
        <button
          className="rotate-45 transition-colors duration-300 ease-in-out"
          onClick={() => onPinChange(announcement.id)}
        >
          <Pin
            className={cn(
              "text-[#B2B2B2] transition-all duration-300 ease-in-out",
              isPinned && "text-[#686868] fill-[#686868]"
            )}
          />
        </button>
        <button className="text-[#B2B2B2]">
          <MoreHorizontal size={20} />
        </button>
      </div>
    </motion.li>
  );
}
