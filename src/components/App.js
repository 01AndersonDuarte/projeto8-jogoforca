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
  const [letras, setLetras] = useState("");
  const [palavraGerada, setPalavraGerada] = useState("");
  let espacos=[];

  function gerarPalavra(){
    let indice = Math.floor(Math.random() * (palavras.length-1));
    setPalavraGerada(palavras[indice]);
    espacos=[];
    for(let i=0; i<palavras[indice].length; i++){
      espacos.push("_");
    }
    setLetras(espacos.join(' '));
  }
  function tentativaLetra(letra){
    let espacos=letras.split(' ');
    let acertou=0;

    for(let i=0; i<palavraGerada.length; i++){
      if(letra===palavraGerada[i].toUpperCase()){
        acertou=1;
        espacos[i]=palavraGerada[i];
      }
    }
    if(acertou){
      setLetras(espacos.join(' '));
      return;
    }else if(erro<=6){
      //atualizar imagem caso não acerte a letra
      setErro(erro+1);
      setForca(forcas[erro]);
      if(erro==6){
        setTimeout(()=>{
          alert("Você perdeu");
        }, 1000);
      }
      return;
    }
  }
  return (
    <>
      <Jogo forca={forca} letras={letras} gerarPalavra={gerarPalavra}/>
      <Letras tentativaLetra={tentativaLetra}/>
    </>
  );
}