import React from 'react';

import Footer from '../../components/footer';
import Header from '../../components/header';

import seta from '../../assets/seta.svg';
import bolas from '../../assets/bolas.svg';

import { Container, Content } from './styles';

const Thanks: React.FC = () => {
  return (
    <Container>
      <Header />

      <Content>
        <div className="container">
          <section className="up-header" />
          <h1>Obrigado pela sua inscrição!</h1>
          <p>
            Como é bom te ter por aqui conosco. Seu cadastro foi concluído com
            sucesso e logo entraremos em contato com você através do seu E-mail
            com mais informações, fique ligado. Enquanto isso, que tal conhecer
            um pouco mais sobre nós?
          </p>
          <img src={seta} alt="seta" />

          <a target="_blank" rel="noreferrer" href="https://mooneyapp.com.br/">
            <img src={bolas} alt="bolas" />
            <button className="btn-primary">Saiba mais sobre a Mooney</button>
          </a>
        </div>
      </Content>

      <Footer />
    </Container>
  );
};

export default Thanks;
