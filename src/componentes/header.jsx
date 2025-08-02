import logoRimac from "../assets/img/img_logo_rimac.svg";
import iconPhone from "../assets/icons/icon_phone.png";

const Header = ({className}) => {
  return (
    <header className={`fixed w-full h-[56px] content-center bg-[var(--color-background)] lg:bg-transparent z-1 ${className || ''}`}>
      <div className="w-[82%] mx-auto flex justify-between items-center">
        <img
          src={logoRimac}
          alt="logo de Rimac"
          className="w-[92px] h-[16px]"
        />
        <div className="flex gap-[6px] items-center">
          <p className="hidden lg:block lg:mr-5 lg:text-[var(--color-secondary)] lg:text-[12px]">
            ¿Tienes alguna duda?
          </p>
          <img src={iconPhone} alt="ícono de telefono" className="w-6 h-6" />
          <p className="lg:hidden text-[var(--color-tertiary-light)]">
            Llámanos
          </p>
          <p className="hidden lg:block lg:text-[var(--color-tertiary-light)]">
            (01) 411 6001
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
