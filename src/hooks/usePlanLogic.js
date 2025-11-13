import { useState, useMemo, useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { initialCoverages } from "../data/coverageData.js";
import useMountEdit from "./useMountEdit.js";

export const usePlanLogic = () => {
  const [coverages, setCoverages] = useState(initialCoverages);
  const [userName, setUserName] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [userMarca, setUserMarca] = useState(null);
  const [userAnio, setUserAnio] = useState(null);
  const [userModelo, setUserModelo] = useState(null);

  const location = useLocation();
  const { numeroDocumento, placa } = location.state || {};

  const handleToggleCoverage = useCallback((id, newIsAddedState) => {
      setCoverages((prevCoverages) =>
        prevCoverages.map((coverage) =>
          coverage.id === id
            ? { ...coverage, isAdded: newIsAddedState }
            : coverage
        )
      );
    },
    [setCoverages]
  );

  const { mount, MountIncrease, MountDecrease } = useMountEdit(
    12500,
    16500,
    handleToggleCoverage
  );

  const totalCoverageMount = useMemo(() => {
    return coverages.reduce((sum, coverage) => {
      return sum + (coverage.isAdded ? coverage.mountUnit : 0);
    }, 20);
  }, [coverages]);

  // Lógica para obtener el nombre de usuario
  useEffect(() => {
    if (numeroDocumento) {
      const fetchUserData = async () => {
        try {
          const response = await fetch(`http://localhost:3001/api/users/${numeroDocumento}`);
          const userData = await response.json();
          
          if (!response.ok) {
            throw new Error('Usuario no encontrado');
          }
          
          setUserName(userData.name);
          setUserEmail(userData.email);
          setUserMarca(userData.marca);
          setUserAnio(userData.anio);
          setUserModelo(userData.modelo);

        } catch (error) {
          console.error("No se pudo obtener el nombre del usuario:", error);
          setUserName(null);
        }
      };
      
      fetchUserData();
    }
  }, [numeroDocumento]);

  return {
    coverages,
    totalCoverageMount,
    handleToggleCoverage,
    mount,
    MountIncrease,
    MountDecrease,
    userName,
    userEmail,
    placa,
    userAnio,
    userModelo,
    userMarca,
  };
};