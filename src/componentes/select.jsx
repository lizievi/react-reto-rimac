import desgloseRed from "../assets/desglose-rojo.png";
const SelectDoc = ({className}) => {
  return (
    <select
      className={`element-form h-16 border border-[var(--color-borde)] rounded p-4 leading-[24px] text-[var(--color-secondary-dark)] rounded-r-none focus:border-[var(--color-secondary-dark)] focus:outline-none ${className || ''}`.trim()}
      name="idperson"
      id="type-document"
    >
      <option value="dni">DNI</option>
      <option value="pasaporte">Pasaporte</option>
    </select>
  );
};

export default SelectDoc;
