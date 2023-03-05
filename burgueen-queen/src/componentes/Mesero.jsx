import React from 'react'
import { Header } from '../componentes/Header';
import '../style/mesero.css';
import CustomerForm from './CustomerForm/CustomerForm';



export const Mesero = () => {

    return (
        <>
            <Header />
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <p>1) Nombre del cliente</p>
                            <CustomerForm
                            />
                            <p>2) Toma de pedidos </p>


                            <div>
                                <div className="main-buttons mb3">
                                    <button className="menu-button">Desayuno</button>
                                    <button className="menu-button">Almuerzo</button>
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
