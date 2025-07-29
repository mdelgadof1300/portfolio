import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });
  return (
    <div className="bg-gray-300 text-gray-900 py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Título con animación */}
        <motion.h2
          ref={ref}
          className="text-4xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
        >
          Sobre Mí
        </motion.h2>

        {/* Párrafos con animación secuencial */}
        <motion.p
          className="text-lg leading-relaxed mb-4"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          ¡Hola! Soy un <span className="font-semibold">desarrollador de software</span> con una pasión por la creación de soluciones innovadoras y eficientes. 
          Me especializo en el desarrollo web y móvil, utilizando tecnologías modernas como <span className="font-semibold">React, JavaScript, TypeScript, Node.js</span>, y frameworks avanzados para construir aplicaciones dinámicas y escalables.
        </motion.p>

        <motion.p
          className="text-lg leading-relaxed mb-4"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          Mi enfoque es crear experiencias digitales fluidas y atractivas, centrándome en la optimización del rendimiento, el diseño intuitivo y la accesibilidad. 
          Me encanta aprender y estar al día con las últimas tendencias en tecnología para ofrecer siempre las mejores soluciones.
        </motion.p>

        <motion.p
          className="text-lg leading-relaxed"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
        >
          Cuando no estoy programando, disfruto explorando nuevas tecnologías, contribuyendo a proyectos open-source y compartiendo conocimiento con la comunidad. 
          Siempre estoy en búsqueda de nuevos desafíos que me ayuden a crecer como profesional y a impactar positivamente en el mundo del desarrollo.
        </motion.p>
      </div>
    </div>
  );
};

export default About;
