import ProjectItem from "./ProjectItem";
import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";

export default function Projects() {
  return (
    <section className="py-28" id="projects">
      <div className="container mx-auto px-10 2xl=px-0">
        <SectionTitle>Projects</SectionTitle>
        <SectionParagraph>Beberapa proyek bikinan saya</SectionParagraph>
        <div className="flex -mx-4 mt-20 flex-wrap">
          <div className="md:w-6/12 px-4 pb-8">
            <ProjectItem name="Hasten" image="/hasten.png" description="Explorasi landing page" />
          </div>
          <div className="md:w-6/12 px-4 pb-8">
            <ProjectItem name="Resources" image="/resources.jpeg" description="Explorasi landing page" />
          </div>
          <div className="md:w-6/12 px-4 pb-8 md:pb-0">
            <ProjectItem name="Resources" image="/resources.jpeg" description="Explorasi landing page" />
          </div>
          <div className="md:w-6/12 px-4 pb-8 md:pb-0">
            <ProjectItem name="Hasten" image="/hasten.png" description="Explorasi landing page" />
          </div>
        </div>
      </div>
    </section>
  );
}
