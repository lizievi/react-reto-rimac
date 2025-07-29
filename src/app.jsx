import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles/color.css'
import './styles/common.css'
import './styles/seudos.css'

import Header from './componentes/Header.jsx'
import Footer from './componentes/Footer.jsx'
import Home from './pages/Home.jsx';
import ArmaTuPlan from './pages/ArmaTuPlan.jsx';
import Plan from './pages/Plan.jsx';
import Thanks from './pages/Thanks.jsx';


const App = () => {


  return(

    <BrowserRouter>
      
      
      <Routes>
        <Route path="" element={<Home />} />        
        <Route path="armatuplan" element={<ArmaTuPlan />} />        
        <Route path="gracias" element={<Thanks />} />        
        <Route path="plan" element={<Plan />} />        
      </Routes> 
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App


