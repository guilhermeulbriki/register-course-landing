import React, { useCallback, useState } from 'react';
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

  const handleSubmitForm = useCallback(() => {
    console.log(name, role, whatsapp, email);

    setName('');
    setRole('');
    setWhatsapp('');
    setEmail('');

    history.push('/thanks');
  }, [email, name, role, whatsapp, history]);

  return (
    <Container>
      <img className="planeta" src={planeta} alt="planeta-illustra" />
      <form>
        <h2>Preencha seus dados:</h2>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          required
          className="form"
          placeholder="Seu nome"
        />
        <input
          value={role}
          onChange={(e) => setRole(e.target.value)}
          type="text"
          required
          className="form"
          placeholder="Seu cargo na escola"
        />
        <InputMask
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
          placeholder="Seu Whatsapp"
          mask="(99) 99999-9999"
          className="form"
          required
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
          className="form"
          placeholder="Seu E-mail"
        />

        <button onClick={handleSubmitForm} className="primary">
          Fazer meu cadastro
        </button>
      </form>
      <img className="dinheiro" src={dinheiro} alt="dinheiro-icon" />
      <img className="cartao" src={cartao} alt="cartao-icon" />
    </Container>
  );
};

export default FormComponent;
