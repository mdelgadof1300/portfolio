import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Omnibus de México",
    description: "Creación de la actual interfaz de Omnibus de México.",
    link: "https://www.odm.com.mx",
    technologies: ["HTML5", "TailwindCSS", "Bootstrap", "PHP", "PHPmyAdmin", "jQuery", "Google Analytics", "Google Tag Manager"],
    github: "https://github.com/usuario/odm-project",
  },
  {
    title: "Omnibus de México",
    description: "Prototipo de nueva interfaz de Omnibus de México.",
    link: "https://www.odm.com.mx",
    technologies: ["HTML5", "TailwindCSS", "jQuery", "Google Analytics", "Google Tag Manager"],
    github: "https://github.com/usuario/odm-project",
  },
  {
    title: "Envíos ODM",
    description: "Creación de la actual página de Envíos ODM.",
    link: "https://www.odm.com.mx/envios/dist",
    technologies: ["Vue.js", "TailwindCSS", "Node.js", "Firebase", "Python", "Google Analytics", "Google Tag Manager"],
    github: "https://github.com/usuario/envios-odm",
  },
  {
    title: "MyCashless",
    description: "Mantenimiento y creación de librerías multiplataforma con Kotlin.",
    link: "#",
    technologies: ["Java", "Swift", "Kotlin", "Stripe", "SQLDelight", "SQLiteHelper", "Android Studio", "Xcode"],
    github: "https://github.com/usuario/proyecto-3",
  },
  {
    title: "MyCashless",
    description: "Integración de MercadoPago en la terminal de cobros.",
    link: "#",
    technologies: ["Java", "Swift", "MercadoPago", "Stripe", "SQLDelight", "SQLiteHelper", "Android Studio", "Xcode"],
    github: "https://github.com/usuario/proyecto-3",
  },
];

const Projects = () => {
  return (
    <div className="bg-gray-300 py-20">
      <div className="container mx-auto px-4">
        {/* Título con animación */}
        <motion.h2
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Proyectos
        </motion.h2>

        {/* Contenedor de proyectos con animación de aparición */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {projects.map((project, index) => (
            <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ 
              scale: 1.05, 
              transition: { duration: 0.1 },  // Rápido al hacer hover
            }}
            whileTap={{ scale: 0.98 }} // Efecto al hacer clic
            onHoverEnd={(event, info) => {
              event.target.style.transition = "transform 0.05s ease-in-out"; // Reduce el tiempo de salida
            }}
          >
          
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-gray-600">{project.description}</p>

              {/* Etiquetas de Tecnologías */}
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-gray-800">Tecnologías:</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Enlace para ver más */}
              <a
                href={project.link}
                className="mt-4 inline-block text-blue-500 hover:underline"
              >
                Ver más
              </a>

              {/* Footer con ícono de GitHub */}
              <footer className="mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 flex items-center"
                >
                  <FaGithub className="mr-2" />
                  <span>Código en GitHub</span>
                </a>
              </footer>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
