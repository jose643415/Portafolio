import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "joseechavarria0001@gmail.com",
      href: "mailto:joseechavarria0001@gmail.com",
    },
    {
      icon: Phone,
      label: "Teléfono",
      value: "+57 315 793 9611",
      href: "tel:+573157939611",
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: "Medellín, Colombia",
      href: "https://maps.google.com/?q=Medellín,Colombia",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Hablemos{" "}
            <span className="bg-gradient-rate bg-clip-text text-transparent">
              Juntos
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-button mx-auto rounded-full" />
          <p className="text-text-secondary mt-6 text-lg max-w-2xl mx-auto">
            Estoy disponible para nuevas oportunidades siempre en pro del
            crecimiento y aprendizaje. No dudes en contactarme.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                target={info.label === "Ubicación" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 md:gap-6 p-4 md:p-6 rounded-lg border border-border bg-card hover:bg-secondary/50 hover:border-accent/50 transition-all group overflow-hidden"
              >
                {/* Contenedor del Icono - Reducido un poco en móvil */}
                <div className="shrink-0 p-3 md:p-4 rounded-lg bg-gradient-button">
                  <info.icon className="h-5 w-5 md:h-6 md:w-6 text-primary-foreground" />
                </div>

                {/* Contenedor del Texto - La clave está aquí */}
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-text-secondary mb-1">
                    {info.label}
                  </p>
                  <p className="text-base md:text-lg text-foreground font-medium group-hover:text-accent transition-colors break-all md:break-normal">
                    {info.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
