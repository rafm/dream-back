import React from 'react';
import {
  Container,
  Header,
  LandingText,
  Buttons,
  Compliments,
  Compliment,
  Contact,
  ContactArea,
  ContactText
} from './styles';
import logo from '../../assets/logo.png';
import personImage from '../../assets/personImage.jpg';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <Container>
        <Header>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
          <div>
            <Link to="/login">Entrar</Link>
          </div>
        </Header>
        <LandingText>
          <h1>
            Uma plataforma que conecta estudantes, professores e empresas.
          </h1>
          <h2>
            Aprenda novas tecnologias, transmita conhecimento ou ofereça
            oportunidades.
          </h2>
          <Buttons>
            <Link to="study">Quero aprender</Link>
            <Link to="teach">Quero ensinar</Link>
            <Link to="job">Quero contratar</Link>
          </Buttons>
        </LandingText>
      </Container>
      <Compliments>
        <h1>Depoimentos</h1>
        <Compliment>
          <div>
            <img src={personImage} alt="" />
            <p>
              Fiz um curso de ReactJs e em menos de 6 meses consegui adquirir
              muito conhecimento e realizer um trabalho como freelancer.
            </p>
          </div>
          <div>
            <img src={personImage} alt="" />
            <p>
              Fiz um curso de ReactJs e em menos de 6 meses consegui adquirir
              muito conhecimento e realizer um trabalho como freelancer.
            </p>
          </div>
          <div>
            <img src={personImage} alt="" />
            <p>
              Fiz um curso de ReactJs e em menos de 6 meses consegui adquirir
              muito conhecimento e realizer um trabalho como freelancer.
            </p>
          </div>
        </Compliment>
      </Compliments>
      <Contact>
        <h1>Contato</h1>
        <section>
          <ContactText>
            <h2>Dúvidas, Sugestões ou Reclamações?</h2>
            <p>
              Nos contate em{' '}
              <a href="mailto:contato@dream.com">contato@dream.com</a>
            </p>
          </ContactText>
          <ContactArea>
            <p>Nome:</p>
            <input type="text" name="name" />
            <p>Email:</p>
            <input type="email" name="email" />
            <p>Mensagem:</p>
            <textarea></textarea>
          </ContactArea>
        </section>
      </Contact>
    </>
  );
}
