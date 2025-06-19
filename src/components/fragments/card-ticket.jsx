const Card = (props) => {
  const { children } = props;
  return <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl">{children}</div>;
};

const Header = () => {
  return (
    <div className="flex gap-3 items-center">
      <svg className="rounded-lg w-9 h-9 relative overflow-visible" width="" height="" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect className="fill-zinc-100" width="32" height="32" rx="8" fill="" />
        <path
          className="fill-zinc-500"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.5451 10C13.2969 10 13.08 10.1676 13.0173 10.4078L11.3809 16.6805C11.3383 16.844 11.3738 17.018 11.4771 17.1517C11.5804 17.2853 11.7398 17.3636 11.9087 17.3636H13.4019L12.4687 21.3296C12.412 21.5705 12.5246 21.8194 12.7431 21.9359C12.9615 22.0523 13.2309 22.0071 13.3994 21.8257L20.4903 14.1893C20.6379 14.0304 20.6772 13.799 20.5905 13.6001C20.5038 13.4013 20.3075 13.2727 20.0905 13.2727H17.5164L18.1652 10.6777C18.2059 10.5148 18.1693 10.3422 18.0659 10.2098C17.9626 10.0774 17.804 10 17.636 10H13.5451ZM15.438 12.5868C15.511 12.2946 15.3334 11.9984 15.0411 11.9254C14.7489 11.8523 14.4527 12.03 14.3796 12.3222L13.8342 14.5041C13.7611 14.7963 13.9388 15.0925 14.2311 15.1655C14.5233 15.2386 14.8195 15.0609 14.8925 14.7686L15.438 12.5868Z"
          fill=""
        />
      </svg>
      <div className="flex flex-col items-start justify-start relative">
        <div className="text-zinc-600 text-xs">Ticket Event</div>
        <div className="text-black text-sm font-bold">Penjualan Terbanyak</div>
      </div>
    </div>
  );
};

const Image = (props) => {
  const { image } = props;
  return <img className="block aspect-auto rounded-xl w-full" src={image} alt="product" />;
};

const Ticket = (props) => {
  const { name, sold } = props;
  return (
    <div className="flex flex-row">
      <div className="flex flex-col h-auto">
        <svg className="fill-sky-100 shrink-0 w-[9px] h-[9px] relative overflow-visible" width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 9H9V0C9 4.93102 4.91538 8.93591 0 9Z" fill="" />
        </svg>
        <div className="flex-1 self-stretch bg-sky-100"></div>
        <svg className="fill-sky-100 shrink-0 w-[9px] h-[9px] relative overflow-visible" width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 9V3.93403e-07L0 0L9.5334e-07 0.00764275C4.96776 0.00764296 8.99545 4.03288 9 9Z" fill="" />
        </svg>
      </div>
      <div className="bg-sky-100 w-full pt-5 pr-4 pb-5 pl-4 flex flex-col items-start justify-center">
        <div className="bg-rose-600 rounded-[62px] pt-0.5 pr-1.5 pb-0.5 pl-1.5 flex flex-row gap-1 items-center justify-center shrink-0 relative">
          <div className="bg-white rounded-[50%] shrink-0 w-1 h-1 relative"></div>
          <div className="text-white text-[10px]">Sedang Tayang</div>
        </div>
        <div className="text-black text-sm font-bold">{name}</div>
        <div className="flex gap-1 items-center justify-center fill-zinc-600">
          <svg className="shrink-0 w-2.5 h-2.5 relative overflow-visible" width="10" height="10" viewBox="0 0 10 10" fill="" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_212_1488)">
              <path
                d="M4.99978 0.833374C3.89469 0.833374 2.83485 1.27237 2.05343 2.05379C1.27201 2.83522 0.833008 3.89505 0.833008 5.00015C0.833036 5.54734 0.940841 6.08916 1.15027 6.59469C1.35969 7.10021 1.66664 7.55954 2.05358 7.94644C2.44052 8.33334 2.89988 8.64024 3.40543 8.84961C3.91097 9.05899 4.45281 9.16673 5 9.16671C5.54719 9.16668 6.08901 9.05887 6.59454 8.84945C7.10006 8.64002 7.55939 8.33307 7.94629 7.94613C8.33319 7.55919 8.64009 7.09983 8.84946 6.59429C9.05884 6.08874 9.16659 5.5469 9.16656 4.99971C9.16656 2.69887 7.30062 0.833374 4.99978 0.833374ZM4.99978 8.29841C4.56659 8.29841 4.13764 8.21309 3.73743 8.04731C3.33721 7.88154 2.97356 7.63856 2.66725 7.33225C2.36094 7.02593 2.11796 6.66229 1.95218 6.26207C1.78641 5.86185 1.70109 5.43291 1.70109 4.99971C1.70109 4.56652 1.78641 4.13757 1.95218 3.73736C2.11796 3.33714 2.36094 2.9735 2.66725 2.66718C2.97356 2.36087 3.33721 2.11789 3.73743 1.95212C4.13764 1.78634 4.56659 1.70102 4.99978 1.70102V5.00015L7.94778 3.52615C8.17825 3.98333 8.29836 4.48816 8.29848 5.00015C8.29836 5.87494 7.95077 6.71387 7.33216 7.3324C6.71355 7.95093 5.87458 8.29841 4.99978 8.29841Z"
                fill=""
              />
            </g>
            <defs>
              <clipPath id="clip0_212_1488">
                <rect width="10" height="10" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <div className="text-zinc-600 text-xs">Berakhir 24 Juni 2023</div>
        </div>
      </div>
      <div className="flex flex-col gap-0 items-start justify-start self-stretch w-[18px] relative">
        <svg className="fill-sky-100 shrink-0 w-[18px] h-[px] relative overflow-visible" width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.87904 8.99999C3.96423 8.93524 1.77878e-07 4.93061 3.93402e-07 0L0 8.99999H8.87904Z" fill="" />
          <path d="M18 2.69415e-06C18 4.93061 14.0358 8.93524 9.12096 8.99999L18 8.99999V2.69415e-06Z" fill="" />
        </svg>
        <svg className="overflow-hidden bg-sky-100 flex-1 w-[18px] h-full relative" width="18" height="67" viewBox="0 0 18 67" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className="stroke-blue-700" fill="none" stroke="" strokeWidth="1" strokeDasharray="8 5" d="M9 -400 9 400" />
        </svg>
        <svg className="fill-sky-100 shrink-0 w-[18px] h-[9px] relative overflow-visible" width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 8.99281V7.86805e-07L9 3.93403e-07L3.93404e-07 0L0 9C0.000421741 4.02937 4.0297 1.76144e-07 9 3.93403e-07C13.9679 6.10557e-07 17.9957 4.02548 18 8.99281Z" fill="" />
        </svg>
      </div>
      <div className="bg-sky-100 p-3 flex flex-col gap-0.5 items-center justify-center self-stretch shrink-0 w-[74px] relative">
        <div className="flex flex-row gap-1 items-center justify-center shrink-0 relative">
          <svg className="shrink-0 w-3 h-3 relative overflow-visible" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7.92857 10H1.5V7.9C1.87888 7.9 2.24224 7.7525 2.51015 7.48995C2.77806 7.2274 2.92857 6.8713 2.92857 6.5C2.92857 6.1287 2.77806 5.7726 2.51015 5.51005C2.24224 5.2475 1.87888 5.1 1.5 5.1V3H7.92857V4.75H8.64286V3H11.5V5.1C11.1211 5.1 10.7578 5.2475 10.4898 5.51005C10.2219 5.7726 10.0714 6.1287 10.0714 6.5C10.0714 6.8713 10.2219 7.2274 10.4898 7.48995C10.7578 7.7525 11.1211 7.9 11.5 7.9V10H8.64286V8.25H7.92857V10ZM7.92857 5.45V7.55H8.64286V5.45H7.92857Z"
              fill="#2953F6"
            />
          </svg>
          <div className="text-black text-xs">Terjual</div>
        </div>
        <div className="text-black text-sm font-bold">{sold}</div>
      </div>
      <div className="flex flex-col h-auto">
        <svg className="fill-sky-100 shrink-0 w-[8.88px] h-[9px] relative overflow-visible" width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.87897 8.99998C3.96419 8.9352 1.77879e-07 4.93058 3.93402e-07 0L0 8.99998H8.87897Z" fill="" />
        </svg>
        <div className="flex-1 self-stretch bg-sky-100"></div>
        <svg className="fill-sky-100 shrink-0 w-[9px] h-[9px] relative overflow-visible" width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 0.00759927V3.93403e-07L3.93402e-07 0L0 9C0.0045254 4.03286 4.03223 0.00759905 9 0.00759927Z" fill="" />
        </svg>
      </div>
    </div>
  );
};

const Footer = (props) => {
  const { views } = props;
  return (
    <div className="rounded-full border-solid border-gray-300 border p-2 flex flex-row items-center justify-between self-stretch shrink-0 relative">
      <div className="flex flex-row gap-1 items-center justify-start shrink-0 relative">
        <svg className="shrink-0 w-3.5 h-3.5 relative overflow-visible" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.00016 5.25C6.53603 5.25 6.09091 5.43437 5.76273 5.76256C5.43454 6.09075 5.25016 6.53587 5.25016 7C5.25016 7.46413 5.43454 7.90925 5.76273 8.23744C6.09091 8.56563 6.53603 8.75 7.00016 8.75C7.46429 8.75 7.90941 8.56563 8.2376 8.23744C8.56579 7.90925 8.75016 7.46413 8.75016 7C8.75016 6.53587 8.56579 6.09075 8.2376 5.76256C7.90941 5.43437 7.46429 5.25 7.00016 5.25ZM7.00016 9.91667C6.22661 9.91667 5.48475 9.60938 4.93777 9.06239C4.39079 8.51541 4.0835 7.77355 4.0835 7C4.0835 6.22645 4.39079 5.48459 4.93777 4.93761C5.48475 4.39062 6.22661 4.08333 7.00016 4.08333C7.77371 4.08333 8.51558 4.39062 9.06256 4.93761C9.60954 5.48459 9.91683 6.22645 9.91683 7C9.91683 7.77355 9.60954 8.51541 9.06256 9.06239C8.51558 9.60938 7.77371 9.91667 7.00016 9.91667ZM7.00016 2.625C4.0835 2.625 1.59266 4.43917 0.583496 7C1.59266 9.56083 4.0835 11.375 7.00016 11.375C9.91683 11.375 12.4077 9.56083 13.4168 7C12.4077 4.43917 9.91683 2.625 7.00016 2.625Z"
            fill="black"
          />
        </svg>
        <div className="text-black text-left text-xs font-bold">{views}</div>
      </div>
      <div className="flex flex-row gap-2 items-start justify-start shrink-0 relative">
        <svg className="shrink-0 w-3.5 h-3.5 relative overflow-visible" width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2.0835 6.41667H6.75016V1.75H2.0835V6.41667ZM3.25016 2.91667H5.5835V5.25H3.25016V2.91667ZM2.0835 12.25H6.75016V7.58333H2.0835V12.25ZM3.25016 8.75H5.5835V11.0833H3.25016V8.75ZM7.91683 1.75V6.41667H12.5835V1.75H7.91683ZM11.4168 5.25H9.0835V2.91667H11.4168V5.25ZM7.92266 7.58333H9.08933V8.75H7.92266V7.58333ZM9.08933 8.75H10.256V9.91667H9.08933V8.75ZM7.92266 9.91667H9.08933V11.0833H7.92266V9.91667ZM10.256 9.91667H11.4227V11.0833H10.256V9.91667ZM11.4227 11.0833H12.5893V12.25H11.4227V11.0833ZM9.08933 11.0833H10.256V12.25H9.08933V11.0833ZM10.256 7.58333H11.4227V8.75H10.256V7.58333ZM11.4227 8.75H12.5893V9.91667H11.4227V8.75Z"
            fill="black"
          />
        </svg>
        <svg className="shrink-0 w-3.5 h-3.5 relative overflow-visible" width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.146 1.53125H5.146C4.97195 1.53125 4.80503 1.60039 4.68196 1.72346C4.55889 1.84653 4.48975 2.01345 4.48975 2.1875V4.15625H2.521C2.34695 4.15625 2.18003 4.22539 2.05696 4.34846C1.93389 4.47153 1.86475 4.63845 1.86475 4.8125V11.8125C1.86475 11.9865 1.93389 12.1535 2.05696 12.2765C2.18003 12.3996 2.34695 12.4688 2.521 12.4688H9.521C9.69504 12.4688 9.86196 12.3996 9.98503 12.2765C10.1081 12.1535 10.1772 11.9865 10.1772 11.8125V9.84375H12.146C12.32 9.84375 12.487 9.77461 12.61 9.65154C12.7331 9.52847 12.8022 9.36155 12.8022 9.1875V2.1875C12.8022 2.01345 12.7331 1.84653 12.61 1.72346C12.487 1.60039 12.32 1.53125 12.146 1.53125ZM8.86475 11.1562H3.17725V5.46875H8.86475V11.1562ZM11.4897 8.53125H10.1772V4.8125C10.1772 4.63845 10.1081 4.47153 9.98503 4.34846C9.86196 4.22539 9.69504 4.15625 9.521 4.15625H5.80225V2.84375H11.4897V8.53125Z"
            fill="black"
          />
        </svg>
        <svg className="shrink-0 w-3.5 h-3.5 relative overflow-visible" width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10.8335 12.8333C10.3474 12.8333 9.93419 12.6632 9.59391 12.3229C9.25363 11.9826 9.0835 11.5694 9.0835 11.0833C9.0835 11.0153 9.08836 10.9447 9.09808 10.8716C9.1078 10.7985 9.12239 10.7329 9.14183 10.675L5.02933 8.28334C4.86405 8.42917 4.67933 8.5435 4.47516 8.62634C4.271 8.70917 4.05711 8.75039 3.8335 8.75C3.34738 8.75 2.93419 8.57987 2.59391 8.23959C2.25363 7.89931 2.0835 7.48612 2.0835 7C2.0835 6.51389 2.25363 6.1007 2.59391 5.76042C2.93419 5.42014 3.34738 5.25 3.8335 5.25C4.05711 5.25 4.271 5.29142 4.47516 5.37426C4.67933 5.45709 4.86405 5.57123 5.02933 5.71667L9.14183 3.325C9.12239 3.26667 9.1078 3.20114 9.09808 3.12842C9.08836 3.0557 9.0835 2.98512 9.0835 2.91667C9.0835 2.43056 9.25363 2.01737 9.59391 1.67709C9.93419 1.33681 10.3474 1.16667 10.8335 1.16667C11.3196 1.16667 11.7328 1.33681 12.0731 1.67709C12.4134 2.01737 12.5835 2.43056 12.5835 2.91667C12.5835 3.40278 12.4134 3.81598 12.0731 4.15626C11.7328 4.49653 11.3196 4.66667 10.8335 4.66667C10.6099 4.66667 10.396 4.62545 10.1918 4.543C9.98766 4.46056 9.80294 4.34623 9.63766 4.2L5.52516 6.59167C5.54461 6.65 5.55919 6.71573 5.56891 6.78884C5.57863 6.86195 5.5835 6.93234 5.5835 7C5.5835 7.06767 5.57863 7.13825 5.56891 7.21175C5.55919 7.28525 5.54461 7.35078 5.52516 7.40834L9.63766 9.8C9.80294 9.65417 9.98766 9.54003 10.1918 9.45759C10.396 9.37514 10.6099 9.33373 10.8335 9.33334C11.3196 9.33334 11.7328 9.50348 12.0731 9.84375C12.4134 10.184 12.5835 10.5972 12.5835 11.0833C12.5835 11.5694 12.4134 11.9826 12.0731 12.3229C11.7328 12.6632 11.3196 12.8333 10.8335 12.8333Z"
            fill="black"
          />
        </svg>
      </div>
    </div>
  );
};

Card.Header = Header;
Card.Image = Image;
Card.Ticket = Ticket;
Card.Footer = Footer;

export default Card;
