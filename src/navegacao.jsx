import { BrowserRouter,Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio/inicio";
import Sobre from "./pages/sobre";
import ExercicioUm from "./pages/exercicio-1";
import ExercicioDois from "./pages/exercicio-2";
import ExercicioTres from "./pages/exercicio-3";
import ExercicioQuatro from "./pages/exercicio-4";
import ExercicioCinco from "./pages/exercicio-5";
import ExercicioSeis from "./pages/exercicio-6";
import ExercicioSete from "./pages/exercicio-7";
import ExercicioOito from "./pages/exercicio-8";
import ExercicioDez from "./pages/exercicio-10";
import ExercicioNove from "./pages/exercicio-9";
import ExerccicioOnze from "./pages/exercicio-11";
import ExercicioDoze from "./pages/exercicio-12";

export default function Navegacao (){


    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/Sobre" element={<Sobre/>}/>
                <Route path="/exercicio-1" element={<ExercicioUm/>}/>
                <Route path="/exercicio-2" element={<ExercicioDois/>}/>
                <Route path="/exercicio-3" element={<ExercicioTres/>}/>
                <Route path= "/exercicio-4" element ={<ExercicioQuatro/>}/>
                <Route path="/exercicio-5"  element ={<ExercicioCinco/>}/>
                <Route path="/exercicio-6" element={<ExercicioSeis/>}/>
                <Route path="/exercicio-7" element ={<ExercicioSete/>}/>
                <Route path="/exercicio-8" element={<ExercicioOito/>}/>
                <Route path="/exercicio-9" element={<ExercicioNove/>}/>
                <Route path="/exercicio-10" element ={<ExercicioDez/>}/>
                <Route path="/exercicio-11" element ={<ExerccicioOnze/>}/>
                <Route path="/exercicio-12" element={<ExercicioDoze/>}/>
            </Routes>
        </BrowserRouter>
    )
}