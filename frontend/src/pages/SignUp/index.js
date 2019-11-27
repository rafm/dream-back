import React from 'react';
import { Container, Content } from './styles';
import logo from '../../assets/logo.png';
import { Form, Input } from '@rocketseat/unform';

export default function SignUp() {
  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <Container>
      <Content>
        <img src={logo} alt="Logo " />

        <Form onSubmit={handleSubmit}>
          <Input type="text" name="name" placeholder="Seu nome" />
          <Input type="email" name="email" placeholder="Seu email" />
          <Input
            name="password"
            type="password"
            placeholder="Sua senha secreta"
          />

          <button type="submit">Cadastrar</button>
        </Form>
      </Content>
    </Container>
  );
}
