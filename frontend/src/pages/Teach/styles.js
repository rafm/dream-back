import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  -webkit-box-shadow: 0px 5px 4px 0px rgba(190, 190, 190, 1);
  -moz-box-shadow: 0px 5px 4px 0px rgba(190, 190, 190, 1);
  box-shadow: 0px 5px 4px 0px rgba(190, 190, 190, 1);

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

export const Company = styled.div`
  padding: 50px 200px;

  h1 {
    text-align: center;
    margin-bottom: 20px;
  }

  h2 {
    margin-bottom: 20px;
  }
`;

export const Course = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: solid #eee 1px;
  padding: 10px 0;
  margin: 10px 0;

  section {
    display: flex;
    flex-direction: row;
    width: 80%;

    img {
      height: 150px;
    }

    div {
      display: flex;
      flex-direction: column;
      padding: 0 10px;

      h1 {
        align-self: flex-start;
      }

      p {
        color: #686f7a;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 7;
        -webkit-box-orient: vertical;
      }
    }
  }

  button {
    height: 10%;
    align-self: flex-end;
    color: #fff;
    background: #4dcb4d;
    padding: 10px;
    border-radius: 5px;
    border: 0;
    font-weight: bold;
    font-size: 20px;
  }
`;
