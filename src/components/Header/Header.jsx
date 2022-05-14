import React from "react";
import "./Header.css";
import logo from "../img/logo-chefs-club.svg";
import keyboard_Arrow_Down from "../img/keyboard_arrow_down.svg";
import arrow_Down from "../img/arrow-down.svg";
import Chefspay from "./chefspay.mp4";

export default () => {
  // function TypeTerciaryTextIconHeightbigStatus(props) {
  //   const { button, keyboard_Arrow_Down } = props;

  //   return (
  //     <div className="web-buttons">
  //       <div className="button">{button}</div>
  //       <img className="keyboard_arrow_down" src={keyboard_Arrow_Down} />
  //     </div>
  //   );
  // }

  return (
    <div className="first-content">
      <div className="nav-site">
        <img className="logo-chefs-club" src={logo} />
        <div className="menu">
          <a href="#" className="menu-planos">
            Planos
          </a>
          <a href="#" className="menu-vouchers">
            Vouchers
          </a>
          <a href="#" className="menu-cardapio">
            Cardápio digital
          </a>
          <a href="#" className="menu-chefspay">
            Chefspay
          </a>
        {/* </div> */}
        {/* <div className="conta-chefs-club"> */}
          <a href="#" className="texto-chefsclub">
            Cadastre-se ou faça login
          </a>
        </div>
      </div>

      <div className="video-chefspay">
        <video className="video-de-fato" loop autoPlay muted>
          <source src={Chefspay} type="video/mp4"/>
        </video>
      </div>
      <h1 className="primeiro-titulo">
        A maneira mais <br/> rápida de pagar em restaurantes
      </h1>

      {/* Não consegui adicionar o efeito de blur no titulo primario
      <h1 className="primeiro-titulo-1">
        A maneira mais <br/> rápida de pagar em restaurantes
      </h1> */}

      <div>
        <h2 className="segundo-titulo">
          Proporcione a <b>melhor experiência</b> de pagamento para seu cliente e <b>aumente suas vendas</b> com o
        </h2>
        <img className="logo-chefs-club-1" src={logo} />
        <img className="logo-chefs-club-2" src={logo} />
      </div>

      <button className="experimente-agora">
        <b>Experimente agora</b>
      </button>
      
      <img className="arrow_Down" src={arrow_Down} />
    </div>
  );
};
