import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import ButtonPrimary from "./ButtonPrimario.jsx";
import SquareCheck from "./SquareCheck.jsx";
import SelectDoc from "./Select.jsx";
import InputForm from "./inputForm.jsx";

const schema = yup.object().shape({
  documentType: yup
    .string()
    .oneOf(['dni','pasaporte']),

  documentNumber: yup
    .string()
    .required("El número de documento es obligatorio")
    .when('documentType', {
      is:'dni',
      then: (schema) => schema
        .matches(/^\d{8}$/, 'El DNI debe tener exactamente 8 dígitos numéricos'),
      otherwise: (schema) => schema
        .matches(/^[A-Z0-9]{6,12}$/i, "El pasaporte debe tener entre 6 y 12 caracteres alfanuméricos")
    }),

  phone: yup
    .string()
    .required('El número de celular es requerido')
    .matches(/^[9]{1}[0-9]{8}$/, "El número de celular debe empezar con 9 y tener 9 digitos"),

  plate: yup
    .string()
    .required("La placa es requerida")
    .matches(/^[a-zA-Z]{3}-[0-9]{3}$/, "La placa debe tener el formato AAA-123"),  

  terms: yup
    .boolean()
    .oneOf([true], 'Debe aceptar los términos y condiciones')
})

const FormDom = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      documentType: "dni",
      terms: false,
    },
    mode: "onChange ",
  });

  // const documentType = watch("documentType");

  const onSubmit = (data) => {
    console.log("Formulario enviado con éxito", data);
    alert(
      "¡Formulario eniciado con éxito! Revisa la consola para ver los datos"
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
            type="submit"
          />
        </div>
      </div>
    </form>
  );
};
export default FormDom;
