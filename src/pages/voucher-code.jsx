import Button from "../components/elements/button";
import Navbar from "../components/elements/navbar";
import Sidebar from "../components/elements/sidebar-main-menu";
import { useState } from "react";
import TableVouchercode from "../components/elements/table/table-vouchercode";

// const email = localStorage.getItem('email');

const VoucherCodePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex text-white justify-center items-start rel h-dvh w-full bg-zinc-900 overflow-scroll no-scrollbar">
      <Sidebar isOpen={isSidebarOpen} />
      {/* <div>{email}</div> */}
      <div className="flex flex-col w-full h-dvh items-center rel z-50">
        <Navbar onToggleSidebar={toggleSidebar} />
        <div className="bg-[#F5F5F9] flex flex-col p-8 gap-5 w-full h-max">
          <div className="bg-white rounded-xl p-5 flex flex-row items-center justify-between">
            <div className="flex flex-row gap-3 items-center justify-center shrink-0 relative">
              <div className="bg-[#EDF5FE] rounded-full p-3">
                <svg
                  className="w-6 h-6 relative overflow-visible"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2 15.3V19.5H22V15.3C21.2422 15.3 20.5155 15.005 19.9797 14.4799C19.4439 13.9548 19.1429 13.2426 19.1429 12.5C19.1429 11.7574 19.4439 11.0452 19.9797 10.5201C20.5155 9.995 21.2422 9.7 22 9.7V5.5H2V9.7C2.75776 9.7 3.48449 9.995 4.02031 10.5201C4.55612 11.0452 4.85714 11.7574 4.85714 12.5C4.85714 13.2426 4.55612 13.9548 4.02031 14.4799C3.48449 15.005 2.75776 15.3 2 15.3ZM10.8714 9.95962C10.8714 9.16999 10.2413 8.53988 9.45962 8.53988C8.66999 8.53988 8.03988 9.16999 8.03988 9.95962C8.03988 10.7413 8.66999 11.3714 9.45962 11.3714C9.83404 11.3714 10.1931 11.2226 10.4579 10.9579C10.7226 10.6931 10.8714 10.334 10.8714 9.95962ZM13.1446 15.0563C13.1446 15.838 13.7747 16.4761 14.5563 16.4761C14.9329 16.4761 15.294 16.3265 15.5602 16.0602C15.8265 15.794 15.9761 15.4329 15.9761 15.0563C15.9761 14.2747 15.338 13.6446 14.5563 13.6446C14.1819 13.6446 13.8228 13.7933 13.5581 14.0581C13.2933 14.3228 13.1446 14.6819 13.1446 15.0563ZM8 15.3036L9.19641 16.5L16 9.69641L14.8036 8.5L8 15.3036Z"
                    fill="#2953F6"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-0.5 items-start justify-start">
                <div className="text-black font-bold text-base">
                  Voucher Code
                </div>
                <div className="text-zinc-500 text-xs">
                  Perluas promosi tiket Kamu dengan "Kode Voucher" yang
                  memungkinkan pembeli <br /> mendapatkan potongan harga saat
                  melakukan pembayaran tiket.
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
              Buat Voucher
            </Button>
          </div>
          <TableVouchercode />
        </div>
      </div>
    </div>
  );
};

export default VoucherCodePage;
