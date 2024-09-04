import { BrowserRouter,Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio/inicio";
import Sobre from "./pages/sobre";
import ExercicioUm from "./pages/exercicio-1";

export default function Navegacao (){


    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/Sobre" element={<Sobre/>}/>
                <Route path="/Exercicio01" element={<ExercicioUm/>}/>
            </Routes>
        </BrowserRouter>
    )
}