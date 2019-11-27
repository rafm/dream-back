import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Content = styled.div`
  min-width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  padding: 60px;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(190, 190, 190, 1);
  -moz-box-shadow: 0px 0px 5px 0px rgba(190, 190, 190, 1);
  box-shadow: 0px 0px 5px 0px rgba(190, 190, 190, 1);

  img {
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;

    input {
      margin: 0 0 20px;
      border-radius: 5px;
      border: 0;
      background: rgba(0, 0, 0, 0.1);
      padding: 10px;
      width: 100%;
    }

    button {
      background: #4dcb4d;
      color: #fff;
      border: 0;
      border-radius: 5px;
      padding: 10px;
      font-size: 16px;
      font-weight: bold;
      &:hover {
        background: ${darken(0.03, '#4dcb4d')};
      }
    }
  }
`;
