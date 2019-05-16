import styled from 'styled-components';
import { animated } from 'react-spring';

export default styled.div`
  z-index: 20000;
  position: fixed;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
`;

export const SubmittedText = styled(animated.h1)`
  font-family: "Playfair Display SC";
  font-size: 7em;
  font-weight: bold;
  justify-self: center;
  color: white;
  margin: 2.5%;
`;

export const SubmittedSubText = styled(animated.p)`
  font-family: "Playfair Display SC";
  font-size: 3em;
  justify-self: center;
  color: white;
  margin: 2.5%;
  margin-top: 0;
`;
