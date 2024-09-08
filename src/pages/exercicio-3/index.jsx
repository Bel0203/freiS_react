import "./styles.scss"
import Cabecalho from "../../components/cabecalho"
import Titulo from "../../components/titulo"
import Balao from "../../components/balao"
import { useState } from "react"



export default function ExercicioTres(){

    return(
        <div className="tudo3">
            <Cabecalho/>
            <Titulo titulo = "Exercício 03 - Valor total por quantidade" cor = "#37FFF3"/>
            <Balao descricao = "Implementar um programa em Javascript para calcular o total de uma venda de açaí a partir das quantidades compradas para cada tamanho: pequeno, médio e grande, sabendo que o valor do açaí é R$ 13,50; R$ 15,00 e R$ 17,50 respectivamente"/>

            <div className="main-content">
                <div className="box">
                    <div className="input-group2">
                        <label htmlFor="Quantidade pequeno">Quantidade pequeno</label>
                        <input
                            placeholder="0"
                            id="Quantidade pequeno"
                           // onChange={(e) =>setNota1 (e.target.value)}
                            type="text"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}