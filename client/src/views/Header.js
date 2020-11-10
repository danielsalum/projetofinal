import React from "react";
import Axios from "axios";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div class="container">
          <div class="logo">
            <img href="" src="images/logo-git.svg" class="logo-icon" />
          </div>
          <div class="header-inner">
            <ul class="menu">
              <li class="menu-item">
                Porque GitHub?
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              </li>
              <li class="menu-item">Empresa</li>
              <li class="menu-item">
                Explore
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              </li>
              <li class="menu-item">Mercado</li>
              <li class="menu-item">
                Preço
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              </li>
            </ul>

            <div class="right-side">
              <div class="search">
                <form class="search-form">
                  <input
                    type="text"
                    class="search-input"
                    placeholder="Procurar no GitHub"
                  />
                </form>
              </div>
              <a href="https://projetofinal2.herokuapp.com/checklogin" class="button signin">
                Entrar
              </a>
              <a href="/content" class="button border">
                Search Public Api
              </a>
              <div class="hidden-menu"></div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
