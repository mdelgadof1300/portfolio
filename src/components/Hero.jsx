import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      className="relative h-screen flex flex-col items-center justify-center text-white text-center px-6"
      style={{
        backgroundImage:
          "url('https://eu-images.contentstack.com/v3/assets/blt07f68461ccd75245/blt09a2ac83e51a0e06/661ce198092eb8747525079e/programming_20evolution.jpg?width=1280&auto=webp&quality=95&format=jpg&disable=upscale')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Capa oscura para mejorar la legibilidad */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Contenido con animaciones */}
      <motion.div 
        className="relative z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-5xl md:text-5xl font-extrabold leading-tight">
          ¡Hola, soy <span className="text-blue-500">Miguel Mauricio Delgado Fernández</span>!
        </h1>
        <motion.p 
          className="mt-4 text-lg md:text-xl font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Desarrollador Fullstack | React | Vue | TailwindCSS | Bootstrap | JavaScript | Java | Kotlin | Python | Node.js | Express | MongoDB | Firebase | MySQL | PostgreSQL
        </motion.p>
        
        {/* Botón con animación */}
        <motion.button 
          className="mt-6 bg-blue-500 px-6 py-3 rounded-lg text-white text-lg font-medium hover:bg-blue-600 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Ver Mis Proyectos
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Hero;
