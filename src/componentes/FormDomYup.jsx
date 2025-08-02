import ButtonPrimary from "./ButtonPrimary.jsx";
import SquareCheck from "./SquareCheck.jsx";
import SelectDoc from "./Select.jsx";
import InputForm from "./InputForm.jsx";
import { useFormLogic } from "../hooks/useFormLogic.js";

const FormDom = () => {

  const {
    register,
    handleSubmit,
    errors,
    onSubmit,
    onError,
    documentTypeOptions,
  } = useFormLogic();

  return (
    <form
      className="form-price pt-10 lg:pt-20 lg:w-[60%]  pb-8"
      id="form-price"
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <div className="form__container w-[82%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%] mx-auto flex flex-col gap-6">
        <h2 className="form-price__h2 text-[24px] text-[var(--color-secondary-dark)] tracking-[-0.2px]">
          Déjanos tus datos
        </h2>
        <div className="form-wrapper flex flex-col flex-wrap gap-4">
          <div className="numdoc-form flex w-full" id="numdoc-form">
            <SelectDoc
              id="documentType"
              name="documentType"
              options={documentTypeOptions}
              register={register}
              className="w-1/3 rounded-r-none"
            />
            <div className="input-error-container w-2/3">
              <InputForm
                id="documentNumber"
                name="documentNumber"
                placeholder="Nro. de doc"
                className="rounded-l-none"
                register={register}
                error={errors.documentNumber}
                
              />
            </div>
          </div>

          <div className="input-error-container">
            <InputForm
              id="phone"
              name="phone"
              type="tel"
              placeholder="Celular"
              className="w-full"
              register={register}
              error={errors.phone}
              
            />
          </div>

          <div className="input-error-container">
            <InputForm
              id="plate"
              name="plate"
              placeholder="Placa"
              className="w-full"
              register={register}
              error={errors.plate}             
            />
          </div>
          <SquareCheck
            id="terms"
            name="terms"
            type="checkbox"
            register={register}
            error={errors.terms}
          />
          <ButtonPrimary
            value="COTÍZALO"
            className="lg:w-[65%]"
          />
        </div>
      </div>
    </form>
  );
};
export default FormDom;
