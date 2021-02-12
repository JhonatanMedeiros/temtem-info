import React from "react";

import { FooterContainer } from "./styles";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>
        Temtem Info é um Banco de Dados para o jogo Temtem de PC e consoles.
      </p>
      <p>
        O Temtem Info não é endossado pela Crema e não reflete os pontos de
        vista ou opiniões da Crema ou de qualquer pessoa oficialmente envolvida
        na produção ou gestão da Temtem. Temtem e Crema são marcas comerciais ou
        marcas registradas da Crema.
      </p>
      <p>
        Este produto usa dados da API do
        <a href="https://temtem-api.mael.tech/">temtem-api.mael.tech</a>, mas
        não é endossado nem certificado por ele.
      </p>
    </FooterContainer>
  );
};

export default Footer;
