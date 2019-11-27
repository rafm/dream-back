import React from 'react';
import { Container, Content } from './styles';
import logo from '../../assets/logo.png';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';

export default function SignIn() {
  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <Container>
      <Content>
        <img src={logo} alt="Logo " />

        <Form onSubmit={handleSubmit}>
          <Input type="email" name="email" placeholder="Seu email" />
          <Input
            name="password"
            type="password"
            placeholder="Sua senha secreta"
          />
          <button type="submit">Entrar</button>
          <Link to="/register">Não tem conta? Cadastre-se</Link>
        </Form>
      </Content>
    </Container>
  );
}
