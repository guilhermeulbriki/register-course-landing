import styled, { keyframes } from 'styled-components';

const formAnimation = keyframes`
  from {
    transform: translateY(-24px);
    opacity: 0;
  } to {
    transform: translateY(0px);
    opacity: 1;
  }
`;

const headerAnimation = keyframes`
  from {
    transform: translateX(-48px);
    opacity: 0;
  } to {
    transform: translateX(0px);
    opacity: 1;
  }
`;

const textAnimation = keyframes`
  from {
    transform: translateX(-56px);
    opacity: 0;
  } to {
    transform: translateX(0px);
    opacity: 1;
  }
`;

const itemAnimation = keyframes`
  from {
    transform: translateX(-64px);
    opacity: 0;
  } to {
    transform: translateX(0px);
    opacity: 1;
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
  padding-bottom: 2.6rem;

  .container {
    width: 100%;
    min-height: 750px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .text {
      width: 100%;
      max-width: 59.2rem;

      .top {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;

        section.up-header {
          margin-bottom: 2.4rem;
        }

        h1 {
          margin-bottom: 1.6rem;
          animation: ${headerAnimation} 600ms ease-out;
        }

        p {
          width: 100%;
          max-width: 52rem;
          animation: ${textAnimation} 1000ms ease-out;
        }
      }

      .bottom {
        margin-top: 10.4rem;

        display: flex;
        align-items: center;
        justify-content: space-between;

        .item {
          width: 100%;
          max-width: 28rem;
          height: 11.8rem;

          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;

          animation: ${itemAnimation} 1200ms ease-out;

          &:hover > img {
            transform: rotate(8deg);
          }

          > img {
            transition: transform 0.3s;
            margin-bottom: 1.6rem;
          }

          h3 {
            margin-bottom: 0.4rem;
          }

          p {
            font-size: 1.4rem;
            line-height: 150%;
            color: var(--grayscale-700);
          }
        }
      }
    }

    .form {
      width: 100%;
      max-width: 488px;

      animation: ${formAnimation} ease-out 900ms;
    }
  }

  @media (max-width: 1208px) {
    align-items: flex-start;
    margin-top: 4rem;
    padding: 0 3.2rem;
    height: 100%;

    .container {
      flex-direction: column;
      justify-content: flex-start;

      .text {
        .top {
          align-items: center;

          h1,
          p {
            text-align: center;
          }
        }

        .bottom {
          margin-top: 6.4rem;

          .item {
            align-items: center;

            h3,
            p {
              text-align: center;
            }
          }
        }
      }

      > .form {
        margin-top: 8rem;
        margin-bottom: 12rem;
      }
    }
  }

  @media (max-width: 622px) {
    padding: 0rem;

    .container {
      .text {
        .top {
          h1 {
            font-size: 3.2rem;
          }

          p {
            font-size: 1.6rem;
          }
        }

        .bottom {
          display: none;
        }
      }

      .form {
        margin-top: 4rem;
        font-size: 1.8rem;

        input.form + input.form {
          margin-top: 2.4rem;
        }
      }
    }
  }
`;
