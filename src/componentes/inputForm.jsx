const InputForm = ({id, type, placeholder, name, className, classNameError}) => {
  return (
    <div className={`error-container ${classNameError || ''}`.trim()}>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        name={name}
        className={`
          element-form h-16 border border-[var(--color-borde)] rounded p-4 leading-[24px] text-[var(--color-secondary-dark)] focus:border-[1px] focus:border-[var(--color-secondary-dark)] focus:outline-none w-full placeholder:text-[var(#a9afd9)] placeholder:text-[10px] ${className || ''}   
        `.trim()}
      />
    </div>
  )
};

export default InputForm;
