import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

interface StatCardProps {
  title: string;
  value: number;
  subtitle: string;
  subtitleClassName: string;
  containerClassName: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  subtitle,
  subtitleClassName,
  containerClassName,
}) => {
  return (
    <motion.div
      className={cn(
        "w-full rounded-lg pl-5 pr-3 py-4 flex flex-col gap-4 text-[#161E54] md:py3.5 lg:py-3",
        containerClassName
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-base font-medium lg:text-lg">{title}</h3>
      <p className="text-3xl font-medium lg:text-4xl">{value}</p>
      <p className={cn("text-sm lg:text-base", subtitleClassName)}>{subtitle}</p>
    </motion.div>
  );
};

export default StatCard;
