import { useState } from "react";
export default function UseState() {
    let[contador, setContador ] = (UseState(0));
    //let contador = 0;
  return (
    <>
        <p>Contar{contador}</p>
        <button onClick={()=> setContador(contador++)}
        >Click aqui</button>
    </>
  )
}
