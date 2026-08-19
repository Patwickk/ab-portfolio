import SectionTitle from "@/components/ui/SectionTitle";

const information = [
  {
    title: "Education",
    text: "Currently studying Information Technology and learning modern web development.",
  },
  {
    title: "Skills",
    text: "React, TypeScript, JavaScript, HTML, CSS, and Tailwind CSS.",
  },
  {
    title: "Goal",
    text: "To improve my web development skills and create useful and responsive websites.",
  },
];

function AboutSection() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          title="About Me"
          description="A little information about me, my studies, and my goals."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {information.map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-yellow-400/20 bg-zinc-950 p-6 transition hover:border-yellow-400"
            >
              <h3 className="mb-3 text-xl font-semibold text-yellow-400">
                {item.title}
              </h3>

              <p className="leading-7 text-gray-400">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-3xl text-center">
          <p className="leading-7 text-gray-400">
            I enjoy learning how websites are created and improving
            my skills through different projects. I am currently
            focused on building simple, responsive, and user-friendly
            applications. My current focus is on mastering React + Vite for fast and efficient development, along with Tailwind CSS for sleek, utility‑first styling. I enjoy turning concepts into functional projects — from task management apps to e‑commerce platforms — while ensuring clean code and intuitive design.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;