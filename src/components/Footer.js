import React from 'react';
import styled from 'styled-components';
import { Grid, Segment } from 'semantic-ui-react';


const Footer = () => (
  <StyledDiv>
    <h1>Footer</h1>
    <Grid textAlign='center' column={3}>
      <Grid.Row>
        <Grid.Column textAlign="center" width={5} style={{border:'1px solid black'}}>
          <ul>
            <li>Services</li>
            <li>Rooms</li>
            <li>FAQs</li>
          </ul>
        </Grid.Column>
        <Grid.Column textAlign="center" width={5} style={{border:'1px solid black'}}>
          Column 2
        </Grid.Column>
        <Grid.Column textAlign="center" width={5} style={{border:'1px solid black'}}>
          <ul>
            <li>(999)999-9999</li>
            <li>island@email.com</li>
            <li>Icons</li>
          </ul>
        </Grid.Column>
      </Grid.Row>

    </Grid>
  </StyledDiv>
)

const StyledDiv = styled.div`
  background-color: #eae3c8;
  padding-top: 25px;
  margin-top: 150px;
  text-align: center;
`

export default Footer;