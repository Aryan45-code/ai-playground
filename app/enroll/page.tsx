"use client";
import { useState } from "react";
import Script from "next/script";

export default function EnrollPage() {
  const [details, setDetails] = useState({ name: "", email: "", phone: "", college: "" });
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    if (!details.name || !details.phone || !details.college) {
      alert("Please fill in all details first!");
      return;
    }
    setLoading(true);

    try {
      // 1. Ask your backend for a Razorpay Order ID
      const orderRes = await fetch("/api/razorpay/create-order", {
        method: "POST",
        body: JSON.stringify({ amount: 500 }), // The enrollment fee
      });
      const order = await orderRes.json();

      // 2. Configure the Razorpay Checkout Window
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, 
        amount: order.amount,
        currency: "INR",
        name: "MUJ INTURNS",
        description: "Program Enrollment Fee",
        order_id: order.id,
        prefill: {
          name: details.name,
          email: details.email,
          contact: details.phone,
        },
        theme: { color: "#4f46e5" }, // Indigo to match your UI
        // 3. THIS RUNS ONLY IF PAYMENT IS SUCCESSFUL
        handler: async function (response: any) {
          const paymentId = response.razorpay_payment_id;
          
          // 4. Save everything to the Database!
          await fetch("/api/enroll", {
            method: "POST",
            body: JSON.stringify({
              ...details,
              paymentId: paymentId,
            }),
          });

          alert("Enrollment Complete! Welcome aboard.");
          // Optional: window.location.href = "/success";
        },
      };

      // Open the Razorpay window
      const rzp = new (window as any).Razorpay(options);
      rzp.open();
      
    } catch (error) {
      console.error("Payment failed to launch", error);
      alert("Something went wrong loading the payment gateway.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-4">
      {/* Required to load Razorpay securely */}
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      
      <div className="max-w-md w-full bg-[#111] border border-white/10 p-8 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-black mb-2 text-white text-center tracking-tight">Final Step</h2>
        <p className="text-gray-400 mb-8 text-center text-sm">Enter your details to secure your spot.</p>
        
        <div className="space-y-4 mb-8">
          <input
            type="text" placeholder="Full Name" 
            className="w-full p-3 bg-black/50 border border-white/10 rounded-xl text-white focus:ring-2 focus:ring-indigo-500 outline-none transition"
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
          />
          <input
            type="email" placeholder="Email Address" 
            className="w-full p-3 bg-black/50 border border-white/10 rounded-xl text-white focus:ring-2 focus:ring-indigo-500 outline-none transition"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
          />
          <input
            type="text" placeholder="Phone Number" 
            className="w-full p-3 bg-black/50 border border-white/10 rounded-xl text-white focus:ring-2 focus:ring-indigo-500 outline-none transition"
            onChange={(e) => setDetails({ ...details, phone: e.target.value })}
          />
          <input
            type="text" placeholder="College / University" 
            className="w-full p-3 bg-black/50 border border-white/10 rounded-xl text-white focus:ring-2 focus:ring-indigo-500 outline-none transition"
            onChange={(e) => setDetails({ ...details, college: e.target.value })}
          />
        </div>

        <button 
          onClick={handlePayment}
          disabled={loading}
          className="w-full bg-indigo-600 text-white p-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition transform hover:scale-[1.02] disabled:bg-indigo-900 disabled:scale-100"
        >
          {loading ? "Processing..." : "Pay ₹500 & Enroll"}
        </button>
      </div>
    </div>
  );
}