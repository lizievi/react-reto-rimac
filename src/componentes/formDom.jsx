import ButtonPrimary from "./buttonPrimario.jsx";
import SquareCheck from "./squareCheck.jsx";
import InputForm from "./inputForm.jsx";
import SelectDoc from "./select.jsx";

const FormDom = () => {
  return (
    <form className="form-price pt-10 lg:w-[60%]" id="form-price">
      <div className="form__container w-[82%] lg:w-[50%] mx-auto flex flex-col gap-6">
        <h2 className="form-price__h2 text-[24px] text-[var(--color-secondary-dark)] tracking-[-0.2px]">
          Déjanos tus datos
        </h2>
        <div className="form-wrapper flex flex-col flex-wrap gap-4 f-full">
          <div className="numdoc-form flex w-full" id="numdoc-form">
            <SelectDoc className='w-1/3'/>
            <InputForm
              id="document-number"
              type="text"
              placeholder="Nro. de doc"
              name="idperson"
              className="rounded-l-none"
              classNameError='w-2/3'
            />
          </div>
          <InputForm
            id="phone"
            type="tel"
            placeholder="Celular"
            name="idphone"
            className='w-full'
          />
          <InputForm
            id="placa"
            type="text"
            placeholder="Placa"
            name="idplaca"
            className='w-full'
          />
          <SquareCheck />
          <ButtonPrimary value="COTÍZALO" />
        </div>
      </div>
    </form>
  );
};
export default FormDom;
