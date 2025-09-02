import React, { useState } from "react";
import { Home as HomeIcon, Banknote, History, Send } from "lucide-react";
import { Link, useLocation } from "react-router-dom"; 

export function Home() {
  const [transactions, setTransactions] = useState([]); 
  const [balance, setBalance] = useState(320.0);

  const addTransaction = () => {
    const amount = 4.33;

    if (balance < amount) {
      alert("Insufficient balance!");
      return;
    }

    const newTxn = {
      name: "Starbucks",
      amount: `-$${amount.toFixed(2)}`,
      status: "Success",
      date: new Date().toLocaleString(),
      channel: "In Store",
      category: "Food",
    };

    setTransactions([...transactions, newTxn]);
    setBalance((prev) => prev - amount);
  };

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

      
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-semibold">Welcome</h1>
        <p className="text-gray-500 mb-4">
          Access & manage your account and transactions efficiently.
        </p>

        {/* Balance */}
        <div className="bg-white shadow rounded-xl p-6 mb-6 flex items-center justify-between">
          <div>
            <p className="text-gray-500">Bank Account</p>
            <h2 className="text-2xl font-bold">${balance.toFixed(2)}</h2>
          </div>
          <div className="w-20 h-20 border-4 border-blue-500 rounded-full flex items-center justify-center font-semibold text-lg">
            💰
          </div>
        </div>

        
        <div>
          <h2 className="text-lg font-semibold mb-2">Recent transactions</h2>

          <button
            onClick={addTransaction}
            className="mb-4 px-4 py-2 rounded-lg bg-blue-600 text-white"
          >
            Make Payment
          </button>

          <div className="bg-white shadow rounded-xl p-4">
            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-500 text-sm">
                  <th>Transaction</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Channel</th>
                  <th>Category</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {transactions.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="text-center py-4 text-gray-400">
                      No transactions yet
                    </td>
                  </tr>
                ) : (
                  transactions.map((txn, i) => (
                    <Transaction key={i} {...txn} />
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
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

// Transaction Row
function Transaction({ name, amount, status, date, channel, category }) {
  return (
    <tr className="border-t">
      <td className="py-2">{name}</td>
      <td
        className={`py-2 ${
          amount.startsWith("-") ? "text-red-500" : "text-green-600"
        }`}
      >
        {amount}
      </td>
      <td className="py-2 text-green-600">{status}</td>
      <td className="py-2">{date}</td>
      <td className="py-2">{channel}</td>
      <td className="py-2">{category}</td>
    </tr>
  );
}
