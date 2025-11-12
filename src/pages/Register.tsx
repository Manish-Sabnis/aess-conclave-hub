import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const Register = () => {
  const registrationTypes = [
    {
      title: "IEEE AESS Student Member",
      price: "Special Rate",
      features: [
        "Free access to all sessions",
        "Conference materials",
        "Certificate of participation",
        "Networking events",
      ],
      highlight: true,
      formLink: "https://forms.gle/gfmSP88mTBwRdMNQA",
    },
    {
      title: "IEEE Student Member",
      price: "Standard Rate",
      features: [
        "Full access to all sessions at Rs. 100",
        "Conference materials",
        "Certificate of participation",
        "Networking events",
      ],
      highlight: false,
      formLink: "https://forms.gle/yEnFJWj5NkjFgYux9",
    },
    {
      title: "Non-IEEE Student Member",
      price: "General Rate",
      features: [
        "Full access to all sessions at Rs. 200",
        "Conference materials",
        "Certificate of participation",
        "Networking events",
      ],
      highlight: false,
      formLink: "https://forms.gle/sMXvrvL31quT7vFo8",
    },
  ];

  return (
    <div className="min-h-screen py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Registration <span className="text-primary">Options</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the registration type that best suits your membership status
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {registrationTypes.map((type, index) => (
            <Card
              key={index}
              className={`p-8 bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300 ${
                type.highlight ? "border-primary/50 shadow-glow scale-105" : ""
              }`}
            >
              {type.highlight && (
                <div className="text-center mb-4">
                  <span className="text-primary text-sm font-semibold tracking-wider uppercase px-4 py-1 rounded-full bg-primary/10 border border-primary/20">
                    Recommended
                  </span>
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-2 text-center">{type.title}</h3>
              <div className="text-center mb-6">
                <span className="text-3xl font-bold text-primary">{type.price}</span>
              </div>

              <ul className="space-y-4 mb-8">
                {type.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                asChild
              >
                <a href={type.formLink} target="_blank" rel="noopener noreferrer">
                  Register Now
                </a>
              </Button>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <Card className="p-8 bg-secondary/20 border-border/50">
            <h3 className="text-2xl font-bold mb-4">Registration Information</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">IEEE AESS Members:</strong> Members of the IEEE Aerospace and Electronics Society receive free entry to the conclave.
              </p>
              <p>
                <strong className="text-foreground">IEEE Members:</strong> Current IEEE student members are eligible for standard registration rates.
              </p>
              <p>
                <strong className="text-foreground">Non-IEEE Members:</strong> Open to all students interested in aerospace and electronics technology.
              </p>
              <p className="text-sm mt-6 text-center">
                Registration includes access to all technical sessions, keynote presentations, and networking events.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Register;
