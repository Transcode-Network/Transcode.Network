import ParticleAnimation from './components/ParticleAnimation';
import HeroSection from './components/HeroSection';
import MissionSection from './components/MissionSection';
import ProjectPreviewSection from './components/ProjectPreviewSection';
import ContributorsSection from './components/ContributorsSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <ParticleAnimation />
      <HeroSection />
      {/* <MissionSection />
      <ProjectPreviewSection />
      <ContributorsSection />
      <Footer /> */}
    </div>
  );
}
