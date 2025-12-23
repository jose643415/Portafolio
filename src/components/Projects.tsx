import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Plataforma de comercio electrónico completa con carrito de compras, pasarela de pagos y panel de administración.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      gradient: "from-primary to-primary-end",
    },
    {
      title: "Task Management App",
      description: "Aplicación de gestión de tareas con colaboración en tiempo real y notificaciones push.",
      tags: ["TypeScript", "Firebase", "Tailwind CSS"],
      gradient: "from-accent to-accent-end",
    },
    {
      title: "Portfolio Website",
      description: "Sitio web personal con diseño moderno, animaciones fluidas y optimización SEO.",
      tags: ["React", "Vite", "Framer Motion"],
      gradient: "from-accent-end to-primary",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-background-dark">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Proyectos{" "}
            <span className="bg-gradient-rate bg-clip-text text-transparent">
              Destacados
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-button mx-auto rounded-full" />
          <p className="text-text-secondary mt-6 text-lg max-w-2xl mx-auto">
            Una selección de proyectos en los que he trabajado, demostrando mis habilidades 
            y pasión por el desarrollo web.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden bg-card border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
            >
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`} />
                <div className="absolute inset-0 bg-background/20 backdrop-blur-sm" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl font-bold text-white/10">
                    {index + 1}
                  </div>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm rounded-full bg-secondary text-muted-foreground border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  <Button variant="ghost" size="sm" className="flex-1">
                    <Github className="h-4 w-4 mr-2" />
                    Código
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
