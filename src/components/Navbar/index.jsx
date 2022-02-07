import React from 'react';
import listImg from '../../images/list.png';
import Search from './Search';
import User from './User';
import {useGlobalContext} from '../../Context';


function Navbar() {
    const {OpenSlider} = useGlobalContext();

    
    return (
        <div className="row nav">
            <div className="col-2">
                <img src={listImg} className="slider__header-showicon" onClick={OpenSlider} />
            </div>
            <Search />
            <User />
        </div>
    );
}

export default Navbar;