import { Link } from "react-router-dom";

import { Bs1Circle } from "react-icons/bs";
import { Bs2CircleFill } from "react-icons/bs";
import { IoChevronBackCircleOutline } from "react-icons/io5";

import ImageMainDesktop from "../assets/plan-main-desktop.svg";
import { Coberturas } from "../componentes/Coberturas";

const ArmaTuPlan = () => {
  return (
    <section>
      <div className="grid grid-cols-[3.4fr_4.1fr_3.1fr]">
        <section className="border bg-pink-100">
          <ol>
            <li className="flex items-center gap-4 text-[var(--color-secondary-light)]">
              <Bs1Circle className="w-[24px] h-[24px]" />
              <Link to="home">Datos</Link>
            </li>
            <div className="h-8 bor-dashed"></div>
            <li className="flex items-center gap-4">
              <Bs2CircleFill className="text-[var(--color-tertiary-light)] w-[24px] h-[24px]" />
              <Link to="plan">Arma tu plan</Link>
            </li>
          </ol>
        </section>

        <section className="bg-blue-100 p-12 flex flex-col gap-4">
          <ul>
            <li className="flex items-center gap-3 text-[var(--color-secondary-light)]">
              <IoChevronBackCircleOutline className="w-[24px] h-[24px] text-[var(--color-primary-dark)]" />
              <Link to="home" className="text-[12px]">
                VOLVER
              </Link>
            </li>
          </ul>

          <div>
            <h1 className="text-[40px]">
              <span className="text-[var(--color-secondary-dark)]">
                ¡Hola,{" "}
              </span>
              <span className="text-[var(--color-primary)]">Juan!</span>
            </h1>
            <p className="text-[var(--color-secondary)]">
              Conoce las coberturas para tu plan
            </p>
          </div>

          <div className="flex items-center border-3 border-[var(--color-secondary-extra-light)] rounded-[12px] relative h-[172px] mt-[40px]">
            <div className="w-[192px] ml-[8%]">
              <p className="text-[12px] text-[var(--color-secondary-light)] ">
                Placa: C2U-114
              </p>
              <p className="text-[20px] text-[var(--color-secondary-dark)]">
                Wolkwagen 2019 Golf
              </p>
            </div>
            <img
              src={ImageMainDesktop}
              alt="Imagen del perfil de género"
              className="absolute bottom-[0px] right-[12%]"
            />
          </div>

          <div className="flex justify-between items-center border-b border-[var(--color-borde)] pt-[50px] pb-[40px] ">
            <div className="text-[var(--color-secondary-dark)] w-[60%]">
              <p>Indica la suma asegurada</p>
              <div className="text-[12px] text-[var(--color-secondary)] flex ">
                <p className="border-r pr-3">MIN $12.500</p>
                <p className="pl-3">MAX $14.300</p>
              </div>
            </div>
            <div className="flex justify-between items-center w-[40%] border border-[var(--color-borde)] rounded-[8px] p-[16px]">
              <span className="text-[var(--color-tertiary-light)] text-4xl">
                -
              </span>
              <span>$16.500</span>
              <span className="text-[var(--color-tertiary-light)] text-2xl">
                +
              </span>
            </div>
          </div>

          <h2 className="text-[20px]">Agrega o quita ciberturas</h2>
          <div className="flex justify-around text-[10px] text-center font-bold tracking-[0.8px] border-b border-[var(--color-borde)]">
            <h3 className="p-7 text-[var(--color-primary)] border-b border-[var(--color-primary)]">
              PROTEGE A TU AUTO
            </h3>
            <h3 className="p-7">PROTEGE A LOS QUE TE RODEAN</h3>
            <h3 className="p-7">MEJORA TU PLAN</h3>
          </div>

          <Coberturas />
        </section>

        <section className="bg-green-100"></section>
      </div>
    </section>
  );
};
export default ArmaTuPlan;
