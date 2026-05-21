"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface CheckoutProps {
  courseId: string;
  price: number;
}

export default function CheckoutButton({ courseId, price }: CheckoutProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // 1. Bulletproof script loader: Guarantees Razorpay loads before doing anything else
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      if (typeof window !== "undefined" && (window as any).Razorpay) {
        resolve(true);
        return;
      }
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const processPayment = async () => {
    setLoading(true);

    const isLoaded = await loadRazorpayScript();
    if (!isLoaded) {
      alert("Failed to load Razorpay SDK. Please check your internet or disable your adblocker.");
      setLoading(false);
      return;
    }

    const userDetails = {
      name: "Test User",
      email: "test@example.com",
      phone: "9999999999",
      courseId,
      amount: price,
    };

    try {
      // 2. Ask backend to create Razorpay Order
      const res = await fetch("/api/razorpay/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userDetails),
      });
      
      if (!res.ok) {
        alert("Server Error: Check your terminal for backend issues.");
        setLoading(false);
        return;
      }

      const data = await res.json();

      // 3. Open Razorpay Window
      const options = {
        // REPLACE THIS STRING WITH YOUR ACTUAL rzp_test_... KEY
        key: "rzp_test_SrxQwDGs6IxPwU", 
        amount: price * 100,
        currency: "INR",
        name: "The AI Playground",
        description: `Enrollment for ${courseId.toUpperCase()}`,
        order_id: data.orderId,
        handler: async function (response: any) {
          
          // 4. Verify Payment on Backend
          const verifyRes = await fetch("/api/razorpay/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(response),
          });
          
          const verifyData = await verifyRes.json();
         if (verifyData.success) {
  // Redirects them to our new success page!
  window.location.href = `/success?course=${courseId}`;
}
        },
        theme: { color: "#4f46e5" },
      };

      const rzp = new (window as any).Razorpay(options);
      
      // If payment fails/is closed, this resets the button
      // Replace the old rzp.on('payment.failed') block with this:
      rzp.on('payment.failed', function (response: any) {
        console.log("🔴 RAZORPAY UI ERROR:", response.error);
        // Automatically redirect to the failure page
        router.push("/payment-failed");
      });
      
      rzp.open();
      
      rzp.open();
    } catch (error) {
      console.error(error);
      alert("Something went wrong initializing the payment.");
    }
    
    setLoading(false);
  };

  return (
    <button
      onClick={processPayment}
      disabled={loading}
      className="bg-white text-black hover:bg-gray-200 font-black py-4 px-12 rounded-xl text-lg transition transform hover:scale-105 shadow-xl disabled:opacity-50 flex items-center justify-center gap-2 mx-auto"
    >
      {loading ? (
        <span>Loading Secure Checkout...</span>
      ) : (
        <span>Enroll Now</span>
      )}
    </button>
  );
}