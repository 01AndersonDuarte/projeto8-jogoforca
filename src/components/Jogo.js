// import forca0 from "../assets/forca0.png";

export default function Jogo({forca, letras, gerarPalavra}){
    return (
        <div className="topo-jogo">
            <div className="imagem-forca">
                <img src={forca} alt={forca}/>
            </div>
            <div className="palavra-forca">
                <button onClick={gerarPalavra}>Escolher palavra</button>
                <div>{letras}</div>
            </div>
        </div>
    );
}