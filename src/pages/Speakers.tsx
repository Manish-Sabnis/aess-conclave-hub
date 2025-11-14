import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import speaker1 from "@/assets/speaker1.jpeg";
import speaker2 from "@/assets/speaker2.png";
import speaker3 from "@/assets/speaker3.jpeg";
import speaker4 from "@/assets/speaker4.png";
import speaker5 from "@/assets/speaker5.png";
import speaker6 from "@/assets/speaker6.png";

const Speakers = () => {
  const speakers = [
    {
      name: "Lt. Gen. Ramesh Halagali",
      affiliation: "PVSM, AVSM, Deputy Chief of Army Staff (Retd.)",
      expertise: "2017 Karnataka Rajyotsava Prashasti",
      image: speaker1,
      bio: "Distinguished military leader and strategist",
    },
    {
      name: "Dr. R. V. Nadagouda",
      affiliation: "Distinguished Scientist & Associate Director (Projects), U. R. Rao Satellite Centre (URSC), ISRO, Bangalore",
      expertise: "2025 Karnataka Rajyotsava Prashasti",
      image: speaker2,
      bio: "Leading scientist in satellite technology",
    },
    {
      name: "Dr. Vinod Chippalkatti",
      affiliation: "President, SEBU, Centum Electronics",
      expertise: "Electronics & Systems",
      image: speaker3,
      bio: "Industry leader in electronics systems",
    },
    {
      name: "Mr. Sunil V. Kulkarni",
      affiliation: "Deputy Director, Payload Data Management & Space Astronomy Area, URSC, ISRO, Bangalore",
      expertise: "Space Astronomy",
      image: speaker4,
      bio: "Expert in payload data management systems",
    },
    {
      name: "Mr. Pramod V. Belgaonkar",
      affiliation: "Deputy Director, Integration & Checkout Area, URSC, ISRO, Bangalore",
      expertise: "Integration & Testing",
      image: speaker5,
      bio: "Specialist in satellite integration and testing",
    },
    {
      name: "Mr. Puneet Kumar Mishra",
      affiliation: "Global VP (Education), IEEE AESS & SH, EIS-3, URSC, ISRO",
      expertise: "IEEE AESS Leadership",
      image: speaker6,
      bio: "IEEE AESS education and outreach leader",
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
