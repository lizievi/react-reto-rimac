const SquareCheck = ({
  id, 
  name, 
  register, 
  className,
  error,
  validationRules,
  type,
  ...rest

}) => {
  return (
    <>
      <div
        className="policy-container mt-1 flex gap-[18px] border-none"
        id="policy-container"
      >
        <input
          id={id}
          type={type}
          {...register(name, validationRules)}
          {...rest}          
          className={`checkbox-small appearance-none w-5 h-5 cursor-pointer relative rounded-[4px] border-[1px] border-[var(--color-borde)] p-[10px] ${className || ''}`}
        />
        <label
          htmlFor={id}
          className="txt-policy text-3 text-[var(--color-secondary-light)]"
        >
          <span>Acepto la </span>
          <a
            href="#"
            className="policy-link text-[var(--color-secondary)]  underline"
          >
            Política de Protección de Datos Personales
          </a>
          <span> y los </span>
          <a
            href="#"
            className="policy-link font-inherit text-[var(--color-secondary)] underline"
          >
            Términos y Condiciones
          </a>
        </label>
      </div>
      {error && (
        <p className="text-red-500 text-xs italic mt-1">{error.message}</p>
      )}      
    </>
  );
};

export default SquareCheck;
