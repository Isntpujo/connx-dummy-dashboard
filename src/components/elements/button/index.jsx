import { variant } from '../../../utils/button-variant';

const buttonStyle = variant('flex gap-2 items-center justify-center font-normal rounded-full', {
  color: {
    primary: 'text-white bg-blue-600 hover:bg-blue-700',
    secondary: 'text-blue-600 bg-[#EDF5FE] hover:bg-blue-200',
    disable: 'text-gray-500 bg-gray-200 hover:bg-gray-300 cursor-default',
    danger: 'text-white bg-red-600 hover:bg-red-700',
    warning: 'text-white bg-orange-600 hover:bg-orange-700',
    success: 'text-white bg-green-500 hover:bg-green-600',
    dark: 'text-white bg-zinc-600 hover:bg-zinc-700',
  },
  size: {
    xs: 'text-xs py-2 px-3',
    sm: 'text-sm py-3 px-5',
    md: 'text-base py-3 px-5',
    lg: 'text-lg py-3 px-5',
  },
  width: {
    full: 'w-full',
    fit: 'w-fit',
  },
});

function Button({ children, color, size, width, onClick = () => {} }) {
  return (
    <button className={buttonStyle({ color, size, width })} onClick={onClick}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  color: 'primary',
  size: 'md',
};

export default Button;
