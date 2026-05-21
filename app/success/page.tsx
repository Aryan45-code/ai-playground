import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="max-w-2xl w-full bg-[#111] border border-white/10 rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden">
        
        {/* Glow Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-emerald-400 to-teal-500"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-emerald-500/20 blur-[50px] rounded-full"></div>

        {/* Success Icon */}
        <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(52,211,153,0.3)] text-white text-5xl">
          ✓
        </div>

        <h1 className="text-4xl font-black text-white mb-4">
          Payment Successful!
        </h1>
        <p className="text-xl text-gray-400 mb-10 leading-relaxed">
          Welcome to The AI Playground. Your enrollment is confirmed and your engineering journey officially begins now.
        </p>

        <div className="bg-black/50 border border-white/5 rounded-2xl p-6 mb-10 text-left">
          <h3 className="text-lg font-bold text-white mb-4 border-b border-white/10 pb-2">Next Steps:</h3>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-start gap-3">
              <span className="text-emerald-400">1.</span> 
              Check your email for your official receipt and portal access link.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-400">2.</span> 
              Join the official Discord/WhatsApp cohort group to meet your instructors.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-400">3.</span> 
              If you ordered a hardware kit, it will ship within 48 hours.
            </li>
          </ul>
        </div>

        <Link 
          href="/" 
          className="inline-block bg-white text-black font-black py-4 px-12 rounded-xl text-lg hover:bg-gray-200 transition transform hover:scale-105"
        >
          Return to Dashboard
        </Link>
      </div>
    </div>
  );
}