const InputForm = ({id, type, placeholder, name, className}) => {
  return (
    <div className="error-container">
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        name={name}
        className={`
          element-form h-16 border border-[var(--color-borde)] rounded p-4 leading-[24px] text-[var(--color-secondary-dark)] ${className || ''}   
        `.trim()}
      />
    </div>
  )
};

export default InputForm;
