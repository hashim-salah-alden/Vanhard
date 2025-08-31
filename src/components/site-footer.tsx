"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Shield,
  Server,
  Lock,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const columnsRef = useRef<HTMLDivElement[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate logo with rotation and scale
      gsap.fromTo(
        logoRef.current,
        { opacity: 0, scale: 0.5, rotation: -180 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate columns with stagger
      gsap.fromTo(
        columnsRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate bottom section
      gsap.fromTo(
        bottomRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.8,
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const contactInfo = [
    { icon: Mail, label: "Email", value: "contact@vanhard.com" },
    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
    {
      icon: MapPin,
      label: "Location",
      value: "Secure Infrastructure Solutions",
    },
  ];

  const services = [
    "System Hardening",
    "Infrastructure Setup",
    "Security Configuration",
    "Documentation & Support",
    "Privacy Implementation",
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
  ];

  return (
    <footer
      ref={footerRef}
      className="bg-primrycolor-dark text-slate-200 overflow-hidden relative"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-primary-foreground/20 rounded-full"></div>
        <div className="absolute top-32 right-20 w-20 h-20 border border-primary-foreground/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-primary-foreground/20 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-primary-foreground/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div
            ref={(el) => {
              if (el) columnsRef.current[0] = el;
            }}
            className="lg:col-span-1"
          >
            <div ref={logoRef} className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary-foreground/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-primary-foreground/20">
                  <Shield className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold">VANHARD</h3>
              </div>
              <p className="text-primary-foreground/80 leading-relaxed">
                Professional system installation and security services with
                complete client control and transparency.
              </p>
            </div>

            {/* Creative decorative element */}
            <div className="flex items-center gap-2 opacity-60">
              <Lock className="w-4 h-4" />
              <div className="flex-1 h-px bg-gradient-to-r from-primary-foreground/40 to-transparent"></div>
              <Server className="w-4 h-4" />
            </div>
          </div>

          {/* Services */}
          <div
            ref={(el) => {
              if (el) columnsRef.current[1] = el;
            }}
          >
            <h4 className="text-xl font-semibold mb-6 text-primary-foreground">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 group cursor-pointer"
                >
                  <div className="w-2 h-2 bg-primary-foreground/60 rounded-full group-hover:bg-primary-foreground transition-colors duration-300"></div>
                  <span className="text-primary-foreground/80 group-hover:text-primary-foreground transition-colors duration-300">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div
            ref={(el) => {
              if (el) columnsRef.current[2] = el;
            }}
          >
            <h4 className="text-xl font-semibold mb-6 text-primary-foreground">
              Contact
            </h4>
            <div className="space-y-4">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="flex items-start gap-3 group">
                    <div className="w-10 h-10 bg-primary-foreground/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-primary-foreground/20 group-hover:bg-primary-foreground/20 transition-colors duration-300">
                      <IconComponent className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-primary-foreground/60 text-sm">
                        {item.label}
                      </div>
                      <div className="text-primary-foreground group-hover:text-primary-foreground/90 transition-colors duration-300">
                        {item.value}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Social & Newsletter */}
          <div
            ref={(el) => {
              if (el) columnsRef.current[3] = el;
            }}
          >
            <h4 className="text-xl font-semibold mb-6 text-primary-foreground">
              Connect
            </h4>

            {/* Social Links */}
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-12 h-12 bg-primary-foreground/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-primary-foreground/20 hover:bg-primary-foreground/20 hover:scale-110 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5 text-primary-foreground group-hover:scale-110 transition-transform duration-300" />
                  </a>
                );
              })}
            </div>

            {/* Newsletter */}
            <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-4 border border-primary-foreground/20">
              <h5 className="font-semibold mb-2 text-primary-foreground">
                Stay Updated
              </h5>
              <p className="text-primary-foreground/70 text-sm mb-3">
                Get security insights and updates
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-3 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg text-primary-foreground placeholder-primary-foreground/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary-foreground/30"
                />
                <button className="px-4 py-2 bg-primary-foreground/20 hover:bg-primary-foreground/30 rounded-lg transition-colors duration-300 text-sm font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          ref={bottomRef}
          className="border-t border-primary-foreground/20 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-primary-foreground/70 text-sm">
              © 2024 VANHARD. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a
                href="#"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
              >
                Security
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
