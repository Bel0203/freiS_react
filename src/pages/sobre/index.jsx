import "./styles.scss"
import Cabecalho from "../../components/cabecalho"


export default function Sobre(){

    return(

        <div className="sobre">

            <Cabecalho/>


            <div className="tituloPrimeiro">
                <h3>Sobre</h3>
            </div>

            <div className="texto">
                <p>
                    Bem-vindo à nossa plataforma de exercícios! Aqui, nosso objetivo é
                    ajudar você a aprimorar suas habilidades em Node.js e lógica de
                    programação de forma prática e envolvente. Acreditamos que a prática
                    constante é essencial para o aprendizado e o aperfeiçoamento em
                    tecnologia. Nossa missão é fornecer um ambiente onde você possa
                    praticar e testar seus conhecimentos em Node.js e lógica de
                    programação, permitindo que você avance no seu próprio ritmo e de
                    acordo com suas necessidades.
                </p>

                <p>
                    Seja qual for seu nível de experiência, nossa plataforma é o lugar
                    ideal para você crescer e desenvolver suas habilidades. Estamos
                    ansiosos para ver seu progresso e sucesso!
                </p>
            </div>

            <div className="imagem">
                <img src="./image2.png" alt="" />
            </div>

        </div>
    )
}