import "./styles.scss"
import Cabecalho from "../../components/cabecalho"
import Titulo from "../../components/titulo"
import Balao from "../../components/balao"

export default function ExercicioQuatro(){

    return(

        <div className="tudo4">
            <Cabecalho/>
            <Titulo titulo = "Exercício 04 - Leitura de livro" cor = "#37B7FF"/>

            <Balao descricao = "Implementar um programa em Javascript que calcule o tempo que um livro será lido por uma pessoa a partir do nome do livro, do total de páginas e do tempo em segundos de leitura por página"/>
        </div>
    )
}
