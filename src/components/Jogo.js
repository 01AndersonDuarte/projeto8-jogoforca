import forca0 from "../assets/forca0.png";

export default function Jogo(){
    return (
        <div className="topo-jogo">
            <div className="imagem-forca">
                <img src={forca0} alt={forca0}/>
            </div>
            <div className="palavra-forca">
                <button>Escolher palavra</button>
                <div>Quantidade de letras da palavra </div>
            </div>
        </div>
    );
}