import React, { useState, useEffect } from 'react';
import { Header } from '../componentes/Header';
import { Modal } from '../componentes/Modal';
import logo from '../images/logo.png';
import '../style/login.css';
import '../style/font.css';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';




export const Login = () => {

    const getToken = localStorage.getItem("token");
    const navigate = useNavigate();

    useEffect(() => {
        if (getToken) {
            navigate("/Mesero");
        }
    })
    //Para capturar los imputs
    const [miLogin, setLogin] = useState(false);
    const [usu, setUsu] = useState('');
    const [pas, setPas] = useState('');
    //Para error 
    const [errorModal, setErrorModal] = useState(false);


    function iniciarsesión(e) {
        e.preventDefault();
        let txtusu = document.getElementById('txtusu').value;
        let txtpas = document.getElementById('txtpas').value;
        if (txtusu.length === 0 || txtpas.length === 0) {
            alert('Complete los datos para ingresar')
        } else {
            if (usu === ".mesero@burger.queen" && pas === '123456') {
                setLogin(true)
                navigate('/Mesero');
            } else {
                setLogin(false);
                setErrorModal(true);


                document.getElementById('txtusu').value = '';
                document.getElementById('txtpas').value = '';
                document.getElementById('txtusu').focus();
            }
        }
    }
    return (
        <>
            <Modal
                estado={errorModal}
                cambiarEstado={setErrorModal}
            >
                <Contenido>
                    <p>Error de usuario y/o contraseña</p>
                </Contenido>
            </Modal>
            <Header />
            <div className="container-login flex-burguer" >
                <img src={logo} className='logo' alt='' style={{ width: '120px' }} />
                <form id="form_login">
                    <div>
                        <label className="label-Login" htmlFor="txtusu"><strong></strong></label>
                        <input className="input-Login" placeholder='Correo electrónico' type="text" id="txtusu" onChange={(e) => setUsu(e.target.value)} required />
                    </div>
                    <div>
                        <label className="label-Login" htmlFor="txtpas"><strong></strong></label>
                        <input className="input-Login" type="password" placeholder='Contraseña' id="txtpas" onChange={(e) => setPas(e.target.value)} required />
                    </div><br />
                    <input type="submit" className="btn btn-primary login login-submit" value="Ingresar" onClick={iniciarsesión} />
                </form>
                <a href="/">¿Olvidaste tu contraseña?</a>
            </div >

        </>

    )
}
const Contenido = styled.div`
display: flex;
flex-direction: column;
align-itmes: center;

p{
    font-size:30px;
    font-weight:500;
    color: #151A5E;
    

}`

