import React , {useState } from 'react'


export function Contador (){

    const[contador,setContador] =useState(0)

  const html = <h1>aula</h1>
  function soma(){
    setContador(()=> contador +1)

    }

  function subtrai (){
    setContador(() => contador-1)
  }
    return (
        <div className="App">
        <header className="App-header">
          <div>{html}</div>
         <h1> {contador} </h1>
         <button onClick={soma}>+</button>
         <button onClick={subtrai}>- </button>
        </header>
      </div>
    )
}