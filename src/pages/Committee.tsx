import { Card } from "@/components/ui/card";
import { Mail, Linkedin } from "lucide-react";

const Committee = () => {
  const committee = [
    {
      name: "Dr. Arun Patel",
      role: "General Chair",
      affiliation: "IEEE AESS India Chapter",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
      email: "arun.patel@ieee.org",
    },
    {
      name: "Prof. Lakshmi Iyer",
      role: "Technical Program Chair",
      affiliation: "IIT Bombay",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop",
      email: "lakshmi.iyer@iitb.ac.in",
    },
    {
      name: "Dr. Vikram Singh",
      role: "Publication Chair",
      affiliation: "DRDO",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
      email: "vikram.singh@drdo.gov.in",
    },
    {
      name: "Ms. Ananya Desai",
      role: "Registration Chair",
      affiliation: "IEEE Student Chapter",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
      email: "ananya.desai@ieee.org",
    },
    {
      name: "Mr. Rohan Mehta",
      role: "Finance Chair",
      affiliation: "IEEE AESS",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      email: "rohan.mehta@ieee.org",
    },
    {
      name: "Dr. Kavita Reddy",
      role: "Publicity Chair",
      affiliation: "IIIT Hyderabad",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop",
      email: "kavita.reddy@iiit.ac.in",
    },
    {
      name: "Mr. Arjun Kumar",
      role: "Student Coordinator",
      affiliation: "IEEE Student Member",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&h=400&fit=crop",
      email: "arjun.kumar@students.ieee.org",
    },
    {
      name: "Ms. Sneha Gupta",
      role: "Volunteer Coordinator",
      affiliation: "IEEE Student Member",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      email: "sneha.gupta@students.ieee.org",
    },
  ];

  return (
    <div className="min-h-screen py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Organizing <span className="text-primary">Committee</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet the dedicated team bringing this conclave to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {committee.map((member, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              <div className="aspect-square overflow-hidden bg-secondary/20">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6 space-y-2">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-primary font-medium text-sm">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.affiliation}</p>
                <div className="flex items-center space-x-3 pt-2">
                  <a
                    href={`mailto:${member.email}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Committee;
