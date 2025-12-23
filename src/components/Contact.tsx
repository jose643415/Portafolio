import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "tu.email@ejemplo.com",
      href: "mailto:tu.email@ejemplo.com",
    },
    {
      icon: Phone,
      label: "Teléfono",
      value: "+1 234 567 890",
      href: "tel:+1234567890",
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: "Ciudad, País",
      href: "#",
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
            ¿Tienes un proyecto en mente? Estoy disponible para nuevas oportunidades 
            y colaboraciones. ¡No dudes en contactarme!
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                className="flex items-center gap-6 p-6 rounded-lg border border-border bg-card hover:bg-secondary/50 hover:border-accent/50 transition-all group"
              >
                <div className="p-4 rounded-lg bg-gradient-button">
                  <info.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-text-secondary mb-1">{info.label}</p>
                  <p className="text-lg text-foreground font-medium group-hover:text-accent transition-colors">
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
