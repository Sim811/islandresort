import React from 'react';
import styled from 'styled-components';
import { Header } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';


const Navbar = () => (
  <StyledDiv>

    <NavHeader>
      Home
    </NavHeader>
    <NavHeader>
      About
    </NavHeader>
    <NavHeader>
      Gallery
    </NavHeader>
    <NavHeader>
      Contact
    </NavHeader>

  </StyledDiv>
);

const StyledDiv = styled.div`
  display: flex !important;
  justify-content: center !important;

  @media screen and (max-width: 425px) {
    /* flex-direction: column; */
    display: none !important;
  }
`
const NavHeader = styled(Header)`
  padding: 0 30px 0 30px !important;
  margin-top: 25.429px !important;

  @media screen and (max-width: 425px) {
    /* margin-top: 1px !important; */
  }
`

export default Navbar;