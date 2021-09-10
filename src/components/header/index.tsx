import React from 'react';

import logo from '../../assets/logo.svg';
import instagram from '../../assets/instagram.svg';
import linkedin from '../../assets/linkedin.svg';
import facebook from '../../assets/facebook.svg';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <div className="container">
        <img src={logo} alt="logo-mooney" />

        <div className="social-media">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/mooneyedu/"
          >
            <img src={instagram} alt="instagram-icon" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/Mooney-107536814442120"
          >
            <img src={facebook} alt="facebook-icon" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/company/mooneyedu/mycompany/"
          >
            <img src={linkedin} alt="linkedin-icon" />
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Header;
