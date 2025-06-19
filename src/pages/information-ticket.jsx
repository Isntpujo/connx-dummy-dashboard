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
import CardDetailTicket from "../components/elements/card-detail-ticket";

const products = [
  {
    id: 1,
    image: "/images/img-card-event-karaoke.jpg",
    nameTicket: "OTW Festival",
    sold: 2.564,
    views: 12.345,
  },
];

const InformationTicketPage = () => {
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
          {/* <div className="bg-white rounded-xl p-5 flex flex-row items-center justify-between">
            <div className="flex flex-row gap-3 items-center justify-center shrink-0 relative">
              <svg className="rounded-[70px] shrink-0 w-12 h-12 relative overflow-visible" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" rx="24" fill="#EDF5FE" />
                <path
                  d="M34 22.7409V22.172C34 21.4259 33.5636 20.7358 32.8818 20.456C29.5636 19.0756 26.6909 16.7907 25.1727 15.4477C24.5 14.8508 23.5 14.8508 22.8273 15.4477C21.3 16.7907 18.4364 19.0663 15.1182 20.456C14.7857 20.5942 14.5014 20.8317 14.302 21.1377C14.1027 21.4436 13.9975 21.804 14 22.172V22.7409C14 24.1306 14.8455 25.3057 16.0364 25.7813C16.0091 27.3482 15.891 29.0922 15.5637 30.715C15.3273 31.8902 16.1637 33 17.3364 33H30.6727C31.8455 33 32.6818 31.8902 32.4455 30.715C32.1182 29.0829 31.9909 27.3389 31.9727 25.7813C33.1545 25.3057 34 24.1306 34 22.7409ZM24 16.8746C25.2091 17.9378 27.1727 19.5233 29.5546 20.8756H18.4455C20.8273 19.5233 22.7909 17.9378 24 16.8746ZM24.9091 22.7409H27.6364C27.6364 23.515 27.0273 24.1399 26.2727 24.1399C25.5182 24.1399 24.9091 23.515 24.9091 22.7409ZM21.7273 24.1399C20.9728 24.1399 20.3637 23.515 20.3637 22.7409H23.0909C23.0909 23.515 22.4818 24.1399 21.7273 24.1399ZM18.5455 22.7409C18.5455 23.515 17.9364 24.1399 17.1819 24.1399C16.4273 24.1399 15.8182 23.515 15.8182 22.7409H18.5455ZM17.3273 31.1347C17.6819 29.4 17.8182 27.572 17.8455 25.9306C18.4637 25.7907 19.0182 25.4736 19.4455 25.0166C19.6728 25.2497 19.9364 25.4363 20.2182 25.5948C20.1273 27.3389 19.9819 29.3254 19.7455 31.1254H17.3273V31.1347ZM21.5909 31.1347C21.8091 29.428 21.9455 27.6093 22.0273 25.9772C22.7909 25.9026 23.4909 25.5575 24 25.0259C24.5091 25.5575 25.2 25.9026 25.9727 25.9772C26.0637 27.6093 26.1909 29.428 26.4091 31.1347H21.5909ZM28.2455 31.1347C28 29.3254 27.8546 27.3389 27.7727 25.6041C28.0546 25.4456 28.3273 25.2591 28.5455 25.0259C28.9727 25.4736 29.5273 25.8 30.1455 25.9399C30.1727 27.5813 30.3091 29.4093 30.6636 31.144H28.2455V31.1347ZM30.8182 24.1399C30.0636 24.1399 29.4546 23.515 29.4546 22.7409H32.1818C32.1818 23.515 31.5727 24.1399 30.8182 24.1399Z"
                  fill="#2953F6"
                />
              </svg>
              <div className="flex flex-col gap-0.5 items-start justify-start">
                <div className="text-black text-xs bg-gray-200 py-0.5 px-3 rounded-full">Draft</div>
                <div className="text-black font-bold ">{nameTicket}</div>
              </div>
            </div>
            <div className="flex flex-row items-center gap-2">
              <Button color="primary" size="sm">
                <svg className="w-3.5 h-3.5 relative overflow-visible" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.5 11.0833H3.5C3.17917 11.0833 2.91667 10.8208 2.91667 10.5V3.5C2.91667 3.17917 3.17917 2.91667 3.5 2.91667H6.41667C6.7375 2.91667 7 2.65417 7 2.33333C7 2.0125 6.7375 1.75 6.41667 1.75H2.91667C2.60725 1.75 2.3105 1.87292 2.09171 2.09171C1.87292 2.3105 1.75 2.60725 1.75 2.91667V11.0833C1.75 11.725 2.275 12.25 2.91667 12.25H11.0833C11.725 12.25 12.25 11.725 12.25 11.0833V7.58333C12.25 7.2625 11.9875 7 11.6667 7C11.3458 7 11.0833 7.2625 11.0833 7.58333V10.5C11.0833 10.8208 10.8208 11.0833 10.5 11.0833ZM8.16667 2.33333C8.16667 2.65417 8.42917 2.91667 8.75 2.91667H10.2608L4.935 8.2425C4.82593 8.35157 4.76465 8.4995 4.76465 8.65375C4.76465 8.808 4.82593 8.95593 4.935 9.065C5.04407 9.17407 5.192 9.23535 5.34625 9.23535C5.5005 9.23535 5.64843 9.17407 5.7575 9.065L11.0833 3.73917V5.25C11.0833 5.57083 11.3458 5.83333 11.6667 5.83333C11.9875 5.83333 12.25 5.57083 12.25 5.25V1.75H8.75C8.42917 1.75 8.16667 2.0125 8.16667 2.33333Z"
                    fill="white"
                  />
                </svg>
                Lihat di Web
              </Button>
              <button className="bg-[#FFE1EA] p-4 rounded-full">
                <div className="bg-red-500 w-3 h-3"></div>
              </button>
            </div>
          </div> */}
          <div className="flex w-full gap-5">
            <div className="flex flex-col gap-5 w-full">
              <div className="w-full h-fit bg-white rounded-xl p-5 flex flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-2">
                  <Button color="primary" size="sm">
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
                    Buat Ticket
                  </Button>
                  <Button color="secondary" size="sm">
                    <svg
                      className="shrink-0 w-3.5 h-3.5 fill-blue-600 relative overflow-visible"
                      width="14"
                      height="15"
                      viewBox="0 0 14 15"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11.375 7.50008C11.375 7.36592 11.3692 7.23758 11.3575 7.10342L12.4425 6.28091C12.6759 6.10592 12.74 5.77925 12.5942 5.52258L11.5034 3.63841C11.4334 3.51486 11.3203 3.4215 11.1857 3.37628C11.0511 3.33105 10.9046 3.33716 10.7742 3.39341L9.52005 3.92425C9.30421 3.77258 9.07671 3.63841 8.83755 3.52758L8.66838 2.18008C8.63338 1.88841 8.38255 1.66675 8.09088 1.66675H5.91505C5.61755 1.66675 5.36672 1.88841 5.33172 2.18008L5.16255 3.52758C4.92338 3.63841 4.69588 3.77258 4.48005 3.92425L3.22588 3.39341C2.95755 3.27675 2.64255 3.38175 2.49672 3.63841L1.40588 5.52841C1.26005 5.78508 1.32422 6.10592 1.55755 6.28675L2.64255 7.10925C2.61837 7.37119 2.61837 7.63481 2.64255 7.89675L1.55755 8.71925C1.32422 8.89425 1.26005 9.22092 1.40588 9.47758L2.49672 11.3617C2.64255 11.6184 2.95755 11.7234 3.22588 11.6067L4.48005 11.0759C4.69588 11.2276 4.92338 11.3617 5.16255 11.4726L5.33172 12.8201C5.36672 13.1117 5.61755 13.3334 5.90922 13.3334H8.08505C8.37672 13.3334 8.62755 13.1117 8.66255 12.8201L8.83172 11.4726C9.07088 11.3617 9.29838 11.2276 9.51421 11.0759L10.7684 11.6067C11.0367 11.7234 11.3517 11.6184 11.4975 11.3617L12.5884 9.47758C12.7342 9.22092 12.67 8.90008 12.4367 8.71925L11.3517 7.89675C11.3692 7.76258 11.375 7.63425 11.375 7.50008ZM7.02338 9.54175C5.89755 9.54175 4.98172 8.62592 4.98172 7.50008C4.98172 6.37425 5.89755 5.45842 7.02338 5.45842C8.14922 5.45842 9.06505 6.37425 9.06505 7.50008C9.06505 8.62592 8.14922 9.54175 7.02338 9.54175Z" />
                    </svg>
                    Settings
                  </Button>
                </div>
                <DropdownSelect />
              </div>
              <div className="flex flex-col gap-5 p-5 bg-white rounded-xl">
                <div className="flex gap-5">
                  <CardDetailTicket />
                  <CardDetailTicket />
                  <CardDetailTicket />
                </div>
                <div className="flex gap-5">
                  <CardDetailTicket />
                  <CardDetailTicket />
                  <CardDetailTicket />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationTicketPage;
