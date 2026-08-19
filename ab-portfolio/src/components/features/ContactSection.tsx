import SectionTitle from "@/components/ui/SectionTitle";

function ContactSection() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          title="Contact Me"
          description="Feel free to get in touch with me."
        />

        <div className="grid gap-10 md:grid-cols-2">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-yellow-400">
              Get In Touch
            </h3>

            <p className="mt-4 leading-7 text-gray-400">
              If you have a question, project idea, or simply want
              to connect, you can reach me through the information
              below.
            </p>

            <div className="mt-8 space-y-5">
              <div>
                <p className="text-sm text-gray-500">Email</p>

                <a
                  href="mailto:patrickcataluna18@gmail.com"
                  className="text-white transition hover:text-yellow-400"
                >
                  patrickcataluna18gmail.com
                </a>
              </div>

              <div>
                <p className="text-sm text-gray-500">GitHub</p>

                <a
                  href="https://github.com/Patwickk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition hover:text-yellow-400"
                >
                  Github
                </a>
              </div>

              <div>
                <p className="text-sm text-gray-500">Facebook</p>

                <a
                  href="https://facebook.com/papi.pabs18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition hover:text-yellow-400"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="rounded-lg border border-yellow-400/20 bg-zinc-950 p-6">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Name
              </label>

              <input
                id="name"
                type="text"
                placeholder="Your name"
                className="w-full rounded-md border border-yellow-400/20 bg-black px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-yellow-400"
              />
            </div>

            <div className="mt-5">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                placeholder="your@email.com"
                className="w-full rounded-md border border-yellow-400/20 bg-black px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-yellow-400"
              />
            </div>

            <div className="mt-5">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Message
              </label>

              <textarea
                id="message"
                rows={5}
                placeholder="Write your message..."
                className="w-full resize-none rounded-md border border-yellow-400/20 bg-black px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-yellow-400"
              />
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-md bg-yellow-400 px-5 py-3 font-semibold text-black transition hover:bg-yellow-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;