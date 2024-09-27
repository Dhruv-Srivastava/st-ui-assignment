import { Outlet } from "react-router-dom";
import Navbar from "./ui/Navbar";
import Sidebar from "./ui/Sidebar";

import SidebarProvider from "../context/SidebarContext";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Layout() {
  return (
    <SidebarProvider>
      <div className="relative container mx-auto flex min-h-[100vh]">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Navbar />
          <main className="flex-1 bg-white">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
