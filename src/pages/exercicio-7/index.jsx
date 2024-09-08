import "./styles.scss"
import Cabecalho from "../../components/cabecalho"
import Titulo from "../../components/titulo"
import Balao from "../../components/balao"
import { useState } from "react"


export default function ExercicioSete(){


    const[cor1, setCor1] = useState ("")
    const[cor2, setCor2] = useState ("")
    const[resposta,setResposta] = useState("false")


    function Primaria(){
        
        
    }

    return(

        <div className="tudo7">
            <Cabecalho/>
            <Titulo titulo = "Exercício 07 - Cores primárias" cor = "#37FFAB"/>
            <Balao descricao = "Implementar um programa em javascript para verificar se duas cores são primárias"/>


            <div className="main-content">
                <div className="box">
                    <div className="input-group">
                        <label htmlFor="Cor 1">Cor 1</label>
                        <input
                            placeholder=""
                            id="Cor01"
                            onChange={(e) =>setCor1(e.target.value)}
                            type="text"
                        />
                        <label htmlFor="Cor 2">Cor 2</label>
                        <input
                            placeholder=""
                            id="Cor02"
                            onChange={(e) =>setCor2(e.target.value)}
                            type="text"
                        />
                    </div>
                    <button onClick={Primaria}>Executar</button>
                </div>
                <h3>As cores são primarias?{resposta}</h3>
            </div>
        </div>
)
}