import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import PaginatedList from './PaginatedList';

import './styles/color.css'
import './styles/common.css'
// import './styles/error.css'
import './styles/seudos.css'

import Header from './componentes/Header.jsx'
import Footer from './componentes/Footer.jsx'
import Home from './pages/Home.jsx';
import Lista from './componentes/Lista.jsx';
// import Otro from './pages/Otro.jsx';


const App = () => {


  return(

    <BrowserRouter>
      <Lista />
      <Header />
      <Routes>
        <Route path="home" element={<Home />} />        
        {/* <Route path="otro" element={<Otro />} />         */}
      </Routes> 
      <Footer />
    </BrowserRouter>
  )
}

export default App


// const ValidarForm = () =>  {
//   const documentType = document.getElementById('document-type')
//   const documentNumber = document.getElementById('document-number')
//   const phone = document.getElementById('phone')
//   const plate = document.getElementById('plate')
//   const polyceCheck = document.getElementById('policy-content')

//   // const documentTypeValue = documentType.value
//   const documentNumberValue = documentNumber.value.trim()
//   const phoneValue = phone.value.trim()
//   const plateValue = plate.value.toUpperCase().trim()
//   // const polyceCheckValue = polyceCheck.checked

  
//   console.log(documentNumberValue, phoneValue, plateValue)
// }

// ValidarForm()
