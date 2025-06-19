import Navbar from '../components/elements/navbar';
import Sidebar from '../components/elements/sidebar-main-menu';
import TabManageEvent from '../components/fragments/tab-manage-event';
import { useState } from 'react';

// const email = localStorage.getItem('email');

const ManageEventPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex text-white justify-center items-start rel h-dvh w-full bg-zinc-900 overflow-scroll no-scrollbar">
      <Sidebar isOpen={isSidebarOpen} />
      <div className="flex flex-col w-full h-dvh items-center">
        <Navbar onToggleSidebar={toggleSidebar} />
        <TabManageEvent />
      </div>
    </div>
  );
};

export default ManageEventPage;
