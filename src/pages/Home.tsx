import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Users, Rocket } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzAwYmNkNCIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                IEEE AESS Technology Conclave
              </span>
            </h1>
            
            <div className="text-2xl md:text-3xl font-semibold tracking-widest text-primary">
              INNOVATE. INTEGRATE. INSPIRE.
            </div>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Join us for an extraordinary gathering of minds in aerospace and electronics technology
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link to="/register">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow">
                  Register Now
                </Button>
              </Link>
              <Link to="/speakers">
                <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10">
                  View Speakers
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Event Highlights */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Event <span className="text-primary">Highlights</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Users,
                title: "Distinguished Speakers",
                description: "Learn from industry leaders and academic experts",
              },
              {
                icon: Rocket,
                title: "Cutting-Edge Topics",
                description: "Explore the latest in aerospace and electronics",
              },
              {
                icon: Calendar,
                title: "Multi-Day Event",
                description: "Comprehensive program with workshops and sessions",
              },
              {
                icon: MapPin,
                title: "Networking",
                description: "Connect with professionals and students",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="p-6 bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-8">
            About the <span className="text-primary">Conclave</span>
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              The IEEE Aerospace and Electronics Society (AESS) Technology Conclave brings together
              students, researchers, and industry professionals to explore the frontiers of aerospace
              and electronics technology.
            </p>
            <p>
              This premier event features keynote presentations from distinguished speakers,
              technical sessions, workshops, and networking opportunities designed to inspire
              innovation and collaboration in the field.
            </p>
          </div>
        </div>
      </section>

      {/* Venue Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">
            Event <span className="text-primary">Venue</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-8 bg-gradient-card border-border/50 space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">Location Details</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Venue</h4>
                      <p className="text-muted-foreground">
                        Main Auditorium<br />
                        Technology Campus<br />
                        University District
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Date & Time</h4>
                      <p className="text-muted-foreground">
                        To be announced soon<br />
                        Full day event with refreshments
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Getting There</h4>
                      <p className="text-muted-foreground">
                        Accessible by public transport<br />
                        Parking available on campus<br />
                        Nearest Metro: Tech Park Station
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-card border-border/50">
              <h3 className="text-2xl font-bold mb-4">Campus Map</h3>
              <div className="aspect-video bg-secondary/20 rounded-lg flex items-center justify-center border border-border/50">
                <div className="text-center space-y-2">
                  <MapPin className="w-12 h-12 text-primary mx-auto" />
                  <p className="text-muted-foreground">
                    Detailed venue map<br />
                    will be shared with registered participants
                  </p>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                <h4 className="font-semibold">Nearby Landmarks</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span>Tech Park Metro Station (500m)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span>Central Library (200m)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span>Student Cafeteria (150m)</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Card className="p-12 bg-gradient-card border-primary/20 text-center shadow-glow">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Join Us?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Don't miss this opportunity to be part of the premier aerospace and electronics technology event
            </p>
            <Link to="/register">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Register for the Conclave
              </Button>
            </Link>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
