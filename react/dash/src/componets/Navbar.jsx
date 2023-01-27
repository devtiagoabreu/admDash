import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div class="navigation">
        <ul>
          <li>
            <Link to={'/'} className="homme">
              <span class="icon">
                <ion-icon name="logo-apple"></ion-icon>
              </span>
              <span class="title">Pro Moda | Dash</span>
            </Link>
          </li>
          <li>
            <Link to={'/'} className="homme">
              <span class="icon">
                <ion-icon name="home-outline"></ion-icon>
              </span>
              
              <span class="title">Geral</span>
            </Link>
          </li>
          <li>
            <Link to={'/financeiro'} className="dashFinanceiro">
              <span class="icon">
                <ion-icon name="cash-outline"></ion-icon>
              </span>
              <span class="title">Financeiro</span>
            </Link>
          </li>
          <li>
            <Link to={'/comercial'} className="dashComercial">
              <span class="icon">
                <ion-icon name="cart-outline"></ion-icon>
              </span>
              <span class="title">Comercial</span>
            </Link>
          </li>
          <li>
            <Link to={'/contabil'} className="dashContabil">
              <span class="icon">
                <ion-icon name="calculator-outline"></ion-icon>
              </span>
              <span class="title">Contábil</span>
            </Link>
          </li>
          <li>
            <Link to={'/producao'} className="dashProducao">
              <span class="icon">
                <ion-icon name="trending-up-outline"></ion-icon>
              </span>
              <span class="title">Produção</span>
            </Link>
          </li>
          <li>
            <Link to={'/beneficiamento'} className="dashBeneficiamento">
              <span class="icon">
                <ion-icon name="color-palette-outline"></ion-icon>
              </span>
              <span class="title">Beneficiamento</span>
            </Link>
          </li>
          <li>
            <Link to={'/perfil'} className="dashPerfil">
              <span class="icon">
                <ion-icon name="person-outline"></ion-icon>
              </span>
              <span class="title">Perfil</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar