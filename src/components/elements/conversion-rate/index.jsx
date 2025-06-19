const ConversionRate = () => {
  return (
    <div className="bg-gradient-to-tl from-blue-500 to-blue-700 flex flex-col gap-4 p-6 rounded-2xl top-[113px]">
      <div className="flex gap-3 items-center">
        <svg className="rounded-lg w-9 h-9 relative overflow-visible" width="36" height="36" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect className="fill-white opacity-35" width="32" height="32" rx="8" fill="" />
          <path
            d="M22.0003 13.3333C21.0337 13.3333 20.4937 14.2933 20.7137 15.0066L18.347 17.3799C18.147 17.3199 17.8537 17.3199 17.6537 17.3799L15.9537 15.6799C16.1803 14.9666 15.6403 13.9999 14.667 13.9999C13.7003 13.9999 13.1537 14.9599 13.3803 15.6799L10.3403 18.7133C9.62699 18.4933 8.66699 19.0333 8.66699 19.9999C8.66699 20.7333 9.26699 21.3333 10.0003 21.3333C10.967 21.3333 11.507 20.3733 11.287 19.6599L14.3203 16.6199C14.5203 16.6799 14.8137 16.6799 15.0137 16.6199L16.7137 18.3199C16.487 19.0333 17.027 19.9999 18.0003 19.9999C18.967 19.9999 19.5137 19.0399 19.287 18.3199L21.6603 15.9533C22.3737 16.1733 23.3337 15.6333 23.3337 14.6666C23.3337 13.9333 22.7337 13.3333 22.0003 13.3333Z"
            fill="white"
          />
          <path
            d="M18.0003 14L18.627 12.62L20.0003 12L18.627 11.38L18.0003 10L17.387 11.38L16.0003 12L17.387 12.62L18.0003 14ZM10.3337 15.3333L10.667 14L12.0003 13.6667L10.667 13.3333L10.3337 12L10.0003 13.3333L8.66699 13.6667L10.0003 14L10.3337 15.3333Z"
            fill="white"
          />
        </svg>
        <div className="flex flex-col items-start justify-start relative">
          <div className="text-white text-xs">Ticket Sales</div>
          <div className="text-white text-sm font-bold">Conversion Rate</div>
        </div>
      </div>
      <div className="flex gap-4 items-center justify-between bg-white rounded-2xl p-4">
        <div className="flex flex-col gap-2 items-start justify-start">
          <div className="flex flex-col items-start justify-start">
            <div className="text-zinc-400 text-xs text-left ">Konversi dari</div>
            <div className="font-bold text-xs text-black">View ke Order</div>
          </div>
          <div className="text-zinc-400 text-xs text-left">Jumlah pemesanan pada tiket Kamu</div>
        </div>
        <div className="text-4xl text-black font-bold">1.95%</div>
      </div>
      <div className="flex gap-4 items-center justify-between bg-white rounded-2xl p-4">
        <div className="flex flex-col gap-2 items-start justify-start">
          <div className="flex flex-col items-start justify-start">
            <div className="text-zinc-400 text-xs text-left ">Konversi dari</div>
            <div className="font-bold text-xs text-black">Order ke Purchase</div>
          </div>
          <div className="text-zinc-400 text-xs text-left">Jumlah pembelian tiket yang telah diselesaikan</div>
        </div>
        <div className="text-4xl text-black font-bold">86.67%</div>
      </div>
    </div>
  );
};

export default ConversionRate;
