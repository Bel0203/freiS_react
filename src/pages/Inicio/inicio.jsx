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
                    <Link to={"/exercicio-1"} className="link">
                        <Card cores='orange' titulo="Cupom de desconto" subtitulo="Exercicio 01" />
                    </Link>
                    <Link to={"/Exercicio-2"} className="link">
                        <Card cores='#B3FF37' titulo="Converter Kgs/gramas" subtitulo="Exercicio 02" />
                    </Link>
                    <Link to={"/Exercicio-3"} className="link">
                        <Card cores='#37FFF3' titulo="Valor total por quantidade" subtitulo="Exercicio 03" />
                    </Link>
                    <Link to={"/Exercicio-4"} className="link">
                        <Card cores='#37B7FF' titulo="Leitura de livro" subtitulo="Exercicio 04" />
                    </Link>
                    <Link to={"/Exercicio-5"} className="link">
                        <Card cores='#CB37FF' titulo="Média de notas" subtitulo="Exercicio 05" />
                    </Link>
                    <Link to={"/Exercicio-6"} className="link">
                        <Card cores='#FF5B37' titulo="Salário líquido" subtitulo="Exercicio 06" />
                    </Link>
                    <Link to={"/Exercicio-7"} className="link">
                        <Card cores='#37FFAB' titulo="Cores primárias" subtitulo="Exercicio 07" />
                    </Link>
                    <Link to={"/Exercicio-8"} className="link">
                        <Card cores='#151515' titulo="Temperatura" subtitulo="Exercicio 08" />
                    </Link>
                    <Link to={"/Exercicio-9"} className="link">
                        <Card cores='#D0D0D0' titulo="Sorveteria" subtitulo="Exercicio 09" />
                    </Link>
                    <Link to={"/Exercicio-10"} className="link">
                        <Card cores='#B75333' titulo="Calculo de IMC com histórico" subtitulo="Exercicio 10" />
                    </Link>                    
                    <Link to={"/Exercicio-11"} className="link">
                        <Card cores='#6533B7' titulo="Tabuada" subtitulo="Exercicio 11" />
                    </Link>
                    <Link to={"/Exercicio-12"} className="link">
                        <Card cores='#FFCE37' titulo="Comparador de pessoas" subtitulo="Exercicio 12" />
                    </Link>
                </div>


            </div>


        </div>



    )
}
