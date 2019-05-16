import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Intro from '../components/Intro';
import Description from '../components/Description';
import Form from '../components/Form';
import img from '../images/backgroundImg.jpg';
import GlobalStyle from '../components/globalStyles';

const Background = styled.div`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  width: 100vw;
  height: fit-content(100%);
  margin: 0;
  position: absolute;
  z-index: 1;
`;

const Letter = styled.div`
  background: snow;
  box-shadow: 2px 2px 10px #888888;
  margin: 7% 5%;
  z-index: 1000;
  padding: 4em;
`;

const App = () => (
  <>
    <GlobalStyle />
    <Background>
      <Letter>
        <Header />
        <Intro />
        <Description />
        <Form />
      </Letter>
    </Background>
  </>
);

export default App;
