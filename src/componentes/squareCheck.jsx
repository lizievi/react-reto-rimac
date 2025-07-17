const SquareCheck = () => {
  return (
    <div className="error-container">
      <div
        className="policy-container mt-1 flex gap-[18px] border-none"
        id="policy-container"
      >
        <input
          type="checkbox"
          className="checkbox-small appearance-none w-5 h-5 cursor-pointer relative rounded-[4px] border-[1px] border-[var(--color-borde)] p-[10px]"
          id="policy-content"
        />
        <label
          htmlFor=""
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
    </div>
  );
};

export default SquareCheck;
