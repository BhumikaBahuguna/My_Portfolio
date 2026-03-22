import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="bg-dark-900 min-h-screen relative overflow-hidden text-gray-200 font-sans selection:bg-accent/40 selection:text-white">
      {/* Background Neon ambient glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-accent/20 rounded-full blur-[150px] mix-blend-screen opacity-50" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-accent2/20 rounded-full blur-[150px] mix-blend-screen opacity-50" />
      </div>

      <div className="relative z-10 w-full">
        <Navbar />
        <main className="flex flex-col gap-12 pb-32">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;
