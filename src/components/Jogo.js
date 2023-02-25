export default function Jogo({forca, letras, gerarPalavra, fimJogo}){
    return (
        <div className="topo-jogo">
            <div className="imagem-forca">
                <img src={forca} alt={forca}/>
            </div>
            <div className="palavra-forca">
                <button onClick={gerarPalavra}>Escolher palavra</button>
                <div className={fimJogo}>{letras}</div>
            </div>
        </div>
    );
}