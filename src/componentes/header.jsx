import logoRimac from '../assets/logoRimac.svg'
import iconLlamar from '../assets/llamar.png'

const Header = () => {
  return (
    <>
    {/* <div className="fixed w-full h-[56px] content-center bg-[var(--color-background)] mt-20"> */}
      <div className="w-full h-[56px] content-center bg-[var(--color-background)]">
        <div className="w-[82%] mx-auto flex justify-between items-center">
          <img src={logoRimac} alt="logo de Rimac" className="w-[92px] h-[16px]" />
          <div className="flex gap-[6px] items-center">
            <p className="hidden lg:block mr-5 text-[var(--color-secondary)] text-[12px]">¿Tienes alguna duda?</p>
            <img src={iconLlamar} alt="ícono de telefono" className="w-6 h-6" />
            <p className="lg:hidden text-[var(--color-tertiary-light)]">Llámanos</p>
            <p className="hidden lg:block text-[var(--color-tertiary-light)]">(01)411 6001</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
