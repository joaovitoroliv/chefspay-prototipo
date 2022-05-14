import React from "react";
import "./Footer.css";
import facebook from '../Footer/thumb-facebook.svg'
import instagram from '../Footer/thumb-instagram.svg'
import twitter from '../Footer/thumb-twitter.svg'

export default () => {
  return (
    <div className="footer">
    <div className="sobre">
        <h3>Sobre o Clube</h3>
        <a href="#">Planos</a><br/>
        <a href="#">ChefsBlog</a><br/>
        <a href="#">Baixe nosso app</a>
    </div>

    <div className="contato">
        <h3>Contato</h3>
        <p>Central de ajuda</p>
        <p>meajuda@chefsclub.com.br</p>
        <p>4003-6177 (Capitais e regiões metropolitanas)</p>
        <p>(21) 2018-0077 (Demais localidades)</p>
    </div>

    <div className="redes-sociais">
      <h3>Siga o Chefsclub</h3>
      <img className="facebook" src={facebook} alt="facebook" />
      <img className="instagram" src={instagram} alt="instagram" />
      <img className="twitter" src={twitter} alt="twitter" />
    </div>

    <hr className="horizontal-line" />
    <p className="direitos">@ 2022 Chefs Club S/A. Todos os direitos reservados</p>
    <p className="termos-e-condicoes">
      Termos e Condições | Política de Privacidade
    </p>
    </div>
  );
};
