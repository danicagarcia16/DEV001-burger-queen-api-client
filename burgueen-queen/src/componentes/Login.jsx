import React, { useState } from "react";
import { Header } from '../componentes/Header';
import logo from '../images/logo.png';
import '../style/login.css';
import '../style/font.css';


export const Login = () => {

    // Para capturar los imputs
    const [miLogin, setLogin] = useState('False');
    const [usu, setUsu] = useState('');
    const [pas, setPas] = useState('');

    function iniciarsesión(e) {
        e.preventDefault();
        let txtusu = document.getElementById('txtusu').value;
        let txtpas = document.getElementById('txtpas').value;
        if (txtusu.length === 0 || txtpas.length === 0) {
            alert('Complete los datos para ingresar')
        } else {
            if (usu === ".mesero@burger.queen" && pas === '123456') {
                setLogin('true')
                document.getElementById('form_login').style.display = 'none';
            } else {
                setLogin('false');
                alert('Error de usuario y/o contraseña')
                document.getElementById('txtusu').value = '';
                document.getElementById('txtpas').value = '';
                document.getElementById('txtusu').focus();
            }
        }
    }
    return (
        <>
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
                <a href="">¿Olvidaste tu contraseña?</a>
            </div >
        </>

    )
}

