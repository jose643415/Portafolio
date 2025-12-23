import { Code2, Palette, Rocket } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: Code2,
      title: "Desarrollo",
      description: "Experiencia en tecnologías modernas como React, TypeScript, Node.js y más.",
    },
    {
      icon: Palette,
      title: "Diseño",
      description: "Creación de interfaces intuitivas y atractivas con enfoque en la experiencia del usuario.",
    },
    {
      icon: Rocket,
      title: "Innovación",
      description: "Constante aprendizaje y aplicación de las últimas tendencias tecnológicas.",
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
            <p className="text-lg text-muted-foreground leading-relaxed">
              Soy un desarrollador apasionado por la tecnología y el diseño, con experiencia 
              en la creación de aplicaciones web modernas y escalables. Mi enfoque se centra 
              en escribir código limpio y crear experiencias que realmente importen.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A lo largo de mi trayectoria, he trabajado en diversos proyectos que me han 
              permitido desarrollar habilidades tanto en el frontend como en el backend, 
              siempre buscando la excelencia en cada línea de código.
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
