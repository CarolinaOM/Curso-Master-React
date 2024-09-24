import React from 'react'
import {useState} from 'react';
export const PrimerComponete = () => {

    //let nombre = "Caro";
    let web = "Caro.es";

    const [nombre, setNombre] = useState("Caro");

    let cursos = [
        "JS",
        "PHP",
        "REACT",
        "CSS"
    ];

    const cambiarNombre = (nuevoNombre) => {
        setNombre(nuevoNombre);
    }

  return (
    <div>
      <h1>Mi primer componente</h1>
      <p>Esto es un texto en mi componente</p>
      <p>Mi nombre es: <strong className={nombre.length >= 4 ? 'verde': 'rojo'}></strong>{nombre}</p>
      <p>Mi web es: {web}</p>

      <input type="text" onChange={e => cambiarNombre(e.target.value)} placeholder></input>

      <button onClick={e => {
        console.log("El valor guardado en tu estado es:" ,nombre);
      }}>Mostrar valor del etsado</button>

      <button onClick={e => cambiarNombre("Carol")}></button>

      <h2>Cursos:</h2>
      <ul>
        {
            cursos.map( (cursos, indice) => {
                return (<li key={indice}>
                    {cursos}
                </li>)
            })
        }
      </ul>
    </div>
  )
}

export default PrimerComponete
