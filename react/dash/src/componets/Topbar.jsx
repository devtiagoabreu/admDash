import React from 'react';
import { Link } from 'react-router-dom';
import './Topbar.css';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="toggle">
          <ion-icon name="menu-outline"></ion-icon>
      </div>
      {/* search */}
      <div class="search">
          <label for="">
              <input type="text" placeholder="Pesquisar"/>
              <ion-icon name="search-outline"></ion-icon>
          </label>
      </div>
      {/* userImg */}
      <div className="user">
          <img src="assets/img/user.jfif" alt=""/>
      </div>
    </div>
  )
}

export default Topbar