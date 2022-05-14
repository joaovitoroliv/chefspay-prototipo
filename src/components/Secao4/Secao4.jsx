import React, { useState } from "react";
import "./Secao4.css";
import mockup2 from "../img/mockup2.svg";
import card_beneficios from "../img/card_beneficios.svg";
import card_beneficios_2 from "../img/card_beneficios_2.svg";
import card_beneficios_3 from "../img/card_beneficios_3.svg";
import card_beneficios_4 from "../img/card_beneficios_4.svg";
import logos from "../img/logos.svg";
import Lottie from "react-lottie";
import animationData4 from "./animacao4.json";

export default () => {
  const [animationState4, setAnimationState4] = useState({
    isStopped: false,
    isPaused: false,
  });

  const defaultOptions4 = {
    loop: true,
    autoplay: true,
    animationData: animationData4,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="secao4">
      <h1 className="titulo-primario-1">
        Seus clientes podem ver e pagar <br />a conta em segundos
      </h1>
      <div className="animacao4">
        <Lottie
          options={defaultOptions4}
          height={682}
          width={341}
          isStopped={animationState4.isStopped}
          isPaused={animationState4.isPaused}
        />
      </div>
        <div className="card-beneficios">
          <img src={card_beneficios} alt="" />
        </div>
        <div className="card-beneficios_2">
          <img src={card_beneficios_2} alt="" />
        </div>
        <div className="card-beneficios_3">
          <img src={card_beneficios_3} alt="" />
        </div>
        <div className="card-beneficios_4">
          <img src={card_beneficios_4} alt="" />
        </div>
      <div className="logos">
        <img src={logos} alt="" />
      </div>
    </div>
  );
};
