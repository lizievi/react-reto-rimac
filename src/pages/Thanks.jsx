import { useLocation } from "react-router-dom";
import ImgTyDesk from "../assets/thanks-desktop.png";
import ImgTyMobile from "../assets/thanks-mobile.svg";
import ButtonPrimary from "../componentes/ButtonPrimary";
import Footer from "../componentes/Footer";
import Header from "../componentes/Header";

const Thanks = () => {
  const location = useLocation();

  const { montoMensual, montoAsegurado, email } = location.state;

  console.log(
    `El monto mensual es: ${montoMensual}, El monto asegurado es: ${montoAsegurado} y el correo es: ${email}`
  );

  if (!email) {
    return (
      <div>
        <h1>Error: No se encontró la dirección de correo electrónico.</h1>
      </div>
    );
  }

  console.log(
    `El monto mensual es: ${montoMensual} y El monto asegurado es: ${montoAsegurado}`
  );

  return (
    <div>
      <Header className="!bg-white border-b-2 border-[var(--color-secondary-extra-light)]" />
      <section className="pt-[56px] grid grid-cols-[1fr_2fr]">
        <img
          src={ImgTyMobile}
          alt="Imágen de agradecimiento"
          className="w-full  max-h-[300px] object-cover lg:hidden"
        />
        <img src={ImgTyDesk} alt="" />
        <div>
          <div>
            <div className="w-[80%] lg:w-[60%] lg:ml-[15%] mx-auto py-10 text-[28px] lg:text-[36px]">
              <h1 className="text-[var(--color-primary)] tracking-[-0.6px] lg:tracking-[-0.2px]">
                ¡Te damos la bienvenida!
                <span className="text-[var(--color-secondary-dark)] block">
                  Cuenta con nosotros para proteger tu vehículo
                </span>
              </h1>
            </div>
          </div>
          <div className="text-[var(--color-secondary)] !font-[var(--font-secondary)]">
            <p className="w-[80%] mx-auto font-light lg:w-[60%] lg:ml-[15%]">
              Enviaremos la confirmación de compra de tu Plan Vehicular Tracking
              a tu correo: {` `}
              <span className="font-bold block">{email}</span>
            </p>
          </div>
          <div className="py-10">
            <ButtonPrimary
              value="CÓMO USAR MI SEGURO"
              className="w-[80%] mx-auto block lg:w-fit lg:px-10 lg:py-6 lg:ml-[15%]"
            />
          </div>
        </div>
      </section>
      <Footer className="lg:hidden" />
    </div>
  );
};

export default Thanks;
