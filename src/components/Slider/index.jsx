import React from 'react';
import Header from './Header';
import Menus from './Menus';
import User from './User';
import {useGlobalContext} from '../../Context';
import { useLocation } from 'react-router-dom';


function Slider() {
    const {isSliderOpen}=useGlobalContext()
    const location = useLocation();

    const divStyle ={
        display: 'none',
    }

    if(location.pathname === '/login' || location.pathname === '/register'){

        return (
            <>
            <div className={`slider ${isSliderOpen && 'showSlider'}`} style={divStyle}>
                <Header />
                <User />
                <Menus />
            </div>
            <div className="slider-overlay" style={divStyle}></div>
            </>
        );
    }
        // const main = document.querySelector(".main-content");
        // main.style.display = "block";
        
        return (
            <>
            <div className={`slider ${isSliderOpen && 'showSlider'}`}>
                <Header />
                <User />
                <Menus />
            </div>
            <div className="slider-overlay" style={divStyle}></div>
            </>
        );
    

}

export default Slider;