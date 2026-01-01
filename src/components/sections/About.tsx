import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import profileImage from "../../assets/me.jpg";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
    rootMargin: "-50px",
  });

  return (
    <section id="about" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get to know my journey, passion, and aspirations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-8 rounded-2xl shadow-xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-blue-500/10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white">
                  Academic Journey
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Currently pursuing the International Baccalaureate programme,
                combining both the Middle Years (MYP) and Diploma Programme
                (DP). My academic path reflects my passion for STEM and
                dedication to excellence in education.
              </p>
            </div>

            <div className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-8 rounded-2xl shadow-xl hover:border-purple-500/50 transition-all duration-300 hover:shadow-purple-500/10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white">
                  Technical Background
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Strong foundation in coding and computer science, with
                experience in various programming languages and frameworks.
                Actively engaged in personal projects that showcase my technical
                abilities and problem-solving skills.
              </p>
            </div>

            <div className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-8 rounded-2xl shadow-xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-blue-500/10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white">
                  Future Goals
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Aspiring to pursue Computer Science at a top university, with
                the aim of contributing to technological innovation and making a
                positive impact in the field of computer science and beyond.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-700/50">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-2xl" />
              <img
                src={profileImage}
                alt="Profile"
                className="relative object-cover w-full h-full rounded-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl z-0" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 max-w-3xl mx-auto">
            <p className="text-xl text-gray-300 italic leading-relaxed">
              "Passionate about leveraging technology to solve real-world
              problems and create innovative solutions that make a difference."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
