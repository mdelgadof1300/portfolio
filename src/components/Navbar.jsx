import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // Cierra el menú después de hacer clic en un enlace
  };

  // Función para cerrar el menú cuando se hace clic fuera de él
  const handleClickOutside = (e) => {
    if (isOpen && !e.target.closest(".navbar")) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Agrega el evento para detectar clics en el documento
    document.addEventListener("click", handleClickOutside);
    return () => {
      // Elimina el evento cuando el componente se desmonta
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="navbar bg-gray-900 text-white fixed w-full z-10">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="text-2xl font-bold">Mi Portafolio</div>

        {/* Menú en escritorio */}
        <div className="hidden md:flex space-x-6">
          <button onClick={() => scrollToSection("hero")} className="hover:text-blue-400">
            Inicio
          </button>
          <button onClick={() => scrollToSection("about")} className="hover:text-blue-400">
            Sobre Mí
          </button>
          <button onClick={() => scrollToSection("projects")} className="hover:text-blue-400">
            Proyectos
          </button>
          <button onClick={() => scrollToSection("contact")} className="hover:text-blue-400">
            Contacto
          </button>
        </div>

        {/* Icono del menú hamburguesa */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menú desplegable móvil */}
      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <button
            onClick={() => scrollToSection("hero")}
            className="block w-full text-left px-4 py-2 hover:bg-gray-700"
          >
            Inicio
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="block w-full text-left px-4 py-2 hover:bg-gray-700"
          >
            Sobre Mí
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="block w-full text-left px-4 py-2 hover:bg-gray-700"
          >
            Proyectos
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="block w-full text-left px-4 py-2 hover:bg-gray-700"
          >
            Contacto
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
