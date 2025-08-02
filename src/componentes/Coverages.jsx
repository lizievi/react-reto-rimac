import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown} from "react-icons/md";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

import useToggleParagraph from "../hooks/useToggleParagraph.js";

export const Coverages = ({id, className, isAdded, icon, title, description, alt='icon', onToggleAddRemoveBtn}) => {

  const [isDown, toggleDown] = useToggleParagraph(false)
  
  return (
    <div>
      <div className={`grid grid-cols-[1.5fr_7.5fr_1fr] pb-6 border-b border-[var(--color-borde)] mb-6 ${className || ''}`}>
        <img src={icon} alt={alt} />
        <div className="flex flex-col gap-3 p-2">
          <p className="text-[20px] text-[var(--color-secondary-dark)]">{title}</p>
          <button 
            onClick={() => onToggleAddRemoveBtn(id, !isAdded)}           
            className="flex items-center gap-2 text-[var(--color-tertiary-light)]"> 
            
            {isAdded ? (
              <CiCircleMinus className="block w-[24px] h-[24px]"/>
            ):(<CiCirclePlus className="block w-[24px] h-[24px]"/>)
            }
            <span className="font-bold text-[12px] tracking-[0.6px]">

              {isAdded ? 'QUITAR' : 'AGREGAR'}
              
            </span>
          </button>
          {isDown && (
            <p className="text-[var(--color-secondary)] text-[14px] !font-[var(--font-secondary)]">{description}</p>
          )}   
          
        </div>
        <button
        onClick={toggleDown}
        className="flex justify-end">
          {isDown ? (
            <MdOutlineKeyboardArrowUp className="text-[30px] text-[var(--color-primary)] " />
          ): (
            <MdOutlineKeyboardArrowDown className="text-[30px] text-[var(--color-primary)] " />
          )}
        </button>
      </div>
    </div>
  );
};


