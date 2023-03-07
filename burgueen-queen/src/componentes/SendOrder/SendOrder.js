import React from 'react'
import '../../style/boton.css'

export default function SendOrder() {
  return (
    <div>
         <div className ='card'>
        <div className="card-body pb-0">
          <p className="card-tittle">Cliente:</p>
        </div>
        <div className="card-body order">
          
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Items</th>
                  <th>Acción</th>
                </tr>
              </thead>
              </table>
               
          <button className='menu-button'>Enviar orden</button>
          <button type="button" className="btn-danger mb-0" >Cancelar orden</button>
        </div>
      </div>
    </div>
)}
