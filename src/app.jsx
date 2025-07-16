import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './styles/color.css'
import './styles/common.css'
import './styles/error.css'
import './styles/seudos.css'

import Header from './componentes/header.jsx'
import Footer from './componentes/footer.jsx'
import ButtonPrimary from './componentes/buttonPrimario.jsx'
import SquareCheck from './componentes/squareCheck.jsx'
import InputForm from './componentes/inputForm.jsx'
import SelectDoc from './componentes/select.jsx'
import Title1 from './componentes/title.jsx'

const App = () => {
  return(
    <StrictMode>
      <Header />
      <SelectDoc />
      <Title1 />
      <InputForm id='document-number' type='text' placeholder='Nro. de doc' name='idperson' className='rounded-l-none'/>
      <InputForm id='phone' type='tel' placeholder='Celular' name='idphone'/>
      <InputForm id='placa' type='text' placeholder='Placa' name='idplaca'/>
      <SquareCheck />
      <ButtonPrimary value = 'COTÍZALO'  />
      <Footer />
    </StrictMode>
  )
}

export default App
