import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../images/green.png';
import closeIcon from '../../images/close.png';
import {useGlobalContext} from '../../Context';


function SliderHeader(){
    const {CloseSlider}=useGlobalContext()

    return(
        <div className="slider__header">
            <Link to="/" className="slider__header-link">
                <img src={logo} alt="logo" className="slider__header-logo" />      
            </Link>
            <div className="slider__header-toggle">
                <img src={closeIcon} className="slider__header-closeicon" onClick={CloseSlider}/>
            </div>
        </div>
    )
}

export default SliderHeader