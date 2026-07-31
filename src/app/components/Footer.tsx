import { motion } from "motion/react";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/GeneralTammy", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/mayowa-tijjani-35ab0724a/",
      label: "LinkedIn",
    },

    { icon: Mail, href: "mailto:samkorede007@gmail.com", label: "Email" },
  ];

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <motion.div
            className="flex gap-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          <motion.p
            className="text-gray-400 text-center mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Designed & Built by Mayowa
          </motion.p>

          <motion.p
            className="text-gray-500 text-sm text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            © 2026 All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
