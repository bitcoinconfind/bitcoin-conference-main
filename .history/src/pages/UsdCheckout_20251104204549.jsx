import React, { useState } from "react";

const UsdCheckout = () => {
  const [ticketType, setTicketType] = useState("general");
  const [quantity, setQuantity] = useState(1);

  const prices = {
    general: 99,
    vip: 399,
    whale: 2999,
  };

  const total = (prices[ticketType] * quantity).toFixed(2);

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4 text-orange-500">
        Bitcoin Conference India 2026
      </h1>
      <p className="text-lg text-gray-400 mb-8">
        Pay with Credit/Debit Card (USD)
      </p>

      <div className="bg-[#1A1A1A] rounded-2xl p-8 w-full max-w-lg border border-orange-500/40 shadow-orange-500/20 shadow-md">
        <h2 className="text-2xl mb-4 font-semibold">Select Ticket Type</h2>
        <select
          value={ticketType}
          onChange={(e) => setTicketType(e.target.value)}
          className="w-full mb-4 bg-[#0F0F0F] border border-[#333] rounded-lg p-3 focus:outline-none focus:border-orange-500"
        >
          <option value="general">General Admission — $99</option>
          <option value="vip">VIP Pass — $399</option>
          <option value="whale">Whale Pass — $2999</option>
        </select>

        <div className="flex justify-between items-center mb-6">
          <label className="text-gray-400">Number of Tickets:</label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-20 text-center bg-[#0F0F0F] border border-[#333] rounded-lg p-2 focus:outline-none focus:border-orange-500"
          />
        </div>

        <div className="flex justify-between text-xl font-semibold mb-6">
          <span>Total:</span>
          <span className="text-orange-500">${total} USD</span>
        </div>

        <button className="w-full py-3 bg-orange-500 hover:bg-orange-400 rounded-xl font-semibold text-black">
          Continue to Payment
        </button>
      </div>
    </div>
  );
};

export default UsdCheckout;
