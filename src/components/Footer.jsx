import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-900 text-white py-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Información del desarrollador */}
          <motion.div
            className="mb-4 md:mb-0 text-center md:text-left"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold">Miguel Mauricio Delgado Fernández</h2>
            <p className="mt-2 text-gray-400">
            Desarrollador Fullstack | React | Vue | TailwindCSS | Bootstrap | Java | Kotlin | Node.js | Express | MongoDB | Firebase | MySQL | PostgreSQL
            </p>
          </motion.div>

          {/* Redes sociales */}
          <motion.div
            className="flex space-x-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.a
              href="https://github.com/usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-2xl"
              whileHover={{ scale: 1.2, color: "#ffffff" }}
            >
              <FaGithub />
            </motion.a>
            
            <motion.a
              href="https://linkedin.com/in/usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-2xl"
              whileHover={{ scale: 1.2, color: "#0077b5" }}
            >
              <FaLinkedin />
            </motion.a>

            <motion.a
              href="https://twitter.com/usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-2xl"
              whileHover={{ scale: 1.2, color: "#1DA1F2" }}
            >
              <FaTwitter />
            </motion.a>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="mt-8 text-center text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <p>
            &copy; {new Date().getFullYear()} Miguel Mauricio Delgado Fernández. Todos los derechos reservados.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
