import React from 'react'
import {useState} from 'react'
import '../../style/imput.css';
import ValorInput from '../ValorInput/ValorInput';


export default function CustomerForm() {
    const [texto , setTexto] =useState('')
    const handleInputChange =({target})=>{
       setTexto(target.value);
      }
    const handleSubmit =({e})=>{
        e.preventDefault()
        console.log(texto);
    }
    
        return (
          <section>
            <form onSubmit={handleSubmit}>
            <input
              value={texto}
              onChange={handleInputChange}
              type="text"
              placeholder="Ingresa el nombre del cliente"
              className="container  customer col-6 mr-5"
            />
            </form>
            <ValorInput texto={texto}/>
          </section>
        );
      }
    
 

