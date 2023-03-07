
import React from 'react';
export default function TakeOrder(props) {
    const {almuerzo} = props;
    
  return (
   
    <button className='buttons-menu-sacar'>
        <div className='container-buttons'>
          {almuerzo.map((almuerzo,index)=>(
                <div className='containerdos' key={index}>
                <p>{almuerzo.name}</p>
                <p>{almuerzo.price}</p>
                </div>
            ))}
        </div>
      
    </button>
    
  )
}
