import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --brand-primary: #4151D7;

    --illustra-gradient: linear-gradient(283.26deg, #8057F3 2.56%, #2F2BD0 74.14%);
    --button-gradient: linear-gradient(238.92deg, #5E2EC4 -13.15%, #4150D7 93.58%);
    --header-gradient: linear-gradient(90deg, #485AF0 0%, rgba(72, 90, 240, 0.6) 100%);

    --grayscale-900: #232931;
    --grayscale-800: #373F4A;
    --grayscale-700: #4A5563;
    --grayscale-400: #94A0B0;
    --grayscale-200: #D1D9E3;
    --grayscale-100: #E1E5EC;
    --grayscale-white: #ffffff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
    outline: none;
    list-style: none;
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
  }

  img {
    max-width: 100%;
  }

  html {
    font-size: 62.5%;

    @media (max-width: 735px) {
      font-size: 54%;
    }
  }

  body {
    color: var(--grayscale-900);
    background: var(--grayscale-white);
  }

  h1, h2, h3 {
    font-family: 'Raleway', sans-serif;
    font-weight: bold;
    font-size: 5.6rem;
    line-height: 125%;
    color: var(--grayscale-900);
    margin-bottom: 1.6rem;
  }

  h2 {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 155%;
  }

  h3 {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 150%;
  }

  p {
    font-family: 'Poppins', sans-serif;
    font-size: 1.8rem;
    line-height: 155%;
    color: var(--grayscale-800);
  }

  section.up-header {
    background: var(--header-gradient);
    height: 6px;
    width: 40px;
    border-radius: 3px;
  }

  input.form {
    width: 100%;
    max-width: 408px;
    height: 56px;
    border: 2px solid var(--grayscale-200);
    border-radius: 8px;
    padding: 0 2.4rem;

    font-family: 'Poppins', sans-serif;
    font-size: 1.6rem;
    line-height: 150%;
    color: var(--grayscale-900);

    transition: border 0.3s;

    &::placeholder {    
      font-family: 'Poppins', sans-serif;
      font-size: 1.6rem;
      line-height: 150%;
      color: var(--grayscale-400);
    }

    &:hover {
      border: 2px solid var(--brand-primary);
    }

    &:focus {
      border: 2px solid var(--brand-primary);
    }

    &:valid {
      border: 2px solid var(--brand-primary);
    }
  }

  .btn-primary {
    width: 100%;
    max-width: 408px;
    height: 56px;
    background: var(--button-gradient);
    border-radius: 8px;

    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 1.8rem;
    color: var(--grayscale-white);
    line-height: 150%;

    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background: linear-gradient(269.26deg, #6A34DE -20.81%, #4859F0 99.78%);
    }
  }

  .container {
    width: 100%;
    max-width: 128rem;
    padding: 0 3.2rem;
    margin: 0 auto;
  }
`;
