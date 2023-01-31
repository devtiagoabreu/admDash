import React from 'react';
import { Link } from 'react-router-dom';
import './Topbar.css';

const Topbar = () => {
  return (
    <div class="cardBox">
      <div class="card">
        <div>
          <div class="numbers">---</div>
          <div class="cardName">Pontos</div>
        </div>
        <div class="iconBx">
          <ion-icon name="pulse-outline"></ion-icon>
        </div>
      </div>
    </div>
  )
}

export default Topbar