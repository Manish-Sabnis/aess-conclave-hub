import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
const Speakers = () => {
  const speakers = [
    {
      name: "Dr. Sarah Chen",
      affiliation: "MIT Aeronautics & Astronautics",
      expertise: "Aerospace Systems",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      bio: "Leading researcher in autonomous aerospace systems",
    },
    {
      name: "Prof. Rajesh Kumar",
      affiliation: "IIT Delhi - Electronics Engineering",
      expertise: "RF & Microwave",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      bio: "Expert in RF communication systems",
    },
    {
      name: "Dr. Emily Rodriguez",
      affiliation: "NASA Jet Propulsion Laboratory",
      expertise: "Space Electronics",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      bio: "Pioneer in radiation-hardened electronics",
    },
    {
      name: "Prof. Michael Zhang",
      affiliation: "Stanford University - Electrical Engineering",
      expertise: "Signal Processing",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
      bio: "Specialist in advanced signal processing",
    },
    {
      name: "Dr. Priya Sharma",
      affiliation: "ISRO - Satellite Centre",
      expertise: "Satellite Systems",
      image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop",
      bio: "Lead engineer for satellite communications",
    },
    {
      name: "Prof. James Wilson",
      affiliation: "Caltech - Aerospace Department",
      expertise: "Control Systems",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      bio: "Authority on aerospace control systems",
    },
  ];

  return (
    <div className="min-h-screen py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Distinguished <span className="text-primary">Speakers</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet the industry leaders and academic experts sharing their insights at the conclave
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {speakers.map((speaker, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              <div className="aspect-square overflow-hidden bg-secondary/20">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-2xl font-bold">{speaker.name}</h3>
                <p className="text-primary font-medium">{speaker.affiliation}</p>
                <Badge className="bg-primary/10 text-primary border-primary/20">
                  {speaker.expertise}
                </Badge>
                <p className="text-muted-foreground">{speaker.bio}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Speakers;
