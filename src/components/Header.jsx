import React from 'react';
import styled from 'styled-components';

const StyledHeading = styled.h1`
  font-family: "Playfair Display SC";
  font-size: 4em;
  text-align: center;
  margin: 0;
`;

const StyledFlex = styled.div`
  display: flex;
  width: 100%;
  height: 10em;
  align-items: center;
  justify-content: center;
`;

const Header = () => (
  <header>
    <StyledFlex>
      <StyledHeading>Letter of Acquisition</StyledHeading>
    </StyledFlex>
  </header>
);

export default Header;
