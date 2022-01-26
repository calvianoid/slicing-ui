import Hero from "../components/Hero";
import ProfileSection from "../components/ProfileSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ProfileSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
