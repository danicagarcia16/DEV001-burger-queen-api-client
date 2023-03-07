import React from 'react';
import logo from '../images/logo.png';
import '../style/header.css';
import '../style/font.css';
export const Header = () => {
    return (
        <>
            <div className='banner-container flex-burguer'>
                <div className='banner-container-1 flex-burguer'>
                    <img src={logo} className='logo' alt='' style={{ width: '90px' }} />
                    <p>Burguer Queen</p>
                </div>
            </div>
        </>
    )
}