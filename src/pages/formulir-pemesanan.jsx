import Button from "../components/elements/button";
import Navbar from "../components/elements/navbar";
import { useParams } from "react-router-dom";
import { useState } from "react";
import SidebarEventMenu from "../components/elements/sidebar-event-menu";
import TableFormulir from "../components/elements/table/table-formulir";

const products = [
  {
    id: 1,
    image: "/images/img-card-event-karaoke.jpg",
    nameTicket: "OTW Festival",
    sold: 2.564,
    views: 12.345,
  },
];

const FormulirPemesananPage = () => {
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
        <div className="bg-[#F5F5F9] flex flex-col p-8 gap-5 w-full h-full">
          <div className="bg-white rounded-xl p-5 flex flex-row items-center justify-between">
            <div className="flex flex-row gap-3 items-center justify-center shrink-0 relative">
              <div className="bg-[#EDF5FE] rounded-full p-3">
                <svg
                  className="fill-blue-700 shrink-0 w-6 h-6 relative overflow-visible"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill=""
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.0833 1.75H2.91667C2.275 1.75 1.75 2.275 1.75 2.91667V11.0833C1.75 11.725 2.275 12.25 2.91667 12.25H11.0833C11.725 12.25 12.25 11.725 12.25 11.0833V2.91667C12.25 2.275 11.725 1.75 11.0833 1.75ZM4.08333 4.08333H5.25V5.25H4.08333V4.08333ZM4.08333 6.41667H5.25V7.58333H4.08333V6.41667ZM4.08333 8.75H5.25V9.91667H4.08333V8.75ZM9.91667 9.91667H6.41667V8.75H9.91667V9.91667ZM9.91667 7.58333H6.41667V6.41667H9.91667V7.58333ZM9.91667 5.25H6.41667V4.08333H9.91667V5.25Z"
                    fill=""
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-0.5 items-start justify-start">
                <div className="text-black font-bold text-base">
                  Formulir Pemesanan
                </div>
                <div className="text-zinc-500 text-xs">
                  Pembeli perlu mengisi formulir pemesanan saat memmesan tiket.
                  Atur pertanyaan mana <br /> yang hanya untuk membeli dan mana
                  yang untuk masing-masing pemegang tiket.
                </div>
              </div>
            </div>
            <Button variant="primary" size="sm">
              <svg
                className="shrink-0 w-4 h-4 relative overflow-visible"
                viewBox="0 0 14 14"
                fill=""
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.4998 7.58334H7.58317V10.5C7.58317 10.8208 7.32067 11.0833 6.99984 11.0833C6.679 11.0833 6.4165 10.8208 6.4165 10.5V7.58334H3.49984C3.179 7.58334 2.9165 7.32084 2.9165 7.00001C2.9165 6.67917 3.179 6.41667 3.49984 6.41667H6.4165V3.50001C6.4165 3.17917 6.679 2.91667 6.99984 2.91667C7.32067 2.91667 7.58317 3.17917 7.58317 3.50001V6.41667H10.4998C10.8207 6.41667 11.0832 6.67917 11.0832 7.00001C11.0832 7.32084 10.8207 7.58334 10.4998 7.58334Z"
                  fill="white"
                />
              </svg>
              Tambahkan Data
            </Button>
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col items-start p-5 gap-5 bg-white rounded-xl">
              <div className="flex flex-row gap-2 items-center justify-center">
                <div className="font-bold text-base">
                  Pertanyaan Hanya Untuk Pembeli
                </div>
                <svg
                  className="fill-blue-700 shrink-0 w-4 h-4 relative overflow-visible"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill=""
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 2C4.24 2 2 4.24 2 7C2 9.76 4.24 12 7 12C9.76 12 12 9.76 12 7C12 4.24 9.76 2 7 2ZM7 9.5C6.725 9.5 6.5 9.275 6.5 9V7C6.5 6.725 6.725 6.5 7 6.5C7.275 6.5 7.5 6.725 7.5 7V9C7.5 9.275 7.275 9.5 7 9.5ZM7.5 5.5H6.5V4.5H7.5V5.5Z"
                    fill=""
                  />
                </svg>
              </div>
              <TableFormulir />
            </div>
            <div className="flex flex-col items-start p-5 gap-5 bg-white rounded-xl">
              <div className="flex flex-row gap-2 items-center justify-center">
                <div className="font-bold text-base">
                  Pertanyaan Untuk Masing-masing Pemegang Tiket
                </div>
                <svg
                  className="fill-blue-700 shrink-0 w-4 h-4 relative overflow-visible"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill=""
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 2C4.24 2 2 4.24 2 7C2 9.76 4.24 12 7 12C9.76 12 12 9.76 12 7C12 4.24 9.76 2 7 2ZM7 9.5C6.725 9.5 6.5 9.275 6.5 9V7C6.5 6.725 6.725 6.5 7 6.5C7.275 6.5 7.5 6.725 7.5 7V9C7.5 9.275 7.275 9.5 7 9.5ZM7.5 5.5H6.5V4.5H7.5V5.5Z"
                    fill=""
                  />
                </svg>
              </div>
              <TableFormulir />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormulirPemesananPage;
