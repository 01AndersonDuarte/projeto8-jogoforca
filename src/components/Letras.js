export default function Letras({tentativaLetra, botaoEstado, letrasUsadas}){
    const letras1 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'];
    const letras2 = ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    return(
        <div className="base-jogo">
            <div className="letras-jogo">
                {letras1.map((l)=><BotaoLetra
                key={l} letra={l} tentativaLetra={tentativaLetra} botaoEstado={botaoEstado} letrasUsadas={letrasUsadas}/>)}
            </div>
            <div className="letras-jogo">
                {letras2.map((l)=><BotaoLetra
                key={l} letra={l} tentativaLetra={tentativaLetra} botaoEstado={botaoEstado} letrasUsadas={letrasUsadas}/>)}
            </div>
        </div>
    );
}

function BotaoLetra({letra, tentativaLetra, botaoEstado, letrasUsadas}){
    return (
        <button onClick={()=>tentativaLetra(letra)} disabled = {letrasUsadas.includes(letra) ? true : botaoEstado}
        className={letrasUsadas.includes(letra) || botaoEstado ? "desabilitado" : ""}>{letra}</button>
    );
}