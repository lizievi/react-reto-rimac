import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";

import IconLlanta from "../assets/icon_llanta.svg";

const Coberturas = ({src}) => {
  return (
    <div>
      <div className="grid grid-cols-[1.5fr_7.5fr_1fr]">
        <img src={IconLlanta} alt="" />
        <div className="flex flex-col gap-3 p-2">
          <p className="text-[20px] text-[var(--color-secondary-dark)]">Llanta robada</p>
          <button className="flex items-center gap-2 text-[var(--color-tertiary-light)]"> 
            <CiCircleMinus className="block w-[24px] h-[24px]"/>
            <span className="font-bold text-[12px] tracking-[0.6px]">
              QUITAR
            </span>
          </button>
          <p className="text-[var(--color-secondary)] text-[14px] !font-[var(--font-secondary)]">He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que esta en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una piton a un sitio de esos de poner las bicis y mucho mds</p>
        </div>
        <button className="flex justify-end"><MdOutlineKeyboardArrowUp className="text-[30px] text-[var(--color-primary)] " /></button>
        
        {/* <MdOutlineKeyboardArrowDown /> */}
      </div>
    </div>
  );
};

export { Coberturas };
