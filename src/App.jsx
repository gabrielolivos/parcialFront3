import Formulario from "./Componentes/Formulario";
import { useState } from "react";
import cardStyles from "./App.css"
import Card from "./Componentes/Card";
import Card2 from "./Componentes/Card2";

function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs

  const [mostrar,setMostrar] = useState(false)
  const [orden,setOrden] = useState("")
const [unidades,setUnidades] = useState(0)
const [errorApp, setErrorApp] = useState('')

function isNullEmptyBlank(str){
  return str === null || str.match(/^ *$/) !== null 
}


 

  const submitHandler = (e) => {
    e.preventDefault()
    const a=orden.length
    const b= orden.isNullEmptyBlank
    const c= unidades.length
    if(a>=3 && b!==true && c>=6){
      setMostrar(true)
      setErrorApp("")}
    else{
      setErrorApp("La validacion fallo. La orden debe contener mas de 3 caracteres sin espacios en blanco. Las unidades deben tener por lo menos 6 caracteres")
    }

     }
    
    


  return (
    <div className="App">
      <form onSubmit={submitHandler}>
     <Formulario  setOrden={setOrden} setUnidades={setUnidades}/>
     </form>
     {mostrar ? <Card orden={orden} unidades={unidades} /> : <Card2 error={errorApp}/>}
    <button onClick={(e)=>location.reload() }>Limpiar</button>
    </div>
  );
}

export default App;
