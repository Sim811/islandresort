import React from 'react';
import styled from 'styled-components';
import { Grid, Header, Segment } from 'semantic-ui-react';
import { HiWifi } from 'react-icons/hi';
import { FaParking } from 'react-icons/fa';
import { RiCustomerServiceFill } from 'react-icons/ri';
import { MdRoomService } from 'react-icons/md';
import { BiDumbbell } from 'react-icons/bi';


const ServiceIcons = () => (
  <div>
    <Segment basic style={{ marginBottom: '25px', paddingTop: '0px' }}>

    <Grid  centered stackable>
      <Grid.Row>
        <CenterCol >
          <HiWifi size='large' />
          <IconNames>Free Wifi</IconNames>
        </CenterCol>
        <CenterCol>
          <MdRoomService size='large' />
          <IconNames>Room Service</IconNames>
        </CenterCol>
        <CenterCol>
          <FaParking size='large' />
          <IconNames>Free Parking</IconNames>
        </CenterCol>
        <CenterCol>
          <RiCustomerServiceFill size='large' />
          <IconNames>24/7 Service</IconNames>
        </CenterCol>
        <CenterCol>
          <BiDumbbell size='large' />
          <IconNames>Fitness Room</IconNames>
        </CenterCol>
      </Grid.Row>
    </Grid>
    </Segment>
  </div>
);

// const StyledDiv = styled.div`
  
// `

const CenterCol = styled(Grid.Column)`
  text-align: center !important;
  margin: 0 25px !important ;
  
`
const IconNames = styled(Header)`
  margin-top: 0 !important;
`


export default ServiceIcons;