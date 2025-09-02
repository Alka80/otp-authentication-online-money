import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/SignUp";
import { Home } from "./components/Home";
import { MyBanks } from "./components/MyBanks";
import { TransactionHistory } from "./components/TransactionHistory";
import { TransferFunds } from "./components/TransferFunds";

export default function App() {
  return (
    <Router>
      {/* Fixed sidebar */}
      <SideBar />

      {/* Only this area scrolls; width shifted by sidebar (w-64 = 16rem) */}
      <main className="ml-64 h-screen overflow-y-auto p-6 bg-gray-50">
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/mybanks" element={<MyBanks />} />
          <Route path="/transactions" element={<TransactionHistory />} />
          <Route path="/transfer" element={<TransferFunds />} />
        </Routes>
      </main>
    </Router>
  );
}




