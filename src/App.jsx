import { Route, Routes } from "react-router-dom"
import { Home } from "./Pages/Home/Home"
import { Garantias } from "./Pages/Garantias/Garantias"
import { Prestamos } from "./Pages/Prestamos/Prestamos"
import { Envios } from "./Pages/Envios/Envios"
function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Garantias" element={<Garantias/>}/>
      <Route path="/Prestamos" element={<Prestamos />}/>
      <Route path="/Envios" element={<Envios />}/>
    </Routes>
  )
}

export default App
