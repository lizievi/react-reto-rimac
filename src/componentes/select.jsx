const SelectDoc = () => {
  return(
  <select
    className="element-form h-16 border border-[var(--color-borde)] rounded p-4 leading-[24px] text-[var(--color-secondary-dark)] rounded-r-none"
    name="idperson"
    id="type-document"
  >
    <option value="dni">DNI</option>
    <option value="pasaporte">Pasaporte</option>
  </select>
  )
}

export default SelectDoc