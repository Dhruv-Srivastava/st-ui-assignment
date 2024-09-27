import { motion } from "framer-motion";

const dropdownVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    y: -10,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.15,
      ease: "easeInOut",
    },
  },
};

export default function DropdownMenu({ isOpen, onClose }) {
  return (
    <motion.div
      className={`absolute top-14 right-0 bg-white shadow-md rounded-md p-4 z-50 h-fit`}
      variants={dropdownVariants}
      initial="hidden"
      animate={isOpen ? "visible" : "hidden"}
      exit="hidden"
    >
      <button
        onClick={() => {
          onClose();
        }}
        className="w-full text-left py-2 px-4 hover:bg-gray-200 rounded-md"
      >
        Feedback
      </button>
      <button
        onClick={() => {
          onClose();
        }}
        className="w-full text-left py-2 px-4 hover:bg-gray-200 rounded-md"
      >
        Logout
      </button>
    </motion.div>
  );
}
