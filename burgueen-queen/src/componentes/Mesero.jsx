import React from 'react'
import { Header } from '../componentes/Header';
import '../style/mesero.css';
import CustomerForm from './CustomerForm/CustomerForm';
import { useState } from 'react';
import TakeOrderButtons from './TakeOrderButtons/TakeOrderButtons';




export const Mesero = () => {
    const [products, setProduct] = useState(null)
    const url = "http://localhost:8080/products/";
    const reqApi = async () => {
        const api = await fetch(url)
        const respuesta = await api.json()
        console.log('respuesta', respuesta)

        setProduct(respuesta)
        // .then(response => console.log('response.json()', response.json()))
    };


    return (
        <>
            <Header />
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <p className='cliente'>1) Nombre del cliente</p>
                            <CustomerForm />
                            <p className='cliente'>2) Toma de pedidos </p>

                            <div>
                                <div className="main-buttons mb3">
                                    <div clasName='mover'>
                                        <button onClick={reqApi} className="menu-button">Desayuno</button>
                                        {products ? (<TakeOrderButtons products={products} />) :
                                            <>
                                                <p className='elija'>Elija un menú para ver los items disponibles</p>
                                            </>}


                                        <button className="menu-button">Almuerzo</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-5 mt-3">
                            <p>3) Verifica el pedido</p>

                        </div>
                    </div>

                </div>

            </div>
        </>)
}
