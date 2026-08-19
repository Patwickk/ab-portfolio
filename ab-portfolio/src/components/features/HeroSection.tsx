import { Link } from "react-router-dom";
import profileImage from "@/assets/profiles.jpg";

function HeroSection() {
  return (
    <section className="flex min-h-[80vh] items-center px-6 py-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col-reverse items-center justify-between gap-12 md:flex-row">

        
        <div className="max-w-2xl text-center md:text-left">
          <p className="mb-3 text-lg font-medium text-yellow-400">
            Hey, its me
          </p>

          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            John Patrick Cataluna
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            I am a aspiring web developer who enjoys creating
            simple, responsive, and user-friendly websites. 

            As a student, I'm continuously learning and experimenting with the latest technologies to sharpen my skills and bring creative ideas to life.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
            <Link
              to="/projects"
              className="rounded-md bg-yellow-400 px-6 py-3 font-semibold text-black transition hover:bg-yellow-300"
            >
              View Projects
            </Link>

            <Link
              to="/contact"
              className="rounded-md border border-yellow-400 px-6 py-3 font-semibold text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Profile Picture */}
        <div className="shrink-0">
          <img
            src={profileImage}
            alt="My profile picture"
            className="h-40 w-40 rounded-full border-4 border-yellow-400 object-cover sm:h-48 sm:w-48 md:h-64 md:w-64"
          />
        </div>

      </div>
    </section>
  );
}

export default HeroSection;