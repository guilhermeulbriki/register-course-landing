import styled, { keyframes } from 'styled-components';

const planetAnimation = keyframes`
  0% {
    transform: translateY(0px);
  } 50% {
    transform: translateY(6px);
  } 100% {
    transform: translateY(0px);
  }
`;

const iconAnimation = keyframes`
  0% {
    transform: translateY(0px);
  } 50% {
    transform: translateY(4px);
  } 100% {
    transform: translateY(0px);
  }
`;

export const Container = styled.div`
  position: relative;

  .planeta {
    position: absolute;
    top: -27px;
    right: -72px;

    animation: ${planetAnimation} 5s linear infinite;
  }

  form {
    position: relative;
    background: var(--grayscale-white);
    margin-top: 3.7rem;
    width: 100%;
    max-width: 488px;
    box-shadow: 0px 8px 72px -16px rgba(35, 41, 49, 0.1);
    border-radius: 16px;
    padding: 4rem 4rem 5.6rem 4rem;

    h2 {
      margin-bottom: 3.2rem;
    }

    input + input {
      margin-top: 2.4rem;
    }

    button {
      margin-top: 4.8rem;
    }
  }

  .dinheiro {
    position: absolute;
    top: 85px;
    left: -36px;

    animation: ${iconAnimation} 3.5s linear infinite;
  }

  .cartao {
    position: absolute;
    bottom: 105px;
    right: -40px;

    animation: ${iconAnimation} 3s linear infinite;
    animation-delay: 1s;
  }
`;
