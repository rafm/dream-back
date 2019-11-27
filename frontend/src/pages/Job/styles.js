import styled from 'styled-components';
import { lighten } from 'polished';

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

export const Opportunity = styled.div`
  display: flex;
  flex-direction: row;
  border: solid #eee 1px;
  padding: 20px 0;
  text-align: justify;
  margin-top: 40px;
  background: #f5f5f5;
  -webkit-box-shadow: 5px 5px 5px 0px rgba(190, 190, 190, 1);
  -moz-box-shadow: 5px 5px 5px 0px rgba(190, 190, 190, 1);
  box-shadow: 5px 5px 5px 0px rgba(190, 190, 190, 1);

  h3 {
    color: #686f7a;
    margin: 10px 0;
  }
`;

export const Description = styled.div`
  padding: 0 50px;
`;
export const Role = styled.div`
  padding: 0 50px;
`;
