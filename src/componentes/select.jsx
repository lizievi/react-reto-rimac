const SelectDoc = ({
  id,
  name, 
  className = '',
  options, 
  register,
  validationRules,
  ...rest  
}) => {
  return (
    <select
      id={id}
      {...register(name, validationRules)}
      {...rest}
      className={`element-form h-16 border border-[var(--color-borde)] rounded p-4 leading-[24px] text-[var(--color-secondary-dark)] focus:border-[var(--color-secondary-dark)] focus:outline-none numdoc-form ${className || ''}`}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}

    </select>
  );
};

export default SelectDoc;



