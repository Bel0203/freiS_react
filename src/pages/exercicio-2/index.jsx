import "./styles.scss"
import Cabecalho from "../../components/cabecalho";
import Titulo from "../../components/titulo";
import Balao from "../../components/balao";

export default function ExercicioDois(){

    return(

        <div className="tudo2">
            <Cabecalho/>
            <Titulo titulo= "Exercício 02 - Converter Kg/gramas" cor = "#B3FF37" />

            <Balao descricao = "Implementar um programa em Javascript para converter kilos em gramas."/>
        </div>
    )
}