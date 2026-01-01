import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Academics = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
    rootMargin: "-50px",
  });

  const subjects = [
    {
      name: "Mathematics AA HL",
      level: "Higher Level",
      description:
        "Advanced calculus, complex numbers, statistics, and mathematical modeling.",
      icon: "📐",
    },
    {
      name: "Physics HL",
      level: "Higher Level",
      description:
        "Mechanics, thermodynamics, waves, electricity, and modern physics.",
      icon: "⚛️",
    },
    {
      name: "Chemistry HL",
      level: "Higher Level",
      description:
        "Organic chemistry, physical chemistry, and analytical methods.",
      icon: "🧪",
    },
    {
      name: "English Language & Literature",
      level: "Standard Level",
      description:
        "Literary analysis, communication skills, and creative writing.",
      icon: "📚",
    },
    {
      name: "French B",
      level: "Standard Level",
      description: "Language acquisition and cultural understanding.",
      icon: "🇫🇷",
    },
    {
      name: "Economics",
      level: "Standard Level",
      description:
        "Micro and macroeconomics, international trade, and development.",
      icon: "📊",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="academics" className="py-24 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            Academic Profile
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            International Baccalaureate Diploma Programme
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {subjects.map((subject) => (
            <motion.div
              key={subject.name}
              variants={itemVariants}
              className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1"
            >
              <div className="text-5xl mb-4">{subject.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {subject.name}
              </h3>
              <div className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400 border border-blue-500/30 mb-3">
                {subject.level}
              </div>
              <p className="text-gray-300 leading-relaxed">
                {subject.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 max-w-4xl mx-auto shadow-xl">
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <span className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-4"></span>
              Additional Academic Achievements
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 mt-1">▸</span>
                <span>
                  Extended Essay in Mathematics: Researching mathematical
                  optimization of Chess strategies in simplified chess endgames
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 mt-1">▸</span>
                <span>Theory of Knowledge (TOK)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 mt-1">▸</span>
                <span>Creativity, Activity, Service (CAS) Projects</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 mt-1">▸</span>
                <span>Academic Honor Roll</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Academics;
