import { NavLink, useLocation, useParams } from 'react-router-dom';

const TabMenu = ({ isOpen }) => {
  const location = useLocation();
  const { nameTicket } = useParams();

  const navigation = [
    {
      icon: (
        <svg className="group-hover:fill-blue-700 shrink-0 w-4 h-4 relative overflow-visible fill-zinc-400" width="14" height="14" viewBox="0 0 14 14" fill="" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M6.9985 1.62744L8.53644 3.15455L5.77436 5.91663H12.1664V8.0833H5.77283L8.52904 10.8444L6.99975 12.3737L1.62598 6.99997L6.9985 1.62744Z" fill="" />
        </svg>
      ),
      id: 1,
      name: 'Main Menu',
      href: '/manage-event',
    },
    {
      icon: (
        <svg className="group-hover:fill-blue-700 shrink-0 w-4 h-4 relative overflow-visible fill-zinc-400" width="14" height="14" viewBox="0 0 14 14" fill="" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7 2C4.24 2 2 4.24 2 7C2 9.76 4.24 12 7 12C9.76 12 12 9.76 12 7C12 4.24 9.76 2 7 2ZM7 9.5C6.725 9.5 6.5 9.275 6.5 9V7C6.5 6.725 6.725 6.5 7 6.5C7.275 6.5 7.5 6.725 7.5 7V9C7.5 9.275 7.275 9.5 7 9.5ZM7.5 5.5H6.5V4.5H7.5V5.5Z"
            fill=""
          />
        </svg>
      ),
      id: 2,
      name: 'Information Event',
      href: nameTicket ? `/information-event/${nameTicket}` : '/information-event',
      // matchPath: '/information-event/*'
    },
    {
      icon: (
        <svg className="group-hover:fill-blue-700 shrink-0 w-4 h-4 relative overflow-visible fill-zinc-400" width="14" height="14" viewBox="0 0 14 14" fill="" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.66699 11.0832H1.16699V8.63317C1.60902 8.63317 2.03294 8.46109 2.3455 8.15478C2.65806 7.84847 2.83366 7.43302 2.83366 6.99984C2.83366 6.56665 2.65806 6.15121 2.3455 5.8449C2.03294 5.53859 1.60902 5.3665 1.16699 5.3665V2.9165H8.66699V4.95817H9.50033V2.9165H12.8337V5.3665C12.3916 5.3665 11.9677 5.53859 11.6551 5.8449C11.3426 6.15121 11.167 6.56665 11.167 6.99984C11.167 7.43302 11.3426 7.84847 11.6551 8.15478C11.9677 8.46109 12.3916 8.63317 12.8337 8.63317V11.0832H9.50033V9.0415H8.66699V11.0832ZM8.66699 5.77484V8.22484H9.50033V5.77484H8.66699Z"
            fill=""
          />
        </svg>
      ),
      id: 3,
      name: 'Information Ticket',
      href: nameTicket ? `/information-ticket/${nameTicket}` : '/information-ticket',
    },
    {
      icon: (
        <svg className="group-hover:fill-blue-700 shrink-0 w-4 h-4 relative overflow-visible fill-zinc-400" width="14" height="14" viewBox="0 0 14 14" fill="" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11.0833 1.75H2.91667C2.275 1.75 1.75 2.275 1.75 2.91667V11.0833C1.75 11.725 2.275 12.25 2.91667 12.25H11.0833C11.725 12.25 12.25 11.725 12.25 11.0833V2.91667C12.25 2.275 11.725 1.75 11.0833 1.75ZM4.08333 4.08333H5.25V5.25H4.08333V4.08333ZM4.08333 6.41667H5.25V7.58333H4.08333V6.41667ZM4.08333 8.75H5.25V9.91667H4.08333V8.75ZM9.91667 9.91667H6.41667V8.75H9.91667V9.91667ZM9.91667 7.58333H6.41667V6.41667H9.91667V7.58333ZM9.91667 5.25H6.41667V4.08333H9.91667V5.25Z"
            fill=""
          />
        </svg>
      ),
      id: 4,
      name: 'Formulir Pemesanan',
      href: nameTicket ? `/formulir-pemesanan/${nameTicket}` : '/formulir-pemesanan',
    },
    {
      icon: (
        <svg className="group-hover:fill-blue-700 shrink-0 w-4 h-4 relative overflow-visible fill-zinc-400" width="14" height="14" viewBox="0 0 14 14" fill="" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4.1125 11.6666H2.275C1.98625 11.6666 1.75 11.4333 1.75 11.1481V5.96288C1.75 5.6777 1.98625 5.44436 2.275 5.44436H4.1125C4.40125 5.44436 4.6375 5.6777 4.6375 5.96288V11.1481C4.6375 11.4333 4.40125 11.6666 4.1125 11.6666ZM7.91875 2.33325H6.08125C5.7925 2.33325 5.55625 2.56659 5.55625 2.85177V11.1481C5.55625 11.4333 5.7925 11.6666 6.08125 11.6666H7.91875C8.2075 11.6666 8.44375 11.4333 8.44375 11.1481V2.85177C8.44375 2.56659 8.2075 2.33325 7.91875 2.33325ZM11.725 6.4814H9.8875C9.59875 6.4814 9.3625 6.71473 9.3625 6.99992V11.1481C9.3625 11.4333 9.59875 11.6666 9.8875 11.6666H11.725C12.0137 11.6666 12.25 11.4333 12.25 11.1481V6.99992C12.25 6.71473 12.0137 6.4814 11.725 6.4814Z"
            fill=""
          />
        </svg>
      ),
      id: 5,
      name: 'Analytics',
      href: nameTicket ? `/analytics-event/${nameTicket}` : '/analytics-event',
    },
    {
      icon: (
        <svg className="group-hover:fill-blue-700 shrink-0 w-4 h-4 relative overflow-visible fill-zinc-400" width="14" height="14" viewBox="0 0 14 14" fill="" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5.83333 9.33333V4.66667C5.83333 4.35725 5.95625 4.0605 6.17504 3.84171C6.39384 3.62292 6.69058 3.5 7 3.5H12.25V2.91667C12.25 2.275 11.725 1.75 11.0833 1.75H2.91667C2.60725 1.75 2.3105 1.87292 2.09171 2.09171C1.87292 2.3105 1.75 2.60725 1.75 2.91667V11.0833C1.75 11.3928 1.87292 11.6895 2.09171 11.9083C2.3105 12.1271 2.60725 12.25 2.91667 12.25H11.0833C11.725 12.25 12.25 11.725 12.25 11.0833V10.5H7C6.69058 10.5 6.39384 10.3771 6.17504 10.1583C5.95625 9.9395 5.83333 9.64275 5.83333 9.33333V9.33333ZM7.58333 4.66667C7.2625 4.66667 7 4.92917 7 5.25V8.75C7 9.07083 7.2625 9.33333 7.58333 9.33333H12.8333V4.66667H7.58333ZM9.33333 7.875C8.84917 7.875 8.45833 7.48417 8.45833 7C8.45833 6.51583 8.84917 6.125 9.33333 6.125C9.8175 6.125 10.2083 6.51583 10.2083 7C10.2083 7.48417 9.8175 7.875 9.33333 7.875Z"
            fill=""
          />
        </svg>
      ),
      id: 6,
      name: 'Sales Report',
      href: nameTicket ? `/sales-report/${nameTicket}` : '/sales-report',
    },
    {
      icon: (
        <svg className="group-hover:fill-blue-700 shrink-0 w-4 h-4 relative overflow-visible fill-zinc-400" width="14" height="14" viewBox="0 0 14 14" fill="" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.33301 6.41675C10.3013 6.41675 11.0772 5.63508 11.0772 4.66675C11.0772 3.69841 10.3013 2.91675 9.33301 2.91675C8.36467 2.91675 7.58301 3.69841 7.58301 4.66675C7.58301 5.63508 8.36467 6.41675 9.33301 6.41675ZM4.66634 6.41675C5.63467 6.41675 6.41051 5.63508 6.41051 4.66675C6.41051 3.69841 5.63467 2.91675 4.66634 2.91675C3.69801 2.91675 2.91634 3.69841 2.91634 4.66675C2.91634 5.63508 3.69801 6.41675 4.66634 6.41675ZM4.66634 7.58342C3.30717 7.58342 0.583008 8.26592 0.583008 9.62508V10.5001C0.583008 10.8209 0.845508 11.0834 1.16634 11.0834H8.16634C8.48717 11.0834 8.74967 10.8209 8.74967 10.5001V9.62508C8.74967 8.26592 6.02551 7.58342 4.66634 7.58342ZM9.33301 7.58342C9.16384 7.58342 8.97134 7.59508 8.76717 7.61258C8.77884 7.61842 8.78467 7.63008 8.79051 7.63592C9.45551 8.12008 9.91634 8.76758 9.91634 9.62508V10.5001C9.91634 10.7042 9.87551 10.9026 9.81134 11.0834H12.833C13.1538 11.0834 13.4163 10.8209 13.4163 10.5001V9.62508C13.4163 8.26592 10.6922 7.58342 9.33301 7.58342Z"
            fill=""
          />
        </svg>
      ),
      id: 7,
      name: 'Guest & Checkin',
      href: nameTicket ? `/guest-and-checkin/${nameTicket}` : '/guest-and-checkin',
    },
    {
      icon: (
        <svg className="group-hover:fill-blue-700 shrink-0 w-4 h-4 relative overflow-visible fill-zinc-400" width="14" height="14" viewBox="0 0 14 14" fill="" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.16699 11.0834V8.63341C1.60902 8.63341 2.03294 8.46133 2.3455 8.15502C2.65805 7.84871 2.83365 7.43327 2.83365 7.00008C2.83365 6.56689 2.65805 6.15145 2.3455 5.84514C2.03294 5.53883 1.60902 5.36675 1.16699 5.36675V2.91675H12.8336V5.36675C12.3916 5.36675 11.9676 5.53883 11.6551 5.84514C11.3425 6.15145 11.1669 6.56689 11.1669 7.00008C11.1669 7.43327 11.3425 7.84871 11.6551 8.15502C11.9676 8.46133 12.3916 8.63341 12.8336 8.63341V11.0834H1.16699ZM6.02333 8.79257C6.32468 8.95879 6.67085 9.0419 7.06186 9.0419C7.32834 9.0419 7.58112 9.00095 7.8202 8.91904C8.05929 8.83472 8.26849 8.70945 8.4478 8.54323C8.62711 8.377 8.76533 8.16742 8.86246 7.91447L8.00325 7.6832C7.92356 7.90724 7.80277 8.07587 7.64089 8.1891C7.47901 8.30232 7.28351 8.35894 7.05438 8.35894C6.71817 8.35894 6.46414 8.23969 6.2923 8.00119C6.14619 7.79636 6.06219 7.52534 6.04032 7.18814H8.94465C8.94465 6.74247 8.88737 6.37509 8.77281 6.086C8.65824 5.79451 8.50757 5.56685 8.32079 5.40304C8.13649 5.23681 7.93227 5.12118 7.70813 5.05613C7.48648 4.99109 7.26607 4.95857 7.04691 4.95857C6.65591 4.95857 6.31098 5.04168 6.01213 5.2079C5.71327 5.37413 5.47917 5.61022 5.30981 5.91616C5.14046 6.22211 5.05579 6.58347 5.05579 7.00023C5.05579 7.417 5.14171 7.77836 5.31355 8.08431C5.48539 8.39025 5.72199 8.62634 6.02333 8.79257ZM6.06041 6.62081C6.07906 6.49236 6.10779 6.37432 6.14661 6.26668C6.22381 6.05709 6.33589 5.89689 6.48282 5.78608C6.62976 5.67285 6.81032 5.61624 7.0245 5.61624C7.19385 5.61624 7.34701 5.65719 7.48399 5.7391C7.62346 5.8186 7.73677 5.94748 7.82394 6.12575C7.89139 6.25805 7.93769 6.42307 7.96286 6.62081H6.06041Z"
            fill=""
          />
        </svg>
      ),
      id: 8,
      name: 'e-Ticket',
      href: nameTicket ? `/e-ticket/${nameTicket}` : '/e-ticket',
    },
    {
      icon: (
        <svg className="group-hover:fill-blue-700 shrink-0 w-4 h-4 relative overflow-visible fill-zinc-400" width="14" height="14" viewBox="0 0 14 14" fill="" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.00033 4.66659H2.33366C2.02424 4.66659 1.72749 4.7895 1.5087 5.00829C1.28991 5.22709 1.16699 5.52383 1.16699 5.83325V8.16659C1.16699 8.476 1.28991 8.77275 1.5087 8.99154C1.72749 9.21034 2.02424 9.33325 2.33366 9.33325H2.91699V11.6666C2.91699 11.8213 2.97845 11.9697 3.08785 12.0791C3.19724 12.1885 3.34562 12.2499 3.50033 12.2499H4.66699C4.8217 12.2499 4.97007 12.1885 5.07947 12.0791C5.18887 11.9697 5.25033 11.8213 5.25033 11.6666V9.33325H7.00033L9.91699 11.6666V2.33325L7.00033 4.66659ZM12.542 6.99992C12.542 7.99742 11.982 8.90159 11.0837 9.33325V4.66659C11.9762 5.10409 12.542 6.00825 12.542 6.99992Z"
            fill=""
          />
        </svg>
      ),
      id: 9,
      name: 'Email Blast',
      href: nameTicket ? `/email-blast/${nameTicket}` : '/email-blast',
    },
  ];

  return (
    <div className="flex flex-col gap-2">
      {navigation.map((item) => (
        <div className="flex flex-col gap-2" key={item.id}>
          <NavLink
            to={item.href}
            end={false}
            onClick={(e) => {
              const currentPath = location.pathname;
              const itemPath = item.matchPath || item.href;
              
              if (currentPath.startsWith(itemPath)) {
                e.preventDefault();
              }
            }}
            className={({ isActive }) => {
              const matches = item.matchPath 
                ? location.pathname.startsWith(item.matchPath.replace('/*', ''))
                : isActive;
              return `flex gap-2 items-center rounded-xl p-4 hover:bg-sky-100 hover:cursor-pointer ${
                matches ? 'text-blue-600 bg-sky-100 font-semibold text-xs *:fill-blue-600' : 'text-zinc-400 font-semibold text-xs hover:text-blue-600 group'
              }`;
            }}
          >
            {item.icon}
            {isOpen && item.name}
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default TabMenu;
