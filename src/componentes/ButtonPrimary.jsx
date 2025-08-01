const ButtonPrimary = ({type = 'submit', className, value, onClick, ...rest }) => {
  return (
    <button
      className={`button-primary text-white bg-[var(--color-primary)] py-4 rounded-[8px] transition-all duration-300 font-bold tracking-[0.8px] text-[14px] ${className || ''}`}
      type={type}
      onClick={onClick}
      {...rest}
    >
      {value}
    </button>
  );
};
export default ButtonPrimary;
