import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/color.css";
import "./styles/common.css";
import "./styles/seudos.css";

import Home from "./pages/Home.jsx";
import ArmaTuPlan from "./pages/ArmaTuPlan.jsx";
import Thanks from "./pages/Thanks.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="armatuplan" element={<ArmaTuPlan />} />
        <Route path="thanks" element={<Thanks />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
