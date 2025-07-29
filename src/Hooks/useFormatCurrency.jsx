const useFormatCurrency = (locale='es-PE', currency='PEN', options={}) => {

  const defaultOptions = {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    ...options,
  }

  const formatCurrency = (num) => {
    return new Intl.NumberFormat(locale, defaultOptions).format(num);
  }

  return formatCurrency;
}

export default useFormatCurrency
