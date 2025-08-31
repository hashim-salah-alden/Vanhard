"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  User,
  MessageSquare,
  Building,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const contactCardsRef = useRef<HTMLDivElement[]>([]);
  const mapRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    service: "general",
  });

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      primary: "contact@vanhard.com",
      secondary: "Response within 24 hours",
      color: "from-primary to-primary-dark",
    },
    {
      icon: Phone,
      title: "Call Us",
      primary: "+1 (555) 123-4567",
      secondary: "Mon-Fri, 9 AM - 6 PM EST",
      color: "from-primary-light to-primary",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      primary: "Secure Infrastructure HQ",
      secondary: "Professional consultations available",
      color: "from-accent to-primary-light",
    },
    {
      icon: Clock,
      title: "Support Hours",
      primary: "24/7 Emergency Support",
      secondary: "Critical infrastructure support",
      color: "from-primary-dark to-accent",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );

      gsap.fromTo(
        contactCardsRef.current,
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: contactCardsRef.current[0],
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        formRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        mapRef.current,
        { opacity: 0, x: 50, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: mapRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const submitBtn = e.currentTarget.querySelector('button[type="submit"]');
    gsap.to(submitBtn, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power2.out",
    });

    alert("Message Sent Successfully! We'll get back to you within 24 hours.");

    setFormData({
      name: "",
      email: "",
      company: "",
      message: "",
      service: "general",
    });
  };

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="py-24  bg-gradient-hero text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 border border-primary-foreground/20 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 border border-primary-foreground/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-primary-foreground/10 rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div ref={heroRef}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-8">
              Ready to secure your infrastructure? Let's discuss your project
              requirements and create a tailored solution.
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-px bg-primary-foreground/40"></div>
              <MessageSquare className="w-8 h-8" />
              <div className="w-16 h-px bg-primary-foreground/40"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-gradient-secondary">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div
                  key={index}
                  ref={(el) => {
                    if (el) contactCardsRef.current[index] = el;
                  }}
                  className="group bg-white rounded-xl border border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="p-8 text-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}
                    >
                      <IconComponent className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {info.title}
                    </h3>
                    <p className="text-foreground font-medium mb-1">
                      {info.primary}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {info.secondary}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div ref={formRef}>
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-foreground mb-4">
                  Start Your Project
                </h2>
                <p className="text-xl text-muted-foreground">
                  Tell us about your infrastructure needs and we'll create a
                  custom solution for you.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="flex items-center gap-2 text-sm font-medium"
                    >
                      <User className="w-4 h-4" />
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      required
                      className="h-12 w-full rounded-md border px-3 focus:ring-2 focus:ring-primary/20 outline-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="flex items-center gap-2 text-sm font-medium"
                    >
                      <Mail className="w-4 h-4" />
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@company.com"
                      required
                      className="h-12 w-full rounded-md border px-3 focus:ring-2 focus:ring-primary/20 outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="company"
                    className="flex items-center gap-2 text-sm font-medium"
                  >
                    <Building className="w-4 h-4" />
                    Company (Optional)
                  </label>
                  <input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your Company Name"
                    className="h-12 w-full rounded-md border px-3 focus:ring-2 focus:ring-primary/20 outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="service"
                    className="text-sm font-medium text-foreground"
                  >
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full h-12 px-3 rounded-md border bg-background text-foreground focus:ring-2 focus:ring-primary/20 outline-none"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="infrastructure">Infrastructure Setup</option>
                    <option value="security">Security Hardening</option>
                    <option value="documentation">
                      Documentation Services
                    </option>
                    <option value="support">Ongoing Support</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="flex items-center gap-2 text-sm font-medium"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your infrastructure requirements..."
                    rows={6}
                    required
                    className="w-full rounded-md border p-3 resize-none focus:ring-2 focus:ring-primary/20 outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-14 text-lg font-semibold rounded-md bg-gradient-to-r from-primary to-primary-dark text-white hover:opacity-90 transition-all duration-300"
                >
                  <Send className="w-5 h-5 inline mr-2" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Info Section */}
            <div ref={mapRef}>
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-foreground mb-4">
                  Why Choose VANHARD?
                </h2>
                <p className="text-xl text-muted-foreground mb-6">
                  Professional infrastructure services with complete
                  transparency and client control.
                </p>
              </div>

              {/* Info Cards */}
              <div className="space-y-6">
                {[
                  {
                    title: "No Hidden Costs",
                    desc: "Transparent pricing with no subscriptions or surprise charges.",
                  },
                  {
                    title: "Your Environment",
                    desc: "All systems installed in your infrastructure with full control.",
                  },
                  {
                    title: "Expert Documentation",
                    desc: "Comprehensive technical documentation and handoff.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="rounded-xl border p-6 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center text-white font-bold">
                        {i + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8 p-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-primary/20">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Join the growing number of organizations that trust VANHARD.
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full border-2 border-background"></div>
                    <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary-light rounded-full border-2 border-background"></div>
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-dark to-accent rounded-full border-2 border-background"></div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      50+ Happy Clients
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Secured infrastructure worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
