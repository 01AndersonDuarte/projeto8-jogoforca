export default function Letras({tentativaLetra}){
    const letras1 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'];
    const letras2 = ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    return(
        <div className="base-jogo">
            <div className="letras-jogo">
                {letras1.map((l)=><BotaoLetra key={l} letra={l} tentativaLetra={tentativaLetra}/>)}
            </div>
            <div className="letras-jogo">
                {letras2.map((l)=><BotaoLetra key={l} letra={l} tentativaLetra={tentativaLetra}/>)}
            </div>
        </div>
    );
}

function BotaoLetra(props){
    return (
        <button onClick={()=>props.tentativaLetra(props.letra)}>{props.letra}</button>
    );
}