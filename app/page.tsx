import Link from 'next/link';

export default function Home() {
  return (
    <div className="w-full">
      
      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-24 text-center px-6 max-w-5xl mx-auto">
        <div className="inline-block px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-bold tracking-widest uppercase mb-6">
          For Students, Professionals & Innovators
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight mb-8">
          Don't just adapt to the future. <br />
          <span className="bg-gradient-to-r from-indigo-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent text-glow">Engineer It.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto font-medium mb-10">
          Master Artificial Intelligence, autonomous robotics, and IoT. Whether you are automating your daily workflows or building the next big tech startup, your journey starts here.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {/* Note: This uses a standard anchor tag so the smooth scroll works perfectly */}
          <a href="#bootcamps" className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition shadow-[0_0_20px_rgba(79,70,229,0.3)]">
            Explore All Tracks
          </a>
          <Link href="/courses/ai-playground" className="border border-gray-700 hover:border-gray-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition">
            Join the Flagship Bootcamp
          </Link>
        </div>
      </section>

      {/* 2. THE PEDIGREE */}
      <section className="py-24 bg-[#0a0a0a] border-y border-white/5 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black mb-6 text-white">Built by engineers who actually build.</h2>
            <p className="text-gray-400 mb-6 text-lg leading-relaxed">
              Our curriculums aren't theoretical. They are designed by developers specializing in Data Science and IoT who have engineered autonomous quadcopter systems for the ISRO Robotics Challenge and built full-stack corporate architecture from the ground up.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              We teach you exactly how to bridge the gap between academic theory and hardcore, real-world deployment.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#111] border border-white/10 p-6 rounded-2xl">
              <span className="text-3xl mb-4 block">⚛️</span>
              <h3 className="font-bold text-lg mb-2 text-white">Industry Standard</h3>
              <p className="text-sm text-gray-500">Learn on the exact same tech stacks used by top tech firms.</p>
            </div>
            <div className="bg-[#111] border border-white/10 p-6 rounded-2xl">
              <span className="text-3xl mb-4 block">🚀</span>
              <h3 className="font-bold text-lg mb-2 text-white">Project Driven</h3>
              <p className="text-sm text-gray-500">Zero multiple-choice quizzes. You only graduate by deploying functional code.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-black text-white mb-4">Our Practical Learning Philosophy</h2>
          <p className="text-gray-400 text-lg">We break down structural pricing barriers. Pay only for instructional mastery; control your hardware choices fluidly.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-gradient-to-b from-[#111] to-black border border-white/10 rounded-3xl p-10 relative overflow-hidden group">
            <h3 className="text-2xl font-bold text-white mb-4">Option A: 100% Simulation</h3>
            <p className="text-gray-400 leading-relaxed">
              Every single advanced program can be fully engineered inside browser-based environments like Tinkercad, EasyEDA, and flight simulators. Enjoy full curriculum depth with zero mandatory inventory expense.
            </p>
          </div>
          <div className="bg-gradient-to-b from-indigo-950/30 to-black border border-indigo-500/20 rounded-3xl p-10 relative overflow-hidden group">
            <h3 className="text-2xl font-bold text-white mb-4">Option B: Custom Hardware</h3>
            <p className="text-gray-400 leading-relaxed">
              Prefer physical components? We supply curated component listings for independent purchasing or can ship pre-tested, wholesale-priced custom hardware kits straight to your home.
            </p>
          </div>
        </div>
      </section>

      {/* 4. THE BOOTCAMPS GRID */}
      <section id="bootcamps" className="py-24 bg-[#0a0a0a] border-y border-white/5 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4 text-white">Specialized Tracks</h2>
            <p className="text-gray-400 text-lg">Choose your path to mastery. Click to view the full syllabus.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            
            <Link href="/courses/combo" className="md:col-span-3 bg-gradient-to-r from-indigo-900/40 to-purple-900/40 border border-indigo-500/50 rounded-3xl p-8 hover:-translate-y-1 transition-all cursor-pointer flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
              <div>
                <span className="bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">BEST VALUE BUNDLE</span>
                <h3 className="text-3xl font-black text-white mb-2">The Ultimate Combo</h3>
                <p className="text-gray-300 max-w-2xl text-sm">Unite Robotics, Sensors, and PCB Layout. Build a complete custom hardware platform from scratch with our flagship engineering pipeline.</p>
              </div>
              <div className="text-center shrink-0">
                <p className="text-3xl font-black text-white mb-2">₹5,999</p>
                <span className="inline-block bg-white text-black px-6 py-3 rounded-xl font-bold text-sm hover:bg-gray-200 transition">View Full Syllabus &rarr;</span>
              </div>
            </Link>

            <Link href="/courses/ai-ml" className="bg-[#111] border border-white/10 rounded-2xl p-6 hover:-translate-y-1 hover:border-indigo-500/50 transition-all cursor-pointer block group">
              <h3 className="text-xl font-bold text-white mb-2">AI & Machine Learning</h3>
              <p className="text-sm text-gray-500 mb-6">Build data pipelines, deploy computer vision models, and master neural network core workflows.</p>
              <div className="flex justify-between items-center border-t border-white/10 pt-4">
                <span className="text-lg font-bold text-white">₹3,999</span>
                <span className="text-indigo-400 text-sm font-bold group-hover:underline">View Syllabus &rarr;</span>
              </div>
            </Link>

            <Link href="/courses/drones" className="bg-[#111] border border-white/10 rounded-2xl p-6 hover:-translate-y-1 hover:border-indigo-500/50 transition-all cursor-pointer block group">
              <h3 className="text-xl font-bold text-white mb-2">Autonomous Drones</h3>
              <p className="text-sm text-gray-500 mb-6">Deep-dive into aerodynamics, Ardupilot calibration, and autonomous waypoint mission mapping.</p>
              <div className="flex justify-between items-center border-t border-white/10 pt-4">
                <span className="text-lg font-bold text-white">₹3,499</span>
                <span className="text-indigo-400 text-sm font-bold group-hover:underline">View Syllabus &rarr;</span>
              </div>
            </Link>

            <Link href="/courses/robotics" className="bg-[#111] border border-white/10 rounded-2xl p-6 hover:-translate-y-1 hover:border-indigo-500/50 transition-all cursor-pointer block group">
              <h3 className="text-xl font-bold text-white mb-2">Dedicated Robotics</h3>
              <p className="text-sm text-gray-500 mb-6">Master kinematic foundations, obstacle logic loops, and real-time navigation state machines.</p>
              <div className="flex justify-between items-center border-t border-white/10 pt-4">
                <span className="text-lg font-bold text-white">₹2,999</span>
                <span className="text-indigo-400 text-sm font-bold group-hover:underline">View Syllabus &rarr;</span>
              </div>
            </Link>
            
            <Link href="/courses/electronics-pcb" className="bg-[#111] border border-white/10 rounded-2xl p-6 hover:-translate-y-1 hover:border-indigo-500/50 transition-all cursor-pointer block group">
              <h3 className="text-xl font-bold text-white mb-2">Electronics & PCB Design</h3>
              <p className="text-sm text-gray-500 mb-6">Architect custom circuit boards, route dual traces, and learn surface-mount soldering.</p>
              <div className="flex justify-between items-center border-t border-white/10 pt-4">
                <span className="text-lg font-bold text-white">₹2,499</span>
                <span className="text-indigo-400 text-sm font-bold group-hover:underline">View Syllabus &rarr;</span>
              </div>
            </Link>
            
            <Link href="/courses/iot-sensors" className="bg-[#111] border border-white/10 rounded-2xl p-6 hover:-translate-y-1 hover:border-indigo-500/50 transition-all cursor-pointer block group">
              <h3 className="text-xl font-bold text-white mb-2">IoT & Sensors</h3>
              <p className="text-sm text-gray-500 mb-6">Isolate peripheral signals, filter data, and structure direct hardware data buses.</p>
              <div className="flex justify-between items-center border-t border-white/10 pt-4">
                <span className="text-lg font-bold text-white">₹1,999</span>
                <span className="text-indigo-400 text-sm font-bold group-hover:underline">View Syllabus &rarr;</span>
              </div>
            </Link>

          </div>
        </div>
      </section>
    </div>
  );
}