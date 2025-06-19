import { Link } from 'react-router-dom';
import ConversionRate from '../components/elements/conversion-rate';
import EventSummaryEvent from '../components/elements/event-summary/event';
import EventSummarySelling from '../components/elements/event-summary/selling';
import EventSummaryTicket from '../components/elements/event-summary/ticket';
import Navbar from '../components/elements/navbar';
import Sidebar from '../components/elements/sidebar-main-menu';
import Card from '../components/fragments/card-ticket';
import { useState } from 'react';
import TableTransaction from '../components/elements/table/table-transaction';

const products = [
  {
    id: 1,
    image: '/images/img-card-event-karaoke.jpg',
    nameTicket: 'OTW Karaoke',
    sold: 2.564,
  },
];

const DashboardPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex justify-center items-start rel h-dvh w-full bg-zinc-900 overflow-scroll no-scrollbar">
      <Sidebar isOpen={isSidebarOpen} />
      <div className="flex flex-col w-full h-dvh items-center rel z-50">
        <Navbar onToggleSidebar={toggleSidebar} />
        <div className="w-full flex flex-col gap-5 p-8 bg-[#F5F5F9]">
          <div className="flex flex-col gap-2">
            <div className="text-3xl text-black font-bold ">Event Summary</div>
            <p className="text-zinc-500 text-sm">Hallo! Selamat datang di Connx Event Management dimana kamu bisa memonitoring seluruh penyelenggaraan event & manajemen tiket, hingga laporan analisa event di akhir acara.</p>
          </div>
          <div className="flex w-full gap-5">
            <EventSummaryEvent />
            <EventSummaryTicket />
            <EventSummarySelling />
          </div>
          <div className="flex w-full gap-5">
            <div className="flex flex-col gap-5 *:w-[400px] *:sticky">
              <ConversionRate />
              {products.map((product) => (
                <Link key={product.id} to={`/information-event/${product.nameTicket}`} className="transition-all ease-in-out duration-300 hover:drop-shadow-lg hover:scale-105 top-[441px]">
                  <Card key={product.id}>
                    <Card.Header />
                    {/* <Card.Image image={product.image} /> */}
                    <Card.Ticket name={product.nameTicket} sold={product.sold} />
                  </Card>
                </Link>
              ))}
            </div>
            <TableTransaction />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
