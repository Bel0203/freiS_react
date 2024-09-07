import "./styles.scss"
import Cabecalho from "../../components/cabecalho"
import Titulo from "../../components/titulo"
import Balao from "../../components/balao"

export default function ExercicioCinco(){


    return(
        <div className="tudo5">


            <Cabecalho/>
            <Titulo titulo = "Exercício 05 - Média de notas" cor = "#CB37FF"/>

            <Balao descricao = "Implemente um programa em Javascript para verificar se um aluno passou ou não, baseado em 3 notas, considerando que a média mínima para passar é 6."/>

        </div>


    )
}