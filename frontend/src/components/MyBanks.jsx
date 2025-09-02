import React from "react";
import { Home as HomeIcon, Banknote, History, Send } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function MyBanks() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md flex flex-col">
        <div className="px-6 py-6 font-bold text-lg text-blue-600">UserAccount</div>
        <nav className="flex flex-col gap-2 px-4">
          <SidebarItem icon={<HomeIcon size={18} />} label="Home" to="/home" />
          <SidebarItem icon={<Banknote size={18} />} label="My Banks" to="/mybanks" />
          <SidebarItem icon={<History size={18} />} label="Transaction History" to="/transactions" />
          <SidebarItem icon={<Send size={18} />} label="Transfer Funds" to="/transfer" />
        </nav>
      </aside>

      <main className="flex-1 p-6">
        <h1 className="text-2xl font-semibold">My Bank Accounts</h1>
        <p className="text-gray-500 mb-6">
          Effortlessly Manage Your Banking Activities
        </p>

        <div className="bg-blue-600 text-white p-6 rounded-xl shadow-md w-80">
          <div className="text-lg font-semibold">Plaid Checking</div>
          <div className="text-2xl font-bold mt-2">$320.00</div>
          <div className="mt-4 text-sm tracking-widest">•••• •••• •••• 0000</div>
          <div className="mt-2 text-xs opacity-75">CARD ID: OWIWF…fbWM*</div>
        </div>
      </main>
    </div>
  );
}

function SidebarItem({ icon, label, to }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`flex items-center gap-2 px-4 py-2 rounded-md cursor-pointer ${
        isActive ? "bg-blue-100 text-blue-600" : "text-gray-600"
      }`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}
