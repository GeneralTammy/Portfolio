import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Briefcase, GraduationCap, Trophy } from "lucide-react";

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const experiences = [
    {
      type: "work",
      title: "Freelance Web Developer",
      company: "Self-Employed",
      period: "2026 - Present",
      description:
        "Building websites and web applications for freelance clients, handling everything from initial design implementation to deployment.",
    },
    {
      type: "work",
      title: "Full-Stack Developer",
      company: "Courtouchmedia",
      period: "2025 - Present",
      description:
        "Working as a full-stack developer, building several web applications end-to-end — from frontend interfaces to backend functionality.",
    },
    {
      type: "education",
      title: "Cortouchmedia",
      company: "Cortouchmedia",
      period: "Mid 2025 - Late 2025",
      description:
        "Completed a 6-month technical training program. Was connected with Courtouchmedia through the program and began working on real client projects before completing the course.",
    },
    {
      type: "education",
      title: "Self-Taught Web Development",
      company: "Online Courses & Personal Projects",
      period: "2025 - Present",
      description:
        "Learned web development fundamentals and modern tools through online resources, building personal projects to practice React, TypeScript, and full-stack concepts.",
    },
    {
      type: "hackathon",
      title: "MLH Fellowship",
      company: "Major League Hacking",
      period: "July 2026",
      description:
        "Selected for the MLH Fellowship, collaborating with other developers on real-world software projects and gaining hands-on experience with modern development workflows.",
    },
    {
      type: "hackathon",
      title: "Midnight Fellowship",
      company: "Midnight",
      period: "July 2026",
      description:
        "Participated in the Midnight Fellowship, working on hands-on projects and building skills alongside a community of developers.",
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 bg-gradient-to-br from-gray-50 to-gray-100"
      ref={ref}
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-4xl mx-auto"
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
              Experience & Education
            </motion.h2>
            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto"
              initial={{ width: 0 }}
              animate={isInView ? { width: 80 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500 via-cyan-500 to-teal-500" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="relative pl-20"
                  initial={{ opacity: 0, x: -30 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
                  }
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  {/* Timeline dot */}
                  <motion.div
                    className="absolute left-5 top-2 w-6 h-6 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 border-4 border-white shadow-lg"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      {exp.type === "work" && (
                        <Briefcase size={12} className="text-white" />
                      )}
                      {exp.type === "education" && (
                        <GraduationCap size={12} className="text-white" />
                      )}
                      {exp.type === "hackathon" && (
                        <Trophy size={12} className="text-white" />
                      )}
                    </div>
                  </motion.div>

                  <motion.div
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-2xl text-gray-900">{exp.title}</h3>
                      <span className="px-3 py-1 bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-700 rounded-full text-sm">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-lg text-teal-600 mb-3">{exp.company}</p>
                    <p className="text-gray-600 leading-relaxed">
                      {exp.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
