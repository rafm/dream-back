import styled from 'styled-components';
import logo from '../../assets/bg2.jpg';

export const Container = styled.div`
  height: 100%;
  background: url(${logo});
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  img {
    width: 200px;
  }

  div {
    display: flex;
    flex-direction: row;
    a {
      margin: 0 10px;
      color: #fff;
      background: #4dcb4d;
      padding: 10px;
      border-radius: 5px;
      border: 0;
      font-weight: bold;
      font-size: 20px;
    }
  }
`;

export const LandingText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  height: 80%;
  color: #fff;

  h1 {
    margin-bottom: 10px;
    font-size: 32px;
    font-weight: normal;
  }

  h2 {
    font-weight: normal;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 576px;

  a {
    border: 0;
    border-radius: 5px;
    background: #4dcb4d;
    color: #fff;
    padding: 10px 20px;
    font-size: 20px;
    font-weight: bold;
    margin-top: 40px;
  }

  @media screen and (max-width: 576px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    a {
      width: 80%;
    }
  }
`;

export const Compliments = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background: #eee;

  h1 {
    margin-bottom: 20px;
  }
`;

export const Compliment = styled.div`
  display: flex;
  flex-direction: row;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    img {
      border-radius: 100%;
      height: 100px;
    }
    p {
      margin-left: 10px;
    }
  }

  @media screen and (max-width: 576px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
      margin: 20px 0;
    }
  }
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 100px;
  height: 50%;

  h1 {
    text-align: center;
    margin-top: 20px;
  }

  section {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    section {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const ContactText = styled.div`
  width: 50%;
  h2 {
    margin: 10px 0;
  }
`;

export const ContactArea = styled.div`
  width: 50%;
  input,
  textarea {
    width: 100%;
    margin: 10px 0;
    border-radius: 5px;
    border: 0;
    background: rgba(0, 0, 0, 0.1);
    padding: 10px;
  }

  @media screen and (max-width: 768px) {
    margin: 20px 0;
    width: 100%;
    input,
    textarea {
      width: 100%;
    }
  }
`;
