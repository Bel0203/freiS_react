import "./styles.scss"
import Cabecalho from "../../components/cabecalho";
import Titulo from "../../components/titulo";
import Balao from "../../components/balao";
import { useState } from "react";

export default function ExercicioDois(){
    const [valorKg, setValorKg] = useState(0);
    const [resultado, setResultado] = useState(0);
  
    function converterKgParaGramas() {
      const gramas = valorKg * 1000;
  
      setResultado(gramas);
    }


    return(

        <div className="tudo2">
            <Cabecalho/>
            <Titulo titulo= "Exercício 02 - Converter Kg/gramas" cor = "#B3FF37" />

            <Balao descricao = "Implementar um programa em Javascript para converter kilos em gramas."/>
        

            <div className="main-content">
                <div className="box-cupom">
                    <div className="input-group">
                        <label htmlFor="valor-gramas">Valor em kilos</label>
                        <input
                            placeholder="0"
                            id="valor-gramas"
                            onChange={(e) => setValorKg(e.target.value)}
                            type="text"
                        />
                </div>
                <button onClick={converterKgParaGramas}>Executar</button>
            </div>
            <p>Resultado: O total é {resultado}</p>
        </div>
        
        
        
    </div>


    )
}