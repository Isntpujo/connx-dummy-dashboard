import Navbar from '../components/elements/navbar';
import Sidebar from '../components/elements/sidebar-main-menu';
import { useState } from 'react';

// const email = localStorage.getItem('email');

const AnalyticsPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex text-white justify-center items-start h-dvh rel w-full bg-zinc-900 overflow-scroll no-scrollbar">
      <Sidebar isOpen={isSidebarOpen} />
      {/* <div>{email}</div> */}
      <div className="flex flex-col w-full h-dvh items-center rel z-50">
        <Navbar onToggleSidebar={toggleSidebar} />
      </div>
    </div>
  );
};

export default AnalyticsPage;
