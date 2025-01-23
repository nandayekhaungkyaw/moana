"use client";

import { useState } from "react";

export default function CTASubscribeForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log("Submitted email:", email);
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="w-[80%] max-w-md">
      <div className="relative">
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-sm border border-gray-300 px-4 py-3 pr-24 text-sm outline-none transition-colors focus:border-gray-400 focus:ring-2 focus:ring-gray-200"
          required
        />
        <button
          type="submit"
          className="absolute right-[6px] top-[6px] h-[calc(100%-12px)] rounded-sm bg-black px-4 text-sm  text-white transition-colors hover:bg-gray-800 active:bg-gray-950"
        >
          Subscribe
        </button>
      </div>
    </form>
  );
}
