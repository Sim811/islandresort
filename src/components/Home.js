import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Beach from '../images/beach.jpg';
import ServiceIcons from './ServiceIcons';
import HRooms from './HRooms';
import Footer from './Footer';


class Home extends React.Component {

  render(){
    return(
      <StyledDiv>

        <TitleHeader>Island Resort</TitleHeader>
        <Navbar/>

        <BeachDiv>
          <BeachImg src={Beach} />
        </BeachDiv>
        <br />
        <br />
        
        <ParadiseBgDiv>
          <TitleHeader>ESCAPE TO PARADISE</TitleHeader>
          <StyledP>Take a step back in time to experience true Hawaiian hospitality, 
            the overwhelming sense of “aloha,” and the simple pleasures that can only 
            be found at Maui Kaanapali Villas. Our property rests on 11 epic acres of 
            serene tropical gardens and Kaanapali’s immaculate white sand beach and our 
            upgraded Premium Suites offer the finest luxury for a more indulgent experience. 
            Here, there is no stress—only the sway of coconut palms and the pristine Pacific 
            Ocean at your feet
          </StyledP>
        </ParadiseBgDiv>
        <br />

        <ServiceBgDiv>
          <TitleHeader>SERVICES</TitleHeader>
          <ServiceIcons/>
        </ServiceBgDiv>
        <br />
        <br />
        <br />

        <RmBckColor>
          <TitleHeader>CHECK OUT OUR ROOMS</TitleHeader>
          <br />
          <HRooms/>
        </RmBckColor>
        <br />
        
        <Footer />

      </StyledDiv>
    )
  }
};

const StyledDiv = styled.div`
  margin-top: 5% !important;
`
const ParadiseBgDiv = styled.div`
  box-shadow: 0px 0px 32px -6px rgba(0,0,0,0.78);
  background-color: #c2b092;
  padding: 25px 0px;
  margin-top: 5%;
`
const ServiceBgDiv = styled.div`
  margin-top: 5%;
`

const RmBckColor = styled.div`
  box-shadow: 0px 0px 32px -6px rgba(0,0,0,0.78);
  background-color: #c2b092;
  margin: 5% 10%;
  padding: 25px 0px;
`
const TitleHeader = styled.h1`
  text-align: center !important;
  /* padding-top: 15px; */
`
const BeachImg = styled.img`
  box-shadow: 0px 0px 32px -6px rgba(0,0,0,0.78);
  height: 35rem;
  width: 90%;
`
const BeachDiv = styled.div`
  text-align: center;
`
const StyledP = styled.p`
  text-align: center;
  padding: 0 15%;
`

export default Home;