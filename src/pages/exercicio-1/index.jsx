import "./styles.scss";
import Cabecalho from "../../components/cabecalho";
import Titulo from "../../components/titulo";
import Balao from "../../components/balao";
import { useState } from "react";

export default function ExercicioUm(){

    const [valorPedido, setValorPedido] = useState(0);
    const [valorCupom, setValorCupom] = useState(0);
    const [total, setTotal] = useState(0);
  
    function calcularTotal() {
      const totalPedido = valorPedido - valorCupom;
      setTotal(totalPedido);
    }

    return(


        <div className="exercicio1">
            <Cabecalho/>
            <Titulo titulo= "Exercício 01 - Cupom de desconto" cor = "#FFCE37"/>
            
            <Balao descricao ="Implementar um programa em Javascript para calcular o valor final de uma compra a partir do valor da compra e do cupom de desconto. O cupom diz quantos reais terá de desconto."/>


         
            <div className="main-content">
                <div className="box">
                 <div className="input-group">
                     <label htmlFor="valor-pedido">Informe o valor do pedido</label>
                        <input
                        placeholder="0"
                        id="valor-pedido"
                        onChange={(e) => setValorPedido(e.target.value)}
                        value={valorPedido}
                        type="text"
                        />
                </div>

                <div className="input-group">
                    <label htmlFor="valor-pedido">Informe o valor do cupom</label>
                    <input
                        placeholder="0"
                        onChange={(e) => setValorCupom(e.target.value)}
                        value={valorCupom}
                        id="valor-pedido"
                        type="text"
                    />
                </div>

                <button onClick={calcularTotal}>Executar</button>
          </div>
          <p>Resultado: O total é R$ {total.toFixed(2)}</p>
          </div>
            

        </div>
    )
}