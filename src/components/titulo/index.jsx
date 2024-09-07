import "./styles.scss"
import { Link } from "react-router-dom";


export default function Titulo(Props){

    return(

        <div className="tudo">
            <div className="conteudo">

                <Link className="link"  to="/">
                    <img src="./setinha.png" className="seta" />
                </Link>

                <h2 className="titulo">{Props.titulo}</h2>
            </div>
            
            <div className="faixa" style={{backgroundColor: Props.cor}}>
               &nbsp;
            </div>

            
        </div>
    )
}
