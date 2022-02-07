import React from "react";
import {FaBell,
    FaUser,
    FaCog,
    FaLifeRing,
    FaRunning,
    FaClock
} from 'react-icons/fa'; 
import userImg from '../../images/giphy.gif';


function User() {

  return (
    <div className="header__user">
      <div className="header__notifi">
        <FaBell />

        <div className="header__notifi-box">
          <div className="header__notifi-head">
            <span>You have 2 notifications</span>
          </div>

          <ul className="header__notifi-list">
            <li className="header__notifi-item">
              <img src={userImg} alt="" className="user-img" />
              <div className="header__notify-text">
                <p>
                  Marlene Willms{" "}
                  <span>answered to your comment on the minimal</span>
                </p>

                <div className="header__notify-hours">
                  <span>
                    {" "}
                    <FaClock /> about 2 hours
                  </span>
                </div>
              </div>
            </li>

            <li className="header__notifi-item">
              <img src={userImg} alt="" className="user-img" />
              <div className="header__notify-text">
                <p>
                  Marlene Willms{" "}
                  <span>answered to your comment on the minimal</span>
                </p>

                <div className="header__notify-hours">
                  <span>
                    <FaClock />about 2 hours
                  </span>
                </div>
              </div>
            </li>
          </ul>

          <div className="head__notifi-footer">
            <a href="" className="notifi-text">
              View All
            </a>
          </div>
        </div>
      </div>

      <div className="header__user-avatar">
        <img src={userImg} alt="" className="user-img" />

        <div className="header__user-profile">
          <div className="user-profile-name">
            <h2>Tun Tun</h2>
            <p className="user-email">vothanh1320@gmail.com</p>
          </div>

          <ul className="profile-list">
            <li className="profile-item">
              <a href="" className="profile-item-link">
                <FaUser />
                Profile
              </a>
            </li>
            <li className="profile-item">
              <a href="" className="profile-item-link">
                <FaCog />
                Settings
              </a>
            </li>
            <li className="profile-item">
              <a href="" className="profile-item-link">
                <FaLifeRing />
                Support
              </a>
            </li>
          </ul>

          <div className="user-logout">
            <FaRunning />
            <a href="" className="profile-item-link">
              Logout
            </a>
          </div>
        </div>
      </div>

      <p>Tun Tun</p>
    </div>
  );
}

export default User;
