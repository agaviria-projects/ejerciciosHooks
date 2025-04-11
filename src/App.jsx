import UseState from "./components/UseState"
import CambiarColor from "./components/cambiarColor";
import {color} from "./components/cambiarColor";
function App() {
  
  return (
    <>
      <color.Provider value={"color oscuro"}>
        <UseState/>
        <CambiarColor/>
      </color.Provider>  
    </>
  )
}

export default App
