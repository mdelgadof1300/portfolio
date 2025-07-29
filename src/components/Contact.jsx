import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="bg-gray-800 text-white py-20">
      <div className="container mx-auto px-4 max-w-lg">
        
        {/* Título con animación */}
        <motion.h2
          className="text-4xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Contacto
        </motion.h2>

        {/* Subtítulo con animación */}
        <motion.p
          className="text-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          ¿Interesado en trabajar juntos? ¡Contáctame!
        </motion.p>

        {/* Formulario con animación */}
        <motion.form
          className="mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Input Nombre */}
          <motion.input
            type="text"
            placeholder="Tu nombre"
            className="w-full p-3 rounded-md mb-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            whileFocus={{ scale: 1.02 }}
          />

          {/* Input Correo */}
          <motion.input
            type="email"
            placeholder="Tu correo"
            className="w-full p-3 rounded-md mb-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            whileFocus={{ scale: 1.02 }}
          />

          {/* Área de Mensaje */}
          <motion.textarea
            placeholder="Tu mensaje"
            className="w-full p-3 rounded-md mb-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            rows="5"
            whileFocus={{ scale: 1.02 }}
          ></motion.textarea>

          {/* Botón Enviar */}
          <motion.button
            type="submit"
            className="bg-blue-500 px-6 py-3 rounded-lg text-white hover:bg-blue-600 w-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            Enviar
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
