import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const dynamic = "force-dynamic";

// THIS LINE IS CRITICAL:
export default async function AdminDashboard() {
  
  const enrollments = await prisma.enrollment.findMany({
    include: {
      user: true, 
    },
  });

  const recentEnrollments = enrollments.reverse();

  return (
    <div className="min-h-screen bg-[#050505] text-white p-8 pt-24">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-black mb-1">HQ Dashboard</h1>
            <p className="text-gray-400">Live feed of student enrollments.</p>
          </div>
          <div className="bg-emerald-500/10 text-emerald-400 px-5 py-3 rounded-xl font-bold">
            Total Sales: {recentEnrollments.length}
          </div>
        </div>

        <div className="bg-[#111] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-black/50 border-b border-white/10 text-gray-400 text-sm uppercase">
                <th className="p-5 font-semibold">Student</th>
                <th className="p-5 font-semibold">Contact</th>
                <th className="p-5 font-semibold">Track</th>
                <th className="p-5 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              
              {recentEnrollments.length === 0 ? (
                <tr>
                  <td colSpan={4} className="p-12 text-center text-gray-500">
                    No enrollments yet.
                  </td>
                </tr>
              ) : (
                recentEnrollments.map((enrollment: any) => (
                  <tr key={enrollment.id} className="hover:bg-white/[0.02]">
                    <td className="p-5 font-bold">{enrollment.user?.name}</td>
                    <td className="p-5 text-sm text-gray-400">
                      {enrollment.user?.email}<br/>{enrollment.user?.phone}
                    </td>
                    <td className="p-5 text-indigo-400 font-bold">{enrollment.courseId}</td>
                    <td className="p-5 text-emerald-400 font-bold">{enrollment.status}</td>
                  </tr>
                ))
              )}

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}