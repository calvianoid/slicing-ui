import ProjectItem from "./ProjectItem";
import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";

export default function Projects() {
  return (
    <section className="py-28">
      <div className="container mx-auto">
        <SectionTitle>Projects</SectionTitle>
        <SectionParagraph>Beberapa proyek bikinan saya</SectionParagraph>
        <div className="flex -mx-4 mt-20 flex-wrap">
          <div className="w-6/12 px-4 pb-8">
            <ProjectItem name="Hasten" image="/hasten.png" description="Explorasi landing page" />
          </div>
          <div className="w-6/12 px-4 pb-8">
            <ProjectItem name="Resources" image="/resources.jpeg" description="Explorasi landing page" />
          </div>
          <div className="w-6/12 px-4">
            <ProjectItem name="Resources" image="/resources.jpeg" description="Explorasi landing page" />
          </div>
          <div className="w-6/12 px-4">
            <ProjectItem name="Hasten" image="/hasten.png" description="Explorasi landing page" />
          </div>
        </div>
      </div>
    </section>
  );
}
