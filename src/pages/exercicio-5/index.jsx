import "./styles.scss"
import Cabecalho from "../../components/cabecalho"
import Titulo from "../../components/titulo"
import Balao from "../../components/balao"
import { useState } from "react"

export default function ExercicioCinco(){

    const[nota1,setNota1] = useState (0)
    const[nota2,setNota2] = useState (0)
    const[nota3,setNota3] = useState (0)
    const[resultado,setResultado] = useState (0)


    function Calculo(){
        let soma = (Number(nota1) + Number(nota2) + Number(nota3));
        let resposta = soma/3

        setResultado(resposta)
        if(resposta >= 5){
            <p>O aluno passou?true</p>
        }
        else{
            <p>o aluno passou?false</p>
        }
    }

    return(
        <div className="tudo5">


            <Cabecalho/>
            <Titulo titulo = "Exercício 05 - Média de notas" cor = "#CB37FF"/>

            <Balao descricao = "Implemente um programa em Javascript para verificar se um aluno passou ou não, baseado em 3 notas, considerando que a média mínima para passar é 6."/>

            <div className="main-content">
                <div className="box-cupom">
                    <div className="input-group">
                        <label htmlFor="nota1">Nota 01</label>
                        <input
                            placeholder="0"
                            id="Nota 01"
                            onChange={(e) =>setNota1 (e.target.value)}
                            type="text"
                        />

                        <label htmlFor="nota2">Nota 02</label>
                        <input
                            placeholder="0"
                            id="Nota 02"
                            onChange={(e) =>setNota2 (e.target.value)}
                            type="text"
                        />

                        <label htmlFor="nota3">Nota 03</label>
                        <input
                            placeholder="0"
                            id="Nota 03"
                            onChange={(e) =>setNota3 (e.target.value)}
                            type="text"
                        />
                    </div>
                    <button onClick={Calculo}>Executar</button>
                </div>
                <p>A média do aluno é {resultado}</p>
            </div>
        </div>


    )
}