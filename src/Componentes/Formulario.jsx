import React from 'react'


const Formulario = ({setOrden, setUnidades}) => {

const eventHandlerOrden= (e) => {
    setOrden(e.target.value)}

const eventHandlerUnidades= (e) => {
        setUnidades(e.target.value)}




  return (
    <div className='divFormulario'>
        <input onChange={eventHandlerOrden} type="text" placeholder='Ingrese su orden'></input>
        <input onChange={eventHandlerUnidades} type="text" placeholder='Ingrese la cantidad de unidades que quiere ordenar'></input>
        <button>ENVIAR</button>
    </div>
  )
}

export default Formulario
