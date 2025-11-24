import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Check, ChevronDown, Clock } from "lucide-react";
import { Calendar, MapPin, Users, Rocket, Download } from "lucide-react";

const Home = () => {

  const [openFaq, setOpenFaq] = useState(null);
    const [timeLeft, setTimeLeft] = useState({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    });
  
    useEffect(() => {
      const calculateTimeLeft = () => {
        // Target date: November 25, 2025, 10:00 PM IST
        const targetDate = new Date('2025-11-25T22:00:00+05:30');
        const now = new Date();
        const difference = targetDate.getTime() - now.getTime();
  
        if (difference > 0) {
          setTimeLeft({
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
          });
        } else {
          setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        }
      };
  
      calculateTimeLeft();
      const timer = setInterval(calculateTimeLeft, 1000);
  
      return () => clearInterval(timer);
    }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzAwYmNkNCIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="container mx-auto px-8 relative z-10 py-8 md:py-0">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                IEEE AESS Technology Conclave
              </span>
            </h1>
            
            <div className="text-xl md:text-3xl font-semibold tracking-widest text-primary">
              INNOVATE. INTEGRATE. INSPIRE.
            </div>
            
            <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Join us for an extraordinary gathering of minds in aerospace and electronics technology
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-lg md:text-xl font-semibold text-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                <span>29th November 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">•</span>
                <span>9:00 AM - 7:00 PM</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 ">
              <Link to="/register">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow min-w-[200px]">
                  Register Now
                </Button>
              </Link>
              <Link to="/speakers">
                <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary min-w-[200px]">
                  View Speakers
                </Button>
              </Link>
              <a href="/event_flyer.pdf" download="IEEE-AESS-Conclave-Flyer-Flyer.pdf">
                <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary min-w-[200px]">
                  <Download className="w-5 h-5 mr-2" />
                  Download Flyer
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto sm:mb-0">
          <div className="p-6 border-0">
            <div className="flex items-center justify-center gap-2 mb-4 sm:mb-8">
              <h2 className="text-4xl font-bold text-center mb-6">
            Registration <span className="text-primary">Closes In</span>
              </h2>
            </div>
            
            {/* Fixed Timer Layout */}
            <div className="flex justify-center items-center gap-2 sm:gap-8 max-w-2xl mx-auto">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Minutes', value: timeLeft.minutes },
                { label: 'Seconds', value: timeLeft.seconds }
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  {/* Time Unit */}
                  <div className="flex flex-col items-center min-w-[60px] sm:min-w-[70px]">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-background/80 rounded-lg flex items-center justify-center shadow-sm border border-border/50 mb-1">
                      <span className="text-xl sm:text-2xl font-bold text-primary">
                        {String(item.value).padStart(2, '0')}
                      </span>
                    </div>
                    <span className="text-xs sm:text-sm text-muted-foreground font-medium">
                      {item.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            <p className="text-center text-xs sm:text-sm text-muted-foreground mt-8">
              Deadline: November 29, 2025 at 10:00 PM IST
            </p>
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
                title: "One Day Event",
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
                        KLE Technological University <br />
                        Dr. M. S. Sheshgiri Campus <br />
                        Belagavi - 590008
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
                        November 29, 2025<br />
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
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-card border-border/50">
              <h3 className="text-2xl font-bold mb-4">Campus Map</h3>
              <div className="aspect-video rounded-lg overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300">
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder={0}
                  title="KLE Technological University Campus Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.6901293961414!2d74.4960245747105!3d15.820284884823709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf65ce55555555%3A0x9b70f622a9a0fb44!2sKLE%20Technological%20University&#39;s%2C%20Dr.%20M.%20S.%20Sheshgiri%20Campus!5e0!3m2!1sen!2sus!4v1763123091660!5m2!1sen!2sus"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ border: 0 }}
                ></iframe>
              </div>
              <div className="mt-6 space-y-3">
                <h4 className="font-semibold">Nearby Landmarks</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span>4th Railway Gate (50m)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span>Native Hotels (1.8km)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span>3rd Railway Gate (1.8km)</span>
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
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Don't miss this opportunity to be part of the premier aerospace and electronics technology event
            </p>
            <Link to="/register">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground max-w-[200px] mx-auto">
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
