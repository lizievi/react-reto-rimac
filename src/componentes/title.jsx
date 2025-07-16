import SpanTitle from "./spanTitle"

const Title1 = () => {
  return(
    <h1>
      <SpanTitle content='Seguro' className='text-[28px]' />
      <SpanTitle content='Vehicular' className='text-[28px]' />
      <SpanTitle content='Traking' className='text-[var(--color-primary)] text-[28px]'/>
    </h1>
  )
}

export default Title1