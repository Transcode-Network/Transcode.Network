import { ArrowRight } from 'lucide-react';

export default function ContributorsSection() {
  return (
    <section className="py-24 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-[#1a1a2e] to-[#16213e] relative">
      <div className="max-w-5xl mx-auto text-center relative z-20">
        <h2 className="text-4xl sm:text-5xl font-bold mb-8 bg-gradient-to-r from-[#5BCEFA] via-[#F5A9B8] to-[#FFFFFF] bg-clip-text text-transparent">
          Let's build tools for trans life — together.
        </h2>
        <p className="text-xl sm:text-2xl text-gray-300 mb-16 max-w-3xl mx-auto">
          We're looking for developers, designers, organizers, and writers who want to create 
          technology that serves our communities.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 justify-items-center">
          <div className="bg-gradient-to-br from-[#0a0a0f] to-[#1a1a2e] p-8 rounded-2xl text-center group border border-[#2a3441] hover:border-[#5BCEFA]/50 transition-all duration-300 hover:-translate-y-2 w-full max-w-xs">
            <div className="w-16 h-16 bg-gradient-to-r from-[#5BCEFA] to-[#F5A9B8] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-[#5BCEFA]/25">
              <span className="text-white font-bold text-xl">{'</>'}</span>
            </div>
            <h3 className="font-bold text-xl mb-3 text-white">Developers</h3>
            <p className="text-gray-300">Full-stack, frontend, backend, mobile</p>
          </div>
          <div className="bg-gradient-to-br from-[#0a0a0f] to-[#1a1a2e] p-8 rounded-2xl text-center group border border-[#2a3441] hover:border-[#F5A9B8]/50 transition-all duration-300 hover:-translate-y-2 w-full max-w-xs">
            <div className="w-16 h-16 bg-gradient-to-r from-[#5BCEFA] to-[#F5A9B8] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-[#F5A9B8]/25">
              <span className="text-white font-bold text-xl">✦</span>
            </div>
            <h3 className="font-bold text-xl mb-3 text-white">Designers</h3>
            <p className="text-gray-300">UI/UX, visual design, accessibility</p>
          </div>
          <div className="bg-gradient-to-br from-[#0a0a0f] to-[#1a1a2e] p-8 rounded-2xl text-center group border border-[#2a3441] hover:border-[#5BCEFA]/50 transition-all duration-300 hover:-translate-y-2 w-full max-w-xs">
            <div className="w-16 h-16 bg-gradient-to-r from-[#5BCEFA] to-[#F5A9B8] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-[#5BCEFA]/25">
              <span className="text-white font-bold text-xl">◊</span>
            </div>
            <h3 className="font-bold text-xl mb-3 text-white">Organizers</h3>
            <p className="text-gray-300">Community building, outreach, events</p>
          </div>
          <div className="bg-gradient-to-br from-[#0a0a0f] to-[#1a1a2e] p-8 rounded-2xl text-center group border border-[#2a3441] hover:border-white/50 transition-all duration-300 hover:-translate-y-2 w-full max-w-xs">
            <div className="w-16 h-16 bg-gradient-to-r from-[#5BCEFA] to-[#F5A9B8] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-white/25">
              <span className="text-white font-bold text-xl">✎</span>
            </div>
            <h3 className="font-bold text-xl mb-3 text-white">Writers</h3>
            <p className="text-gray-300">Documentation, content, storytelling</p>
          </div>
        </div>
        
        <div className="flex justify-center">
          <button className="bg-gradient-to-r from-[#5BCEFA] to-[#F5A9B8] text-white px-12 py-5 rounded-full text-xl font-semibold flex items-center gap-3 hover:shadow-lg hover:shadow-[#5BCEFA]/25 transition-all duration-300 hover:-translate-y-1">
            Sign up to collaborate
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
} 