
import React from 'react';
export default function TakeOrderButtons(props) {
    const {products} = props;
    console.log('products', products,props)
  return (
   
    <button className='buttons-menu-sacar'>
        <div className='container-buttons'>
          {products.map((product,index)=>(
                <div className='containerdos' key={index}>
                <p>{product.name}</p>
                <p>{product.price}</p>
                </div>
            ))}
        </div>
      
    </button>
    
  )
}
