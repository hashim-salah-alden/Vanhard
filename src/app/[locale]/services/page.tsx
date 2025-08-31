"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Cloud,
  Shield,
  Globe,
  Lock,
  Mail,
  Monitor,
  Key,
  ArrowRight,
  CheckCircle,
  Server,
} from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Cloud,
    title: "Private Cloud Workspace Deployment",
    description:
      "Secure, scalable file collaboration tools like Nextcloud, fully installed on your infrastructure.",
    features: [
      "Nextcloud Installation",
      "File Collaboration",
      "Secure Infrastructure",
      "Full Data Control",
    ],
    price: "$700",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Key,
    title: "Unified Identity & Access System Integration",
    description:
      "Centralized identity management using standards-based tools such as Authentik, LDAP, and OpenID Connect.",
    features: [
      "Authentik Setup",
      "LDAP Integration",
      "OpenID Connect",
      "Centralized Management",
    ],
    price: "$900",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Globe,
    title: "Remote Access Gateway Installation",
    description:
      "Deploy Guacamole or similar tools to access internal desktops, servers, or files through the browser, anywhere in the world.",
    features: [
      "Guacamole Deployment",
      "Browser Access",
      "Global Connectivity",
      "Secure Remote Desktop",
    ],
    price: "$750",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Shield,
    title: "Infrastructure Hardening & Optimization",
    description:
      "Security-focused system configuration, including firewall setup, SSH key access, kernel hardening, and system tuning.",
    features: [
      "Firewall Configuration",
      "SSH Key Setup",
      "Kernel Hardening",
      "System Optimization",
    ],
    price: "$600",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Mail,
    title: "Self-Hosted Mail Server Setup",
    description:
      "Deploy Mailcow or Poste.io with anti-spam, webmail, DKIM, SPF, and secure IMAP/SMTP support.",
    features: [
      "Mailcow/Poste.io Setup",
      "Anti-spam Protection",
      "DKIM & SPF",
      "Secure IMAP/SMTP",
    ],
    price: "$900",
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: Monitor,
    title: "Virtual Workspace Deployment",
    description:
      "Installations of browser-accessible Linux or Windows VMs for secure remote desktop environments.",
    features: [
      "VM Installation",
      "Browser Access",
      "Linux & Windows",
      "Secure Environment",
    ],
    price: "$1,200",
    color: "from-teal-500 to-cyan-500",
  },
  {
    icon: Lock,
    title: "Zero Trust Security Configuration",
    description:
      "Set up policy-driven, identity-aware access to all internal apps and services with minimal attack surface and segmented access.",
    features: [
      "Policy-driven Access",
      "Identity Awareness",
      "Minimal Attack Surface",
      "Access Segmentation",
    ],
    price: "$500 - $1,000",
    color: "from-gray-700 to-gray-900",
  },
];

export default function ServicesPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(
        ".hero-title",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );

      gsap.fromTo(
        ".hero-subtitle",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: "power3.out" }
      );

      gsap.fromTo(
        ".hero-cta",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, delay: 0.4, ease: "power3.out" }
      );

      // Services cards animation
      gsap.fromTo(
        ".service-card",
        { opacity: 0, y: 60, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-grid",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Floating animation for service cards
      gsap.to(".service-card", {
        y: -10,
        duration: 2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.2,
      });
    }, [heroRef, servicesRef]);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <section ref={heroRef} className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10" />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="hero-title text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent mb-6">
            Service Catalog
          </h1>
          <p className="hero-subtitle text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
            Professional infrastructure and security services. One-time
            installations with no monthly fees.
          </p>
          <div className="hero-cta">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              View Pricing & Packages
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
              >
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                {/* Price Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {service.price}
                  </span>
                </div>

                {/* Icon */}
                <div
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-3 text-sm text-gray-700"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            Why Choose Our Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <Server className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                One-Time Setup
              </h3>
              <p className="text-gray-600">
                No recurring monthly fees. Pay once and own your infrastructure
                forever.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Enterprise Security
              </h3>
              <p className="text-gray-600">
                Military-grade security with industry best practices and
                compliance standards.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <Lock className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Full Control
              </h3>
              <p className="text-gray-600">
                Complete ownership of your data and infrastructure with no
                vendor lock-in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Secure Your Infrastructure?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss which services best fit your security and
            infrastructure needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              View Packages & Pricing
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
