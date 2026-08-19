import projectImage from "@/assets/project.png";
import taskmImage from "@/assets/taskm.png";
import portfolioImage from "@/assets/portfolio.png"

export type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
};

export const projects: Project[] = [
  {
    title: "E-COMMERCE SHOP",
    description:
      "A responsive personal E-Commerce Shop website built with HTML, CSS, JavaScript.",
    image: projectImage,
    technologies: ["HTML", "CSS", "JavasScript"],
    githubUrl: "https://github.com/Patwickk/E-COMMERCE-SHOP",
    liveUrl: "https://e-commerce-shop-kappa-nine.vercel.app/",
  },
  {
    title: "Task Management",
    description:
      "Task management apps streamline workflows by allowing users to create tasks, assign responsibilities, set deadlines, and track progress in real time",
    image: taskmImage,
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Patwickk/TASK-MANAGEMENT-APP",
    liveUrl: "https://task-management-nu-three.vercel.app/",
  },
  {
    title: "My Portfolio",
    description:
      "A beginner-friendly web application with a responsive interface.",
    image: portfolioImage,
    technologies: ["React + Vite", "Tailwind CSS" , "TypeScript"],
    githubUrl: "https://github.com/Patwickk/ab-portfolio.git",
    liveUrl: "https://ab-portfolio-uwt9.vercel.app/",
  },
];