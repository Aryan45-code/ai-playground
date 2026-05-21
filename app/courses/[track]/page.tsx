import { courses } from './../../lib/courseData';
import { notFound } from 'next/navigation';
import CheckoutButton from '../../components/CheckoutButton';

export default async function CoursePage({ params }: { params: Promise<{ track: string }> }) {
  const resolvedParams = await params;
  const trackId = resolvedParams.track;
  const course = courses.find((c: { id: string }) => c.id === trackId);

  if (!course) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      
      {/* Course Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black text-white mb-4">
          <span className="text-indigo-400">{course.title}</span>
        </h1>
        <p className="text-xl text-gray-400 font-medium mb-6">{course.tagline}</p>
        <div className="inline-block px-4 py-1.5 rounded-full border border-gray-700 bg-gray-800 text-gray-300 text-xs font-bold uppercase tracking-widest">
          Hardware: {course.hardwareRequired}
        </div>
      </div>

      {/* Detailed Syllabus */}
      <div className="bg-[#111] border border-white/10 rounded-3xl p-8 mb-12 shadow-2xl">
        <h2 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">
          Detailed Syllabus
        </h2>
        
        <div className="space-y-6">
          {course.modules.map((module: { title: string; desc: string }, index: number) => (
            <div key={index} className="bg-black/50 border border-white/5 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-white mb-2 text-indigo-400">
                {module.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {module.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Action Area */}
      <div className="text-center bg-gradient-to-r from-indigo-900/40 to-purple-900/40 border border-indigo-500/30 rounded-3xl p-8">
        <h2 className="text-2xl font-bold text-white mb-2">Ready to start engineering?</h2>
        <p className="text-gray-400 mb-6">Total Investment: ₹{course.price}</p>
        
        {/* 2. REPLACING THE DUMMY BUTTON WITH YOUR SMART CHECKOUT BUTTON */}
        <CheckoutButton courseId={course.id} price={course.price} />
        
      </div>
    </div>
  );
}