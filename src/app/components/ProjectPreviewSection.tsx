import { Zap, Users } from 'lucide-react';

export default function ProjectPreviewSection() {
  return (
    <section className="py-24 px-6 sm:px-8 lg:px-12 bg-[#0a0a0f] relative">
      <div className="max-w-6xl mx-auto relative z-20">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#5BCEFA] to-[#F5A9B8] p-4 rounded-full mb-8 shadow-lg shadow-[#5BCEFA]/25 animate-pulse">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-[#5BCEFA] via-[#F5A9B8] to-[#FFFFFF] bg-clip-text text-transparent">Coming Soon</h2>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
            A privacy-first trans mutual aid and request board
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-3xl p-8 sm:p-12 border border-[#2a3441] shadow-2xl">
          <div className="aspect-video bg-gradient-to-br from-[#0a0a0f] to-[#1a1a2e] rounded-2xl border border-[#2a3441] flex items-center justify-center mb-12">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-r from-[#5BCEFA] to-[#F5A9B8] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#5BCEFA]/25">
                <Users className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#5BCEFA] via-[#F5A9B8] to-[#FFFFFF] bg-clip-text text-transparent">Trans Mutual Aid Network</h3>
              <p className="text-gray-300 max-w-lg mx-auto text-lg">
                Connecting trans people in need with community support through an encrypted, 
                privacy-preserving platform built for care.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-[#5BCEFA]/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#5BCEFA]/30 transition-colors border border-[#5BCEFA]/20">
                <div className="w-8 h-8 bg-[#5BCEFA] rounded-full"></div>
              </div>
              <h4 className="font-bold text-lg mb-3 text-[#5BCEFA]">Privacy-First</h4>
              <p className="text-gray-300">End-to-end encryption and anonymous matching</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-[#F5A9B8]/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#F5A9B8]/30 transition-colors border border-[#F5A9B8]/20">
                <div className="w-8 h-8 bg-[#F5A9B8] rounded-full"></div>
              </div>
              <h4 className="font-bold text-lg mb-3 text-[#F5A9B8]">Community-Driven</h4>
              <p className="text-gray-300">Built by trans people, for trans people</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors border border-white/20">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <h4 className="font-bold text-lg mb-3 text-white">Open Source</h4>
              <p className="text-gray-300">Transparent, auditable, and community-owned</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 