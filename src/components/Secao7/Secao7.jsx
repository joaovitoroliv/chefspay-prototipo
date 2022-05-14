import React from "react";
import "./Secao7.css";
import card_gratuito from "../img/card-gratuito.svg";

export default () => {
  return (
    <div className="secao7">
    <div className="card-gratuito">
        <img className="gratuito-img" src={card_gratuito} alt="Forma de Pagamento" />
      </div>
    </div>
  );
};
