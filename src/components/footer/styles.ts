import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;

  width: 100%;
  height: 8px;

  background: var(--illustra-gradient);

  @media (max-width: 1208px) {
    position: absolute;
    bottom: auto;
    left: auto;
  }
`;
