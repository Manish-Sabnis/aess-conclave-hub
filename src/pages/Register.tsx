import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, ChevronDown, Clock } from "lucide-react";

const Register = () => {
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

  const registrationTypes = [
    {
      title: "IEEE AESS Student Member",
      price: "Special Rate",
      features: [
        "Free access to all sessions",
        "Registration kit",
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
        "Registration kit",
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
        "Registration kit",
        "Certificate of participation",
        "Networking events",
      ],
      highlight: false,
      formLink: "https://forms.gle/sMXvrvL31quT7vFo8",
    },
    {
      title: "Professional Member",
      price: "Complimentary Access",
      features: [
        "Free access to all sessions",
        "Registration kit",
        "Certificate of participation",
        "Networking events",
      ],
      highlight: false,
      formLink: "https://forms.gle/ShXkqEtQ5As6eKQF8",
    },
  ];

  const faqs = [
    {
      question: "Who can register as an IEEE AESS Member?",
      answer: "Members of the IEEE Aerospace and Electronics Society receive free entry to the conclave. You must have an active AESS membership to qualify for this category."
    },
    {
      question: "What are the benefits for IEEE Members?",
      answer: "Current IEEE student members are eligible for standard registration rates at Rs. 100, which includes access to all technical sessions, keynote presentations, and networking events."
    },
    {
      question: "Can non-IEEE members attend?",
      answer: "Yes! The conclave is open to all students interested in aerospace and electronics technology. Non-IEEE members can register at Rs. 200 with full access to all sessions."
    },
    {
      question: "What does Professional Member registration include?",
      answer: "Professionals and researchers are invited to attend with complimentary access. This includes free entry to all sessions, a registration kit, certificate of participation, and networking events."
    },
    {
      question: "What is included in the registration?",
      answer: "All registration types include access to technical sessions, keynote presentations,a Registration kit, certificate of participation, and networking events. The specific details vary by registration category."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen py-4 px-12 sm:py-24">
      <div className="mx-auto">
        {/* Countdown Timer - FIXED VERSION */}
        <div className="max-w-4xl mx-auto mb-6 sm:mb-24">
          <div className="p-6 border-0">
            <div className="flex items-center justify-center gap-2 mb-4 sm:mb-8">
              <Clock className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold text-center sm:text-2xl">
                Registration Closes In
              </h3>
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
              Deadline: November 25, 2025 at 10:00 PM IST
            </p>
          </div>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Registration <span className="text-primary">Options</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the registration type that best suits your membership status
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
          {registrationTypes.map((type, index) => (
            <Card
              key={index}
              className={`p-6 bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300 flex flex-col ${
                type.highlight ? "border-primary/50 shadow-glow lg:scale-105" : ""
              }`}
            >
              {type.highlight && (
                <div className="text-center mb-4">
                  <span className="text-primary text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                    Recommended
                  </span>
                </div>
              )}
              
              <h3 className="text-xl font-bold mb-2 text-center">{type.title}</h3>
              <div className="text-center mb-6">
                <span className="text-2xl font-bold text-primary">{type.price}</span>
              </div>

              <ul className="space-y-3 mb-6 flex-grow">
                {type.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-auto"
                asChild
              >
                <a href={type.formLink} target="_blank" rel="noopener noreferrer">
                  Register Now
                </a>
              </Button>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-muted-foreground">
              Everything you need to know about registration
            </p>
          </div>

          <div className="space-y-4">
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
              Still have questions? Feel free to reach out to our team for assistance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;