"use client";

import { Shield, Users, Target, Zap, Lock, Globe } from "lucide-react";
import TechBackground from "./tech-background";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#171717]">
      {/* Hero Section */}
      <section className="relative  text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Building a Safer
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primrycolor-light to-blue-400">
                  Digital World
                </span>
              </h1>
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                VANHARD LLC delivers privacy-first, self-hosted digital
                infrastructure solutions. We enable businesses to take complete
                ownership of their digital environments with zero vendor
                lock-in.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span className="text-sm">Privacy by Design</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <Lock className="w-5 h-5 text-blue-400" />
                  <span className="text-sm">Zero Vendor Lock-in</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transform rotate-3">
                  <div className="w-12 h-12 bg-green-500 rounded-lg mb-4 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Secure Infrastructure</h3>
                  <p className="text-sm text-purple-200">
                    Enterprise-grade security
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transform -rotate-2 mt-8">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg mb-4 flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Global Access</h3>
                  <p className="text-sm text-purple-200">
                    Worldwide deployment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 ">
        <TechBackground
          density={0.8}
          opacity={0.65}
          color="#005b95"
          className="z-20"
        />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primrycolor-light to-blue-400 mb-6">
                Built for Privacy.
                <br />
                Backed by Expertise.
                <br />
                <span className="text-pri">Enhanced by Innovation.</span>
              </h2>
              <div className="w-20 h-1 bg-blue-500  mb-4 rounded-full"></div>

              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2024, VANHARD LLC specializes in delivering fully
                installed, production-ready systems that our clients own and
                control entirely.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We're not just a managed service. We are your digital
                infrastructure partner, empowering you to maintain complete
                autonomy over your technology stack while ensuring maximum
                security and performance.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primrycolor-dark via-primrycolor-dark to-primrycolor-light rounded-3xl p-8 text-white">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">100%</div>
                    <div className="text-purple-200">Self-Owned</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">24/7</div>
                    <div className="text-purple-200">Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">Zero</div>
                    <div className="text-purple-200">Vendor Lock-in</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">2024</div>
                    <div className="text-purple-200">Founded</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20  text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-primrycolor-light">Core</span> Values
            </h2>
            <div className="w-20 h-1 mb-4 bg-blue-500 mx-auto rounded-full"></div>

            <p className="text-xl text-purple-200">
              Guiding principles that drive everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Privacy First</h3>
              <p className="text-purple-200 leading-relaxed">
                We prioritize your privacy above all else, ensuring your data
                remains under your complete control with no third-party access.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Self-Ownership</h3>
              <p className="text-purple-200 leading-relaxed">
                Complete autonomy over your digital infrastructure with full
                administrative access and control.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Zero Lock-in</h3>
              <p className="text-purple-200 leading-relaxed">
                Open standards and transparent solutions that ensure you're
                never dependent on proprietary systems.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Efficiency</h3>
              <p className="text-purple-200 leading-relaxed">
                Optimized performance and streamlined operations that maximize
                your system's potential.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Performance</h3>
              <p className="text-purple-200 leading-relaxed">
                High-performance systems engineered for reliability, speed, and
                scalability.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Transparency</h3>
              <p className="text-purple-200 leading-relaxed">
                Open standards and clear communication throughout every phase of
                your project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primrycolor-light to-blue-400 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive digital infrastructure solutions tailored to your
              needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 border border-purple-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Private Cloud Workspace
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Secure, scalable file collaboration tools like Nextcloud, fully
                installed on your infrastructure for complete data sovereignty.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Identity & Access Management
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Centralized identity management using standards-based tools such
                as Authentik, LDAP, and OpenID Connect.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Remote Access Gateway
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Deploy Guacamole or similar tools to access internal desktops,
                servers, or files through the browser, anywhere in the world.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Infrastructure Hardening
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Security-focused system configuration, including firewall setup,
                SSH key access, kernel hardening, and system tuning.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Self-Hosted Mail Server
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Deploy Mailcow or Poste.io with anti-spam, webmail, DKIM, SPF,
                and secure IMAP/SMTP support.
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 border border-teal-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Virtual Workspace
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Installations of browser-accessible Linux or Windows VMs for
                secure remote desktop environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-8">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-lg text-purple-100 leading-relaxed">
                To enable businesses and individuals to take ownership of their
                digital environments by delivering secure, high-performance
                systems engineered for privacy and resilience.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-8">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
              <p className="text-lg text-purple-100 leading-relaxed">
                To be the go-to engineering partner for private, independent,
                and self-reliant digital operations across the globe, empowering
                organizations to maintain complete digital sovereignty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 ">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Take Control of Your Digital Infrastructure?
          </h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Let's discuss how VANHARD LLC can help you achieve complete digital
            autonomy with our privacy-first, self-hosted solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              Get Started Today
            </button>
            <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-purple-600 hover:text-white transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
