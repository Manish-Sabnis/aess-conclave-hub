import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, ChevronDown } from "lucide-react";

const Contact = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: [
        {
          label: "Manish Sabnis (Student Branch Chair)",
          email: "manusabnis@ieee.org",
          link: "mailto:manusabnis@ieee.org",
        },
        {
          label: "Abhinandan Khare (Student Branch Vice-Chair)",
          email: "abhikhare344@ieee.org",
          link: "mailto:abhikhare344@ieee.org",
        },
        {
          label: "Harsh Othy (Coordinator)",
          email: "harshothy25@gmail.com",
          link: "mailto:harshothy25@gmail.com",
        },
        {
          label: "Jaydeep Nadkarni (Coordinator)",
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
          label: "Manish Sabnis (Student Branch Chair)",
          num: "+91 7847032997",
          link: "tel:+917847032997",
        },
        {
          label: "Abhinandan Khare (Student Branch Vice-Chair)",
          num: "+91 7676061926",
          link: "tel:+917676061926",
        },
        {
          label: "Harsh Othy (Coordinator)",
          num: "+91 7619652769",
          link: "tel:+917619652769",
        },
        {
          label: "Jaydeep Nadkarni (Coordinator)",
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

  const faqs = [
    {
      question: "When will registration open?",
      answer: "Registration will open soon. Please check back regularly for updates or follow our social media channels for the latest announcements."
    },
    {
      question: "What is included in the registration fee?",
      answer: "Your registration includes access to all technical sessions, keynote presentations, conference materials, certificate of participation, and networking events. Different registration tiers may have additional benefits."
    },
    {
      question: "Can non-students attend?",
      answer: "This conclave is primarily designed for students, but professionals and researchers are welcome to attend. Professional members receive complimentary access to all sessions."
    },
    {
      question: "How do I become an IEEE AESS member?",
      answer: "You can join IEEE AESS through the IEEE website. AESS membership provides free access to the conclave and many other benefits throughout the year."
    },
    {
      question: "Is accommodation provided for outstation participants?",
      answer: "Please contact us directly for information about accommodation arrangements. We can help connect you with nearby hotels and lodging options."
    },
    {
      question: "Will certificates be provided?",
      answer: "Yes, all registered participants will receive a certificate of participation after attending the conclave sessions."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

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
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-16">
          {contactInfo.map((item, index) => (
            <Card
              key={index}
              className="p-6 bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300 hover:scale-105 flex flex-col"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="text-lg font-semibold mb-3">{item.title}</h3>

              {/* Labeled Emails or Phones */}
              {Array.isArray(item.details) ? (
                <div className="space-y-3 flex-grow">
                  {item.details.map((entry, i) => (
                    <div key={i} className="text-sm">
                      <div className="text-foreground font-medium mb-1">
                        {entry.label}
                      </div>

                      {/* Email field */}
                      {entry.email && (
                        <a
                          href={entry.link}
                          className="block text-muted-foreground hover:text-primary transition-colors break-all"
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
                  target={item.icon === MapPin ? "_blank" : undefined}
                  rel={item.icon === MapPin ? "noopener noreferrer" : undefined}
                  className="text-muted-foreground hover:text-primary transition-colors flex-grow"
                >
                  {item.details}
                </a>
              )}
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-muted-foreground">
              Find answers to common questions about the conclave
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="bg-gradient-card border-border/50 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-secondary/10 transition-colors"
                >
                  <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-6 pt-2">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Still have questions? Feel free to reach out using the contact information above.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;