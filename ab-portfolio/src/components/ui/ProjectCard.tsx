import { cn } from "@/lib/utils";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
};

function ProjectCard({
  title,
  description,
  image,
  technologies,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <article
      className={cn(
        "overflow-hidden rounded-lg border border-yellow-400/20",
        "bg-zinc-950 transition hover:-translate-y-1",
        "hover:border-yellow-400",
      )}
    >
      <img
        src={image}
        alt={`${title} project screenshot`}
        className="h-48 w-full object-cover"
      />

      <div className="p-6">
        <h3 className="text-xl font-semibold text-yellow-400">
          {title}
        </h3>

        <p className="mt-3 leading-7 text-gray-400">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-yellow-400/20 px-3 py-1 text-sm text-gray-300"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-yellow-400/40 px-4 py-2 text-center text-sm font-semibold text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
          >
            GitHub
          </a>

          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-yellow-400 px-4 py-2 text-center text-sm font-semibold text-black transition hover:bg-yellow-300"
          >
            View Project
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;