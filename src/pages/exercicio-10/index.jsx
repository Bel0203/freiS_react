import "./styles.scss"
import Cabecalho from "../../components/cabecalho"
import Titulo from "../../components/titulo"
import Balao from "../../components/balao"
import { useState } from "react"

export default function ExercicioDez(){

    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [informacoes, setInformacoes] = useState([]);
    const [editando, setEditando] = useState(-1);

    function adicionar() {
        let imc = Number(peso) / (Number(altura) * Number(altura));

        if (peso != 0 && altura != 0) {

            if (editando == -1) {
                if (imc <= 18.4) {
                    setInformacoes([...informacoes, `Altura: ${altura} | Peso: ${peso} | Situação: Abaixo do Peso`])
                    setAltura(0);
                    setPeso(0);
                }
                else if (imc >= 18.5 && imc <= 29.9) {
                    setInformacoes([...informacoes,` Altura: ${altura} | Peso: ${peso} | Situação: Peso Normal`])
                    setAltura(0);
                    setPeso(0);
                }
                else {
                    setInformacoes([...informacoes,`Altura: ${altura} | Peso: ${peso} | Situação: Acima do Peso`])
                    setAltura(0);
                    setPeso(0);
                }
            }
            else {

            }
        }
    }
    
    function removerImc(pos) {
        informacoes.splice(pos, 1);
        setInformacoes([...informacoes])
    }
    
    function alterarImc (pos) {
        setAltura(informacoes[pos])
        setPeso(informacoes[pos])
    }
    
    function enter(e) {
        if (e.key == 'Enter') {
            adicionar()
        }
    }

    return(

        <div className="tudo10">

            <Cabecalho/>

            <Titulo titulo = "Exercício 10 - Calculo de IMC com histórico" cor = "#B75333"/>

            <Balao descricao = "Implemente um programa em Javascript que a partir da altura e do peso de uma pessoa, calcule o IMC e avalie a faixa correspondente a tabela ao lado. Ao final, apresente o IMC e a situação"/>
        
            <div className="main-content">
                <div className="box">
                    <div className="input-group2">

                        <label htmlFor="">Altura</label>
                        <input
                            placeholder="0"
                            id="altura"
                            value={altura}
                            onKeyUp={enter}
                            onChange={(e) =>setAltura (e.target.value)}
                            type="text"

                        />
                        <label htmlFor="">Peso</label>
                        <input
                            placeholder="0"
                            id="peso"
                            value={peso}
                            onKeyUp={enter}
                            onChange={(e) =>setPeso (e.target.value)}
                            type="text"

                        />

                    </div>
                    <button onClick={adicionar}>Adicionar</button>
                </div>
            </div>
            <div className='resposta'>
                    <ul>
                        {informacoes.map((item, pos) =>
                            <div className='res'>
                                <li key={pos}>
                                    {item}
                                </li>
                                <img src="./remover.png" alt="" onClick={() => removerImc(pos)} />
                                <img src="./edit.png" alt="" onClick={() => alterarImc(pos)}/>
                            </div>
                        )}
                    </ul>
            </div>
        
        
        
        
        </div>
    )
}