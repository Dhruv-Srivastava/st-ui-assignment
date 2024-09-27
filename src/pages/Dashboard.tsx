import StatCard from "../components/ui/StatCard";
import ChartCard from "../components/ui/ChartCard";
import ActivityCard from "../components/ui/ActivityCard";
import Announcements from "../components/ui/Announcements";
import UpcomingSchedule from "../components/ui/UpcomingSchedule";

import TotalEmployeeGraph from "../assets/total-employee-graph.svg";
import TalenRequestGraph from "../assets/talent-graph.svg";

export default function Dashboard() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl font-semibold mb-6">Dashboard</h2>

      <main className="w-full grid grid-cols-1 gap-5 lg:grid-cols-[65fr,35fr] lg:gap-7">
        <section className="w-full flex flex-col gap-4 md:gap-5">
          <div className="w-full flex flex-col gap-4 md:flex-row">
            <StatCard
              title="Available Position"
              value={24}
              subtitle="4 Urgently needed"
              containerClassName="bg-[#FFEFE7]"
              subtitleClassName="text-[#FF5151]"
            />
            <StatCard
              title="Job Open"
              value={10}
              subtitle="4 Active hiring"
              containerClassName="bg-[#E8F0FB]"
              subtitleClassName="text-[#3786F1]"
            />
            <StatCard
              title="New Employees"
              value={24}
              subtitle="4 Department"
              containerClassName="bg-[#FDEBF9]"
              subtitleClassName="text-[#EE61CF]"
            />
          </div>
          <div className="w-full flex flex-col gap-4 md:flex-row">
            <ChartCard
              title="Total Employees"
              value={216}
              menCount="120 Men"
              womenCount="96 Women"
              change="+2% Past month"
              graph={TotalEmployeeGraph}
            />
            <ChartCard
              title="Talent Request"
              value={16}
              menCount="6 Men"
              womenCount="10 Women"
              change="+5% Past month"
              graph={TalenRequestGraph}
            />
          </div>
          <Announcements />
        </section>

        <section className="self-start w-full grid grid-cols-1 gap-5 md:grid-cols-[2fr,3fr] lg:grid-cols-1 md:gap-4 lg:gap-5">
          <ActivityCard />
          <UpcomingSchedule />
        </section>
      </main>
    </div>
  );
}
