import Button from '../components/elements/button';
import InputForm from '../components/elements/input';
import Input from '../components/elements/input/input';
import Navbar from '../components/elements/navbar';
import { useParams } from 'react-router-dom';
import TextArea from '../components/elements/textarea';
import DropdownSelect from '../components/elements/select';
import { useState } from 'react';
import SidebarEventMenu from '../components/elements/sidebar-event-menu';
import Card from '../components/fragments/card-ticket';
import TableGuest from '../components/elements/table/table-guest';
import ChartGuest from '../components/elements/chart/chart-guest';

const products = [
  {
    id: 1,
    image: '/images/img-card-event-karaoke.jpg',
    nameTicket: 'OTW Festival',
    sold: 2.564,
    views: 12.345,
  },
];

const GuestAndCheckinPage = () => {
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
        <div className="bg-[#F5F5F9] flex flex-col p-8 gap-5 w-full h-max">
          <div className="bg-white rounded-xl p-5 flex flex-row items-center justify-between">
            <div className="flex flex-row gap-3 items-center justify-center shrink-0 relative">
              <div className="bg-[#EDF5FE] rounded-full p-3">
                <svg className="fill-blue-600 shrink-0 w-6 h-6" width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.62508 5.83334C3.43081 5.83334 4.08341 5.18073 4.08341 4.37501C4.08341 3.56928 3.43081 2.91667 2.62508 2.91667C1.81935 2.91667 1.16675 3.56928 1.16675 4.37501C1.16675 5.18073 1.81935 5.83334 2.62508 5.83334Z" fill="#2953F6" />
                  <path d="M2.62508 10.5C3.43081 10.5 4.08341 9.8474 4.08341 9.04167C4.08341 8.23594 3.43081 7.58334 2.62508 7.58334C1.81935 7.58334 1.16675 8.23594 1.16675 9.04167C1.16675 9.8474 1.81935 10.5 2.62508 10.5Z" fill="#2953F6" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M12.8334 5.25001H5.83342V3.50001H12.8334V5.25001Z" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M12.8334 9.91667H5.83342V8.16667H12.8334V9.91667Z" />
                </svg>
              </div>
              <div className="flex flex-col gap-0.5 items-start justify-start">
                <div className="text-black font-bold text-base">Guest & Checkin</div>
                <div className="text-zinc-500 text-xs">Detail list peserta pada event </div>
              </div>
            </div>
            <div className="flex gap-5">
              <DropdownSelect />
              <DropdownSelect />
              <Button variant="primary" size="sm">
                <svg className="shrink-0 w-4 h-4 relative overflow-visible" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.0599 6H9.99992V2.66667C9.99992 2.3 9.69992 2 9.33325 2H6.66659C6.29992 2 5.99992 2.3 5.99992 2.66667V6H4.93992C4.34659 6 4.04659 6.72 4.46659 7.14L7.52659 10.2C7.78659 10.46 8.20659 10.46 8.46659 10.2L11.5266 7.14C11.9466 6.72 11.6533 6 11.0599 6ZM3.33325 12.6667C3.33325 13.0333 3.63325 13.3333 3.99992 13.3333H11.9999C12.3666 13.3333 12.6666 13.0333 12.6666 12.6667C12.6666 12.3 12.3666 12 11.9999 12H3.99992C3.63325 12 3.33325 12.3 3.33325 12.6667Z" fill="white" />
                </svg>
                Download Excel
              </Button>
            </div>
          </div>
          <div className="flex w-full gap-5">
            <div className="flex flex-col gap-5 min-w-80 h-fit items-start justify-start bg-white rounded-xl p-5 sticky top-[113px]">
              <div className="flex flex-row gap-3 items-center justify-start">
                <div className="bg-[#EDF5FE] rounded-full p-3">
                  <svg className="fill-blue-700 shrink-0 w-6 h-6" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.33325 6.41667C10.3016 6.41667 11.0774 5.635 11.0774 4.66667C11.0774 3.69834 10.3016 2.91667 9.33325 2.91667C8.36492 2.91667 7.58325 3.69834 7.58325 4.66667C7.58325 5.635 8.36492 6.41667 9.33325 6.41667ZM4.66659 6.41667C5.63492 6.41667 6.41075 5.635 6.41075 4.66667C6.41075 3.69834 5.63492 2.91667 4.66659 2.91667C3.69825 2.91667 2.91659 3.69834 2.91659 4.66667C2.91659 5.635 3.69825 6.41667 4.66659 6.41667ZM4.66659 7.58334C3.30742 7.58334 0.583252 8.26584 0.583252 9.625V10.5C0.583252 10.8208 0.845752 11.0833 1.16659 11.0833H8.16659C8.48742 11.0833 8.74992 10.8208 8.74992 10.5V9.625C8.74992 8.26584 6.02575 7.58334 4.66659 7.58334ZM9.33325 7.58334C9.16409 7.58334 8.97159 7.59501 8.76742 7.61251C8.77909 7.61834 8.78492 7.63001 8.79075 7.63584C9.45575 8.12 9.91659 8.7675 9.91659 9.625V10.5C9.91659 10.7042 9.87575 10.9025 9.81159 11.0833H12.8333C13.1541 11.0833 13.4166 10.8208 13.4166 10.5V9.625C13.4166 8.26584 10.6924 7.58334 9.33325 7.58334Z" fill="#2953F6" />
                  </svg>
                </div>
                <div className="flex flex-col gap-0.5 items-start justify-start">
                  <div className="text-black font-bold text-base">Jumlah Kehadiran</div>
                  <div className="text-zinc-500 text-xs">Peserta yang ikut event.</div>
                </div>
              </div>
              <div className="flex w-full h-full relative">
                <div className="flex flex-col w-fit items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="text-xs text-gray-500">Total Kehadiran</div>
                  <div className="font-bold text-3xl">60%</div>
                </div>
                <ChartGuest />
              </div>
              <div className="flex flex-col gap-3 w-full">
                <div className="flex items-center w-full justify-between p-3 rounded-xl bg-[#EDF5FE]">
                  <div className="flex flex-row items-center gap-1">
                    <div className="bg-blue-600 rounded-full p-1">
                      <svg className="w-2.5 h-2.5 relative overflow-visible" width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.75008 5.875C6.67091 5.875 7.41675 5.12916 7.41675 4.20833C7.41675 3.2875 6.67091 2.54166 5.75008 2.54166C4.82925 2.54166 4.08341 3.2875 4.08341 4.20833C4.08341 5.12916 4.82925 5.875 5.75008 5.875ZM5.75008 6.70833C4.63758 6.70833 2.41675 7.26666 2.41675 8.375V8.79166C2.41675 9.02083 2.60425 9.20833 2.83341 9.20833H8.66675C8.89592 9.20833 9.08342 9.02083 9.08342 8.79166V8.375C9.08342 7.26666 6.86258 6.70833 5.75008 6.70833Z" fill="white" />
                      </svg>
                    </div>
                    <div className="text-xs">Total Peserta</div>
                  </div>
                  <div className="font-bold text-base">9.432</div>
                </div>
                <div className="flex items-center w-full justify-between p-3 rounded-xl bg-green-100">
                  <div className="flex flex-row items-center gap-1">
                    <div className="bg-green-600 rounded-full p-1">
                      <svg className="w-2.5 h-2.5 relative overflow-visible" width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.75 9.20834L5.39167 8.85001C5.2749 8.73334 5.18242 8.59468 5.11958 8.44204C5.05674 8.28941 5.02478 8.12583 5.02555 7.96077C5.02633 7.7957 5.05982 7.63243 5.12409 7.4804C5.18837 7.32836 5.28214 7.19057 5.4 7.07501L5.75 6.73334C5.61166 6.71756 5.47257 6.70921 5.33333 6.70834C4.22083 6.70834 2 7.26667 2 8.37501V9.20834H5.75ZM5.33333 5.87501C6.25417 5.87501 7 5.12917 7 4.20834C7 3.28751 6.25417 2.54167 5.33333 2.54167C4.4125 2.54167 3.66667 3.28751 3.66667 4.20834C3.66667 5.12917 4.4125 5.87501 5.33333 5.87501ZM7.49167 9.11667C7.32917 9.27917 7.0625 9.27917 6.9 9.11667L6.0375 8.24584C5.96142 8.16866 5.91876 8.06463 5.91876 7.95626C5.91876 7.84788 5.96142 7.74385 6.0375 7.66667L6.04167 7.66251C6.0798 7.62391 6.12522 7.59326 6.17529 7.57234C6.22535 7.55143 6.27907 7.54066 6.33333 7.54066C6.38759 7.54066 6.44131 7.55143 6.49138 7.57234C6.54145 7.59326 6.58687 7.62391 6.625 7.66251L7.19583 8.23334L9.04167 6.37501C9.08021 6.33638 9.126 6.30573 9.17641 6.28482C9.22681 6.26392 9.28085 6.25315 9.33542 6.25315C9.38999 6.25315 9.44402 6.26392 9.49443 6.28482C9.54483 6.30573 9.59062 6.33638 9.62917 6.37501L9.63333 6.37917C9.70942 6.45635 9.75207 6.56038 9.75207 6.66876C9.75207 6.77713 9.70942 6.88116 9.63333 6.95834L7.49167 9.11667Z" fill="white" />
                      </svg>
                    </div>
                    <div className="text-xs">Sudah Hadir</div>
                  </div>
                  <div className="font-bold text-base">6.211</div>
                </div>
                <div className="flex items-center w-full justify-between p-3 rounded-xl bg-yellow-100">
                  <div className="flex flex-row items-center gap-1">
                    <div className="bg-orange-400 rounded-full p-1">
                      <svg className="w-2.5 h-2.5 relative overflow-visible" width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.75008 5.25001C6.67091 5.25001 7.41675 4.50417 7.41675 3.58334C7.41675 2.66251 6.67091 1.91667 5.75008 1.91667C4.82925 1.91667 4.08341 2.66251 4.08341 3.58334C4.08341 4.50417 4.82925 5.25001 5.75008 5.25001ZM5.75008 2.75001C6.20841 2.75001 6.58341 3.12501 6.58341 3.58334C6.58341 4.04167 6.20841 4.41667 5.75008 4.41667C5.29175 4.41667 4.91675 4.04167 4.91675 3.58334C4.91675 3.12501 5.29175 2.75001 5.75008 2.75001ZM5.75008 5.66667C4.63758 5.66667 2.41675 6.225 2.41675 7.33334V8.16667C2.41675 8.39584 2.60425 8.58334 2.83341 8.58334H8.66675C8.89591 8.58334 9.08341 8.39584 9.08341 8.16667V7.33334C9.08341 6.225 6.86258 5.66667 5.75008 5.66667ZM8.25008 7.75H3.25008V7.33751C3.33341 7.03751 4.62508 6.5 5.75008 6.5C6.87508 6.5 8.16675 7.0375 8.25008 7.33334V7.75Z" fill="white" />
                      </svg>
                    </div>
                    <div className="text-xs">Belum Hadir</div>
                  </div>
                  <div className="font-bold text-base">3.221</div>
                </div>
              </div>
            </div>
            <TableGuest />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestAndCheckinPage;
