import React from "react";
import { Link, useLocation } from "react-router-dom"; 
import { HomeIcon, Banknote, History, Send } from "lucide-react";

export  function TransferFunds() {
  return (
    <div className="flex min-h-screen bg-gray-100">
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
      <main className="flex-1 p-6">
        <h2 className="text-2xl font-bold mb-2">Payment Transfer</h2>
        <p className="text-gray-500 mb-6">
          Please provide any specific details or notes related to the payment
          transfer
        </p>

        <form className="bg-white rounded-lg shadow p-6 max-w-2xl">
          {/* Transfer details */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Transfer details</h3>

            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Source Bank
            </label>
            <select className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Plaid Checking</option>
              <option>Savings Account</option>
              <option>Credit Card</option>
            </select>

            <label className="block text-sm font-medium text-gray-700 mb-1">
              Transfer Note (Optional)
            </label>
            <textarea
              className="w-full border border-gray-300 rounded-lg px-3 py-2 h-20 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write a short note here"
            />
          </div>

          {/* Bank account details */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Bank account details</h3>

            <label className="block text-sm font-medium text-gray-700 mb-1">
              Recipient's Email Address
            </label>
            <input
              type="email"
              placeholder="ex: johndoe@gmail.com"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <label className="block text-sm font-medium text-gray-700 mb-1">
              Receiver's Plaid Sharable Id
            </label>
            <input
              type="text"
              placeholder="Enter the public account number"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <label className="block text-sm font-medium text-gray-700 mb-1">
              Amount
            </label>
            <input
              type="number"
              placeholder="ex: 5.00"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700"
          >
            Transfer Funds
          </button>
        </form>
      </main>
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
