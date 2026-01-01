import documentaryImage from "../assets/documentary.jpg";
import StillMind2Image from "../assets/StillMind_icon.png";
import SkillLinkImage from "../assets/SkillInk.png";
import ElectronImage from "../assets/electron-icon.png";
import DeskBlitzImage from "../assets/Deskblitz.png";
import DeskLockImage from "../assets/Desktop-Lock down.png";
import IbHelperImage from "../assets/Ib-Helper.png";
import PmbImage from "../assets/pmbimage.png"
import ChessClubImage from "../assets/chess.png";

export const projects = [
  {
    id: "global-warming-documentary",
    title: "Global Warming Documentary",
    category: "Personal Project",
    description:
      "Created a comprehensive documentary exploring the impacts of global warming and climate change, featuring expert interviews and data visualization.",
    longDescription:
      "This documentary project was undertaken as part of my commitment to environmental awareness. It features in-depth interviews with climate scientists, detailed data visualizations of climate trends, and practical solutions for addressing climate change at both individual and societal levels.",
    technologies: ["Video Production", "Data Analysis", "Research"],
    image: documentaryImage,
    liveUrl: "https://youtu.be/Lf5wVLVWIAU",
    features: [
      "Expert interviews with climate scientists",
      "Interactive data visualizations",
      "Coverage of global climate impacts",
      "Solutions-focused approach",
    ],
    challenges: [
      "Coordinating interviews with multiple experts",
      "Simplifying complex scientific concepts for a general audience",
      "Creating engaging data visualizations",
    ],
    outcome:
      "The documentary has been viewed by over 1,000 students and has been incorporated into environmental science curricula at several schools.",
  },
  {
    id: "stillmind",
    title: "StillMind",
    category: "Mobile/Desktop Development",
    description:
      "Developed a cross-platform application using Flutter and Python (Tkinter) to promote mental wellness through guided meditation and mood tracking.",
    longDescription:
      "StillMind was designed to address the growing challenge of student stress and lack of mindfulness. It provides guided meditation sessions, daily reflections, and mood tracking features, empowering users to build consistent mental wellness habits. The project was created with a dual deployment: a mobile app (Flutter) and a lightweight Windows desktop version (Tkinter).",
    technologies: ["Flutter", "Dart", "Python", "Tkinter"],
    image: StillMind2Image,
    githubUrl: "https://github.com/NMB-UNIVERSAL/StillMind_desk",
    features: [
      "Guided meditation exercises",
      "Mood and habit tracking",
      "Cross-platform deployment",
    ],
    challenges: [
      "Ensuring consistent UI/UX across platforms",
      "Incorporating mental health best practices",
    ],
    outcome:
      "Adopted by peers in my school community, with positive feedback on reducing stress and improving focus during exams.",
  },
  {
    id: "skilllink",
    title: "SkillLink",
    category: "Mobile Development",
    description:
      "Developed a mobile application to connect community members with local service providers such as plumbers and electricians. (Current work in Progress)",
    longDescription:
      "SkillLink was created to solve a common issue in my community: the difficulty of finding reliable service providers. The app allows users to browse local professionals, post job requests, and directly connect with workers. While still in progress, the project reflects my interest in building impactful, community-centered technology.",
    technologies: ["React Native", "Firebase", "Cloudinary"],
    image: SkillLinkImage,
    features: [
      "User accounts and authentication",
      "Job posting and service requests",
      "Media upload for proof of work",
    ],
    challenges: [
      "Designing a trustworthy rating/review system",
      "Managing real-time communication",
    ],
    outcome:
      "Prototype app is under development; planned pilot testing with local community members to validate usefulness.",
  },
  {
    id: "electron-cli",
    title: "Create Electron React App CLI",
    category: "Open Source Tooling",
    description:
      "Built a CLI tool to scaffold Electron + React projects with interactive templates, boilerplate setup, and best practices built-in.",
    longDescription:
      "To simplify cross-platform desktop app development, I created an open-source CLI that lets developers quickly scaffold Electron + React projects. It provides interactive prompts, support for JavaScript/TypeScript templates, and automatically generates boilerplate files like .gitignore and README. The project improves developer productivity and has been shared with the open-source community.",
    technologies: ["Node.js", "Electron", "React", "Inquirer"],
    image: ElectronImage,
    githubUrl: "https://github.com/NMB-UNIVERSAL/boot-electron-react",
    features: [
      "Interactive project scaffolding",
      "Support for JS and TS templates",
      "Automatic setup of essential files",
    ],
    challenges: [
      "Designing a flexible yet simple CLI flow",
      "Ensuring compatibility across OS environments",
    ],
    outcome:
      "Used by fellow developers to accelerate project setup; contributions welcomed on GitHub.",
  },
  {
    id: "deskblitz",
    title: "DeskBlitz",
    category: "Desktop Development",
    description:
      "Developed a desktop organizer app to manage tasks, widgets, and workflows directly from the desktop environment.",
    longDescription:
      "DeskBlitz is a transparent widget-based desktop environment app that helps users manage their workflow with tools like to-do lists, notes, and timers. Inspired by the need for more seamless task management, it integrates directly into the desktop, avoiding distractions of switching between apps.",
    technologies: ["Electron", "React", "Node.js"],
    image: DeskBlitzImage,
    githubUrl: "https://github.com/NMB-UNIVERSAL/Desktop-Organizer",
    features: [
      "Customizable widgets (to-do, timer, notes)",
      "Lightweight and transparent UI",
      "Cross-platform support",
    ],
    challenges: [
      "Building a widget framework that is modular",
      "Balancing transparency with readability",
    ],
    outcome:
      "Improved personal productivity; shared open-source for other students to use.",
  },
  {
    id: "desktop-lockdown",
    title: "Desktop Lockdown",
    category: "Desktop Utility",
    description:
      "Created a Windows desktop utility to track application usage and block distractions during study sessions.",
    longDescription:
      "Desktop Lockdown is a productivity-focused desktop tool designed for students. It tracks application usage, monitors web activity (including incognito mode), and allows blocking of distracting apps during focused work periods. The project was built to enhance self-discipline and time management in a study-heavy environment like IB.",
    technologies: ["Python", "Electron", "System APIs"],
    image: DeskLockImage,
    githubUrl: "https://github.com/NMB-UNIVERSAL/Desktop-Lockdown",
    features: [
      "App and web usage tracking",
      "Customizable blocking lists",
      "Detailed usage reports",
    ],
    challenges: [
      "Interfacing with system processes securely",
      "Ensuring accurate network activity tracking",
    ],
    outcome:
      "Adopted by peers preparing for exams; helped reduce distraction and improve focus.",
  },
  {
    id: "ib-helper",
    title: "IB Helper",
    category: "Web Development",
    description:
      "Developed a website compiling guidance and resources for IB students, including AI and EE support.",
    longDescription:
      "IB Helper is a resource hub I built to support IB students struggling with extended essays (EE) and assessments. It consolidates advice, tips, and examples, as well as explores how AI tools can be used responsibly in IB work. The goal is to provide clarity and confidence to students worldwide navigating the IB system.",
    technologies: ["Next.js", "Firebase", "Markdown"],
    image: IbHelperImage,
    githubUrl: "https://github.com/NMB-UNIVERSAL/IB-Helper",
    features: [
      "Resource articles for IB components",
      "Guides on responsible AI use",
      "Student-friendly design",
    ],
    challenges: [
      "Ensuring accuracy of IB-related resources",
      "Building an engaging, clear interface",
    ],
    outcome:
      "Shared with peers across IB forums; received positive feedback for simplifying complex IB requirements.",
  },
  {
    id: "custom-image-file-type",
    title: "Custom Image File Type",
    category: "Computer Science Research",
    description:
      "Designed a new image file format to explore compression efficiency and digital storage optimization.",
    longDescription:
      "This experimental project involved designing a custom image file format from scratch. I researched how existing formats like PNG and JPEG handle compression, then built my own encoding/decoding algorithms to test efficiency trade-offs. It was a deep dive into low-level computer science concepts and helped me strengthen my understanding of file systems and data compression.",
    technologies: ["Python", "Binary Encoding", "File I/O"],
    image: PmbImage,
    githubUrl: "https://github.com/NMB-UNIVERSAL/.pmb",
    features: [
      "Novel image encoding/decoding format",
      "Custom compression algorithm",
      "Performance benchmarking vs. existing formats",
    ],
    challenges: [
      "Balancing compression with image fidelity",
      "Implementing efficient encoding algorithms",
    ],
    outcome:
      "Produced working proof-of-concept; improved understanding of file formats and inspired future research interest in systems programming.",
  },
  {
    id: "chess-club",
    title: "Chess Club",
    category: "Chess Mentorship",
    description:
      "Mentored and coached students in chess, helping them improve their skills and strategies.",
    longDescription:
      "Chess Club is a mentorship program I started to help students improve their chess skills and strategies. I coach students in chess, helping them improve their skills and strategies. I also help them with their chess assignments and projects.",
    technologies: ["Chess", "Mentorship", "Coaching"],
    image: ChessClubImage,
    features: [
      "Chess coaching",
      "Chess assignments and projects",
      "Chess tournaments",
    ],
  },
];

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  image: string;
  features?: string[];
  challenges?: string[];
  outcome?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export type ProjectType = (typeof projects)[0];
