import "./styles.scss"
import Cabecalho from "../../components/cabecalho"
import Titulo from "../../components/titulo"
import Balao from "../../components/balao"
import { useState } from "react"

export default function ExerccicioOnze(){

    const [numero, setNumero] = useState(0);
    const [tabuada, setTabuada] = useState([]);
  
    function calcularTabuada() {
      let resultado = [];
  
      for (let i = 1; i <= 10; i++) {
        const calculoMontado = `${numero} x ${i} = ${numero * i}`;
  
        resultado.push(calculoMontado);
      }
  
      setTabuada(resultado);
    }

    return(
        <div className="tudo11">
            <Cabecalho/>
            <Titulo titulo = "Exercício 11 - Tabuada" cor= "#6533B7"/>


            <Balao descricao = "Implemente um programa em Javascript que escreva a tabuada de um número informado pelo usuário. A mensagem deve estar no formato ”A x B = X”."/>

            <div className="main-content">
                <div className="box-cupom">
                    <div className="input-group">
                        <label htmlFor="Tabuada do:">Tabuada do:</label>
                        <input
                            placeholder="0"
                            id="Tabuada do:"
                            onChange={(e) =>setNumero (e.target.value)}
                            type="text"
                        />
                    </div>
                    <button onClick={calcularTabuada}>Executar</button>
                </div>

            </div>
            {tabuada.map((value) => (
            <p className="valor-tabuada">{value}</p>
          ))}
        </div>
    )
}