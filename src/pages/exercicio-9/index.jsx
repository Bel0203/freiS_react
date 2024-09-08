import "./styles.scss"
import Cabecalho from "../../components/cabecalho"
import Titulo from "../../components/titulo"
import Balao from "../../components/balao"
import { useState } from "react"

export default function ExercicioNove(){

    return(
        <div className="tudo9">
            <Cabecalho/>
            <Titulo titulo = "Exercício 09 - Sorveteria" cor = "#D0D0D0"/>
            <Balao descricao = "Implementar um programa em javascript que calcule o total a se pagar em uma compra na sorveteria, a partir do total de gramas comprado. O preço de 100g é R$ 3,50 mas se o total de gramas for a partir de 1kg, o preço das 100g diminui 50 centavos."/>

            <div className="main-content">
                <div className="box">
                    <div className="input-group">
                        <label htmlFor="Total de gramas">Total de gramas</label>
                        <input
                            placeholder="0"
                            id="Total de gramas"
                            //onChange={(e) =>setNota1 (e.target.value)}
                            type="text"
                        />                        
                    </div>
                    <button>Executar</button>
                </div>
            </div>
        </div>
    )
}