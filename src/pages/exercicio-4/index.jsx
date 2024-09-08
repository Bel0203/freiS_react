import "./styles.scss"
import Cabecalho from "../../components/cabecalho"
import Titulo from "../../components/titulo"
import Balao from "../../components/balao"
import { useState } from "react";

export default function ExercicioQuatro(){
    const[texto, setTexto] = useState ("")
    const[qtdpaginas, setQtdpaginas] = useState (0)
    const [tempo, setTempo] = useState (0)
    const[horas, setHoras] = useState (0)

    function resultado(){

        let calculo =  qtdpaginas * tempo;
        let conversao = calculo / 3600;
        setHoras(conversao)

    }


    return(

        <div className="tudo4">
            <Cabecalho/>
            <Titulo titulo = "Exercício 04 - Leitura de livro" cor = "#37B7FF"/>

            <Balao descricao = "Implementar um programa em Javascript que calcule o tempo que um livro será lido por uma pessoa a partir do nome do livro, do total de páginas e do tempo em segundos de leitura por página"/>

            <div className="main-content">
                <div className="box">

                    <div className=" input-group">
                        <label htmlFor="Nome do livro"> Nome do livro</label>
                        <input
                          placeholder=""
                          id="Nome do livro"
                          onChange={(e) => setTexto(e.target.value)}
                          type="text" 
                        />

                        <label htmlFor="Total de páginas"> Total de páginas</label>
                        <input
                          placeholder=""
                          id="Total de páginas"
                          onChange={(e) => setQtdpaginas(e.target.value)}
                          type="text" 
                        />

                        
                        <label htmlFor="Tempo em segundos de leitura"> Tempo em segundos de leitura</label>
                        <input
                          placeholder=""
                          id="Tempo em segundos de leitura"
                          onChange={(e) => setTempo(e.target.value)}
                          type="text" 
                        />

                    </div>
                    <button onClick={resultado}>Executar</button>
                </div>
                <p> Você lerá {texto} em {horas.toFixed(2)}horas</p>
            </div>

        </div>
    )
}
