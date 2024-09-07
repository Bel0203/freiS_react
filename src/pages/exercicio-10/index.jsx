import "./styles.scss"
import Cabecalho from "../../components/cabecalho"
import Titulo from "../../components/titulo"
import Balao from "../../components/balao"

export default function ExercicioDez(){

    return(

        <div className="tudo10">

            <Cabecalho/>

            <Titulo titulo = "Exercício 10 - Calculo de IMC com histórico" cor = "#B75333"/>

            <Balao descricao = "Implemente um programa em Javascript que a partir da altura e do peso de uma pessoa, calcule o IMC e avalie a faixa correspondente a tabela ao lado. Ao final, apresente o IMC e a situação"/>
        </div>
    )
}