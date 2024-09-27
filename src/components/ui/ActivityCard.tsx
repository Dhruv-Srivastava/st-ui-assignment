import React from "react";
import { motion } from "framer-motion";

const ActivityCard: React.FC = () => {
  return (
    <motion.div
      className="w-full bg-[#161E54] text-white rounded-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-base py-4 px-5 rounded-lg font-medium bg-[#1B204A] ">
        Recent Activity
      </h3>
      <div className="flex flex-col gap-7 px-5 py-6">
        <div className="flex flex-col gap-1.5">
          <p className="text-sm mb-4">10:40 AM, Fri 10 Sept 2021</p>
          <p className="font-medium mb-2">You Posted a New Job</p>
          <p className="text-sm mb-4">
            Kindly check the requirements and terms of work and make sure
            everything is right.
          </p>
        </div>
        <div className="flex flex-col self-start gap-4 lg:flex-row lg:gap-8 lg:items-center">
          <p className="text-sm">Today you made 12 Activities</p>
          <button className="bg-red-500 text-white px-4 py-2 rounded-md text-sm">
            See All Activity
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ActivityCard;
