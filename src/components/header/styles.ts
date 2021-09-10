import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 8rem;
  width: 100%;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .social-media {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      a {
        cursor: pointer;
        transition: transform 0.3s;

        &:hover {
          transform: rotate(15deg);
        }

        & + a {
          margin-left: 1.6rem;
        }
      }
    }
  }
`;
