import React from "react";
import "./Secao6.css";

export default () => {
  return (
    <div className="secao6">
      <div className="texto">
        <h1>Ainda tem dúvidas?</h1>
        <p>Confira as dúvidas mais frequentes e fique por dentro!</p>
      </div>
      <div className="box-duvidas">
        <div className="perguntas-respostas">
        <br />
          <p>
            <b>
              O que eu preciso para ativar o Chefspay no meu estabelecimento?
            </b>
          </p>
          <br />
          <p>
            Para aderir ao ChefsPay é necessária a utilização do Cardápio
            Digital. Com o produto do cardápio em funcionamento, basta fazer a
            ativação do ChefsPay diretamente no PDV.
          </p>
          <br/>
          <hr />
          <p>
            <b>
            O Chefspay é gratuito?
            </b>
          </p>
          <br />
          <p>
          Não há custo para adesão, é totalmente gratuito.
          </p>
          <br />
          <hr/>
          <p>
            <b>
            Quais métodos de pagamento o Chefspay oferece?
            </b>
          </p>
          <br />
          <p>
          O pagamento no ChefsPay pode ser feito através do Pix, Cartão de crédito, Apple Pay e Google Pay.
          </p>
          <br />
          <hr/>
          <p>
            <b>
            Preciso oferecer Wifi para os meus clientes?
            </b>
          </p>
          <br />
          <p>
          Não, o ChefsPay pode ser acessado via 3G ou 4G por meio do celular do seu cliente.
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};
