import { useState } from "react";
export default function UseState() {
    let[contador, setContador] = useState(0);// valor inicial en el que arranca el contador 
    let[mostrar,setMostrar]= useState(true);
    //let contador = 0;
  return (
    <>
        {mostrar && <div>
            <p>Contar{contador}</p>
            <button onClick ={()=> setContador(contador+1)}
            >Click aqui</button>
        </div>}
        <button onClick={()=> setMostrar(!mostrar)}
        >Mostrar/Ocultar</button>      
    </>
  )
}
