import Link from "next/link";

export default function CourseDetailPage() {
  return (
    <div className="min-h-screen p-10 flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-extrabold mb-4 text-white">Full Stack Masterclass</h1>
      <p className="text-xl text-gray-300 max-w-2xl mb-8">
        Learn how to build production-ready applications, connect databases, and integrate payment gateways like Razorpay from scratch.
      </p>
      
      {/* Course Details/Modules could go here */}

      {/* The Bridge to the Payment Form */}
      <Link href="/enroll">
        <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-xl hover:bg-blue-700 transition shadow-lg mt-10">
          Enroll Now
        </button>
      </Link>
    </div>
  );
}