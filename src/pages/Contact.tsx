import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
// const Contact = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-background text-4xl md:text-6xl font-bold text-primary">
//       Coming Soon
//     </div>
//   );
// };

// export default Contact;
// const Contact = () => {
//   const { toast } = useToast();

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     toast({
//       title: "Message Sent!",
//       description: "We'll get back to you as soon as possible.",
//     });
//   };

//   const contactInfo = [
//     {
//       icon: Mail,
//       title: "Email",
//       details: "info@ieeeaess-conclave.org",
//       link: "mailto:info@ieeeaess-conclave.org",
//     },
//     {
//       icon: Phone,
//       title: "Phone",
//       details: "+91 (0) 123-456-7890",
//       link: "tel:+911234567890",
//     },
//     {
//       icon: MapPin,
//       title: "Location",
//       details: "Conference Hall, Tech Campus",
//       link: "#",
//     },
//     {
//       icon: Clock,
//       title: "Office Hours",
//       details: "Mon - Fri: 9:00 AM - 5:00 PM",
//       link: "#",
//     },
//   ];

//   return (
//     <div className="min-h-screen py-24 px-4">
//       <div className="container mx-auto max-w-6xl">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">
//             Get in <span className="text-primary">Touch</span>
//           </h1>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             Have questions about the conclave? We're here to help
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-3 gap-8 mb-12">
//           {contactInfo.map((item, index) => (
//             <Card
//               key={index}
//               className="p-6 bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300 hover:scale-105"
//             >
//               <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
//                 <item.icon className="w-6 h-6 text-primary" />
//               </div>
//               <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
//               <a
//                 href={item.link}
//                 className="text-muted-foreground hover:text-primary transition-colors"
//               >
//                 {item.details}
//               </a>
//             </Card>
//           ))}
//         </div>

//         <Card className="p-8 bg-gradient-card border-border/50">
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="grid md:grid-cols-2 gap-6">
//               <div className="space-y-2">
//                 <label htmlFor="name" className="text-sm font-medium">
//                   Full Name
//                 </label>
//                 <Input
//                   id="name"
//                   placeholder="John Doe"
//                   className="bg-background/50 border-border/50"
//                   required
//                 />
//               </div>
//               <div className="space-y-2">
//                 <label htmlFor="email" className="text-sm font-medium">
//                   Email Address
//                 </label>
//                 <Input
//                   id="email"
//                   type="email"
//                   placeholder="john@example.com"
//                   className="bg-background/50 border-border/50"
//                   required
//                 />
//               </div>
//             </div>

//             <div className="space-y-2">
//               <label htmlFor="subject" className="text-sm font-medium">
//                 Subject
//               </label>
//               <Input
//                 id="subject"
//                 placeholder="What is this regarding?"
//                 className="bg-background/50 border-border/50"
//                 required
//               />
//             </div>

//             <div className="space-y-2">
//               <label htmlFor="message" className="text-sm font-medium">
//                 Message
//               </label>
//               <Textarea
//                 id="message"
//                 placeholder="Your message here..."
//                 rows={6}
//                 className="bg-background/50 border-border/50 resize-none"
//                 required
//               />
//             </div>

//             <Button
//               type="submit"
//               className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
//             >
//               Send Message
//             </Button>
//           </form>
//         </Card>

//         <Card className="mt-8 p-8 bg-secondary/20 border-border/50">
//           <h3 className="text-2xl font-bold mb-4 text-center">
//             Frequently Asked Questions
//           </h3>
//           <div className="space-y-4 text-muted-foreground">
//             <div>
//               <h4 className="font-semibold text-foreground mb-2">
//                 When will registration open?
//               </h4>
//               <p>Registration will open soon. Please check back regularly for updates.</p>
//             </div>
//             <div>
//               <h4 className="font-semibold text-foreground mb-2">
//                 What is included in the registration fee?
//               </h4>
//               <p>
//                 Access to all technical sessions, keynote presentations, conference materials,
//                 certificate of participation, and networking events.
//               </p>
//             </div>
//             <div>
//               <h4 className="font-semibold text-foreground mb-2">
//                 Can non-students attend?
//               </h4>
//               <p>
//                 This conclave is primarily designed for students, but professionals are welcome
//                 to contact us for special arrangements.
//               </p>
//             </div>
//           </div>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default Contact;
