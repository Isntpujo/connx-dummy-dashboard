import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserConnectionStatus from './components/elements/user-connection-status/user-connection-status';
import ProtectedLayout from './components/ProtectedRoute.jsx';
import DashboardPage from './pages/dashboard.jsx';
import LoginPage from './pages/login.jsx';
import RegisterPage from './pages/register.jsx';
import AnalyticsPage from './pages/analytics.jsx';
import ManageEventPage from './pages/manage-event.jsx';
import ProductPage from './pages/products.jsx';
import VoucherCodePage from './pages/voucher-code.jsx';
import LogActivitiesPage from './pages/log-activities.jsx';
import InformationEventPage from './pages/information-event.jsx';
import InformationTicketPage from './pages/information-ticket.jsx';
import FormulirPemesananPage from './pages/formulir-pemesanan.jsx';
import AnalyticsEventPage from './pages/analytics-event.jsx';
import SalesReportPage from './pages/sales-report.jsx';
import GuestAndCheckinPage from './pages/guest-and-checkin.jsx';
import ETicketPage from './pages/e-ticket.jsx';
import EmailBlastPage from './pages/email-blast.jsx';

function App() {
  return (
    <>
      <UserConnectionStatus />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route element={<ProtectedLayout />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
            <Route path="/manage-event" element={<ManageEventPage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/voucher-code" element={<VoucherCodePage />} />
            <Route path="/log-activities" element={<LogActivitiesPage />} />
            <Route path="/information-event/:nameTicket" element={<InformationEventPage />} />
            <Route path="/information-ticket/:nameTicket" element={<InformationTicketPage />} />
            <Route path="/formulir-pemesanan/:nameTicket" element={<FormulirPemesananPage />} />
            <Route path="/analytics-event/:nameTicket" element={<AnalyticsEventPage />} />
            <Route path="/sales-report/:nameTicket" element={<SalesReportPage />} />
            <Route path="/guest-and-checkin/:nameTicket" element={<GuestAndCheckinPage />} />
            <Route path="/e-ticket/:nameTicket" element={<ETicketPage />} />
            <Route path="/email-blast/:nameTicket" element={<EmailBlastPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
