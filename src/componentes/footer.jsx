const Footer = ({className}) => {
  return (
    <footer className={`hidden lg:block lg:mt-[-40px] ${className || ''}`}>
      <div className="w-[82%] mx-auto">
        <p className="text-[var(--color-secondary-light)] text-3">
          &copy 2021 RIMAC Seguros y Reaseguros
        </p>
      </div>
    </footer>
  );
};

export default Footer;
