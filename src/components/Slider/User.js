import React from 'react';
import {Link} from 'react-router-dom';
import userImg from '../../images/giphy.gif';

function User(){

    return(
        <div className="slider__user">
                <Link to="/" className="slider__user-box">
                  <img src={userImg} alt="" className="user-img" />

                    <h2 className="slider__user-name">Tun Tun</h2>
                </Link>
        </div>
    )
}

export default User