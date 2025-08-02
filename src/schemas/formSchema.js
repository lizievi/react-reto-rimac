import * as yup from 'yup';

export const formSchema = yup.object().shape({
  documentType: yup
    .string()
    .oneOf(['dni', 'pasaporte']),

  documentNumber: yup
    .string()
    .required("El número de documento es obligatorio")
    .when('documentType', {
      is: 'dni',
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
});