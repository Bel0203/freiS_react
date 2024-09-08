import "./styles.scss"
import Cabecalho from "../../components/cabecalho"
import Titulo from "../../components/titulo"
import Balao from "../../components/balao"
import { useState } from "react"

export default function ExercicioDez(){

    const[novalinha, setNovalinha]= useState('');
    const[listalinhas,setListalinhas]= useState([]);
    const[editando, setEditando]= useState(-1);

    function AdicionarLinha(){

        if(novalinha != ''){

            if(editando == -1){
            setListalinhas([...listalinhas,novalinha]);
            setNovalinha('');
            }
            else{
                listalinhas[editando]= novalinha;
                setListalinhas([...listalinhas]);
            }
        }
    }

    function teclaApertada(e){
        if(e.key == 'Enter'){
            AdicionarLinha();
        }
    }

    function RemoverLinha(pos){
        listalinhas.splice(pos,1);
        setListalinhas([...listalinhas]);
    }

    function AlterarLinha(pos){
        setNovalinha(listalinhas[pos]);
        setEditando(pos);
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
                            onKeyUp={teclaApertada} value={novalinha}
                            onChange={(e) =>setNovalinha (e.target.value)}
                            type="text"
                        />
                        <label htmlFor="">Peso</label>
                        <input
                            placeholder="0"
                            id="Peso"
                            onKeyUp={teclaApertada} value={novalinha}
                            onChange={(e) =>setNovalinha (e.target.value)}
                            type="text"
                        />

                    </div>
                    <button onClick={AdicionarLinha}>Adicionar</button>
                </div>
            </div>
        
        
        
        
        
        </div>
    )
}