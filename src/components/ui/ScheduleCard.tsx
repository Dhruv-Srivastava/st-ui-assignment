import { motion } from "framer-motion";

import { MoreHorizontal } from "lucide-react";

interface ScheduleItem {
  title: string;
  time: string;
  priority: "HIGH" | "MEDIUM" | "LOW";
  id: string;
}

export default function ScheduleCard({ schedule }: { schedule: ScheduleItem }) {
  return (
    <motion.li className="grid grid-cols-2 gap-2 align-middle bg-[#FAFAFA] rounded-md px-3.5 py-2">
      <p className="w-full text-[#303030] text-sm font-normal col-span-2">
        {schedule.title}
      </p>
      <p className="text-xs text-[#686868] font-normal">{schedule.time}</p>
      <div className="flex justify-end items-center gap-3.5 md:gap-6 lg:gap-5">
        <button className="text-[#B2B2B2]">
          <MoreHorizontal size={20} />
        </button>
      </div>
    </motion.li>
  );
}
