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
          ¡Hola! <br/>
          Soy desarrollador de software con una fuerte pasión por crear soluciones tecnológicas innovadoras, eficientes y centradas en el usuario. Me especializo en desarrollo web y móvil, utilizando tecnologías modernas como <span className="font-semibold">React, JavaScript, TypeScript, Node.js, Android Studio y Xcode</span> para construir aplicaciones dinámicas, escalables y de alto rendimiento.
        </motion.p>

        <motion.p
          className="text-lg leading-relaxed mb-4"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          Mi enfoque está en diseñar experiencias digitales intuitivas, accesibles y bien optimizadas. Me motiva mantenerme actualizado con las últimas tendencias tecnológicas y aplicar ese conocimiento en proyectos reales que generen impacto.
        </motion.p>

        <motion.p
          className="text-lg leading-relaxed"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
        >
          Fuera del código, disfruto explorar nuevas herramientas, colaborar en proyectos open source y compartir lo que aprendo con la comunidad. Siempre estoy abierto a nuevos retos que me impulsen a seguir creciendo como profesional y aportando valor en el mundo del desarrollo.
        </motion.p>
      </div>
    </div>
  );
};

export default About;
