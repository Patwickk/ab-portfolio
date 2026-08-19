import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/lib/projects";

function ProjectsSection() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          title="My Projects"
          description="Some projects I have worked on."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;