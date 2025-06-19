import Button from "../components/elements/button";
import InputForm from "../components/elements/input";
import Input from "../components/elements/input/input";
import Navbar from "../components/elements/navbar";
import { useParams } from "react-router-dom";
import TextArea from "../components/elements/textarea";
import DropdownSelect from "../components/elements/select";
import { useState } from "react";
import SidebarEventMenu from "../components/elements/sidebar-event-menu";
import Card from "../components/fragments/card-ticket";

const products = [
  {
    id: 1,
    image: "/images/img-card-event-karaoke.jpg",
    nameTicket: "OTW Festival",
    sold: 2.564,
    views: 12.345,
  },
];

const SalesReportPage = () => {
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
        <div className="bg-[#F5F5F9] flex flex-col p-8 gap-5 w-full h-fit">
          <div className="flex gap-5">
            <div className="flex flex-col w-[324px] justify-center items-start bg-white p-5 rounded-xl gap-5">
              <div className="flex flex-col gap-1">
                <div className="text-black font-bold text-base">
                  Total Pendapatan
                </div>
                <div className="text-zinc-500 text-xs">
                  Semua pendapatan kamu pada penjualan tiket dievent ini secara
                  keseluruhan.
                </div>
              </div>
              <div className="flex w-full justify-center items-center py-4 px-6 bg-[#EDF5FE] text-blue-600 font-bold text-2xl rounded-xl border-custom-dashed-blue">
                Rp. 18.231.500.000
              </div>
              <div className="flex w-full gap-3 justify-between">
                <div className="flex w-full items-center justify-between p-4 bg-[#F5F5F9] rounded-xl">
                  <div className="flex items-center gap-1">
                    <svg
                      className="shrink-0 w-4 h-4 relative overflow-visible"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.90492 12.6666H1.3335V9.86665C1.83867 9.86665 2.32315 9.66998 2.68037 9.31991C3.03758 8.96984 3.23826 8.49505 3.23826 7.99998C3.23826 7.50491 3.03758 7.03011 2.68037 6.68005C2.32315 6.32998 1.83867 6.13331 1.3335 6.13331V3.33331H9.90492V5.66665H10.8573V3.33331H14.6668V6.13331C14.1617 6.13331 13.6772 6.32998 13.32 6.68005C12.9627 7.03011 12.7621 7.50491 12.7621 7.99998C12.7621 8.49505 12.9627 8.96984 13.32 9.31991C13.6772 9.66998 14.1617 9.86665 14.6668 9.86665V12.6666H10.8573V10.3333H9.90492V12.6666ZM9.90492 6.59998V9.39998H10.8573V6.59998H9.90492Z"
                        fill="#00D085"
                      />
                    </svg>
                    <di className="text-[10px]">Kuota</di>
                  </div>
                  <div className="font-bold text-xs">13.000</div>
                </div>
                <div className="flex w-full items-center justify-between p-4 bg-[#F5F5F9] rounded-xl">
                  <div className="flex items-center gap-1">
                    <svg
                      className="shrink-0 w-4 h-4 relative overflow-visible"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.23159 10.2899C6.47275 10.2899 8.28956 8.47311 8.28956 6.23195C8.28956 5.50474 8.09827 4.82221 7.76327 4.23192H10.5256V6.26091H11.3537V4.23192H14.6663V6.66671C14.2271 6.66671 13.8058 6.83772 13.4952 7.14213C13.1845 7.44653 13.01 7.8594 13.01 8.2899C13.01 8.72039 13.1845 9.13326 13.4952 9.43766C13.8058 9.74207 14.2271 9.91308 14.6663 9.91308V12.3479H11.3537V10.3189H10.5256V12.3479H3.07214V10.1219C3.43952 10.2312 3.8287 10.2899 4.23159 10.2899ZM11.3537 9.50729H10.5256V7.0725H11.3537V9.50729Z"
                        fill="#2953F6"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.23156 9.13048C5.83238 9.13048 7.13011 7.83275 7.13011 6.23192C7.13011 4.6311 5.83238 3.33337 4.23156 3.33337C2.63073 3.33337 1.33301 4.6311 1.33301 6.23192C1.33301 7.83275 2.63073 9.13048 4.23156 9.13048ZM5.11 5.25592L3.77675 6.61133L3.14653 5.97063L2.64941 6.47601L3.77675 7.62208L5.60712 5.7613L5.11 5.25592Z"
                        fill="#2953F6"
                      />
                    </svg>
                    <di className="text-[10px]">Total</di>
                  </div>
                  <div className="font-bold text-xs">13.000</div>
                </div>
              </div>
              <div className="flex flex-col gap-3 w-full items-center justify-between">
                <div className="flex w-full items-center justify-between p-4 border-[1px] border-[#E4E4E4] rounded-xl">
                  <div className="flex items-center gap-2">
                    <svg
                      className="rounded-[29px] shrink-0 w-[38px] h-[38px] relative overflow-visible"
                      width="38"
                      height="38"
                      viewBox="0 0 38 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="38" height="38" rx="19" fill="#FFE2EB" />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.2915 13.0625V22.8394H13.0113V19.0581H13.6168L15.8856 22.8394H18.9712L16.5337 18.8158C17.0814 18.6436 17.5356 18.3742 17.874 17.9921C18.3221 17.4861 18.5272 16.828 18.5272 16.0603C18.5272 15.1075 18.2296 14.3293 17.579 13.8014C16.9442 13.2865 16.0365 13.0625 14.9241 13.0625H10.2915ZM14.8056 16.7689H13.0113V15.3517H14.7744C15.1888 15.3517 15.4424 15.4386 15.5918 15.5551L15.5943 15.557C15.7318 15.6625 15.8137 15.8127 15.8137 16.0666C15.8137 16.3168 15.7334 16.4661 15.5984 16.5715C15.4524 16.6845 15.2064 16.7689 14.8056 16.7689Z"
                        fill="#ED1859"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.5474 16.571V26.3479H22.2671V22.7101H23.868C25.0641 22.7101 26.0321 22.4798 26.7026 21.9513L26.704 21.9502C27.3879 21.406 27.7082 20.6145 27.7082 19.6437C27.7082 18.6745 27.4112 17.8814 26.7621 17.3377C26.1285 16.8034 25.217 16.571 24.0989 16.571H19.5474ZM24.9947 19.6499C24.9947 19.9247 24.9103 20.0959 24.7717 20.2161C24.6278 20.3369 24.3841 20.4272 23.9804 20.4272H22.2671V18.8602H23.9492C24.4007 18.8602 24.6411 18.9634 24.7638 19.0838L24.769 19.0888C24.9165 19.2284 24.9947 19.4041 24.9947 19.6499Z"
                        fill="#ED1859"
                      />
                    </svg>
                    <div className="text-xs">Total Promo</div>
                  </div>
                  <div className="font-bold text-xs">13.000</div>
                </div>
                <div className="flex w-full items-center justify-between p-4 border-[1px] border-[#E4E4E4] rounded-xl">
                  <div className="flex items-center gap-2">
                    <svg
                      className="rounded-[29px] shrink-0 w-[38px] h-[38px] relative overflow-visible"
                      width="38"
                      height="38"
                      viewBox="0 0 38 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="38" height="38" rx="19" fill="#FFE2EB" />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.2915 13.0625V22.8394H13.0113V19.0581H13.6168L15.8856 22.8394H18.9712L16.5337 18.8158C17.0814 18.6436 17.5356 18.3742 17.874 17.9921C18.3221 17.4861 18.5272 16.828 18.5272 16.0603C18.5272 15.1075 18.2296 14.3293 17.579 13.8014C16.9442 13.2865 16.0365 13.0625 14.9241 13.0625H10.2915ZM14.8056 16.7689H13.0113V15.3517H14.7744C15.1888 15.3517 15.4424 15.4386 15.5918 15.5551L15.5943 15.557C15.7318 15.6625 15.8137 15.8127 15.8137 16.0666C15.8137 16.3168 15.7334 16.4661 15.5984 16.5715C15.4524 16.6845 15.2064 16.7689 14.8056 16.7689Z"
                        fill="#ED1859"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.5474 16.571V26.3479H22.2671V22.7101H23.868C25.0641 22.7101 26.0321 22.4798 26.7026 21.9513L26.704 21.9502C27.3879 21.406 27.7082 20.6145 27.7082 19.6437C27.7082 18.6745 27.4112 17.8814 26.7621 17.3377C26.1285 16.8034 25.217 16.571 24.0989 16.571H19.5474ZM24.9947 19.6499C24.9947 19.9247 24.9103 20.0959 24.7717 20.2161C24.6278 20.3369 24.3841 20.4272 23.9804 20.4272H22.2671V18.8602H23.9492C24.4007 18.8602 24.6411 18.9634 24.7638 19.0838L24.769 19.0888C24.9165 19.2284 24.9947 19.4041 24.9947 19.6499Z"
                        fill="#ED1859"
                      />
                    </svg>
                    <div className="text-xs">Total Promo</div>
                  </div>
                  <div className="font-bold text-xs">13.000</div>
                </div>
                <div className="flex w-full items-center justify-between p-4 border-[1px] border-[#E4E4E4] rounded-xl">
                  <div className="flex items-center gap-2">
                    <svg
                      className="rounded-[29px] shrink-0 w-[38px] h-[38px] relative overflow-visible"
                      width="38"
                      height="38"
                      viewBox="0 0 38 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="38" height="38" rx="19" fill="#FFE2EB" />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.2915 13.0625V22.8394H13.0113V19.0581H13.6168L15.8856 22.8394H18.9712L16.5337 18.8158C17.0814 18.6436 17.5356 18.3742 17.874 17.9921C18.3221 17.4861 18.5272 16.828 18.5272 16.0603C18.5272 15.1075 18.2296 14.3293 17.579 13.8014C16.9442 13.2865 16.0365 13.0625 14.9241 13.0625H10.2915ZM14.8056 16.7689H13.0113V15.3517H14.7744C15.1888 15.3517 15.4424 15.4386 15.5918 15.5551L15.5943 15.557C15.7318 15.6625 15.8137 15.8127 15.8137 16.0666C15.8137 16.3168 15.7334 16.4661 15.5984 16.5715C15.4524 16.6845 15.2064 16.7689 14.8056 16.7689Z"
                        fill="#ED1859"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.5474 16.571V26.3479H22.2671V22.7101H23.868C25.0641 22.7101 26.0321 22.4798 26.7026 21.9513L26.704 21.9502C27.3879 21.406 27.7082 20.6145 27.7082 19.6437C27.7082 18.6745 27.4112 17.8814 26.7621 17.3377C26.1285 16.8034 25.217 16.571 24.0989 16.571H19.5474ZM24.9947 19.6499C24.9947 19.9247 24.9103 20.0959 24.7717 20.2161C24.6278 20.3369 24.3841 20.4272 23.9804 20.4272H22.2671V18.8602H23.9492C24.4007 18.8602 24.6411 18.9634 24.7638 19.0838L24.769 19.0888C24.9165 19.2284 24.9947 19.4041 24.9947 19.6499Z"
                        fill="#ED1859"
                      />
                    </svg>
                    <div className="text-xs">Total Promo</div>
                  </div>
                  <div className="font-bold text-xs">13.000</div>
                </div>
                <div className="flex w-full items-center justify-between p-4 border-[1px] border-[#E4E4E4] rounded-xl">
                  <div className="flex items-center gap-2">
                    <svg
                      className="rounded-[29px] shrink-0 w-[38px] h-[38px] relative overflow-visible"
                      width="38"
                      height="38"
                      viewBox="0 0 38 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="38" height="38" rx="19" fill="#FFE2EB" />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.2915 13.0625V22.8394H13.0113V19.0581H13.6168L15.8856 22.8394H18.9712L16.5337 18.8158C17.0814 18.6436 17.5356 18.3742 17.874 17.9921C18.3221 17.4861 18.5272 16.828 18.5272 16.0603C18.5272 15.1075 18.2296 14.3293 17.579 13.8014C16.9442 13.2865 16.0365 13.0625 14.9241 13.0625H10.2915ZM14.8056 16.7689H13.0113V15.3517H14.7744C15.1888 15.3517 15.4424 15.4386 15.5918 15.5551L15.5943 15.557C15.7318 15.6625 15.8137 15.8127 15.8137 16.0666C15.8137 16.3168 15.7334 16.4661 15.5984 16.5715C15.4524 16.6845 15.2064 16.7689 14.8056 16.7689Z"
                        fill="#ED1859"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.5474 16.571V26.3479H22.2671V22.7101H23.868C25.0641 22.7101 26.0321 22.4798 26.7026 21.9513L26.704 21.9502C27.3879 21.406 27.7082 20.6145 27.7082 19.6437C27.7082 18.6745 27.4112 17.8814 26.7621 17.3377C26.1285 16.8034 25.217 16.571 24.0989 16.571H19.5474ZM24.9947 19.6499C24.9947 19.9247 24.9103 20.0959 24.7717 20.2161C24.6278 20.3369 24.3841 20.4272 23.9804 20.4272H22.2671V18.8602H23.9492C24.4007 18.8602 24.6411 18.9634 24.7638 19.0838L24.769 19.0888C24.9165 19.2284 24.9947 19.4041 24.9947 19.6499Z"
                        fill="#ED1859"
                      />
                    </svg>
                    <div className="text-xs">Total Promo</div>
                  </div>
                  <div className="font-bold text-xs">13.000</div>
                </div>
              </div>
              <div className="flex w-full items-center gap-1 px-2 py-[6px] bg-[#EDF5FE] rounded-full">
                <svg
                  className="shrink-0 w-3 h-3 relative overflow-visible"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 1C3.24 1 1 3.24 1 6C1 8.76 3.24 11 6 11C8.76 11 11 8.76 11 6C11 3.24 8.76 1 6 1ZM6 8.5C5.725 8.5 5.5 8.275 5.5 8V6C5.5 5.725 5.725 5.5 6 5.5C6.275 5.5 6.5 5.725 6.5 6V8C6.5 8.275 6.275 8.5 6 8.5ZM6.5 4.5H5.5V3.5H6.5V4.5Z"
                    fill="#2953F6"
                  />
                </svg>
                <div className="text-[8px] text-blue-600">
                  Total pendapatan include potongan biaya yang tertera diatas.
                </div>
              </div>
            </div>
            <div>Test Edit Nvim</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesReportPage;
