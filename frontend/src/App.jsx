import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import SideBar from "./components/SideBar";
import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/SignUp";
import { Home } from "./components/Home";
import { MyBanks } from "./components/MyBanks";
import { OTPVerification } from "./components/OTPVerification";
import { TransactionHistory } from "./components/TransactionHistory";
import { TransferFunds } from "./components/TransferFunds";

// Layout wrapper to handle sidebar visibility + scroll logic
function Layout() {
  const location = useLocation();

  // Routes where sidebar should be hidden
  const noSidebarRoutes = ["/", "/signup", "/verify-otp"];
  const hideSidebar = noSidebarRoutes.includes(location.pathname);

  // Routes that need scroll (only applied if sidebar is shown)
  const scrollRoutes = ["/transactions", "/transfer"];
  const needsScroll = !hideSidebar && scrollRoutes.includes(location.pathname);

  return (
    <div className="flex">
      {/* Sidebar only if not hidden */}
      {!hideSidebar && <SideBar />}

      {/* Main content with conditional scroll (excluded for signin/signup) */}
      <main
        className={`${!hideSidebar ? "ml-64" : ""} h-screen ${
          needsScroll ? "overflow-y-auto" : ""
        } bg-gray-50 w-full`}
      >
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/mybanks" element={<MyBanks />} />
          <Route path="/verify-otp" element={<OTPVerification />} />
          <Route path="/transactions" element={<TransactionHistory />} />
          <Route path="/transfer" element={<TransferFunds />} />
        </Routes>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}
