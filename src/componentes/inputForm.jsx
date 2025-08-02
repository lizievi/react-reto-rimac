const InputForm = ({
  id, 
  type = 'text', 
  name,
  placeholder, 
  className,
  register,
  error,
  validationRules,
  ...rest
}) => {

  return (
    <>
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        {...register(name, validationRules)}
        {...rest}
        className={`element-form h-16 border border-[var(--color-borde)] rounded p-4 leading-[24px] text-[var(--color-secondary-dark)] focus:border-[1px] focus:border-[var(--color-secondary-dark)] focus:outline-none w-full placeholder:text-[var(#a9afd9)] placeholder:text-[10px] ${error ? 'border-red-500' : ''} ${className || ''}`}
        
      />
      {error && (
        <p className="text-red-500 text-xs italic mt-1">{error.message}</p>
      )}    
    </>
  )
};

export default InputForm;
