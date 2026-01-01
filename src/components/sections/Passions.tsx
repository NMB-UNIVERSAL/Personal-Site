import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Passions = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
    rootMargin: '-50px',
  });

  const hobbies = [
    {
      name: "Chess",
      description:
        "Strategic thinking and competitive gameplay, participating in local tournaments.",
      icon: "♟️",
      color: "bg-blue-100",
    },
    {
      name: "Coding",
      description:
        "This is one of my main passiosn as i love creating new things that help me in life.",
      icon: "💻",
      color: "bg-green-100",
    },
    {
      name: "Anime",
      description:
        "Exploring Japanese animation and culture through various genres and storytelling.",
      icon: "🎨",
      color: "bg-pink-100",
    },
    {
      name: "Fitness",
      description:
        "Regular workout routines and maintaining a healthy lifestyle through exercise.",
      icon: "💪",
      color: "bg-green-100",
    },
    {
      name: "Terraria",
      description:
        "Building, exploring, and crafting in this creative sandbox game world.",
      icon: "🎮",
      color: "bg-yellow-100",
    },
    {
      name: "Hollow knight: Silksong",
      description:
        "exploring, fighting and having fun in this long waited game",
      icon: "⚔️",
      color: "bg-red-100",
    },
    {
      name: "Rubicks Cube",
      description:
        "This cube is great for brain work and helps to releive stress.",
      icon: "🔵",
      color: "bg-blue-100",
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

  const hobbyColors = [
    "from-blue-500/20 to-blue-600/20 border-blue-500/30",
    "from-green-500/20 to-emerald-600/20 border-green-500/30",
    "from-pink-500/20 to-rose-600/20 border-pink-500/30",
    "from-orange-500/20 to-amber-600/20 border-orange-500/30",
    "from-yellow-500/20 to-yellow-600/20 border-yellow-500/30",
    "from-red-500/20 to-red-600/20 border-red-500/30",
    "from-purple-500/20 to-purple-600/20 border-purple-500/30",
  ];

  return (
    <section id="passions" className="py-24 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-pink-200 to-orange-200 bg-clip-text text-transparent">
            Passions & Hobbies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-orange-500 mx-auto mb-8 rounded-full" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Beyond academics and technology, here are some things that bring joy
            and balance to my life.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.name}
              variants={itemVariants}
              className={`group bg-gradient-to-br ${hobbyColors[index % hobbyColors.length]} backdrop-blur-sm border rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer`}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-5xl transform group-hover:scale-110 transition-transform duration-300">{hobby.icon}</div>
                <h3 className="text-xl font-semibold text-white group-hover:text-gray-100 transition-colors">
                  {hobby.name}
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed">{hobby.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 max-w-3xl mx-auto shadow-xl">
            <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
              <span className="w-1 h-8 bg-gradient-to-b from-pink-500 to-orange-500 rounded-full mr-4"></span>
              Why Hobbies Matter
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Having diverse interests helps maintain a balanced lifestyle and
              brings fresh perspectives to problem-solving. These activities
              contribute to personal growth, creativity, and well-rounded
              development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Passions;
