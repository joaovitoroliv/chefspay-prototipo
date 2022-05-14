import React, { useState } from "react";
import "./Secao2.css";
import mockup from "../img/mockup.svg";
import Lottie from "react-lottie";
import animationData from "./animacao.json";

export default () => {
  const [animationState, setAnimationState] = useState({
    isStopped: false,
    isPaused: false,
  });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  
  return (
    <div className="secao2">
      <div className="card-1">
        <h1 className="titulo-primario">Vantagens para o seu restaurante</h1>
        <h2 className="titulo-secundario">
          Seus clientes podem ver, dividir e pagar a conta em segundos!
        </h2>
        <div className="animacao">
        <Lottie
          options={defaultOptions}
          height={290}
          width={416}
          isStopped={animationState.isStopped}
          isPaused={animationState.isPaused}
        />
        </div>
      </div>
      <div className="card-2">
        <img src={mockup} alt="Forma de Pagamento" />
      </div>
    </div>
  );
};
