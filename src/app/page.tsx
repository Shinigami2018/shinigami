export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="py-12 sm:py-16 lg:py-20">
          <nav className="flex justify-between items-center mb-16">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
              Sameen Abrar
            </h1>
            <div className="flex gap-6 text-sm font-medium">
              <a
                href="#about"
                className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#work"
                className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                Work
              </a>
              <a
                href="#contact"
                className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
          </nav>

          {/* Hero Section */}
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
              Hi there, I&apos;m Sameen Abrar.
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl">
              I&apos;m a passionate creator and developer. Explore my work and
              let&apos;s build something amazing together.
            </p>
            <div className="flex gap-4 pt-4">
              <a
                href="#work"
                className="inline-block px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="inline-block px-6 py-3 border border-slate-900 dark:border-white text-slate-900 dark:text-white font-semibold rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </header>

        {/* About Section */}
        <section
          id="about"
          className="py-16 sm:py-20 border-t border-slate-200 dark:border-slate-800"
        >
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
            About
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
            Edit this section with your about information. Tell visitors about
            yourself, your background, and what you&apos;re passionate about.
          </p>
        </section>

        {/* Work Section */}
        <section
          id="work"
          className="py-16 sm:py-20 border-t border-slate-200 dark:border-slate-800"
        >
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
            Featured Work
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <a
                key={item}
                href="#"
                className="group flex flex-col p-6 border border-slate-200 dark:border-slate-800 rounded-lg hover:border-slate-400 dark:hover:border-slate-600 transition-colors"
              >
                <div className="w-full h-48 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 rounded mb-4"></div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors">
                  Project {item}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
                  Description of your project goes here.
                </p>
              </a>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-16 sm:py-20 border-t border-slate-200 dark:border-slate-800"
        >
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
            Get In Touch
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 max-w-2xl">
            I&apos;d love to hear from you. Feel free to reach out for
            collaboration or just a friendly hello.
          </p>
          <div className="flex gap-4">
            <a
              href="mailto:your.email@example.com"
              className="text-slate-900 dark:text-white font-semibold hover:text-slate-600 dark:hover:text-slate-400 transition-colors"
            >
              Email
            </a>
            <a
              href="#"
              className="text-slate-900 dark:text-white font-semibold hover:text-slate-600 dark:hover:text-slate-400 transition-colors"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-slate-900 dark:text-white font-semibold hover:text-slate-600 dark:hover:text-slate-400 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-slate-200 dark:border-slate-800 text-center text-sm text-slate-600 dark:text-slate-400">
          <p>&copy; 2026 Your Name. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
