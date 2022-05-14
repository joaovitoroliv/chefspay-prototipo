import React, { useState } from "react";
import "./Secao3.css";
import Lottie from "react-lottie";
import animationData3 from "./animacao3.json";
import animationData2 from "./animacao2.json";

export default () => {

  const [animationState2, setAnimationState2] = useState({
    isStopped: false,
    isPaused: false,
  });

  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: animationData2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [animationState3, setAnimationState3] = useState({
    isStopped: false,
    isPaused: false,
  });

  const defaultOptions3 = {
    loop: true,
    autoplay: true,
    animationData: animationData3,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  
  return (
    <div className="secao3">
      <h1>Veja como <br /> funciona o ChefsPay</h1>
      <p>Confira o passo-a-passo e ofereça o ChefsPay aos seus clientes!</p>
      <div className="animacao2">
        <Lottie
          options={defaultOptions2}
          height={268.5}
          width={612.2}
          isStopped={animationState2.isStopped}
          isPaused={animationState2.isPaused}
        />
        </div>
      <div className="animacao3">
        <Lottie
          options={defaultOptions3}
          height={730}
          width={326}
          isStopped={animationState3.isStopped}
          isPaused={animationState3.isPaused}
        />
        </div>
    </div>
  );
};
