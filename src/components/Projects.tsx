import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import portafolioImage from "@/assets/portafolio.png";
import diabetesImage from "@/assets/diabetes.png";

const Projects = () => {
  const projects = [
    {
      title: "Diabetes Health Indicators predictions",
      description:
        "Modelo de inteligencia artificial para predecir indicadores de salud relacionados con la diabetes utilizando Python y Scikit-Learn.",
      tags: ["Python", "Machine Learning", "Scikit-Learn.", "Data Analysis"],
      image: diabetesImage,
      githubUrl:
        "https://github.com/jose643415/Diabetes-Health-Indicators-predictions",
      //demoUrl: "https://tu-demo.com",
      gradient: "from-primary to-primary-end",
    },
    {
      title: "Portfolio Website",
      description:
        "Sitio web personal para mostrar proyectos y habilidades, construido con React y Tailwind CSS.",
      tags: ["React", "Vite", "Tailwind CSS", "TypeScript"],
      image: portafolioImage,
      githubUrl: "https://github.com/jose643415/Portafolio",
      //demoUrl: "https://tu-portafolio.com",
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
            Una selección de proyectos en los que he trabajado, demostrando mis
            habilidades y pasión por el desarrollo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden bg-card border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
            >
              {/* Contenedor de Imagen */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay sutil para mejorar legibilidad si decides poner texto encima */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-secondary leading-relaxed text-justify">
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

                {/* Botones con Enlaces */}
                <div className="flex gap-3 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    asChild
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Código
                    </a>
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
