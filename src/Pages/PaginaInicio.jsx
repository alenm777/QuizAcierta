import React from 'react';
import CategoriaLista from '../Components/CategoriaLista';
import { motion } from 'framer-motion'; // Para animaciones

const PaginaInicio = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-r from-teal-100 to-blue-200 p-5">
      
      {/* Banner animado */}
      <motion.h1 
        className="text-5xl font-extrabold text-teal-900 text-center mt-10"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        ¡Bienvenido a QuizAcierta!
      </motion.h1>

      {/* Subtítulo */}
      <motion.p
        className="text-lg text-teal-800 mt-3 text-center max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Pon a prueba tus conocimientos en historia, ciencia, deportes y más. 
        Selecciona una categoría para empezar a jugar.
      </motion.p>

      {/* Reglas rápidas */}
      <motion.div
        className="bg-white bg-opacity-80 rounded-lg p-4 mt-6 max-w-md text-center shadow-md"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <h2 className="font-bold text-teal-900 mb-2">Reglas rápidas</h2>
        <ul className="list-disc list-inside text-teal-800 text-sm">
          <li>Elige una categoría.</li>
          <li>Responde correctamente la mayor cantidad de preguntas.</li>
          <li>Al finalizar, verás tu puntuación y podrás intentarlo de nuevo.</li>
        </ul>
      </motion.div>

      {/* Lista de categorías con animación */}
      <motion.div
        className="w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
      >
        <CategoriaLista />
      </motion.div>

    </div>
  );
};

export default PaginaInicio;