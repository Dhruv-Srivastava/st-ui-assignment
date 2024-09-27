import React from "react";
import { motion } from "framer-motion";

interface ChartCardProps {
  title: string;
  value: number;
  menCount: string;
  womenCount: string;
  change: string;
  graph: string;
}

const ChartCard: React.FC<ChartCardProps> = ({
  title,
  value,
  menCount,
  womenCount,
  change,
  graph,
}) => {
  return (
    <motion.div
      className="w-full bg-white rounded-lg shadow-sm border border-[#E0E0E0] p-5 justify-between flex items-center gap-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-5">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-3xl font-bold">{value}</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm text-gray-500">{menCount}</p>
          <p className="text-sm text-gray-500">{womenCount}</p>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="rounded">
          {/* A charting library should be used instead of an image */}
          <img src={graph} />
        </div>
        <div className="bg-[#FFEFE7] text-[#303030] text-sm rounded-md py-1 px-2">{change}</div>
      </div>
    </motion.div>
  );
};

export default ChartCard;
