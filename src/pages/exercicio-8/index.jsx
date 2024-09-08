import "./styles.scss"
import Cabecalho from "../../components/cabecalho"
import Titulo from "../../components/titulo"
import Balao from "../../components/balao"
import { useState } from "react"

export default function ExercicioOito(){

    return(
        <div className="tudo8">
            <Cabecalho/>
            <Titulo titulo = "Exercício 08 - Temperatura" cor = "#151515"/>
            <Balao descricao = "Implementar um programa em javascript que a partir da temperatura, avalie a situação da pessoa conforme a tabela. Ao final, apresente a classificação"/>

            <img className="img2" src="./imc.png" alt="" />


            <div className="main-content">
                <div className="box">
                    <div className="input-group">
                        <label htmlFor="Temperatura ">Temperatura </label>
                        <input
                            placeholder="0"
                            id="Temperatura "
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