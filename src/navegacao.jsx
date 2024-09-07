import { BrowserRouter,Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio/inicio";
import Sobre from "./pages/sobre";
import ExercicioUm from "./pages/exercicio-1";
import ExercicioDois from "./pages/exercicio-2";
import ExercicioQuatro from "./pages/exercicio-4";
import ExercicioCinco from "./pages/exercicio-5";
import ExercicioDez from "./pages/exercicio-10";
import ExerccicioOnze from "./pages/exercicio-11";

export default function Navegacao (){


    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/Sobre" element={<Sobre/>}/>
                <Route path="/exercicio-1" element={<ExercicioUm/>}/>
                <Route path="/exercicio-2" element={<ExercicioDois/>}/>
                <Route path= "/exercicio-4" element ={<ExercicioQuatro/>}/>
                <Route path="/exercicio-5"  element ={<ExercicioCinco/>}/>
                <Route path="/exercicio-10" element ={<ExercicioDez/>}/>
                <Route path="/exercicio-11" element ={<ExerccicioOnze/>}/>
            </Routes>
        </BrowserRouter>
    )
}