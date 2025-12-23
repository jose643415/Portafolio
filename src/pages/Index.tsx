import Hero from "@/components/Hero";
import About from "@/components/About";
import Passions from "@/components/Passions";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Passions />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 px-4 bg-background-dark border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-text-secondary">
            © 2025 Tu Nombre. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
