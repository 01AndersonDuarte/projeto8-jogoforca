import { useState } from "react";

export default function Letras({tentativaLetra, botaoEstado, reiniciarJogo}){
    const letras1 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'];
    const letras2 = ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    return(
        <div className="base-jogo">
            <div className="letras-jogo">
                {letras1.map((l)=><BotaoLetra
                key={l} letra={l} tentativaLetra={tentativaLetra} botaoEstado={botaoEstado} reiniciarJogo={reiniciarJogo}/>)}
            </div>
            <div className="letras-jogo">
                {letras2.map((l)=><BotaoLetra
                key={l} letra={l} tentativaLetra={tentativaLetra} botaoEstado={botaoEstado} reiniciarJogo={reiniciarJogo}/>)}
            </div>
        </div>
    );
}

function BotaoLetra({letra, tentativaLetra, botaoEstado, reiniciarJogo}){
    const [estadoUnico, setEstadoUnico] = useState([false, 0]);
    if(reiniciarJogo>0 && estadoUnico[1]===1){
        setEstadoUnico([false, 0]);
    }
    function desativarBotao(){
        setEstadoUnico([true, 1]);
    }
    return (
        <button onClick={()=>{
            tentativaLetra(letra);
            desativarBotao();
        }} disabled = {botaoEstado ? botaoEstado : estadoUnico[0]}
        className={botaoEstado ? "desabilitado" : (estadoUnico[0] ? "desabilitado" : "")}>{letra}</button>
    );
}