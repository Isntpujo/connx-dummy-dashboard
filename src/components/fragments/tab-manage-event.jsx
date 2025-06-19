import { useState } from 'react';
import Card from './card-ticket';
import Button from '../elements/button';
import { NavLink } from 'react-router-dom';

const products = [
  {
    id: 1,
    image: '/images/img-card-event-karaoke.jpg',
    nameTicket: 'OTW Festival',
    sold: 2.564,
    views: 12.345,
  },
  {
    id: 2,
    image: '/images/img-card-event-karaoke.jpg',
    nameTicket: 'OTW Karaoke',
    sold: 1.514,
    views: 45.115,
  },
  {
    id: 3,
    image: '/images/img-card-event-karaoke.jpg',
    nameTicket: 'OTW Culinary',
    sold: 7.213,
    views: 32.022,
  },
];

const TabManageEvent = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const tabs = [
    {
      id: 'tab1',
      label: (
        <div className="active w-fit bg-white rounded-tr-xl rounded-br-xl rounded-bl-xl p-5 flex flex-row gap-2 items-center justify-start">
          <svg className="rounded-full shrink-0 w-8 h-8 relative overflow-visible" width="32" height="32" viewBox="0 0 32 32" fill="" xmlns="http://www.w3.org/2000/svg">
            <rect className="fill-gray-100" width="32" height="32" rx="16" fill="" />
            <path
              d="M10.7498 12.5C10.429 12.5 10.1665 12.7625 10.1665 13.0833V20.6667C10.1665 21.3083 10.6915 21.8333 11.3332 21.8333H18.9165C19.2373 21.8333 19.4998 21.5708 19.4998 21.25C19.4998 20.9292 19.2373 20.6667 18.9165 20.6667H11.9165C11.5957 20.6667 11.3332 20.4042 11.3332 20.0833V13.0833C11.3332 12.7625 11.0707 12.5 10.7498 12.5ZM20.6665 10.1667H13.6665C13.0248 10.1667 12.4998 10.6917 12.4998 11.3333V18.3333C12.4998 18.975 13.0248 19.5 13.6665 19.5H20.6665C21.3082 19.5 21.8332 18.975 21.8332 18.3333V11.3333C21.8332 10.6917 21.3082 10.1667 20.6665 10.1667Z"
              fill=""
            />
          </svg>
          <div className="flex flex-col items-start justify-center">
            <div className="text-gray-400 text-xs text-left">3 Event</div>
            <div className="active text-sm text-left font-bold">Semua</div>
          </div>
        </div>
      ),
    },
    {
      id: 'tab2',
      label: (
        <div className="w-fit bg-white rounded-tr-xl rounded-br-xl rounded-bl-xl p-5 flex flex-row gap-2 items-center justify-start">
          <svg className="rounded-full shrink-0 w-8 h-8 relative overflow-visible" width="32" height="32" viewBox="0 0 32 32" fill="" xmlns="http://www.w3.org/2000/svg">
            <rect className="fill-gray-100" width="32" height="32" rx="16" fill="" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14 10C13.7725 10 13.5736 10.1536 13.5162 10.3738L12.0162 16.1238C11.9771 16.2736 12.0097 16.4331 12.1043 16.5557C12.199 16.6782 12.3451 16.75 12.5 16.75H13.8687L13.0133 20.3855C12.9613 20.6063 13.0646 20.8345 13.2648 20.9412C13.465 21.0479 13.712 21.0065 13.8664 20.8402L20.3664 13.8402C20.5017 13.6945 20.5378 13.4824 20.4583 13.3001C20.3788 13.1178 20.1989 13 20 13H17.6404L18.2351 10.6213C18.2724 10.4719 18.2389 10.3137 18.1441 10.1923C18.0493 10.0709 17.904 10 17.75 10H14ZM15.7351 12.3712C15.8021 12.1033 15.6392 11.8319 15.3713 11.7649C15.1034 11.6979 14.8319 11.8608 14.7649 12.1287L14.2649 14.1287C14.198 14.3966 14.3608 14.6681 14.6287 14.735C14.8966 14.802 15.1681 14.6391 15.2351 14.3712L15.7351 12.3712Z"
              fill=""
            />
          </svg>
          <div className="flex flex-col items-start justify-center">
            <div className="text-gray-400 text-xs text-left">3 Event</div>
            <div className="active text-sm text-left font-bold">Sedang Tayang</div>
          </div>
        </div>
      ),
    },
    {
      id: 'tab3',
      label: (
        <div className="w-fit bg-white rounded-tr-xl rounded-br-xl rounded-bl-xl p-5 flex flex-row gap-2 items-center justify-start">
          <svg className="rounded-full shrink-0 w-8 h-8 relative overflow-visible" width="32" height="32" viewBox="0 0 32 32" fill="" xmlns="http://www.w3.org/2000/svg">
            <rect className="fill-gray-100" width="32" height="32" rx="16" fill="" />
            <path
              d="M13.1 21C12.7975 21 12.5385 20.8922 12.3229 20.6766C12.1073 20.461 11.9996 20.2021 12 19.9V11.1C12 10.7975 12.1078 10.5385 12.3234 10.3229C12.539 10.1073 12.7979 9.99963 13.1 10H17.5L20.8 13.3V19.9C20.8 20.2025 20.6922 20.4615 20.4766 20.6771C20.261 20.8927 20.0021 21.0004 19.7 21H13.1ZM16.95 13.85H19.7L16.95 11.1V13.85Z"
              fill=""
            />
          </svg>
          <div className="flex flex-col items-start justify-center">
            <div className="text-gray-400 text-xs text-left">3 Event</div>
            <div className="active text-sm text-left font-bold">Draft</div>
          </div>
        </div>
      ),
    },
    {
      id: 'tab4',
      label: (
        <div className="w-fit bg-white rounded-tr-xl rounded-br-xl rounded-bl-xl p-5 flex flex-row gap-2 items-center justify-start">
          <svg className="rounded-full shrink-0 w-8 h-8 relative overflow-visible" width="32" height="32" viewBox="0 0 32 32" fill="" xmlns="http://www.w3.org/2000/svg">
            <rect className="fill-gray-100" width="32" height="32" rx="16" fill="" />
            <path
              d="M18.1455 17.6083L18.0968 16.7583L16.4948 15.8392V13.4414C16.4948 13.2297 16.3196 13.0603 16.1006 13.0603H16.0678C15.8488 13.0603 15.6736 13.2297 15.6736 13.4414V15.9398C15.6736 16.125 15.7721 16.2997 15.9418 16.395L17.9403 17.5542C18.0047 17.5908 18.0757 17.6084 18.1455 17.6083Z"
              fill=""
            />
            <path
              d="M17.7071 19.1222C17.2499 19.3088 16.7477 19.4121 16.2211 19.4121C14.1076 19.4121 12.3884 17.75 12.3884 15.7069C12.3884 13.6638 14.1076 12.0017 16.2211 12.0017C16.801 12.0017 17.3512 12.1269 17.8443 12.3506L17.8092 11.7371H18.9453C18.6815 11.5679 18.4008 11.4233 18.1069 11.3056C17.509 11.0663 16.8682 10.9431 16.2211 10.9431C14.9141 10.9432 13.6607 11.4452 12.7366 12.3387C11.8125 13.2321 11.2933 14.4439 11.2934 15.7074C11.2935 16.9709 11.8127 18.1826 12.737 19.076C13.6612 19.9694 14.9146 20.4713 16.2216 20.4712C16.7026 20.4712 17.1801 20.4031 17.6391 20.2698C17.6058 20.1214 17.5895 19.9675 17.5895 19.81C17.5895 19.5698 17.6279 19.3384 17.7071 19.1222Z"
              fill=""
            />
            <path
              d="M21.421 11.7371C21.4111 11.7033 21.3976 11.6705 21.3808 11.6391C21.3477 11.5774 21.3023 11.5225 21.2473 11.4777L19.5609 10.1227C19.331 9.93742 18.986 9.96389 18.7889 10.1915C18.5973 10.4138 18.6301 10.7473 18.8601 10.9378L19.8516 11.7371H21.421Z"
              fill=""
            />
            <path
              d="M13.5766 10.9378L11.8957 12.2928C11.6657 12.4781 11.3208 12.4516 11.1291 12.224C11.0827 12.1709 11.0476 12.1094 11.0258 12.0431C11.004 11.9768 10.9959 11.907 11.002 11.8377C11.0081 11.7684 11.0283 11.7009 11.0613 11.6391C11.0944 11.5774 11.1398 11.5225 11.1949 11.4777L12.8812 10.1227C12.936 10.0781 12.9994 10.0445 13.0678 10.0239C13.1361 10.0032 13.208 9.99584 13.2793 10.0022C13.3506 10.0086 13.4199 10.0287 13.4832 10.0612C13.5464 10.0936 13.6023 10.1379 13.6477 10.1915C13.8448 10.4138 13.812 10.7473 13.5766 10.9378Z"
              fill=""
            />
            <path
              d="M18.9971 18.1115L18.6774 12.5311H20.8821L20.5624 18.1115C20.3093 18.0538 20.0495 18.0268 19.7831 18.0307C19.5211 18.0307 19.2591 18.0576 18.9971 18.1115ZM19.7764 21C19.3679 21 19.0371 20.8922 18.784 20.6765C18.5353 20.457 18.411 20.1681 18.411 19.81C18.411 19.4556 18.5353 19.1706 18.784 18.955C19.0371 18.7355 19.3679 18.6257 19.7764 18.6257C20.1894 18.6257 20.5202 18.7355 20.7689 18.955C21.022 19.1706 21.1486 19.4556 21.1486 19.81C21.1486 20.1681 21.022 20.457 20.7689 20.6765C20.5202 20.8922 20.1894 21 19.7764 21Z"
              fill=""
            />
          </svg>
          <div className="flex flex-col items-start justify-center">
            <div className="text-gray-400 text-xs text-left">3 Event</div>
            <div className="active text-sm text-left font-bold">Event Berakhir</div>
          </div>
        </div>
      ),
    },
  ];

  const tabContent = {
    tab1: (
      <div className="flex gap-5">
        {products.map((product) => (
          <NavLink key={product.id} to={`/information-event/${product.nameTicket}`} className="transition-all ease-in-out duration-300 hover:drop-shadow-lg hover:scale-105">
            <Card>
              {/* <Card.Header /> */}
              <Card.Image image={product.image} />
              <Card.Ticket name={product.nameTicket} sold={product.sold} />
              <Card.Footer views={product.views} />
            </Card>
          </NavLink>
        ))}
      </div>
    ),
    tab2: (
      <div className="flex gap-5">
        {products.map((product) => (
          <Card key={product.id}>
            {/* <Card.Header /> */}
            <Card.Image image={product.image} />
            <Card.Ticket name={product.nameTicket} sold={product.sold} />
            <Card.Footer views={product.views} />
          </Card>
        ))}
      </div>
    ),
    tab3: (
      <div className="flex gap-5">
        {products.map((product) => (
          <Card key={product.id}>
            {/* <Card.Header /> */}
            <Card.Image image={product.image} />
            <Card.Ticket name={product.nameTicket} sold={product.sold} />
            <Card.Footer views={product.views} />
          </Card>
        ))}
      </div>
    ),
    tab4: (
      <div className="flex gap-5">
        {products.map((product) => (
          <Card key={product.id}>
            {/* <Card.Header /> */}
            <Card.Image image={product.image} />
            <Card.Ticket name={product.nameTicket} sold={product.sold} />
            <Card.Footer views={product.views} />
          </Card>
        ))}
      </div>
    ),
  };

  return (
    <div className="bg-[#F5F5F9] flex flex-col p-8 gap-5 w-full h-dvh">
      <div className="flex gap-5">
        {tabs.map((tab) => (
          <div key={tab.id} className="cursor-pointer transition-all ease-in-out duration-300 hover:drop-shadow-md hover:scale-105" onClick={() => setActiveTab(tab.id)}>
            <div className={`${activeTab === tab.id ? 'bg-blue-600' : 'bg-white'} rounded-tl-lg rounded-tr-lg w-14 h-2.5`}></div>
            <div className={`${activeTab === tab.id ? 'active text-blue-600 fill-blue-600' : 'active text-black fill-gray-400'}`}>{tab.label}</div>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-xl p-5">
        <Button variant="primary" size="sm">
          <svg className="shrink-0 w-4 h-4 relative overflow-visible" viewBox="0 0 14 14" fill="" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.4998 7.58334H7.58317V10.5C7.58317 10.8208 7.32067 11.0833 6.99984 11.0833C6.679 11.0833 6.4165 10.8208 6.4165 10.5V7.58334H3.49984C3.179 7.58334 2.9165 7.32084 2.9165 7.00001C2.9165 6.67917 3.179 6.41667 3.49984 6.41667H6.4165V3.50001C6.4165 3.17917 6.679 2.91667 6.99984 2.91667C7.32067 2.91667 7.58317 3.17917 7.58317 3.50001V6.41667H10.4998C10.8207 6.41667 11.0832 6.67917 11.0832 7.00001C11.0832 7.32084 10.8207 7.58334 10.4998 7.58334Z"
              fill="white"
            />
          </svg>
          Buat Event
        </Button>
      </div>
      <div className="flex gap-5">
        <div>{tabContent[activeTab]}</div>
      </div>
    </div>
  );
};

export default TabManageEvent;
