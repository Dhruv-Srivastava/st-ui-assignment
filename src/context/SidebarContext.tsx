import { createContext, useContext, useEffect, useState } from "react";

const SidebarContext = createContext();

export default function SidebarProvider({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [screenSize, setScreenSize] = useState("desktop");

  function handleOpenSidebar() {
    setIsSidebarOpen(true);
  }
  function handleCloseSidebar() {
    setIsSidebarOpen(false);
  }

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width < 768) {
        setScreenSize("mobile");
      } else if (width <= 1024) {
        setScreenSize("tablet");
      } else {
        setScreenSize("desktop");
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const value = {
    isSidebarOpen,
    handleOpenSidebar,
    handleCloseSidebar,
    screenSize,
  };

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
}

export function useSidebar() {
  return useContext(SidebarContext);
}
