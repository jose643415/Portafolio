import { Brain, Code2, Rocket } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: Code2,
      title: "Desarrollo",
      description:
        "Experiencia en tecnologías modernas como Java Spring Boot, React, PostgreSQL y más.",
    },
    {
      icon: Brain,
      title: "Pensamiento Critico",
      description:
        "Analsis y resolucin de problemas complejos de manera eficiente entendiendo la necesidad del cliente.",
    },
    {
      icon: Rocket,
      title: "Innovación",
      description: "Aprendizaje continuo y adaptación a nuevas tecnologías",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Sobre{" "}
            <span className="bg-gradient-rate bg-clip-text text-transparent">
              Mí
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-button mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed text-justify">
              Soy estudiante de Ingeniería en sistemas orientado al desarrollo
              de Software, actualmente en búsqueda de una práctica académica que
              me permita fortalcer mis conocimientos técnicos y aportar valor al
              equipo. Poseo experiencia en programación con Java, Spring Boot.
              HTML, CSS, JavaScript y Python, ademas de manejo de bases de datos
              PostgreSQL. Me caracterizo por mi liderazgo, compromiso y
              facilidad para trabajar en equipo. Tengo una gran pasión por
              aprender nuevas tecnologías y adaptarme a entornos dinámicos de
              desarrollo.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed text-justify">
              He tenido la oportunidad de apoyar proyectos que me han permitido
              desarrollar habilidades orientadas al desarrollo Backend y el
              liderazgo de equipos de desarrollo.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed text-justify">
              Adicionalmente cuento con experiencia laboral como backoffice
              administrativo donde realice procesos de análisis de datos y
              auditoria de PQRS dentro de la organización.
            </p>
          </div>

          <div className="space-y-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group p-6 rounded-lg border border-border bg-card hover:bg-secondary/50 transition-all duration-300 hover:border-accent/50"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-button">
                    <skill.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                      {skill.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
