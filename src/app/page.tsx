import ParticleAnimation from './components/ParticleAnimation';
import HeroSection from './components/HeroSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <ParticleAnimation />
      <HeroSection />
      {/* <MissionSection />
      <ProjectPreviewSection />
      <ContributorsSection /> */}
      {/* <Footer /> */}
    </div>
  );
}
