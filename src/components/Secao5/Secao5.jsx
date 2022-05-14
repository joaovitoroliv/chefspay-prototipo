import React from "react";
import "./Secao5.css";

export default () => {
  return (
    <div className="secao5">
      <h1>
        Perfeito para o <br />
        seu negócio
      </h1>
      <p>
        Reduza seus custos e encante seu cliente com patricidade e autonomia,{" "}
        <br />
        <b>solicite agora!</b>
      </p>
        <input className="form" type="text" placeholder="Nome" />
        <input className="form" type="text" placeholder="Sobrenome" />
        <input className="form" type="text" placeholder="Email para contato" />
        <input className="form" type="text" placeholder="Restaurante" />
        <button className="enviar"><b>Enviar</b></button>
    </div>
  );
};
