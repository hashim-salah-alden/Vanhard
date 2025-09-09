"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TechBackground from "../tech-background";

gsap.registerPlugin(ScrollTrigger);

const ProcessWorkflow = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const steps = [
    {
      number: "01",
      title: "Client Provides Infrastructure",
      description: "Client provides server, VM, or cloud instance",
    },
    {
      number: "02",
      title: "Installation & Configuration",
      description: "VANHARD installs and configures the services as needed",
    },
    {
      number: "03",
      title: "Hardening & Testing",
      description: "Systems are hardened, documented, and tested",
    },
    {
      number: "04",
      title: "Documentation Delivery",
      description: "Credentials and documentation are delivered to the client",
    },
    {
      number: "05",
      title: "Post-Installation Support",
      description: "Two revisions are included post-installation",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate container
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate steps
      stepsRef.current.forEach((step, index) => {
        if (step) {
          gsap.fromTo(
            step,
            { opacity: 0, y: 30, scale: 0.95 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              delay: index * 0.2,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: step,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-8 md:py-24 bg-[#171717] relative  border-t-4 border-primrycolor-light "
    >
      <TechBackground
        density={0.8}
        opacity={0.65}
        color="#005b95"
        className="z-20"
      />
      <div className=" mx-auto px-4 sm:px-6">
        <div ref={containerRef} className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">
              Process Workflow
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="flex flex-col gap-6 md:gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) stepsRef.current[index] = el;
                }}
                className="group"
              >
                <div className="bg-gradient-to-r from-primrycolor-dark to-primrycolor-light text-slate-200 rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-500/30">
                  <div className="flex flex-col sm:flex-row items-start gap-5 md:gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl md:text-2xl shadow-md">
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl text-white font-semibold mb-3 group-hover:text-blue-300 transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-slate-200 text-base md:text-lg leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessWorkflow;
