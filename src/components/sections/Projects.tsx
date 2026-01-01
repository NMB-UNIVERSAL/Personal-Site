import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import documentaryImage from "../../assets/documentary.jpg";
import StillMind2Image from "../../assets/StillMind_icon.png";
import SkillLinkImage from "../../assets/SkillInk.png";
import ElectronImage from "../../assets/electron-icon.png";
import DeskBlitzImage from "../../assets/Deskblitz.png";
import DeskLockImage from "../../assets/Desktop-Lock down.png";
import IbHelperImage from "../../assets/Ib-Helper.png";
import PmbImage from "../../assets/pmbimage.png";
import ChessClubImage from "../../assets/chess.png";

const Projects = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const sectionRef = useRef<HTMLElement>(null);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.05,
    rootMargin: "-50px",
  });

  // Track if section has ever been visible (to prevent white screen on scroll)
  useEffect(() => {
    if (inView) {
      setHasBeenVisible(true);
    }
  }, [inView]);

  // Check visibility on mount and when navigating back to home page
  useEffect(() => {
    if (location.pathname === "/") {
      // Reset visibility state when navigating back
      setHasBeenVisible(false);
      // Small delay to ensure DOM is ready, then manually check visibility
      const timer = setTimeout(() => {
        if (sectionRef.current) {
          const rect = sectionRef.current.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
          // If element is in viewport, manually trigger visibility
          if (isVisible) {
            // Trigger a tiny scroll to ensure intersection observer fires
            window.scrollBy(0, 1);
            setTimeout(() => {
              window.scrollBy(0, -1);
              setHasBeenVisible(true);
            }, 10);
          }
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  // Also check on initial mount (in case page loads with section already in view)
  useEffect(() => {
    // One-time check after component mounts
    const timer = setTimeout(() => {
      if (sectionRef.current && !hasBeenVisible && !inView) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        if (isVisible) {
          setHasBeenVisible(true);
        }
      }
    }, 150);
    return () => clearTimeout(timer);
  }, []); // Only run on mount

  // Use intersection observer, but keep visible once it's been seen
  const shouldAnimate = inView || hasBeenVisible;

  const projects = [
    {
      title: "Global Warming Documentary",
      category: "Personal Project",
      description:
        "Created a comprehensive documentary exploring the impacts of global warming and climate change, featuring expert interviews and data visualization.",
      technologies: ["Video Production", "Data Analysis", "Research"],
      image: documentaryImage,
    },
    {
      title: "StillMind",
      category: "Mobile/Desktop Development",
      description:
        "Developed a cross-platform application using Flutter and Python (Tkinter) to promote mental wellness through guided meditation and mood tracking.",
      technologies: ["Flutter", "Dart", "Python", "Tkinter"],
      image: StillMind2Image,
    },
    {
      title: "SkillLink",
      category: "Mobile Development",
      description:
        "Developed a mobile application to help individuals get services such as plumbing,electrician, ... in my community",
      technologies: ["React-Native", "FireBase", "Cloudinary"],
      image: SkillLinkImage,
    },
    {
      title: "Electron CLI Tool",
      category: "Software Development",
      description:
        "Built a command-line interface tool using Electron for automating common development tasks and improving workflow efficiency.",
      technologies: ["Electron", "Node.js", "JavaScript"],
      image: ElectronImage,
    },
    {
      title: "Deskblitz",
      category: "System Configuration",
      description:
        "Created a customized desktop environment with automated setup scripts and productivity enhancements.",
      technologies: ["Shell Scripting", "Linux", "Window Management"],
      image: DeskBlitzImage,
    },
    {
      title: "Desktop-Lockdown",
      category: "Desktop Development",
      description:
        "A simple application to lock down distracting apps and websites on Windows. This tool helps restrict access to certain applications and websites that may be distracting, and can only be unlocked with a password.",
      technologies: ["React", "Threading", "Blocking"],
      image: DeskLockImage,
    },
    {
      title: "IB-Helper",
      category: "Web Development",
      description:
        "This is a web application made to educate IB DP students on how the internal Assesment and Extended essay works, as well as teach how to use tools such as Excel, Geogebra, and Desmos which they will need through out their DP journey Resource",
      technologies: ["React", "IB", "Education"],
      image: IbHelperImage,
    },
    {
      title: "custom-image-file-type",
      category: "Computer Science Research",
      description:
        "Designed a new image file format to explore compression efficiency and digital storage optimization.",
      technologies: ["Python", "Binary Encoding", "File I/O"],
      image: PmbImage,
    },
    {
      title: "Chess Club",
      category: "Chess Mentorship",
      description:
        "Mentored and coached students in chess, helping them improve their skills and strategies.",
      technologies: ["Chess", "Mentorship", "Coaching"],
      image: ChessClubImage,
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
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 bg-gray-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            Projects & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A showcase of my technical projects, research work, and academic
            achievements.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={shouldAnimate ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden shadow-xl hover:border-blue-500/50 transition-all duration-300 cursor-pointer hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2"
              onClick={() =>
                navigate(
                  `/project/${project.title.toLowerCase().replace(/\s+/g, "-")}`
                )
              }
            >
              <div className="h-[250px] overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full object-center group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-400 border border-blue-500/30 mb-3">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full border border-gray-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
