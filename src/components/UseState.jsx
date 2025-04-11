import { useState , useEffect, useContext} from "react";
import {color} from "./cambiarColor"
export default function UseState() {
    let[contador, setContador] = useState(0);// valor inicial en el que arranca el contador 
    let[mostrar,setMostrar]= useState(true);
    console.log(useContext(color));
    //let contador = 0;
    useEffect(()=>{
        console.log(contador);
        document.title = `Contador ${contador}`;
    },[contador]);
  return (
    <>
        {mostrar && <div>
            <p>Contar {contador}</p>
            <button onClick ={()=> setContador(contador+1)}
            >Click aqui</button>
        </div>}
        <button onClick={()=> setMostrar(!mostrar)}
        >Mostrar/Ocultar</button>      
    </>
  )
}
