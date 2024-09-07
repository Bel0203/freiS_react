import "./styles.scss"


export default function Balao(Props){
     return(
        <div className="tudo-balao">
            <div className="conteudo-balao">
                <p>{Props.descricao}</p>
            </div>
        </div>
     )
}