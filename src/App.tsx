import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Academics from "./components/sections/Academics";
import Projects from "./components/sections/Projects";
import Passions from "./components/sections/Passions";
import Contact from "./components/sections/Contact";
import ProjectDetail from "./components/pages/ProjectDetail";
import ScrollToTop from "./components/ScrollToTop";

const HomePage = () => (
  <Layout>
    <Hero />
    <About />
    <Academics />
    <Projects />
    <Passions />
    <Contact />
  </Layout>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:projectId" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
