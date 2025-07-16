const ButtonPrimary = ({value}) => {
  return (
    <button className="button-primary text-white bg-[var(--color-primary)] py-5 px-15 rounded-[8px] transition-all duration-300 font-bold tracking-[0.8px] text-[14px]" type="submit">{value}</button>
  )
}
export default ButtonPrimary