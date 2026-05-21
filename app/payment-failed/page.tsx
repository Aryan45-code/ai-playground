import Link from "next/link";

export default function PaymentFailedPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="max-w-2xl w-full bg-[#111] border border-white/10 rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden">
        
        {/* Red Glow Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-red-500 to-rose-600"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-red-500/20 blur-[50px] rounded-full"></div>

        {/* Warning Icon */}
        <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(239,68,68,0.3)] text-white text-5xl font-black">
          !
        </div>

        <h1 className="text-4xl font-black text-white mb-4">
          Payment Incomplete
        </h1>
        <p className="text-xl text-gray-400 mb-10 leading-relaxed">
          Don't worry, no charges were made to your account. This usually happens due to a network issue, a timeout, or a declined card.
        </p>

        <div className="bg-black/50 border border-white/5 rounded-2xl p-6 mb-10 text-left">
          <h3 className="text-lg font-bold text-white mb-4 border-b border-white/10 pb-2">What to do next:</h3>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-start gap-3">
              <span className="text-red-400">1.</span> 
              Double-check your internet connection and try the payment again.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400">2.</span> 
              Try using a different payment method (UPI, different card, etc.).
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400">3.</span> 
              If the issue persists, contact our support team at support@aiplayground.com.
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/" 
            className="inline-block bg-white text-black font-black py-4 px-12 rounded-xl text-lg hover:bg-gray-200 transition transform hover:scale-105"
          >
            Try Again
          </Link>
        </div>
      </div>
    </div>
  );
}