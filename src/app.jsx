import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './styles/color.css'
import './styles/common.css'
import './styles/error.css'
import './styles/seudos.css'

import Header from './componentes/header.jsx'
import Footer from './componentes/footer.jsx'
import MainDom from './componentes/mainDom.jsx'

const App = () => {
  return(
    <StrictMode>
      <Header />
      <MainDom />
      <Footer />
    </StrictMode>
  )
}

export default App
