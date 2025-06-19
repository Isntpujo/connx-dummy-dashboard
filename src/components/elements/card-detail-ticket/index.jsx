import Button from '../button';

const CardDetailTicket = () => {
  return (
    <div className="w-full">
      <div className="bg-sky-100 flex flex-row rounded-t-xl">
        <div className="w-full pt-5 pr-4 pb-5 pl-4 flex flex-col items-start justify-center">
          <div className="bg-rose-600 rounded-[62px] pt-0.5 pr-1.5 pb-0.5 pl-1.5 flex flex-row gap-1 items-center justify-center shrink-0 relative">
            <div className="bg-white rounded-[50%] shrink-0 w-1 h-1 relative"></div>
            <div className="text-white text-[10px]">Habis</div>
          </div>
          <div className="text-black text-sm font-bold">Test Card</div>
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
        <button className="h-fit rounded-lg p-2 bg-blue-600 m-5">
          <svg className="shrink-0 w-4 h-4 relative overflow-visible fill-white" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.66667 4.66669H8.11333C8.25107 4.27634 8.50649 3.93832 8.8444 3.69922C9.18231 3.46012 9.58606 3.33173 10 3.33173C10.4139 3.33173 10.8177 3.46012 11.1556 3.69922C11.4935 3.93832 11.7489 4.27634 11.8867 4.66669H13.3333C13.5101 4.66669 13.6797 4.73693 13.8047 4.86196C13.9298 4.98698 14 5.15655 14 5.33336C14 5.51017 13.9298 5.67974 13.8047 5.80476C13.6797 5.92979 13.5101 6.00003 13.3333 6.00003H11.8867C11.7489 6.39038 11.4935 6.7284 11.1556 6.9675C10.8177 7.2066 10.4139 7.33499 10 7.33499C9.58606 7.33499 9.18231 7.2066 8.8444 6.9675C8.50649 6.7284 8.25107 6.39038 8.11333 6.00003H2.66667C2.48986 6.00003 2.32029 5.92979 2.19526 5.80476C2.07024 5.67974 2 5.51017 2 5.33336C2 5.15655 2.07024 4.98698 2.19526 4.86196C2.32029 4.73693 2.48986 4.66669 2.66667 4.66669ZM2.66667 10H4.11333C4.25107 9.60967 4.50649 9.27165 4.8444 9.03255C5.18231 8.79346 5.58606 8.66506 6 8.66506C6.41394 8.66506 6.81769 8.79346 7.1556 9.03255C7.49351 9.27165 7.74893 9.60967 7.88667 10H13.3333C13.5101 10 13.6797 10.0703 13.8047 10.1953C13.9298 10.3203 14 10.4899 14 10.6667C14 10.8435 13.9298 11.0131 13.8047 11.1381C13.6797 11.2631 13.5101 11.3334 13.3333 11.3334H7.88667C7.74893 11.7237 7.49351 12.0617 7.1556 12.3008C6.81769 12.5399 6.41394 12.6683 6 12.6683C5.58606 12.6683 5.18231 12.5399 4.8444 12.3008C4.50649 12.0617 4.25107 11.7237 4.11333 11.3334H2.66667C2.48986 11.3334 2.32029 11.2631 2.19526 11.1381C2.07024 11.0131 2 10.8435 2 10.6667C2 10.4899 2.07024 10.3203 2.19526 10.1953C2.32029 10.0703 2.48986 10 2.66667 10Z"
            />
          </svg>
        </button>
      </div>
      <div className="flex flex-row gap-0 items-center justify-start self-stretch shrink-0 relative">
        <svg className="shrink-0 w-3 h-6 relative overflow-visible fill-sky-100" width="12" height="24" viewBox="0 0 12 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 24C6.62742 24 12 18.6274 12 12V24H0Z" />
          <path d="M0 0H12V12C12 5.37258 6.62742 0 0 0Z" />
        </svg>
        <div className='w-full bg-sky-100'>
          <svg className="h-6 relative overflow-hidden w-full" height="24" xmlns="http://www.w3.org/2000/svg">
            <path className="w-full" d="M1000 12H6.5293" stroke="#2953F6" strokeDasharray="10 10" />
          </svg>
        </div>
        <svg className="shrink-0 w-[11px] h-6 relative overflow-visible fill-sky-100" width="11" height="24" viewBox="0 0 11 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 0H0V12V24H11V23.9589C4.84047 23.4508 0 18.2907 0 12C0 5.70934 4.84047 0.549225 11 0.0410738V0Z" />
        </svg>
      </div>
      <div className="flex flex-col items-center justify-between p-4 gap-3 rounded-b-xl bg-sky-100">
        <div className="flex flex-row w-full items-center justify-between">
          <div className="flex items-center justify-center">
            <div className="flex flex-row gap-1 items-center justify-center shrink-0 relative">
              <svg className="shrink-0 w-3 h-3 relative overflow-visible" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.92857 10H1.5V7.9C1.87888 7.9 2.24224 7.7525 2.51015 7.48995C2.77806 7.2274 2.92857 6.8713 2.92857 6.5C2.92857 6.1287 2.77806 5.7726 2.51015 5.51005C2.24224 5.2475 1.87888 5.1 1.5 5.1V3H7.92857V4.75H8.64286V3H11.5V5.1C11.1211 5.1 10.7578 5.2475 10.4898 5.51005C10.2219 5.7726 10.0714 6.1287 10.0714 6.5C10.0714 6.8713 10.2219 7.2274 10.4898 7.48995C10.7578 7.7525 11.1211 7.9 11.5 7.9V10H8.64286V8.25H7.92857V10ZM7.92857 5.45V7.55H8.64286V5.45H7.92857Z"
                  fill="#2953F6"
                />
              </svg>
              <div className="text-black text-xs font-bold">312 / 500</div>
              <div className="text-black text-xs">Terjual</div>
            </div>
          </div>
          <div className="text-black text-xs font-bold">Rp. 240.000</div>
        </div>
        <Button variant="primary" size="sm" width="full">
          Manage Add-On
        </Button>
      </div>
    </div>
  );
};

export default CardDetailTicket;
