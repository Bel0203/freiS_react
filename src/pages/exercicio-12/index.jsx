import "./styles.scss"
import Cabecalho from "../../components/cabecalho"
import Titulo from "../../components/titulo"
import Balao from "../../components/balao"
import { useState } from "react"

export default function ExercicioDoze(){

    return(
        <div className="tudo12">
            <Cabecalho/>
            <Titulo titulo = "Exercício 12 - Comparador de pessoas" cor = "#FFCE37"/>
            <Balao descricao = "Implemente um programa em Javascript que leia o nome, a idade, e o sexo de várias pessoas."/>

            
        </div>
    )
}