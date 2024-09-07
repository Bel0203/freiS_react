import "./styles.scss"
import Cabecalho from "../../components/cabecalho"
import Titulo from "../../components/titulo"
import Balao from "../../components/balao"

export default function ExerccicioOnze(){


    return(
        <div className="tudo11">
            <Cabecalho/>
            <Titulo titulo = "Exercício 11 - Tabuada" cor= "#6533B7"/>


        <Balao descricao = "Implemente um programa em Javascript que escreva a tabuada de um número informado pelo usuário. A mensagem deve estar no formato ”A x B = X”."/>
        </div>
    )
}