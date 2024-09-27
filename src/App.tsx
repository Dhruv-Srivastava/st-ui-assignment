import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />

        {/* Other routes - outside of the scope of assignment */}
        <Route
          path="recruitment"
          element={<h1 className="text-2xl font-semibold mt-8 mx-4">Recruitment</h1>}
        />
        <Route
          path="schedule"
          element={<h1 className="text-2xl font-semibold mt-8 mx-4">Schedule</h1>}
        />
        <Route
          path="employee"
          element={<h1 className="text-2xl font-semibold mt-8 mx-4">Employee</h1>}
        />
        <Route
          path="department"
          element={<h1 className="text-2xl font-semibold mt-8 mx-4">Department</h1>}
        />
        <Route
          path="support"
          element={<h1 className="text-2xl font-semibold mt-8 mx-4">Support</h1>}
        />
        <Route
          path="settings"
          element={<h1 className="text-2xl font-semibold mt-8 mx-4">Settings</h1>}
        />

        <Route path="*" element={<h1>Not Found!</h1>} />
      </Route>
    </Routes>
  );
}
