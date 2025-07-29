// components/OtroComponente.jsx
import React from 'react';
import useMountEdit from '../Hooks/useMountEdit'; // Importa tu hook
import { FaMinus, FaPlus } from 'react-icons/fa'; // Asumiendo que usas iconos

const OtroComponente = () => {
  // Usa el hook, pasándole los valores min y max que quieres para esta instancia
  const { mount, MountIncrease, MountDecrease } = useMountEdit(1000, 2000); // Ejemplo: min 10000, max 20000

  const formatCurrency = (num) => {
    // Función para formatear el dinero (ajusta según tu moneda y formato local)
    return new Intl.NumberFormat('es-PE', {
      style: 'currency',
      currency: 'PEN', // Por ejemplo, soles peruanos. Cambia a 'USD' si es tu caso
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(num);
  };

  return (
    <div className="flex items-center justify-between p-3 bg-blue-100 rounded-lg shadow-sm w-64">
      <button
        onClick={MountDecrease}
        className="flex items-center justify-center w-8 h-8 rounded-full text-blue-600 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
        aria-label="Decrementar valor"
      >
        <FaMinus />
      </button>

      <span className="text-xl font-semibold text-gray-800 mx-4">
        {formatCurrency(mount)}
      </span>

      <button
        onClick={MountIncrease}
        className="flex items-center justify-center w-8 h-8 rounded-full text-blue-600 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
        aria-label="Incrementar valor"
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default OtroComponente;