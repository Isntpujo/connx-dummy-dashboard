import Button from '../button';
import Breadcrumbs from './breadcrumbs';

const username = localStorage.getItem('username');

const Navbar = ({ onToggleSidebar }) => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    window.location.href = '/';
  };

  return (
    <div className="sticky top-0 z-50 flex flex-row gap-4 px-8 py-6 bg-[#F5F5F9] border-b-2 border-gray-200 items-center justify-between h-fit w-full">
      <div className="flex flex-row gap-4 items-center justify-start">
        <button onClick={onToggleSidebar} className="bg-blue-600 hover:bg-blue-700 rounded-lg p-2 flex flex-row items-center justify-start relative cursor-pointer">
          <svg className="shrink-0 w-4 h-4 relative overflow-visible" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 4.5V5.96939H13V4.5H3ZM3 7.76531V9.23469H13V7.76531H3ZM3 11.0306V12.5H13V11.0306H3Z" fill="white" />
          </svg>
        </button>
        <div className="bg-white rounded-lg pt-2 pr-3 pb-2 pl-3 flex flex-row gap-2 items-center justify-start shrink-0 relative">
          <div className="text-gray-400 text-xs">Kamu disini</div>
          <svg className="fill-gray-400 w-3 h-3" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7.14968 2.85001C7.10332 2.89626 7.06655 2.95121 7.04146 3.01169C7.01637 3.07218 7.00345 3.13702 7.00345 3.20251C7.00345 3.26799 7.01637 3.33283 7.04146 3.39332C7.06655 3.4538 7.10332 3.50875 7.14968 3.55501L9.08468 5.50001L1.49968 5.50001C1.22468 5.50001 0.999676 5.72501 0.999676 6.00001C0.999676 6.27501 1.22468 6.50001 1.49968 6.50001L9.08468 6.50001L7.14468 8.44001C7.05119 8.53349 6.99867 8.66029 6.99867 8.79251C6.99867 8.92472 7.05119 9.05152 7.14468 9.14501C7.23817 9.23849 7.36496 9.29102 7.49718 9.29102C7.62939 9.29102 7.75619 9.23849 7.84968 9.14501L10.6497 6.35001C10.696 6.30375 10.7328 6.2488 10.7579 6.18832C10.783 6.12783 10.7959 6.06299 10.7959 5.99751C10.7959 5.93202 10.783 5.86718 10.7579 5.80669C10.7328 5.74621 10.696 5.69126 10.6497 5.64501L7.85468 2.85001C7.65968 2.66001 7.33968 2.66001 7.14968 2.85001Z"
              fill=""
            />
          </svg>
        </div>
        <Breadcrumbs />
      </div>
      <div className="flex flex-row gap-4">
        <div className="bg-white rounded-full p-2 flex flex-row gap-2 items-center justify-start shrink-0 relative">
          <svg className="rounded-[26px] w-4 h-4" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="16" height="16" rx="8" fill="#BEC5D1" />
            <path
              d="M11.3687 11.7895V10.9474C11.3687 10.5007 11.1912 10.0723 10.8754 9.75648C10.5595 9.44063 10.1311 9.26318 9.68447 9.26318H6.31605C5.86937 9.26318 5.44098 9.44063 5.12513 9.75648C4.80928 10.0723 4.63184 10.5007 4.63184 10.9474V11.7895"
              fill="white"
            />
            <path
              d="M7.99964 7.57899C8.9298 7.57899 9.68385 6.82495 9.68385 5.89478C9.68385 4.96462 8.9298 4.21057 7.99964 4.21057C7.06948 4.21057 6.31543 4.96462 6.31543 5.89478C6.31543 6.82495 7.06948 7.57899 7.99964 7.57899Z"
              fill="white"
            />
          </svg>
          <div className="flex flex-row gap-1 items-center justify-start">
            <div className="text-black text-xs font-semibold">{username}</div>
            <svg className="w-3.5 h-3.5" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4.57272 5.00653L7.00327 7.58457L9.43381 5.00653C9.4918 4.94502 9.56065 4.89622 9.63643 4.86293C9.7122 4.82964 9.79342 4.8125 9.87544 4.8125C9.95746 4.8125 10.0387 4.82964 10.1144 4.86293C10.1902 4.89622 10.2591 4.94502 10.3171 5.00653C10.3751 5.06805 10.4211 5.14108 10.4525 5.22145C10.4838 5.30182 10.5 5.38797 10.5 5.47496C10.5 5.56196 10.4838 5.6481 10.4525 5.72848C10.4211 5.80885 10.3751 5.88188 10.3171 5.9434L7.44176 8.99319C7.38381 9.05478 7.31497 9.10365 7.23919 9.13699C7.16341 9.17034 7.08218 9.1875 7.00013 9.1875C6.91809 9.1875 6.83685 9.17034 6.76107 9.13699C6.68529 9.10365 6.61645 9.05478 6.5585 8.99319L3.6832 5.9434C3.62512 5.88193 3.57905 5.80891 3.54762 5.72853C3.51618 5.64815 3.5 5.56198 3.5 5.47496C3.5 5.38794 3.51618 5.30178 3.54762 5.2214C3.57905 5.14102 3.62512 5.068 3.6832 5.00653C3.9275 4.75404 4.32842 4.7474 4.57272 5.00653Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
        <Button color="danger" size="xs" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
