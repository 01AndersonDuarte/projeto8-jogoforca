export default function Jogo({forca, letras, gerarPalavra, fimJogo}){
    return (
        <div className="topo-jogo">
            <div className="imagem-forca">
                <img data-test="game-image" src={forca} alt={forca}/>
            </div>
            <div className="palavra-forca">
                <button data-test="choose-word" onClick={gerarPalavra}>Escolher palavra</button>
                <div data-test="word" className={fimJogo}>{letras}</div>
            </div>
        </div>
    );
}