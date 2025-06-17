import { Heart } from 'lucide-react';

export default function MissionSection() {
  return (
    <section className="py-24 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-[#1a1a2e] to-[#16213e] relative">
      <div className="max-w-5xl mx-auto relative z-20">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#5BCEFA] to-[#F5A9B8] p-4 rounded-full mb-8 shadow-lg shadow-[#5BCEFA]/25">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 bg-gradient-to-r from-[#5BCEFA] via-[#F5A9B8] to-[#FFFFFF] bg-clip-text text-transparent">Our Mission</h2>
        </div>
        <div className="space-y-8 text-lg leading-relaxed">
          <p className="text-white opacity-95">
            <strong className="text-[#5BCEFA]">Transcode Network</strong> is a collective of trans technologists, organizers, and dreamers building 
            open-source tools for trans survival, self-determination, and mutual aid.
          </p>
          <p className="text-white opacity-95">
            We believe that technology should serve our communities, not exploit them. Our work centers 
            privacy, accessibility, and the lived experiences of trans people, especially those most 
            marginalized by systems of oppression.
          </p>
          <p className="text-white opacity-95">
            From mutual aid networks to privacy tools, from community platforms to resource databases — 
            we're building the digital infrastructure our communities need to thrive.
          </p>
          <p className="text-white opacity-95 text-xl font-semibold bg-gradient-to-r from-[#5BCEFA] via-[#F5A9B8] to-[#FFFFFF] bg-clip-text text-transparent">
            Every line of code is an act of resistance. Every tool we build is a step toward liberation.
          </p>
        </div>
      </div>
    </section>
  );
} 