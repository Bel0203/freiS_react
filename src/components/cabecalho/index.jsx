import "./styles.scss";
import { Link } from "react-router-dom";

export default function Cabecalho() {

    return (
        <div className="cabecalho">
            <div className="logo">
                <img src="./logo.png" alt="" className="img"/>
                <h3>React FreiS</h3>
            </div>

            <div className="links">
                <Link className="ponto" to="/">Inicio</Link>
                <Link className="ponto" to="/sobre">Sobre</Link>
            </div>
        </div>
    )
}