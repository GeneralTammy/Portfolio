import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  ExternalLink,
  Github,
  Building2,
  Plane,
  GraduationCap,
  Scale,
} from "lucide-react";

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Estate Management App",
      description:
        "A comprehensive property management platform for landlords and tenants featuring lease tracking, maintenance requests, rent payments, and automated notifications.",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
      icon: Building2,
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/GeneralTammy/Fireisland",
      demo: "https://github.com/GeneralTammy/Fireisland",
    },
    {
      id: 2,
      title: "Online Travel Agent App",
      description:
        "A full-featured travel booking platform with flight/hotel search, itinerary planning, real-time pricing, and secure payment processing.",
      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
      icon: Plane,
      tags: ["Next.js", "TypeScript", "PostgreSQL", "Redis"],
      github: "https://github.com/Ebonybrucetravel/Ebonybrucetravel",
      demo: "https://ebonybrucetravel.vercel.app/",
    },
    {
      id: 3,
      title: "Academy App",
      description:
        "An e-learning platform with course management, video streaming, progress tracking, quizzes, and a student-teacher communication system.",
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
      icon: GraduationCap,
      tags: ["React", "Firebase", "Tailwind", "WebRTC"],
      github: "https://github.com/yourusername/academy-app",
      demo: "https://cortouchmediacademy.vercel.app/",
    },
    {
      id: 4,
      title: "CaseReady",
      description:
        "A legal case management application for attorneys featuring client intake, document organization, case tracking, scheduling, and billing integration.",
      image:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
      icon: Scale,
      tags: ["React", "Node.js", "PostgreSQL", "AWS"],
      github: "https://github.com/yourusername/caseready",
      demo: "https://caseready.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <motion.h2
              className="text-5xl mb-4 text-gray-900"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Featured Projects
            </motion.h2>
            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto"
              initial={{ width: 0 }}
              animate={isInView ? { width: 80 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.id}
                  className="group relative rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="relative h-56 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      initial={{ scale: 1 }}
                      animate={{ scale: hoveredIndex === index ? 1.1 : 1 }}
                      transition={{ duration: 0.4 }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                      initial={{ opacity: 0.6 }}
                      animate={{ opacity: hoveredIndex === index ? 0.9 : 0.6 }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Icon badge */}
                    <div className="absolute top-4 left-4 p-2 bg-white/90 rounded-lg">
                      <Icon size={24} className="text-teal-600" />
                    </div>

                    <motion.div
                      className="absolute top-4 right-4 flex gap-2"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{
                        opacity: hoveredIndex === index ? 1 : 0,
                        y: hoveredIndex === index ? 0 : -10,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} GitHub repository`}
                        className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                      >
                        <Github size={20} className="text-gray-900" />
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} live demo`}
                        className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                      >
                        <ExternalLink size={20} className="text-gray-900" />
                      </a>
                    </motion.div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl mb-3 text-gray-900">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-sm bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-700 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
