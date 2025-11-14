import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: [
        {
          label: "Student Branch Chair",
          email: "manusabnis@ieee.org",
          link: "mailto:manusabnis@ieee.org",
        },
        {
          label: "Student Branch Vice-Chair",
          email: "abhikhare344@ieee.org",
          link: "mailto:abhikhare344@ieee.org",
        },
        {
          label: "Coordinator 1",
          email: "harshothy25@gmail.com",
          link: "mailto:harshothy25@gmail.com",
        },
        {
          label: "Coordinator 2",
          email: "jaydeepnadkarni123@gmail.com",
          link: "mailto:jaydeepnadkarni123@gmail.com",
        },
      ],
    },
    {
      icon: Phone,
      title: "Phone",
      details: [
        {
          label: "Student Branch Chair",
          num: "+91 7847032997",
          link: "tel:+917847032997",
        },
        {
          label: "Student Branch Vice-Chair",
          num: "+91 7676061926",
          link: "tel:+917676061926",
        },
        {
          label: "Coordinator 1",
          num: "+91 7619652769",
          link: "tel:+917619652769",
        },
        {
          label: "Coordinator 2",
          num: "+91 9481740517",
          link: "tel:+919481740517",
        },
      ],
    },
    {
      icon: MapPin,
      title: "Location",
      details:
        "KLE Technological University, Dr. M. S. Sheshgiri Campus, Belagavi",
      link: "https://maps.app.goo.gl/NCTBvz9G2zKfhv5VA",
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: "Mon - Fri: 9:00 AM - 5:00 PM",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions about the conclave? We're here to help
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((item, index) => (
            <Card
              key={index}
              className="p-6 bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>

              {/* Labeled Emails or Phones */}
              {Array.isArray(item.details) ? (
                <div className="space-y-3">
                  {item.details.map((entry, i) => (
                    <div key={i}>
                      <div className="text-foreground font-medium">
                        {entry.label}
                      </div>

                      {/* Email field */}
                      {entry.email && (
                        <a
                          href={entry.link}
                          className="block text-muted-foreground hover:text-primary transition-colors"
                        >
                          {entry.email}
                        </a>
                      )}

                      {/* Phone field */}
                      {entry.num && (
                        <a
                          href={entry.link}
                          className="block text-muted-foreground hover:text-primary transition-colors"
                        >
                          {entry.num}
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <a
                  href={item.link}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.details}
                </a>
              )}
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <Card className="mt-8 p-8 bg-secondary/20 border-border/50">
          <h3 className="text-2xl font-bold mb-4 text-center">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4 text-muted-foreground">
            <div>
              <h4 className="font-semibold text-foreground mb-2">
                When will registration open?
              </h4>
              <p>Registration will open soon. Please check back regularly for updates.</p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-2">
                What is included in the registration fee?
              </h4>
              <p>
                Access to all technical sessions, keynote presentations, conference
                materials, certificate of participation, and networking events.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-2">
                Can non-students attend?
              </h4>
              <p>
                This conclave is primarily designed for students, but professionals are
                welcome to contact us for special arrangements.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
