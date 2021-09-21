import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import InputMask from 'react-input-mask';

import planeta from '../../assets/planeta.svg';
import dinheiro from '../../assets/dinheiro.svg';
import cartao from '../../assets/cartao.svg';

import { Container } from './styles';

const FormComponent: React.FC = () => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');

  const history = useHistory();

  const handleSubmitForm = useCallback((e) => {
    console.log(name, role, whatsapp, email,e);

    setName('');
    setRole('');
    setWhatsapp('');
    setEmail('');

  }, [email, name, role, whatsapp, history]);

  useEffect(() => {
    console.log('asddd')
  }, [])
  return (
    <Container>
      <img className="planeta" src={planeta} alt="planeta-illustra" />
      <form onSubmit={handleSubmitForm} action="/thanks">
        <h2>Preencha seus dados:</h2>

        <input
          value={name}
          name="nome"
          onChange={(e) => setName(e.target.value)}
          type="text"
          required
          className="form"
          placeholder="Seu nomee"
        />
        <input
          value={role}
          name="cargo"
          onChange={(e) => setRole(e.target.value)}
          type="text"
          required
          className="form"
          placeholder="Seu cargo na escola"
        />
        <InputMask
          value={whatsapp}
          name="zap"
          onChange={(e) => setWhatsapp(e.target.value)}
          placeholder="Seu Whatsapp"
          mask="(99) 99999-9999"
          className="form"
          required
        />
        <input
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
          className="form"
          placeholder="Seu E-mail"
        />

          
        <input className="primary" type="submit" placeholder="Fazer meu cadastro"/>
      </form>
      <img className="dinheiro" src={dinheiro} alt="dinheiro-icon" />
      <img className="cartao" src={cartao} alt="cartao-icon" />
    </Container>
  );
};

export default FormComponent;
