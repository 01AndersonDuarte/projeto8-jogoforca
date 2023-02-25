import Jogo from "./Jogo";
import Letras from "./Letras";
import palavras from "./palavras";

import { useState } from "react";

import forca0 from "../assets/forca0.png";
import forca1 from "../assets/forca1.png";
import forca2 from "../assets/forca2.png";
import forca3 from "../assets/forca3.png";
import forca4 from "../assets/forca4.png";
import forca5 from "../assets/forca5.png";
import forca6 from "../assets/forca6.png";


export default function App() {
  const forcas = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];
  const [forca, setForca] = useState(forcas[0]);
  const [erro, setErro] = useState(1);
  const [acerto, setAcerto] = useState(0);

  const [letras, setLetras] = useState("");
  const [palavraGerada, setPalavraGerada] = useState("");

  const [botaoEstado, setBotaoEstado] = useState(true);
  const [fimJogo, setFimJogo] = useState("");
  const [reiniciarJogo, setReiniciarJogo] = useState(0);

  function gerarPalavra(){
    setReiniciarJogo(1);
    let indice = Math.floor(Math.random() * (palavras.length-1));
    setPalavraGerada(palavras[indice]);
    console.log(palavras[indice]);
    let espacos=[];
    for(let i=0; i<palavras[indice].length; i++){
      espacos.push("_");
    }
    setLetras(espacos.join(' '));
    setBotaoEstado(false);
    setForca(forcas[0]);
    setErro(1);
    setAcerto(0)
    setFimJogo("");
    if(botaoEstado){
      setReiniciarJogo(0);
    }
  }
  function tentativaLetra(letra){
    setReiniciarJogo(0);
    let espacos=letras.split(' ');
    let acertou=0;

    for(let i=0; i<palavraGerada.length; i++){
      if(letra===palavraGerada[i].toUpperCase()){
        acertou++;
        espacos[i]=palavraGerada[i];
      }
    }
    if(acertou!==0){
      console.log((acerto+acertou)+"==="+(palavraGerada.length));
      if(acerto+acertou===palavraGerada.length){
        setBotaoEstado(true);
        setFimJogo("vencedor");
        setReiniciarJogo(reiniciarJogo+1);
      }
      setAcerto(acerto+acertou);
      setLetras(espacos.join(' '));
      return;
    }else if(erro<=6){
      setErro(erro+1);
      setForca(forcas[erro]);
      if(erro==6){
        setBotaoEstado(true);
        setLetras(palavraGerada);
        setFimJogo("perdedor");
        setReiniciarJogo(reiniciarJogo+1);
      }
      return;
    }
  }
  return (
    <>
      <Jogo forca={forca} letras={letras} gerarPalavra={gerarPalavra} fimJogo={fimJogo}/>
      <Letras botaoEstado={botaoEstado} tentativaLetra={tentativaLetra} reiniciarJogo={reiniciarJogo}/>
    </>
  );
}