import "./styles.scss";
import Cabecalho from "../../components/cabecalho";
import { Link } from "react-router-dom";
import Card from "../../components/card";


export default function Inicio() {
    return (
        <div className="inicio">
            <Cabecalho />

            <div className="tituloPrimeiro">
                <h3>Escolha um treino...</h3>
            </div>

            <div className="treinos">
                <div className="cards">
                    <Link to={"/Exercicio-1"} className="link">
                        <Card cores='orange' titulo="Cupom de desconto" subtitulo="Exercicio 01" />
                    </Link>
                    <Link to={"/Exercicio-2"} className="link">
                        <Card cores='#B3FF37' titulo="Converter Kgs/gramas" subtitulo="Exercicio 02" />
                    </Link>
                    <Link to={"/Exercicio-3"} className="link">
                        <Card cores='#37FFF3' titulo="Converter Kgs/gramas" subtitulo="Exercicio 03" />
                    </Link>
                    <Link to={"/Exercicio-4"} className="link">
                        <Card cores='#37B7FF' titulo="Converter Kgs/gramas" subtitulo="Exercicio 04" />
                    </Link>
                    <Link to={"/Exercicio-5"} className="link">
                        <Card cores='#CB37FF' titulo="Converter Kgs/gramas" subtitulo="Exercicio 05" />
                    </Link>
                    <Link to={"/Exercicio-10"} className="link">
                        <Card cores='#B75333' titulo="Converter Kgs/gramas" subtitulo="Exercicio 10" />
                    </Link>                    
                    <Link to={"/Exercicio-11"} className="link">
                        <Card cores='#6533B7' titulo="Converter Kgs/gramas" subtitulo="Exercicio 11" />
                    </Link>
                </div>


            </div>


        </div>



    )
}
