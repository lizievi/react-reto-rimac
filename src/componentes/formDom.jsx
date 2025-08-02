import { useForm } from "react-hook-form";

import ButtonPrimary from "./ButtonPrimary.jsx";
import SquareCheck from "./SquareCheck.jsx";
import SelectDoc from "./Select.jsx";
import InputForm from "./InputForm.jsx";

const FormDom = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      documentType: "dni",
    },
    mode: "onBlur",
  });

  const documentType = watch("documentType");

  const onSubmit = (data) => {
    console.log("Formulario enviado con éxito", data);
    alert(
      "¡Formulario iniciado con éxito! Revisa la consola para ver los datos"
    );
  };

  const onError = (errors) => {
    console.error("Errores de validación:", errors);
    alert("Por favor, corrige los errores del formulario.");
  };

  const documentTypeOptions = [
    { value: "dni", label: "DNI" },
    { value: "pasaporte", label: "Pasaporte" },
  ];

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
                validationRules={{
                  required: "El número de documento es obligatorio",
                  validate: (value) => {
                    if (documentType === "dni") {
                      return (
                        /^\d{8}$/.test(value) ||
                        "El DNI debe tener 8 dígitos numéricos"
                      );
                    } else {
                      return (
                        /^[A-Z0-9]{6,12}$/i.test(value) ||
                        "El pasaporte debe tener entre 6 y 12 caracteres alfanuméricos"
                      );
                    }
                  },
                }}
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
              validationRules={{
                required: "El número de celular es requerido",
                pattern: {
                  value: /^[9]{1}[0-9]{8}$/,
                  message:
                    "El número de celular debe empezar con 9 y tener 9 digitos",
                },
              }}
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
              validationRules={{
                required: "La placa es requerida",
                pattern: {
                  value: /^[a-zA-Z]{3}-[0-9]{3}$/,
                  message: "La placa debe tener el formato AAA-123",
                },
              }}
            />
          </div>
          <SquareCheck
            id="terms"
            name="terms"
            type="checkbox"
            register={register}
            error={errors.terms}
            validationRules={{
              required: "Debes aceptar los términos y condiciones",
            }}
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
