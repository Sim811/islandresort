import React from 'react';
import { Grid, Card, Button, Image } from 'semantic-ui-react';
import styled from 'styled-components';
import StandardRoom from '../images/standardroom.jpg';
import DeluxeRoom from '../images/deluxeroom.jpg';
import LuxuryRoom from '../images/luxuryroom.jpg';


const HRooms = () => (
  <StyledDiv >
    <Grid columns={3} stackable style={{paddingBottom: '30px',}} >
      <Grid.Row columns={3} >
        <Grid.Column>
          <StyledCard>
            <Image src={StandardRoom} />
            <Card.Content>
              <Card.Header>Standard Room</Card.Header>
              <Card.Meta>$160/night</Card.Meta>
            </Card.Content>
            <Card.Content>
              <StyledButton>Book Now</StyledButton>
            </Card.Content>
          </StyledCard>
        </Grid.Column>

        <Grid.Column>
          <StyledCard>
            <Image src={DeluxeRoom} />
            <Card.Content>
              <Card.Header>Deluxe Room</Card.Header>
              <Card.Meta>$200/night</Card.Meta>
            </Card.Content>
            <Card.Content>
              <StyledButton>Book Now</StyledButton>
            </Card.Content>
          </StyledCard>
        </Grid.Column>

        <Grid.Column>
          <StyledCard>
            <Image src={LuxuryRoom} />
            <Card.Content>
              <Card.Header>Luxury Room</Card.Header>
              <Card.Meta>$300/night</Card.Meta>
            </Card.Content>
            <Card.Content>
              <StyledButton>Book Now</StyledButton>
            </Card.Content>
          </StyledCard>
        </Grid.Column>
      </Grid.Row>
    </Grid>

  </StyledDiv>
);

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`
const StyledCard = styled(Card)`
  background-color: #eae3c8 !important;
  border-radius: 5px !important;
  box-shadow: 0px 0px 17px -2px #4C4C4C !important;
`
const StyledButton = styled(Button)`
  background-color: transparent !important;
  color: black !important;
  border-radius: 2px !important;
  border: 1px solid black !important;
  
  &:hover{
    background-color: black !important;
    color: white !important;
  }
`


export default HRooms;