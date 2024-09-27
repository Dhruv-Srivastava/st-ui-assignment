import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AnnouncementCard from "./AnnouncementCard";
import { cn } from "../../utils/cn";

interface Announcement {
  title: string;
  time: string;
  id: string;
}

const announcements: Announcement[] = [
  {
    title: "Outing schedule for every department",
    time: "5 Minutes ago",
    id: crypto.randomUUID(),
  },
  {
    title: "Meeting HR Department",
    time: "Yesterday, 12:30 PM",
    id: crypto.randomUUID(),
  },
  {
    title: "IT Department need two more talents for UX/UI Designer position",
    time: "Yesterday, 09:15 AM",
    id: crypto.randomUUID(),
  },
];
export default function Announcements() {
  const [pinnedAnnouncementID, setPinnedAnnouncmentID] = useState(null);
  const [shouldScrollToTop, setShouldScrollToTop] = useState(false);

  function handlePinChange(id: string) {
    console.log(id);
    setPinnedAnnouncmentID((prev) => (prev === id ? null : id));
    setShouldScrollToTop((prev) => (prev === id ? false : true));
  }

  const pinnedAnnouncement: Announcement | undefined = announcements.find(
    (announcement) => announcement.id === pinnedAnnouncementID
  );

  const remainingAnnoucements = announcements.filter(
    (announcement) => announcement.id !== pinnedAnnouncementID
  );

  console.log(shouldScrollToTop);

  return (
    <motion.div
      className="bg-white rounded-lg border border-[#E0E0E0]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col gap-5 p-6">
        <div className="flex justify-between items-center gap-16">
          <h3 className="text-lg font-semibold">Announcement</h3>
          <span className="text-sm text-gray-500">Today, 13 Sep 2021</span>
        </div>

        <ul
          className={cn(
            "flex flex-col gap-3 max-h-80 overflow-y-auto",
            shouldScrollToTop && "scroll-mt-0"
          )}
        >
          {/* Pinned Announcement */}
          <AnimatePresence mode="sync">
            {pinnedAnnouncement && (
              <AnnouncementCard
                announcement={pinnedAnnouncement}
                onPinChange={handlePinChange}
                isPinned={true}
                key={`pinned-${pinnedAnnouncement.id}`}
              />
            )}
          </AnimatePresence>
          <AnimatePresence mode="sync">
            {remainingAnnoucements.map((announcement) => (
              <AnnouncementCard
                announcement={announcement}
                key={`remaining-${announcement.id}`}
                onPinChange={handlePinChange}
                isPinned={announcement.id === pinnedAnnouncementID}
              />
            ))}
          </AnimatePresence>
        </ul>
      </div>

      <div className="p-2.5 border-t border-t-[#E0E0E0] flex items-center justify-center">
        <button className="text-[#FF5151] text-sm font-medium">
          See All Announcement
        </button>
      </div>
    </motion.div>
  );
}
