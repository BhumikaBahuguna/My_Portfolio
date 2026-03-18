import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Education from './sections/Education';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Certifications from './sections/Certifications';
import Leadership from './sections/Leadership';
import Hobbies from './sections/Hobbies';
import Goals from './sections/Goals';
import Vision from './sections/Vision';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="bg-dark-900 min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Projects />
        <Skills />
        <Certifications />
        <Leadership />
        <Hobbies />
        <Goals />
        <Vision />
        <Contact />
      </main>
    </div>
  );
}

export default App;
