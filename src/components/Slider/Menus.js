import React,{useState} from 'react';
import {sliders} from '../data';
import MenuItem from './MenuItem';

function Menus(){
    const [active,setActive] =useState(0)

    const changeActive=(id)=>{
        setActive(id)
    }


    return (
        <div className="slider__menu">
            <MenuItem  data={sliders} 
                active={active} 
                changeActive={changeActive}
                />
        </div>
    )
}

export default Menus