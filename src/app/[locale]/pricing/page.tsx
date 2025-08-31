"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Check,
  Star,
  ArrowRight,
  Cloud,
  Users,
  Shield,
  Crown,
  Package,
  GraduationCap,
} from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const individualServices = [
  { name: "Private Cloud Workspace", price: 700 },
  { name: "Unified Identity System", price: 900 },
  { name: "Remote Access Gateway", price: 750 },
  { name: "Infrastructure Hardening", price: 600 },
  { name: "Self-hosted Mail Server", price: 900 },
  { name: "Virtual Workspace Deployment", price: 1200 },
  { name: "Zero Trust Security Configuration", price: "500 - 1,000" },
];

const packages = [
  {
    name: "Starter Secure Stack",
    icon: Cloud,
    price: 750,
    originalPrice: 1600,
    description: "Essential cloud and email infrastructure for small teams",
    includes: ["Private Cloud Workspace", "Self-hosted Mail Server"],
    features: [
      "Nextcloud file collaboration",
      "Secure email server",
      "Basic security setup",
      "Documentation included",
    ],
    popular: false,
    color: "from-blue-500 to-cyan-500",
    savings: 850,
  },
  {
    name: "Team Access Kit",
    icon: Users,
    price: 950,
    originalPrice: 1450,
    description: "Perfect for teams needing secure remote access",
    includes: ["Cloud Workspace", "Remote Access Gateway"],
    features: [
      "File collaboration platform",
      "Remote desktop access",
      "Browser-based connectivity",
      "Team management tools",
    ],
    popular: false,
    color: "from-green-500 to-emerald-500",
    savings: 500,
  },
  {
    name: "Privacy Pro Package",
    icon: Shield,
    price: 1400,
    originalPrice: 2750,
    description: "Comprehensive privacy and security solution",
    includes: [
      "Cloud Workspace",
      "Remote Access",
      "Identity System",
      "Zero Trust Security",
    ],
    features: [
      "Complete privacy stack",
      "Zero trust architecture",
      "Identity management",
      "Secure remote access",
      "Advanced security policies",
    ],
    popular: true,
    color: "from-purple-500 to-pink-500",
    savings: 1350,
  },
  {
    name: "Full Ownership Suite",
    icon: Crown,
    price: 2200,
    originalPrice: 4750,
    description: "Complete infrastructure independence",
    includes: [
      "All Services",
      "Cloud + Mail + Identity + Access + Hardening + Zero Trust",
    ],
    features: [
      "Every service included",
      "Complete infrastructure",
      "Maximum security",
      "Full data ownership",
      "Enterprise-grade setup",
    ],
    popular: false,
    color: "from-yellow-500 to-orange-500",
    savings: 2550,
  },
  {
    name: "Deploy and Train Package",
    icon: GraduationCap,
    price: 2500,
    originalPrice: 2200,
    description: "Full suite plus comprehensive administrator training",
    includes: [
      "Full Ownership Suite",
      "3-hour Live Training for Administrators",
    ],
    features: [
      "Everything in Full Ownership",
      "3 hours live training",
      "Administrator certification",
      "Best practices guide",
      "Ongoing support guidance",
    ],
    popular: false,
    color: "from-indigo-500 to-purple-500",
    savings: 0,
  },
];

export default function PricingPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const [showIndividual, setShowIndividual] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(
        ".pricing-hero-title",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );

      gsap.fromTo(
        ".pricing-hero-subtitle",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: "power3.out" }
      );

      gsap.fromTo(
        ".pricing-toggle",
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: 0.4,
          ease: "back.out(1.7)",
        }
      );

      // Pricing cards animation
      gsap.fromTo(
        ".pricing-card",
        { opacity: 0, y: 80, rotationX: 15 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".pricing-grid",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Popular badge animation
      gsap.fromTo(
        ".popular-badge",
        { scale: 0, rotation: -10 },
        {
          scale: 1,
          rotation: 0,
          duration: 0.6,
          delay: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".pricing-grid",
            start: "top 80%",
          },
        }
      );
    }, [heroRef, pricingRef]);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section ref={heroRef} className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-[url(/photo-2.jpg)] bg-cover bg-no-repeat" />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative max-w-7xl mx-auto text-center ">
          <h2 className="pricing-hero-title text-primrycolor-dark text-5xl md:text-7xl font-bold  mb-6">
            Transparent Pricing
          </h2>
          <p className="pricing-hero-subtitle text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            One-time installations. No monthly fees. Own your infrastructure
            forever.
          </p>

          {/* Pricing Toggle */}
          <div className="pricing-toggle flex items-center justify-center gap-4 mb-16">
            <span
              className={`text-lg font-medium ${
                !showIndividual ? "text-gray-900" : "text-gray-500"
              }`}
            >
              Bundled Packages
            </span>
            <button
              onClick={() => setShowIndividual(!showIndividual)}
              className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                showIndividual ? "bg-blue-600" : "bg-gray-300"
              }`}
            >
              <div
                className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ${
                  showIndividual ? "translate-x-9" : "translate-x-1"
                }`}
              />
            </button>
            <span
              className={`text-lg font-medium ${
                showIndividual ? "text-gray-900" : "text-gray-500"
              }`}
            >
              Individual Services
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Content */}
      <section ref={pricingRef} className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {!showIndividual ? (
            /* Package Pricing */
            <div className="pricing-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`pricing-card relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 ${
                    pkg.popular
                      ? "border-purple-200 scale-105"
                      : "border-gray-100"
                  } group overflow-hidden`}
                >
                  {/* Popular Badge */}
                  {pkg.popular && (
                    <div className="popular-badge absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  {/* Background gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${pkg.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  {/* Icon */}
                  <div
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${pkg.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <pkg.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Package Name */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    {pkg.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-4xl font-bold text-gray-900">
                        ${pkg.price.toLocaleString()}
                      </span>
                      <span className="text-gray-500 text-sm">one-time</span>
                    </div>
                    {pkg.savings > 0 && (
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-400 line-through">
                          ${pkg.originalPrice.toLocaleString()}
                        </span>
                        <span className="text-sm text-green-600 font-semibold">
                          Save ${pkg.savings.toLocaleString()}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Includes */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Includes:
                    </h4>
                    <ul className="space-y-2">
                      {pkg.includes.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="text-sm text-gray-700 flex items-center gap-2"
                        >
                          <Package className="w-4 h-4 text-blue-500 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-3 text-sm text-gray-700"
                      >
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                      pkg.popular
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-xl hover:scale-105"
                        : "bg-gray-900 text-white hover:bg-gray-800 hover:scale-105"
                    }`}
                  >
                    Get Started
                  </button>

                  {/* Hover effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              ))}
            </div>
          ) : (
            /* Individual Services Pricing */
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Individual Service Pricing
              </h2>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
                  <h3 className="text-xl font-semibold">Service Catalog</h3>
                  <p className="opacity-90">
                    One-time installations with no monthly fees
                  </p>
                </div>
                <div className="divide-y divide-gray-200">
                  {individualServices.map((service, index) => (
                    <div
                      key={index}
                      className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {service.name}
                        </h4>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-gray-900">
                          $
                          {typeof service.price === "number"
                            ? service.price.toLocaleString()
                            : service.price}
                        </span>
                        <p className="text-sm text-gray-500">one-time</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-6 bg-gray-50 text-center">
                  <p className="text-gray-600 mb-4">
                    Need multiple services? Check out our bundled packages for
                    significant savings.
                  </p>
                  <button
                    onClick={() => setShowIndividual(false)}
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                  >
                    View Packages
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            Why Our Pricing Model Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                No Recurring Fees
              </h3>
              <p className="text-gray-600">
                Pay once and own your infrastructure forever. No monthly
                subscriptions or hidden costs.
              </p>
            </div>
            <div className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Complete Ownership
              </h3>
              <p className="text-gray-600">
                Your data stays on your infrastructure. No vendor lock-in,
                complete control over your systems.
              </p>
            </div>
            <div className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Enterprise Grade
              </h3>
              <p className="text-gray-600">
                Professional-grade security and infrastructure that scales with
                your business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {[
              {
                question: "What happens after the one-time installation?",
                answer:
                  "After installation, you own and control the entire system. We provide documentation and initial support, but there are no ongoing fees. You can manage, modify, or expand the system as needed.",
              },
              {
                question: "Do you provide ongoing support?",
                answer:
                  "We offer optional support contracts for ongoing maintenance, updates, and technical assistance. However, our systems are designed to be self-sufficient after installation.",
              },
              {
                question: "Can I customize the services to my specific needs?",
                answer:
                  "Absolutely! We can customize any service or create entirely custom solutions. Contact us to discuss your specific requirements and get a tailored quote.",
              },
              {
                question: "What infrastructure do I need?",
                answer:
                  "Most services can be deployed on a single server or VPS. We'll assess your needs during consultation and recommend the appropriate infrastructure setup.",
              },
              {
                question: "How long does installation take?",
                answer:
                  "Most individual services take 1-3 days to deploy. Larger packages may take 1-2 weeks depending on complexity and customization requirements.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-200"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Own Your Infrastructure?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss which package best fits your security and
            infrastructure needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              View All Services
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
