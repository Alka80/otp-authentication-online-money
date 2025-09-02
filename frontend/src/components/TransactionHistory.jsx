// src/components/TransactionHistory.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HomeIcon, Banknote, History, Send } from "lucide-react";

export function TransactionHistory() {
  const [selectedAccount, setSelectedAccount] = useState("Plaid Checking");

  const accounts = [
    { name: "Plaid Checking", balance: 320 },
    
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md flex flex-col">
        <div className="px-6 py-6 font-bold text-lg text-blue-600">UserAccount</div>
        <nav className="flex flex-col gap-2 px-4">
          <SidebarItem icon={<HomeIcon size={18} />} label="Home" to="/home" />
          <SidebarItem icon={<Banknote size={18} />} label="My Bank" to="/mybanks" />
          <SidebarItem icon={<History size={18} />} label="Transactions" to="/transactions" />
          <SidebarItem icon={<Send size={18} />} label="Transfer Funds" to="/transfer" />
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex flex-col w-full h-screen">
        <main className="flex-1 p-6 overflow-y-auto">
          {/* Header with dropdown */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-semibold">Transaction History</h1>
              <p className="text-gray-600">See your bank details and transactions.</p>
            </div>
            <select
              value={selectedAccount}
              onChange={(e) => setSelectedAccount(e.target.value)}
              className="border rounded-md px-3 py-2 text-sm"
            >
              {accounts.map((acc, index) => (
                <option key={index} value={acc.name}>
                  {acc.name}
                </option>
              ))}
            </select>
          </div>

          {/* Account Card */}
          <div className="bg-blue-600 text-white rounded-lg p-4 flex justify-between items-center">
            <div>
              <h2 className="text-lg font-bold">{selectedAccount}</h2>
              <p className="text-sm">Plaid Gold Standard 0% Interest Checking</p>
              <p className="text-sm mt-1">•••• •••• •••• 0000</p>
            </div>
            <p className="text-xl font-bold">
              $
              {accounts.find((acc) => acc.name === selectedAccount)?.balance ??
                0}
            </p>
          </div>

          {/* Transactions Table */}
          <div className="bg-white mt-6 rounded-lg shadow p-4">
            <h3 className="text-lg font-semibold mb-4">Transactions</h3>
            <table className="w-full text-left">
              <thead>
                <tr className="border-b text-gray-600">
                  <th className="py-2">Transaction</th>
                  <th className="py-2">Amount</th>
                  <th className="py-2">Status</th>
                  <th className="py-2">Date</th>
                  <th className="py-2">Channel</th>
                  <th className="py-2">Category</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="6" className="text-center py-6 text-gray-500">
                    No transactions yet. Start by transferring funds.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}

// SidebarItem with active route check
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
