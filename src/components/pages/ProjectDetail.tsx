import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "../Layout";
import { projects } from "../../data/projects";
import type { Project } from "../../data/projects";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project: Project | undefined = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Project not found
            </h1>
            <a href="/" className="text-blue-400 hover:text-blue-300">
              Return to home
            </a>
          </div>
        </div>
      </Layout>
    );
  }
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="pt-24 pb-16 bg-gray-900 min-h-screen relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <button
              onClick={() => navigate(-1)}
              className="mb-8 inline-flex items-center text-gray-400 hover:text-white transition-colors group"
            >
              <svg
                className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Projects
            </button>

            <div className="max-w-4xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8 border border-gray-700/50">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[500px] object-cover"
                />
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 shadow-xl mb-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                  {project.title}
                </h1>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors mb-6"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    {project.liveUrl}
                  </a>
                )}

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm bg-gray-700/50 text-gray-300 px-4 py-2 rounded-full border border-gray-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 shadow-xl">
                  <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                    <span className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-4"></span>
                    Overview
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {project.longDescription && (
                  <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 shadow-xl">
                    <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                      <span className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-4"></span>
                      Details
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                      {project.longDescription}
                    </p>
                  </div>
                )}

                {project.features && (
                  <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 shadow-xl">
                    <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                      <span className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-4"></span>
                      Key Features
                    </h2>
                    <ul className="space-y-3">
                      {project.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-start text-gray-300"
                        >
                          <span className="text-blue-400 mr-3 mt-1">▸</span>
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.challenges && (
                  <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 shadow-xl">
                    <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                      <span className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-4"></span>
                      Challenges & Solutions
                    </h2>
                    <ul className="space-y-3">
                      {project.challenges.map((challenge, index) => (
                        <li
                          key={index}
                          className="flex items-start text-gray-300"
                        >
                          <span className="text-blue-400 mr-3 mt-1">▸</span>
                          <span className="leading-relaxed">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.outcome && (
                  <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 shadow-xl">
                    <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                      <span className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-4"></span>
                      Outcome
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                      {project.outcome}
                    </p>
                  </div>
                )}

                <div className="flex flex-wrap gap-4 pt-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 rounded-lg text-base font-semibold text-white bg-gray-800 hover:bg-gray-700 border border-gray-700 transition-all duration-300 hover:scale-105"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      View on GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 rounded-lg text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      View Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectDetail;
