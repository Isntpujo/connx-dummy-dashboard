import Button from '../button';

const EventSummarySelling = () => {
  return (
    <div className="flex w-full gap-6 p-6 rounded-2xl items-center justify-between bg-white">
      <div className="flex gap-4 items-center">
        <svg className="rounded-[29px] shrink-0 w-12 h-12 relative overflow-visible" width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.666992" width="48" height="48" rx="24" fill="#FFF5DB" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.667 16.5V28.8498H17.1025V24.0734H17.8674L20.7332 28.8498H24.6309L21.5519 23.7673C22.2438 23.5498 22.8174 23.2095 23.2449 22.7269C23.811 22.0878 24.07 21.2565 24.07 20.2867C24.07 19.0832 23.694 18.1001 22.8722 17.4334C22.0704 16.7829 20.9238 16.5 19.5187 16.5H13.667ZM19.369 21.1818H17.1025V19.3916H19.3296C19.8531 19.3916 20.1734 19.5014 20.362 19.6485L20.3653 19.651C20.539 19.7842 20.6424 19.9739 20.6424 20.2946C20.6424 20.6107 20.541 20.7992 20.3704 20.9324C20.1861 21.0752 19.8753 21.1818 19.369 21.1818ZM25.3586 20.9318V33.2816H28.7941V28.6865H30.8163C32.3272 28.6865 33.5499 28.3955 34.3968 27.7279L34.3986 27.7265C35.2624 27.0392 35.6671 26.0394 35.6671 24.8131C35.6671 23.5889 35.2919 22.587 34.472 21.9002C33.6717 21.2254 32.5203 20.9318 31.1079 20.9318H25.3586ZM32.2395 24.8209C32.2395 25.168 32.1328 25.3843 31.9578 25.5361C31.776 25.6888 31.4681 25.8027 30.9582 25.8027H28.7941V23.8234H30.9188C31.4891 23.8234 31.7928 23.9538 31.9477 24.1059L31.9544 24.1122C32.1407 24.2885 32.2395 24.5105 32.2395 24.8209Z"
            fill="#FFB800"
          />
        </svg>
        <div>
          <div className="text-zinc-500 text-xs">Total Penjualan</div>
          <div className="text-black font-bold">IDR 231.500.000</div>
        </div>
      </div>
      <Button color="disable" size="sm">Lihat Detail</Button>
    </div>
  );
};

export default EventSummarySelling;
