const CardAddImgEvent = (props) => {
  const { children } = props;
  return <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl sticky top-[113px]">{children}</div>;
};

const Image = (props) => {
  const { image } = props;
  return (
    <div
      className="rounded-xl p-4 flex flex-col gap-4 items-start justify-start shrink-0 w-fill h-[210px] relative"
      style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
    >
      <label htmlFor="file" className="bg-white bg-opacity-30 rounded-full px-2 py-1 flex flex-row gap-1 items-center hover:cursor-pointer hover:ring-1 hover:ring-white hover:ring-opacity-60">
        <svg className="shrink-0 w-3 h-3 relative overflow-visible" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.32526 4.175L7.93026 5.57C7.77026 5.73 7.88026 6 8.10526 6H9.00026C9.00026 7.655 7.65526 9 6.00026 9C5.60526 9 5.22026 8.925 4.87526 8.78C4.69526 8.705 4.49026 8.76 4.35526 8.895C4.10026 9.15 4.19026 9.58 4.52526 9.715C4.98026 9.9 5.48026 10 6.00026 10C8.21026 10 10.0003 8.21 10.0003 6H10.8953C11.1203 6 11.2303 5.73 11.0703 5.575L9.67526 4.18C9.58026 4.08 9.42026 4.08 9.32526 4.175ZM3.00026 6C3.00026 4.345 4.34526 3 6.00026 3C6.39526 3 6.78026 3.075 7.12526 3.22C7.30526 3.295 7.51026 3.24 7.64526 3.105C7.90026 2.85 7.81026 2.42 7.47526 2.285C7.02026 2.1 6.52026 2 6.00026 2C3.79026 2 2.00026 3.79 2.00026 6H1.10526C0.880259 6 0.770259 6.27 0.930259 6.425L2.32526 7.82C2.42526 7.92 2.58026 7.92 2.68026 7.82L4.07526 6.425C4.10981 6.38975 4.13316 6.34507 4.14235 6.29657C4.15155 6.24808 4.14618 6.19795 4.12693 6.1525C4.10768 6.10705 4.07541 6.06831 4.03418 6.04117C3.99296 6.01404 3.94462 5.99971 3.89526 6H3.00026Z"
            fill="white"
          />
        </svg>
        <div className="text-white text-xs">Ganti</div>
        <input id="file" type="file" className="hidden"/>
      </label>
    </div>
  );
};

const AddImg = (props) => {
  const { image } = props;
  return (
    <div className="flex gap-4">
      <div
        className="rounded-xl p-4 flex flex-col gap-4 items-start justify-start shrink-0 w-[58px] h-[58px] relative"
        style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
      >
        <svg className="hover:cursor-pointer rounded-full w-5 h-5 absolute -top-2 -right-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="20" height="20" rx="10" fill="#FFE1EA" />
          <path fillRule="evenodd" clipRule="evenodd" d="M12.7854 14.2859L5.71387 7.21439L7.21396 5.71429L14.2855 12.7858L12.7854 14.2859Z" fill="#ED1859" />
          <path fillRule="evenodd" clipRule="evenodd" d="M5.71388 12.7858L12.7854 5.71429L14.2855 7.21439L7.21397 14.2859L5.71388 12.7858Z" fill="#ED1859" />
        </svg>
      </div>
      <label htmlFor="file" className="w-[58px] h-[58px] rounded-xl border-custom-dashed-gray p-4 flex items-center justify-center hover:cursor-pointer hover:border-gray-400">
        <svg className="w-[18px] h-[18px]" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13.5 9.75H9.75V13.5C9.75 13.9125 9.4125 14.25 9 14.25C8.5875 14.25 8.25 13.9125 8.25 13.5V9.75H4.5C4.0875 9.75 3.75 9.4125 3.75 9C3.75 8.5875 4.0875 8.25 4.5 8.25H8.25V4.5C8.25 4.0875 8.5875 3.75 9 3.75C9.4125 3.75 9.75 4.0875 9.75 4.5V8.25H13.5C13.9125 8.25 14.25 8.5875 14.25 9C14.25 9.4125 13.9125 9.75 13.5 9.75Z"
            fill="black"
          />
        </svg>
        <input id="file" type="file" className="hidden"/>
      </label>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="flex items-center gap-1">
      <svg className="shrink-0 w-2.5 h-2.5 relative overflow-visible" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5.00033 9.16669C7.30033 9.16669 9.16699 7.30002 9.16699 5.00002C9.16699 2.70002 7.30033 0.833354 5.00033 0.833354C2.70033 0.833353 0.83366 2.70002 0.83366 5.00002C0.833659 7.30002 2.70033 9.16669 5.00033 9.16669ZM5.00033 4.58335C5.22949 4.58335 5.41699 4.77085 5.41699 5.00002L5.41699 6.66669C5.41699 6.89585 5.22949 7.08335 5.00033 7.08335C4.77116 7.08335 4.58366 6.89585 4.58366 6.66669L4.58366 5.00002C4.58366 4.77085 4.77116 4.58335 5.00033 4.58335ZM4.58366 2.91669L5.41699 2.91669L5.41699 3.75002L4.58366 3.75002L4.58366 2.91669Z"
          fill="#878787"
        />
      </svg>
      <div className="text-gray-400 text-[9px] font-semibold">Ukuran gambar yang disarankan 0 x 0 pixel. Besar gambar maksimal 1MB, jenis file JPG, JPEG, PNG.</div>
    </div>
  );
};

CardAddImgEvent.Image = Image;
CardAddImgEvent.AddImg = AddImg;
CardAddImgEvent.Footer = Footer;

export default CardAddImgEvent;
