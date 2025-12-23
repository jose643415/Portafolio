import {
  Heart,
  Music,
  Gamepad2,
  BookOpen,
  Coffee,
  Dumbbell,
  Globe,
} from "lucide-react";

const Passions = () => {
  const passions = [
    { icon: Music, label: "Música" },
    { icon: Gamepad2, label: "Videojuegos" },
    { icon: BookOpen, label: "Lectura" },
    { icon: Coffee, label: "Café" },
    { icon: Dumbbell, label: "Fitness" },
    { icon: Globe, label: "Idiomas" },
  ];

  const skills = [
    { name: "React / TypeScript", level: 80 },
    { name: "Java / Spring Boot", level: 85 },
    { name: "CSS / Tailwind", level: 80 },
    { name: "Bases de Datos", level: 85 },
    { name: "Git / DevOps", level: 85 },
    { name: "Agile", level: 80 },
    { name: "DevOps", level: 70 },
    { name: "Python / Machine Learning", level: 80 },
  ];

  return (
    <section id="passions" className="py-20 px-4 bg-background-dark">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Pasiones &{" "}
            <span className="bg-gradient-rate bg-clip-text text-transparent">
              Habilidades
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-button mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Pasiones */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Heart className="h-6 w-6 text-accent" />
              Mis Pasiones
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {passions.map((passion, index) => (
                <div
                  key={index}
                  className="group p-4 rounded-xl border border-border bg-card hover:bg-secondary/50 transition-all duration-300 hover:border-accent/50 hover:scale-105 text-center"
                >
                  <passion.icon className="h-8 w-8 mx-auto mb-2 text-muted-foreground group-hover:text-accent transition-colors" />
                  <span className="text-sm font-medium">{passion.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Habilidades */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              Habilidades Técnicas
            </h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-button rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Passions;
