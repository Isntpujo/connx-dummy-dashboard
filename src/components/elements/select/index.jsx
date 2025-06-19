import { useState } from 'react';

const DropdownSelect = () => {
  const [selected, setSelected] = useState('');
  const [isActive, setIsActive] = useState(false);
  const options = ['Music', 'Art', 'Dance', 'Sport', 'Culture', 'Other'];

  return (
    <div className="relative">
      <div
        className="text-black flex items-center gap-2 justify-between py-3 px-4 rounded-xl hover:cursor-pointer hover:bg-gray-100 border border-gray-200 text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
        onClick={(e) => setIsActive(!isActive)}
      >
        {selected === '' ? 'Select Category' : selected}
        <svg className="w-3.5 h-3.5" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4.57272 5.00653L7.00327 7.58457L9.43381 5.00653C9.4918 4.94502 9.56065 4.89622 9.63643 4.86293C9.7122 4.82964 9.79342 4.8125 9.87544 4.8125C9.95746 4.8125 10.0387 4.82964 10.1144 4.86293C10.1902 4.89622 10.2591 4.94502 10.3171 5.00653C10.3751 5.06805 10.4211 5.14108 10.4525 5.22145C10.4838 5.30182 10.5 5.38797 10.5 5.47496C10.5 5.56196 10.4838 5.6481 10.4525 5.72848C10.4211 5.80885 10.3751 5.88188 10.3171 5.9434L7.44176 8.99319C7.38381 9.05478 7.31497 9.10365 7.23919 9.13699C7.16341 9.17034 7.08218 9.1875 7.00013 9.1875C6.91809 9.1875 6.83685 9.17034 6.76107 9.13699C6.68529 9.10365 6.61645 9.05478 6.5585 8.99319L3.6832 5.9434C3.62512 5.88193 3.57905 5.80891 3.54762 5.72853C3.51618 5.64815 3.5 5.56198 3.5 5.47496C3.5 5.38794 3.51618 5.30178 3.54762 5.2214C3.57905 5.14102 3.62512 5.068 3.6832 5.00653C3.9275 4.75404 4.32842 4.7474 4.57272 5.00653Z"
            fill="black"
          />
        </svg>
      </div>
      {isActive && (
        <div className="text-black flex flex-col absolute w-full z-50 gap-4 p-4 rounded-xl bg-white border border-gray-200 ">
          {options.map((option) => (
            <div
              className="py-3 px-4 rounded-xl hover:cursor-pointer hover:bg-gray-100 border border-gray-200 text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
              key={option}
              onClick={(e) => {
                setSelected(option);
                setIsActive(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownSelect;
