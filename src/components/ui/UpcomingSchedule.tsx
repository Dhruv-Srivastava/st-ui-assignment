import { motion } from "framer-motion";
import ScheduleCard from "./ScheduleCard";

interface ScheduleItem {
  title: string;
  time: string;
  priority: "HIGH" | "MEDIUM" | "LOW";
  id: string;
}

const scheduleItems: ScheduleItem[] = [
  {
    title: "Review candidate applications",
    time: "Today - 11:30 AM",
    priority: "HIGH",
    id: crypto.randomUUID(),
  },
  {
    title: "Interview with candidates",
    time: "Today - 03:00 PM",
    priority: "MEDIUM",
    id: crypto.randomUUID(),
  },
  {
    title: "Short meeting with product designer from IT Department",
    time: "Today - 09:15 AM",
    priority: "MEDIUM",
    id: crypto.randomUUID(),
  },
];
export default function UpcomingSchedule() {
  const highPriorityEvents = scheduleItems.filter(
    (schedule) => schedule.priority === "HIGH"
  );
  const otherEvents = scheduleItems.filter(
    (schedule) => schedule.priority !== "HIGH"
  );
  return (
    <motion.div
      className="bg-white rounded-lg border border-[#E0E0E0]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="flex flex-col gap-5 p-6">
        <article className="flex justify-between items-center gap-16">
          <h3 className="text-lg font-semibold">Upcoming</h3>
          <span className="text-sm text-gray-500">Today, 13 Sep 2021</span>
        </article>

        <article className="flex flex-col gap-3.5">
          <div className="flex flex-col gap-2">
            <h3 className="text-xs text-[#686868]">Priority</h3>
            {highPriorityEvents.length > 0 ? (
              <ul className="flex flex-col gap-3 max-h-80 overflow-y-auto ::-webkit-scrollbar-track-[]">
                {highPriorityEvents.map((schedule) => (
                  <ScheduleCard key={schedule.id} schedule={schedule} />
                ))}
              </ul>
            ) : (
              <span>No high priority event in your schedule</span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xs text-[#686868]">Others</h3>
            <ul className="flex flex-col gap-3 max-h-80 overflow-y-auto ::-webkit-scrollbar-track-[]">
              {otherEvents.map((schedule) => (
                <ScheduleCard key={schedule.id} schedule={schedule} />
              ))}
            </ul>
          </div>
        </article>
      </section>

      <footer className="p-2.5 border-t border-t-[#E0E0E0] flex items-center justify-center">
        <button className="text-[#FF5151] text-sm font-medium">
          Create a new schedule
        </button>
      </footer>
    </motion.div>
  );
}
