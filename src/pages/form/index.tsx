import React from 'react';

import Header from '../../components/header';
import Footer from '../../components/footer';
import FormComponent from '../../components/form';

import alunos from '../../assets/alunos.svg';
import escolas from '../../assets/escolas.svg';

import { Container, Content } from './styles';

const Form: React.FC = () => {
  return (
    <Container>
      <Header />

      <Content>
        <div className="container">
          <section className="text">
            <div className="top">
              <section className="up-header" />
              <h1>Cadaste-se e aprenda Educação Financeira com a Mooney</h1>
              <p>
                Faça o seu cadastro no formulário ao lado gratuitamente e entre
                para o nosso Curso de Educação Financeira.
              </p>
            </div>

            <div className="bottom">
              <div className="item">
                <img src={alunos} alt="alunos-icon" />
                <h3>Mais de 20.000 alunos</h3>
                <p>
                  São beneficiados pelos programas de Alfabetização Financeira
                  da Mooney.
                </p>
              </div>

              <div className="item">
                <img src={escolas} alt="escolas-icon" />
                <h3>Mais de 50 escolas pelo Brasil</h3>
                <p>
                  Disponibilizam Educação Financeira de qualidade com a Mooney.
                </p>
              </div>
            </div>
          </section>

          <section className="form">
            <FormComponent />
          </section>
        </div>
      </Content>

      <Footer />
    </Container>
  );
};

export default Form;
