import { Link, useNavigate, useLocation } from "react-router-dom";
import { Coverages } from "../componentes/Coverages";
import ButtonPrimary from "../componentes/ButtonPrimary";
import Header from "../componentes/Header";
import useMountEdit from "../Hooks/useMountEdit";
import useFormatCurrency from "../Hooks/useFormatCurrency";
import { useMemo, useState, useCallback, useEffect } from "react";

import { Bs1Circle, Bs2CircleFill } from "react-icons/bs";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";

import IconStolen from "../assets/icon_llanta.svg";
import IconCrash from "../assets/icon_choque.svg";
import IconHit from "../assets/icon_atropello.svg";
import ImageMainDesktop from "../assets/plan-main-desktop.svg";



const initialCoverages = [
  {
    id: "stolenTire",
    icon: IconStolen,
    title: "Llanta robada",
    description:
      "He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que esta en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una piton a un sitio de esos de poner las bicis y mucho mds",
    mountUnit: 15,
    isAdded: true,
  },
  {
    id: "crash",
    icon: IconCrash,
    title: "Choque y/o pasarte la luz roja",
    description:
      "He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que esta en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una piton a un sitio de esos de poner las bicis y mucho mds",
    mountUnit: 20,
    isAdded: false,
  },
  {
    id: "hit",
    icon: IconHit,
    title: "Atropello en la vía Evitamiento",
    description:
      "He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que esta en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una piton a un sitio de esos de poner las bicis y mucho mds",
    mountUnit: 50,
    isAdded: false,
  },
];

const ArmaTuPlan = () => {
  const formatNumberZeroDec = useFormatCurrency();
  const formatNumberTwoDec = useFormatCurrency("en-US", "USD", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const [coverages, setCoverages] = useState(initialCoverages);

  const navigate = useNavigate();
  const location = useLocation();

  const [userName, setUserName] = useState(null);
  const [userEmail, setUserEmail] = useState(null);

  const {numeroDocumento, placa} = location.state || {}

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

        } catch (error) {
          console.error("No se pudo obtener el nombre del usuario:", error);
          setUserName(null);
        }
      };
      
      fetchUserData();
    }
  }, [numeroDocumento]);

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

  const handleConfirmPlan = () => {
    navigate('./Thanks' ,{
      state:{
        montoMensual: totalCoverageMount,
        montoAsegurado: mount,
        email: userEmail,
      }
    })
  }

  return (
    <div>
      <Header className="!bg-white border-b-2 border-[var(--color-secondary-extra-light)]" />
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_4.4fr_3.1fr]">
        <section className="pt-20 hidden lg:block lg:bg-[var(--color-background)]">
          <ol className="ml-[27%]">
            <li className="flex items-center gap-4 text-[var(--color-secondary-light)]">
              <Bs1Circle className="w-[24px] h-[24px]" />
              <Link to="home">Datos</Link>
            </li>
            <div className="h-8 border-dashed border-l ml-3"></div>
            <li className="flex items-center gap-4">
              <Bs2CircleFill className="text-[var(--color-tertiary-light)] w-[24px] h-[24px]" />
              <Link to="plan">Arma tu plan</Link>
            </li>
          </ol>
        </section>

        <section className="pt-20 flex flex-col gap-4">
          <div>
            <ul className="flex items-center gap-3 w-[70%] mx-auto">
              <li className="flex items-center gap-3 text-[var(--color-secondary-light)]">
                <IoChevronBackCircleOutline className="w-[24px] h-[24px] lg:text-[var(--color-primary-dark)] text-[var(--color-secondary-extra-light)]" />
                <Link to="home" className="text-[12px]">
                  <span className="hidden lg:block">VOLVER</span>
                  <span className="block lg:hidden">PASO 2 DE 2</span>
                </Link>
              </li>
              <li className="w-[50%] h-2 rounded bg-[var(--color-tertiary)] lg:hidden"></li>
            </ul>
          </div>

          <div className="bg-[var(--color-background)] lg:bg-transparent">
            <div className="w-[70%] mx-auto">
              <h1 className="text-[40px] hidden lg:block">
                <span className="text-[var(--color-secondary-dark)]">
                  ¡Hola,{` `}
                </span>
                <span className="text-[var(--color-primary)]">{` `}{userName ? `${userName}!` : 'estimad@!'}</span>
              </h1>
              <h1 className="lg:hidden text-[var(--color-secondary-dark)] text-[28px]">
                Mira las coberturas
              </h1>
              <p className="text-[var(--color-secondary)]">
                Conoce las coberturas para tu plan
              </p>
              <div className="flex justify-center  w-full">
                <div className="flex items-center border-3 border-[var(--color-secondary-extra-light)] rounded-[12px] relative h-[172px] mt-[40px] w-full">
                  <div className="w-[44%] ml-[8%]">
                    <p className="text-[12px] text-[var(--color-secondary-light)] ">
                      Placa: {placa ? placa : 'No disponible'}
                    </p>
                    <p className="text-[20px] text-[var(--color-secondary-dark)]">
                      <span>Wolkswagen </span>
                      <span>2019 </span>
                      <span>Golf</span>
                    </p>
                  </div>
                  <img
                    src={ImageMainDesktop}
                    alt="Imagen del perfil de género"
                    className="absolute bottom-[0px] right-[5%] lg:right-[12%]"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex lg:justify-between lg:items-center lg:border-b border-[var(--color-borde)] pt-[30px] pb-[30px] w-[70%]  mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
              <div className="text-[var(--color-secondary-dark)] w-[60%] flex flex-col gap-2">
                <p>Indica la suma asegurada</p>
                <div className="text-[12px] text-[var(--color-secondary)] flex ">
                  <p className="border-r pr-3">MIN $12.500</p>
                  <p className="pl-3">MAX $16.500</p>
                </div>
              </div>
              <div className="flex justify-between items-center lg:w-[40%] border border-[var(--color-borde)] rounded-[8px] p-[16px]">
                <button
                  onClick={MountDecrease}
                  className="text-[var(--color-tertiary-light)] text-4xl w-8"
                >
                  -
                </button>
                <span>{formatNumberZeroDec(mount)}</span>
                <button
                  onClick={MountIncrease}
                  className="text-[var(--color-tertiary-light)] text-2xl w-8"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <h2 className="w-[70%] mx-auto text-[20px] text-[var(--color-secondary-dark)] ">
            Agrega o quita coberturas
          </h2>
          <div>
            <div className="grid grid-cols-[1fr_1fr_1fr] text-[10px] text-center font-bold tracking-[0.8px] border-b border-[var(--color-borde)] text-[var(--color-secondary-dark)] lg:w-[70%] lg:mx-auto">
              <h3 className="p-6 text-[var(--color-primary)] border-b border-[var(--color-primary)]">
                PROTEGE A TU AUTO
              </h3>
              <h3 className="p-6">PROTEGE A LOS QUE TE RODEAN</h3>
              <h3 className="p-6">MEJORA TU PLAN</h3>
            </div>
          </div>

          
          {coverages.map(coverage => {
            const shoulRender = !(coverage.id === 'crash' && mount > 16000);

            if(!shoulRender){
              return null
            }

            return (
              <Coverages
                className="w-[70%] mx-auto"
                key={coverage.id}
                id={coverage.id}
                icon={coverage.icon}
                title={coverage.title}
                description={coverage.description}
                mountUnit={coverage.mountUnit}
                isAdded={coverage.isAdded}
                onToggleAddRemoveBtn={handleToggleCoverage}
              />
            )
          })}
        </section>

        <section className="lg:pt-48">
          <div className="flex w-[70%] mx-auto  py-4 items-center lg:flex-col">
            <div className="text-[var(--color-secondary-dark)] lg:pb-4 lg:border-b border-[var(--color-borde)] w-[70%] text-[12px]">
              <p className="hidden lg:block">MONTO</p>
              <p className="text-[24px] lg:text-[28px]">
                {formatNumberTwoDec(totalCoverageMount)}
              </p>
              <p className="text-[var(--color-secondary)] hidden lg:block">
                mensuales
              </p>
              <p className="text-[var(--color-secondary)] text-[10px] lg:hidden">
                MENSUAL
              </p>
            </div>

            <ul className="hidden lg:flex flex-col gap-3 pt-6 pb-10 w-[70%]">
              <p className="text-[var(--color-secondary-dark)]">
                El precio incluye
              </p>
              <li className="flex items-center gap-4 text-[14px] text-[var(--color-secondary)]">
                <FaCheck className="text-[var(--color-check)] text-[12px]" />
                Llanta de repuesto
              </li>
              <li className="flex items-center gap-4 text-[14px] text-[var(--color-secondary)]">
                <FaCheck className="text-[var(--color-check)] text-[12px]" />
                Analisis de motor
              </li>
              <li className="flex items-center gap-4 text-[14px] text-[var(--color-secondary)]">
                <FaCheck className="text-[var(--color-check)] text-[12px]" />
                Aros gratis
              </li>
            </ul>

            <ButtonPrimary
              value="LO QUIERO"
              className="w-[70%] py-0 lg:py-3 lowercase lg:uppercase"
              onClick = {handleConfirmPlan}
            />
          </div>
        </section>
      </div>
    </div>
  );
};
export default ArmaTuPlan;
