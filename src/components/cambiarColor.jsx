import "./../App.css";
import { createContext } from "react";
export let color=createContext();
export default function CambiarColor() {
  return (
    <div>
       <button className="btn-color">Cambiar color</button> 
    </div>
  )
}
