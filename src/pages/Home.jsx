import figuraMobil from "../assets/img/img_home_mobile.png";
import figuraDesktop from "../assets/img/img_home_desktop.svg";

import Image from "../componentes/image.jsx";
import Paragraph from "../componentes/Paragraph.jsx";
import SpanTitle from "../componentes/SpanTitle.jsx";
// import FormDom from "../componentes/FormDom.jsx";
import FormDomYup from "../componentes/FormDomYup.jsx";
import Header from "../componentes/Header.jsx";

const Home = () => {

  return (
    <div>
      <Header />
      <main className="main lg:flex">
        <div className={`main__welcome bg-[var(--color-background)] lg:bg-transparent  lg:bg-no-repeat lg:bg-cover lg:bg-center lg:w-[40%] lg:h-[100vh] pt-10`}>
          <div className="welcome__container w-[82%] mx-auto flex h-[308px] lg:h-[80vh] lg:flex-col lg:w-[60%] lg:pt-[50px] lg:mr-[15%]">
            <Image
              src={figuraDesktop}
              alt="Figura de una chica con su aplicativo de Rimac en el celular"
              className="main__image--desktop hidden lg:block"
            />
            <div className="main__information w-[72%] flex flex-col flex-wrap justify-center gap-4  lg:w-full">
              <Paragraph
                className="main__firstparagraph text-[10px] text-[var(--color-secondary-dark)] font-bold tracking-[0.8px] lg:text-[14px]"
                content="¡NUEVO!"
              />
              <h1 className="main__secondparagraph text-[28px] text-[var(--color-secondary-dark)] lg:text-[36px]">
                <SpanTitle content="Seguro " className='main__secondparagraph--firstword' />
                <SpanTitle
                  content="Vehicular "
                  className="main__secondparagraph--secondword lg:text-[var(--color-primary)]"
                />
                <SpanTitle
                  content="Traking "
                  className="main__secondparagraph--thirdword text-[var(--color-primary)]"
                />
              </h1>
              <Paragraph
                className="main__thirdparagraph text-[14px] roboto text-[var(--color-secondary)]"
                content="Cuentanos donde le haras seguimiento a tu seguro"
              />
            </div>
            <Image
              src={figuraMobil}
              alt="Figura de una chica con su aplicativo de Rimac en el celular"
              className="main__image--mobile absolute right-0 top-[98px] lg:hidden"
            />
          </div>
        </div>
        <FormDomYup />
      </main>
    </div>
  );
};
export default Home;
