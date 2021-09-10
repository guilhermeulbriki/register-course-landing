import styled, { keyframes } from 'styled-components';

const titleAnimation = keyframes`
  from {
    transform: translateX(-40px);
  } to {
    transform: translateX(0px);
  }
`;

const textAnimation = keyframes`
  from {
    transform: translateX(-56px);
  } to {
    transform: translateX(0px);
  }
`;

const buttonAnimation = keyframes`
  from {
    transform: translateY(24px);
    opacity: 0;
  } to {
    transform: translateY(0px);
    opacity: 1;
  }
`;

const setaAnimation = keyframes`
  0% {
    transform: translateY(0px);
  } 50% {
    transform: translateY(4px);
  } 100% {
    transform: translateY(0px);
  }
`;

export const Container = styled.div`
  width: 100%;
  overflow-x: hidden;
  height: 100%;
  min-height: 100vh;
`;

export const Content = styled.div`
  height: calc(100vh - 8px - 8rem);

  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .up-header {
      margin-bottom: 2.4rem;
    }

    h1 {
      animation: ${titleAnimation} 600ms ease-out;
    }

    p {
      animation: ${textAnimation} 900ms ease-out;
    }

    h1,
    p {
      width: 100%;
      max-width: 800px;
      text-align: center;
    }

    > img {
      margin-top: 4.8rem;

      animation: ${setaAnimation} linear infinite 1600ms;
    }

    a {
      width: 100%;
      max-width: 40.8rem;
      position: relative;
      margin-top: 8rem;

      animation: ${buttonAnimation} ease-out 1200ms;

      &:hover > img {
        transform: translateY(-8px);
      }

      > img {
        position: absolute;
        top: 27px;
        left: -15px;

        transition: transform ease-out 600ms;
      }
    }
  }

  @media (max-width: 600px) {
    .container {
      h1 {
        font-size: 2.8rem;
      }

      p {
        font-size: 1.6rem;
      }

      > img {
        margin-top: 4rem;
      }

      > a {
        margin-top: 6.4rem;
      }
    }
  }
`;
