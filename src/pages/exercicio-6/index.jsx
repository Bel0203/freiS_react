import "./styles.scss"
import Cabecalho from "../../components/cabecalho"
import Titulo from "../../components/titulo"
import Balao from "../../components/balao"
import { useState } from "react"


export default function ExercicioSeis(){

    const[valorBS, setValorBS] = useState(0)
    const[porcentagem, setPorcentagem] = useState (0)
    const[desconto, setDesconto] = useState(0)
    const[resultado, setResultado] = useState(0)

    function Calculo(){
        let conta = Number(porcentagem)/100;
        let conta2 = Number(valorBS) * conta;
        let conta3 = conta2 - Number(desconto)


        setResultado(conta3)
    }

    return(
        <div className="tudo6">
            <Cabecalho/>
            <Titulo titulo = "Exercício 06 - Salário líquido" cor = "#FF5B37"/>

            <Balao descricao = "Implemente um programa em javascript para calcular o salário líquido de um funcionário, a partir de seu salário base, do bônus mensal em porcentagem e do total de descontos em reais"/>

            <div className="main-content">
                <div className="box">
                    <div className="input-group">
                        <label htmlFor="Salário base">Salário base</label>
                        <input
                            placeholder="0"
                            id="Salário base"
                            onChange={(e) =>setValorBS (e.target.value)}
                            type="text"
                        />

                         <label htmlFor="Bônus mensal em porcentagem">Bônus mensal em porcentagem</label>
                        <input
                            placeholder="0"
                            id="Bônus mensal em porcentagem"
                            onChange={(e) =>setPorcentagem (e.target.value)}
                            type="text"
                        />

                        <label htmlFor="Total de descontos">Total de descontos</label>
                        <input
                            placeholder="0"
                            id="Total de descontos"
                            onChange={(e) =>setDesconto (e.target.value)}
                            type="text"
                        />
                    </div>
                    <button onClick={Calculo}>Executar</button>
                </div>
                <p>Seu salário líquido é de R$ {resultado}</p>
            </div>
        </div>
    )
}