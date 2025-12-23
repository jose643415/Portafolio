import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import profileImage from "@/assets/Foto.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-background-dark">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 py-20">
          {/* Profile Image */}
          <div className="flex justify-center animate-fade-in">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-button rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative">
                <img
                  src={profileImage}
                  alt="Foto de perfil profesional"
                  className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-background ring-2 ring-accent/50"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Hola, soy{" "}
              <span className="bg-gradient-rate bg-clip-text text-transparent">
                José Andrés Echavarría Ríos
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Estudiante Ingenieria en Sistemas | Desarrollador FullStack | SQL
              | Testing QA
            </p>
          </div>

          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Apasionado por la tecnología y el desarrollo de software con una
            sólida formación en ingeniería en sistemas. Me especializo en
            desarrollo FullStack, bases de datos SQL y testing QA. Siempre
            buscando aprender y crecer en el mundo tech.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              variant="gradient"
              className="group"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Ver Proyectos
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Contáctame
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center pt-7">
            <a
              href="https://github.com/jose643415"
              className="p-3 rounded-full border border-muted-foreground/30 hover:border-accent hover:bg-secondary/50 transition-all"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/jose-andres-echavarria-rios-362857382"
              className="p-3 rounded-full border border-muted-foreground/30 hover:border-accent hover:bg-secondary/50 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-gradient-rate rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
