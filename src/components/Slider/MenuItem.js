import React from 'react';
import {Link} from 'react-router-dom';

function MenuItem({data,active,changeActive}){
    

    const handleClick=(id)=>{
        changeActive(id)
    }

    return (
        <ul className="slider__menu-list">
            {data.map((item, index)=>{
                const {url,icon, name} = item

                return (
                    <li className={`${active}`===`${index}`?`slider__menu-item active`:`slider__menu-item`} 
                        key={index} 
                        onClick={()=>handleClick(index)}
                        >

                        <Link to={url} className="slider__menu-link">
                            {icon}
                            <p className="slider__menu-name">{name}</p>
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default MenuItem