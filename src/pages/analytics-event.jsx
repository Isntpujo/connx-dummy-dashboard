import Navbar from '../components/elements/navbar';
import { useParams } from 'react-router-dom';
import DropdownSelect from '../components/elements/select';
import { useState } from 'react';
import SidebarEventMenu from '../components/elements/sidebar-event-menu';
import ChartDoughnutIncome from '../components/elements/chart/chart-doughnut-income';
import ChartBarTicket from '../components/elements/chart/chart-barhorizon-ticket';
import ChartLineCoversion from '../components/elements/chart/chart-line-conversion';
import ChartBarGender from '../components/elements/chart/chart-bar-gender';

import dataTicket from '../data/data-ticket.json';

const products = [
  {
    id: 1,
    image: '/images/img-card-event-karaoke.jpg',
    nameTicket: 'OTW Festival',
    sold: 2.564,
    views: 12.345,
  },
];

const tickets = dataTicket.map((data) => data.value);

console.log(tickets);

const AnalyticsEventPage = () => {
  const { nameTicket, image } = useParams();

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex justify-center items-start rel h-dvh w-full bg-zinc-900 overflow-scroll no-scrollbar">
      <SidebarEventMenu isOpen={isSidebarOpen} />
      <div className="flex flex-col w-full h-dvh items-center">
        <Navbar onToggleSidebar={toggleSidebar} />
        <div className="bg-[#F5F5F9] flex p-8 gap-5 w-full relative">
          <div className="flex flex-col gap-5 min-w-80 max-w-80 h-fit">
            <div className="flex gap-5 w-full h-fit items-center justify-between bg-white rounded-xl p-5">
              <div className="text-black font-bold text-base">Sortby Data</div>
              <DropdownSelect />
            </div>
            <div className="flex flex-col gap-5 w-full h-fit items-start justify-start bg-white rounded-xl p-5">
              <div className="flex flex-row gap-3 items-center justify-start">
                <div className="bg-amber-100 rounded-full p-3">
                  <svg className="w-6 h-6 relative overflow-visible" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1 4.5V16.8498H4.43548V12.0734H5.20037L8.0662 16.8498H11.9639L8.88494 11.7673C9.57677 11.5498 10.1504 11.2095 10.5779 10.7269C11.144 10.0878 11.403 9.25647 11.403 8.28672C11.403 7.08319 11.027 6.10012 10.2052 5.43339C9.40338 4.78289 8.25683 4.5 6.85175 4.5H1ZM6.70199 9.1818H4.43548V7.39163H6.66259C7.18612 7.39163 7.5064 7.50145 7.69505 7.64853L7.69828 7.651C7.87201 7.7842 7.9754 7.97388 7.9754 8.2946C7.9754 8.61068 7.874 8.79924 7.7034 8.93244C7.51909 9.07521 7.20835 9.1818 6.70199 9.1818ZM12.6917 8.93176V21.2816H16.1271V16.6865H18.1493C19.6602 16.6865 20.8829 16.3955 21.7298 15.7279L21.7316 15.7265C22.5954 15.0392 23.0001 14.0394 23.0001 12.8131C23.0001 11.5889 22.6249 10.587 21.805 9.90023C21.0047 9.22536 19.8533 8.93176 18.4409 8.93176H12.6917ZM19.5725 12.8209C19.5725 13.168 19.4659 13.3843 19.2908 13.5361C19.109 13.6888 18.8011 13.8027 18.2912 13.8027H16.1271V11.8234H18.2518C18.8221 11.8234 19.1259 11.9538 19.2807 12.1059L19.2874 12.1122C19.4737 12.2885 19.5725 12.5105 19.5725 12.8209Z"
                      fill="#FFB800"
                    />
                  </svg>
                </div>
                <div className="flex flex-col gap-0.5 items-start justify-start">
                  <div className="text-black font-bold text-base">Total Income</div>
                  <div className="text-zinc-500 text-xs">Total income dan tiket yang terjual.</div>
                </div>
              </div>
              <div className="flex w-full h-full relative">
                <div className="flex flex-col w-fit items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="text-xs text-gray-500">Total Income</div>
                  <div className="font-bold text-3xl">1.135 M</div>
                </div>
                <ChartDoughnutIncome />
              </div>
              <div className="flex flex-col items-center gap-3 w-full p-3 border border-gray-200 rounded-xl">
                <div className="text-black text-xs">Total Ticket yang terjual.</div>
                <div className="flex items-center w-full justify-between p-3 rounded-xl bg-[#f0f0f0]">
                  <div className="flex flex-row items-center gap-1">
                    <svg className="fill-[#A9A9A9] shrink-0 w-6 h-6 relative overflow-visible" width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.66662 11.0833H1.16663V8.63333C1.60865 8.63333 2.03258 8.46125 2.34514 8.15494C2.6577 7.84863 2.83329 7.43318 2.83329 7C2.83329 6.56681 2.6577 6.15137 2.34514 5.84506C2.03258 5.53875 1.60865 5.36666 1.16663 5.36666V2.91666H8.66662V4.95833H9.49996V2.91666H12.8333V5.36666C12.3913 5.36666 11.9673 5.53875 11.6548 5.84506C11.3422 6.15137 11.1666 6.56681 11.1666 7C11.1666 7.43318 11.3422 7.84863 11.6548 8.15494C11.9673 8.46125 12.3913 8.63333 12.8333 8.63333V11.0833H9.49996V9.04166H8.66662V11.0833ZM8.66662 5.775V8.225H9.49996V5.775H8.66662Z" />
                    </svg>
                    <div className="text-xs">Silver Ticket</div>
                  </div>
                  <div className="font-bold text-base">{tickets[0]}</div>
                </div>
                <div className="flex items-center w-full justify-between p-3 rounded-xl bg-blue-100">
                  <div className="flex flex-row items-center gap-1">
                    <svg className="fill-[#2953f6] shrink-0 w-6 h-6 relative overflow-visible" width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.66662 11.0833H1.16663V8.63333C1.60865 8.63333 2.03258 8.46125 2.34514 8.15494C2.6577 7.84863 2.83329 7.43318 2.83329 7C2.83329 6.56681 2.6577 6.15137 2.34514 5.84506C2.03258 5.53875 1.60865 5.36666 1.16663 5.36666V2.91666H8.66662V4.95833H9.49996V2.91666H12.8333V5.36666C12.3913 5.36666 11.9673 5.53875 11.6548 5.84506C11.3422 6.15137 11.1666 6.56681 11.1666 7C11.1666 7.43318 11.3422 7.84863 11.6548 8.15494C11.9673 8.46125 12.3913 8.63333 12.8333 8.63333V11.0833H9.49996V9.04166H8.66662V11.0833ZM8.66662 5.775V8.225H9.49996V5.775H8.66662Z" />
                    </svg>
                    <div className="text-xs">Blue Ticket</div>
                  </div>
                  <div className="font-bold text-base">{tickets[1]}</div>
                </div>
                <div className="flex items-center w-full justify-between p-3 rounded-xl bg-amber-100">
                  <div className="flex flex-row items-center gap-1">
                    <svg className="fill-[#ffc56d] shrink-0 w-6 h-6 relative overflow-visible" width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.66662 11.0833H1.16663V8.63333C1.60865 8.63333 2.03258 8.46125 2.34514 8.15494C2.6577 7.84863 2.83329 7.43318 2.83329 7C2.83329 6.56681 2.6577 6.15137 2.34514 5.84506C2.03258 5.53875 1.60865 5.36666 1.16663 5.36666V2.91666H8.66662V4.95833H9.49996V2.91666H12.8333V5.36666C12.3913 5.36666 11.9673 5.53875 11.6548 5.84506C11.3422 6.15137 11.1666 6.56681 11.1666 7C11.1666 7.43318 11.3422 7.84863 11.6548 8.15494C11.9673 8.46125 12.3913 8.63333 12.8333 8.63333V11.0833H9.49996V9.04166H8.66662V11.0833ZM8.66662 5.775V8.225H9.49996V5.775H8.66662Z" />
                    </svg>
                    <div className="text-xs">Gold Ticket</div>
                  </div>
                  <div className="font-bold text-base">{tickets[2]}</div>
                </div>
                <div className="flex items-center w-full justify-between p-3 rounded-xl bg-pink-100">
                  <div className="flex flex-row items-center gap-1">
                    <svg className="fill-[#FF5FA2] shrink-0 w-6 h-6 relative overflow-visible" width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.66662 11.0833H1.16663V8.63333C1.60865 8.63333 2.03258 8.46125 2.34514 8.15494C2.6577 7.84863 2.83329 7.43318 2.83329 7C2.83329 6.56681 2.6577 6.15137 2.34514 5.84506C2.03258 5.53875 1.60865 5.36666 1.16663 5.36666V2.91666H8.66662V4.95833H9.49996V2.91666H12.8333V5.36666C12.3913 5.36666 11.9673 5.53875 11.6548 5.84506C11.3422 6.15137 11.1666 6.56681 11.1666 7C11.1666 7.43318 11.3422 7.84863 11.6548 8.15494C11.9673 8.46125 12.3913 8.63333 12.8333 8.63333V11.0833H9.49996V9.04166H8.66662V11.0833ZM8.66662 5.775V8.225H9.49996V5.775H8.66662Z" />
                    </svg>
                    <div className="text-xs">VIP Ticket</div>
                  </div>
                  <div className="font-bold text-base">{tickets[3]}</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full h-fit bg-white rounded-xl p-5">
              <div className="flex flex-row gap-3 items-center justify-start">
                <div className="bg-red-100 rounded-full p-3">
                  <svg className="w-6 h-6 relative overflow-visible" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 6C13.93 6 15.5 7.57 15.5 9.5C15.5 11.43 13.93 13 12 13C10.07 13 8.5 11.43 8.5 9.5C8.5 7.57 10.07 6 12 6ZM12 20C9.97 20 7.57 19.18 5.86 17.12C7.6116 15.7457 9.77362 14.9988 12 14.9988C14.2264 14.9988 16.3884 15.7457 18.14 17.12C16.43 19.18 14.03 20 12 20Z"
                      fill="#ED1859"
                    />
                  </svg>
                </div>
                <div className="flex flex-col gap-0.5 items-start justify-start">
                  <div className="text-black font-bold text-base">Rata-Rata Gender</div>
                  <div className="text-zinc-500 text-xs">Siapa yang membeli tiket kamu.</div>
                </div>
              </div>
              <div className="flex relative w-full h-32">
                <ChartBarGender />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 w-full h-full relative">
            <div className="flex flex-col gap-5 items-start p-5 bg-white rounded-xl w-full h-fit">
              <div className="flex flex-row gap-3 items-center justify-center shrink-0 relative">
                <div className="bg-[#EDF5FE] rounded-full p-3">
                  <svg className="fill-blue-600 w-6 h-6 relative overflow-visible" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12.2502 4.6666C11.4043 4.6666 10.9318 5.5066 11.1243 6.13076L9.0535 8.20743C8.8785 8.15493 8.62183 8.15493 8.44683 8.20743L6.95933 6.71993C7.15766 6.09576 6.68516 5.24993 5.8335 5.24993C4.98766 5.24993 4.50933 6.08993 4.70766 6.71993L2.04766 9.3741C1.4235 9.1816 0.583496 9.6541 0.583496 10.4999C0.583496 11.1416 1.1085 11.6666 1.75016 11.6666C2.596 11.6666 3.0685 10.8266 2.876 10.2024L5.53016 7.54243C5.70516 7.59493 5.96183 7.59493 6.13683 7.54243L7.62433 9.02993C7.426 9.65409 7.8985 10.4999 8.75016 10.4999C9.596 10.4999 10.0743 9.65993 9.876 9.02993L11.9527 6.9591C12.5768 7.1516 13.4168 6.6791 13.4168 5.83326C13.4168 5.1916 12.8918 4.6666 12.2502 4.6666Z"
                      fill="#2953F6"
                    />
                    <path
                      d="M8.75016 5.25L9.2985 4.0425L10.5002 3.5L9.2985 2.9575L8.75016 1.75L8.2135 2.9575L7.00016 3.5L8.2135 4.0425L8.75016 5.25ZM2.04183 6.41667L2.3335 5.25L3.50016 4.95833L2.3335 4.66667L2.04183 3.5L1.75016 4.66667L0.583496 4.95833L1.75016 5.25L2.04183 6.41667Z"
                      fill="#2953F6"
                    />
                  </svg>
                </div>
                <div className="flex flex-col gap-0.5 items-start justify-start">
                  <div className="text-black font-bold text-base">Ringkasan Aktivitas</div>
                  <div className="text-zinc-500 text-xs">Ringkasan event, penjualan tiket dan konversi event </div>
                </div>
              </div>
              <div className="flex w-full flex-row gap-4 items-center justify-center shrink-0 relative">
                <div className="flex flex-grow flex-row gap-3 items-center justify-start shrink-0 relative p-3 border border-gray-200 rounded-xl">
                  <div className="bg-amber-100 rounded-full p-3">
                    <svg className="w-6 h-6 relative overflow-visible" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z"
                        fill="#FFB800"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-0.5 items-start justify-start">
                    <div className="text-zinc-500 text-xs">Total View</div>
                    <div className="text-black font-bold text-base">2.341</div>
                  </div>
                </div>
                <div className="flex flex-grow flex-row gap-3 items-center justify-start shrink-0 relative p-3 border border-gray-200 rounded-xl">
                  <div className="bg-green-100 rounded-full p-3">
                    <svg className="w-6 h-6 relative overflow-visible" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M14.8571 19H2V14.8C2.75776 14.8 3.48449 14.505 4.0203 13.9799C4.55612 13.4548 4.85714 12.7426 4.85714 12C4.85714 11.2574 4.55612 10.5452 4.0203 10.0201C3.48449 9.495 2.75776 9.2 2 9.2V5H14.8571V8.5H16.2857V5H22V9.2C21.2422 9.2 20.5155 9.495 19.9797 10.0201C19.4439 10.5452 19.1429 11.2574 19.1429 12C19.1429 12.7426 19.4439 13.4548 19.9797 13.9799C20.5155 14.505 21.2422 14.8 22 14.8V19H16.2857V15.5H14.8571V19ZM14.8571 9.9V14.1H16.2857V9.9H14.8571Z"
                        fill="#00D085"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-0.5 items-start justify-start">
                    <div className="text-zinc-500 text-xs">Tiket Terjual</div>
                    <div className="text-black font-bold text-base">5.311</div>
                  </div>
                </div>
                <div className="flex flex-grow flex-row gap-3 items-center justify-start shrink-0 relative p-3 border border-gray-200 rounded-xl">
                  <div className="bg-[#EDF5FE] rounded-full p-3">
                    <svg className="fill-blue-600 w-6 h-6 relative overflow-visible" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12.2502 4.6666C11.4043 4.6666 10.9318 5.5066 11.1243 6.13076L9.0535 8.20743C8.8785 8.15493 8.62183 8.15493 8.44683 8.20743L6.95933 6.71993C7.15766 6.09576 6.68516 5.24993 5.8335 5.24993C4.98766 5.24993 4.50933 6.08993 4.70766 6.71993L2.04766 9.3741C1.4235 9.1816 0.583496 9.6541 0.583496 10.4999C0.583496 11.1416 1.1085 11.6666 1.75016 11.6666C2.596 11.6666 3.0685 10.8266 2.876 10.2024L5.53016 7.54243C5.70516 7.59493 5.96183 7.59493 6.13683 7.54243L7.62433 9.02993C7.426 9.65409 7.8985 10.4999 8.75016 10.4999C9.596 10.4999 10.0743 9.65993 9.876 9.02993L11.9527 6.9591C12.5768 7.1516 13.4168 6.6791 13.4168 5.83326C13.4168 5.1916 12.8918 4.6666 12.2502 4.6666Z"
                        fill="#2953F6"
                      />
                      <path
                        d="M8.75016 5.25L9.2985 4.0425L10.5002 3.5L9.2985 2.9575L8.75016 1.75L8.2135 2.9575L7.00016 3.5L8.2135 4.0425L8.75016 5.25ZM2.04183 6.41667L2.3335 5.25L3.50016 4.95833L2.3335 4.66667L2.04183 3.5L1.75016 4.66667L0.583496 4.95833L1.75016 5.25L2.04183 6.41667Z"
                        fill="#2953F6"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-0.5 items-start justify-start">
                    <div className="text-zinc-500 text-xs">Total Konversi</div>
                    <div className="text-black font-bold text-base">12.953</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-start p-5 bg-white rounded-xl w-full h-fit relative">
              <div className="flex flex-col">
                <div className="text-xs text-gray-500">Total Penjualan Saat Ini</div>
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6 relative overflow-visible" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14.8571 19H2V14.8C2.75776 14.8 3.48449 14.505 4.0203 13.9799C4.55612 13.4548 4.85714 12.7426 4.85714 12C4.85714 11.2574 4.55612 10.5452 4.0203 10.0201C3.48449 9.495 2.75776 9.2 2 9.2V5H14.8571V8.5H16.2857V5H22V9.2C21.2422 9.2 20.5155 9.495 19.9797 10.0201C19.4439 10.5452 19.1429 11.2574 19.1429 12C19.1429 12.7426 19.4439 13.4548 19.9797 13.9799C20.5155 14.505 21.2422 14.8 22 14.8V19H16.2857V15.5H14.8571V19ZM14.8571 9.9V14.1H16.2857V9.9H14.8571Z"
                      fill="#00D085"
                    />
                  </svg>
                  <div className="font-bold text-2xl">{tickets.reduce((acc, num) => acc + num, 0)} Tiket / 10000</div>
                </div>
              </div>
              <ChartBarTicket />
            </div>
            <div className="flex flex-col gap-4 items-start p-5 bg-white rounded-xl w-full h-fit relative">
              <div className="flex flex-row gap-3 items-center justify-center shrink-0 relative">
                <div className="bg-[#EDF5FE] rounded-full p-3">
                  <svg className="fill-blue-600 w-6 h-6 relative overflow-visible" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12.2502 4.6666C11.4043 4.6666 10.9318 5.5066 11.1243 6.13076L9.0535 8.20743C8.8785 8.15493 8.62183 8.15493 8.44683 8.20743L6.95933 6.71993C7.15766 6.09576 6.68516 5.24993 5.8335 5.24993C4.98766 5.24993 4.50933 6.08993 4.70766 6.71993L2.04766 9.3741C1.4235 9.1816 0.583496 9.6541 0.583496 10.4999C0.583496 11.1416 1.1085 11.6666 1.75016 11.6666C2.596 11.6666 3.0685 10.8266 2.876 10.2024L5.53016 7.54243C5.70516 7.59493 5.96183 7.59493 6.13683 7.54243L7.62433 9.02993C7.426 9.65409 7.8985 10.4999 8.75016 10.4999C9.596 10.4999 10.0743 9.65993 9.876 9.02993L11.9527 6.9591C12.5768 7.1516 13.4168 6.6791 13.4168 5.83326C13.4168 5.1916 12.8918 4.6666 12.2502 4.6666Z"
                      fill="#2953F6"
                    />
                    <path
                      d="M8.75016 5.25L9.2985 4.0425L10.5002 3.5L9.2985 2.9575L8.75016 1.75L8.2135 2.9575L7.00016 3.5L8.2135 4.0425L8.75016 5.25ZM2.04183 6.41667L2.3335 5.25L3.50016 4.95833L2.3335 4.66667L2.04183 3.5L1.75016 4.66667L0.583496 4.95833L1.75016 5.25L2.04183 6.41667Z"
                      fill="#2953F6"
                    />
                  </svg>
                </div>
                <div className="flex flex-col gap-0.5 items-start justify-start">
                  <div className="text-black font-bold text-base">Conversion Event</div>
                  <div className="text-zinc-500 text-xs">Lihat siapa saja yang tidak & membeli tiket kamu</div>
                </div>
              </div>
              <div className="flex w-full gap-5">
                <div className="flex flex-row w-full items-center justify-between shrink relative p-3 border border-gray-200 rounded-xl">
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col items-start justify-start">
                      <div className="text-zinc-500 text-xs">Konversi dari</div>
                      <div className="text-black font-bold text-base">View ke Order</div>
                    </div>
                    <div className="text-zinc-500 text-xs">Jumlah pemesanan pada tiket Kamu</div>
                  </div>
                  <div className="text-black font-bold text-4xl p-2">38%</div>
                </div>
                <div className="flex flex-row w-full items-center justify-between shrink relative p-3 border border-gray-200 rounded-xl">
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col items-start justify-start">
                      <div className="text-zinc-500 text-xs">Konversi dari</div>
                      <div className="text-black font-bold text-base">Order ke Purchase</div>
                    </div>
                    <div className="text-zinc-500 text-xs">Jumlah pembelian tiket yang telah diselesaikan</div>
                  </div>
                  <div className="text-black font-bold text-4xl p-2">21%</div>
                </div>
              </div>
              <ChartLineCoversion />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsEventPage;
