import Button from '../button';

const EventSummaryTicket = () => {
  return (
    <div className="flex w-full gap-6 p-6 rounded-2xl items-center justify-between bg-white">
      <div className="flex gap-4 items-center">
        <svg className="rounded-[58px] shrink-0 w-12 h-12 relative overflow-visible" width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.333008" width="48" height="48" rx="24" fill="#E5FFF3" />
          <path
            d="M27.1902 31H14.333V26.8C15.0908 26.8 15.8175 26.505 16.3533 25.9799C16.8891 25.4548 17.1902 24.7426 17.1902 24C17.1902 23.2574 16.8891 22.5452 16.3533 22.0201C15.8175 21.495 15.0908 21.2 14.333 21.2V17H27.1902V20.5H28.6187V17H34.333V21.2C33.5752 21.2 32.8485 21.495 32.3127 22.0201C31.7769 22.5452 31.4759 23.2574 31.4759 24C31.4759 24.7426 31.7769 25.4548 32.3127 25.9799C32.8485 26.505 33.5752 26.8 34.333 26.8V31H28.6187V27.5H27.1902V31ZM27.1902 21.9V26.1H28.6187V21.9H27.1902Z"
            fill="#00D085"
          />
        </svg>
        <div>
          <div className="text-zinc-500 text-xs">Ticket Terjual</div>
          <div className="text-black font-bold">7.325</div>
        </div>
      </div>
      <Button color="disable" size="sm">Lihat Detail</Button>
    </div>
  );
};

export default EventSummaryTicket;
