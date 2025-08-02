import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from "react-router-dom";
import { formSchema } from "../schemas/formSchema";

export const useFormLogic = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      documentType: "dni",
      terms: false,
    },
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log("Formulario enviado con éxito", data);

    navigate('/armatuplan',{
      state:{
        tipoDocumento: data.documentType,
        numeroDocumento: data.documentNumber,
        celular: data.phone,
        placa: data.plate,
      }
    });
  };

  const onError = (errors) => {
    console.error("Errores de validación:", errors);
  };

  const documentTypeOptions = [
    { value: "dni", label: "DNI" },
    { value: "pasaporte", label: "Pasaporte" },
  ];

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    onError,
    documentTypeOptions,
  };
};