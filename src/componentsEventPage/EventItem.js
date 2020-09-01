import React from 'react';
import styled from 'styled-components/macro'
import {formatDate} from '../utils/date'
import EventDetails from './EventDetails'

export default function EventItem({event}) {
const{eventname, eventlocation, eventdate} = event

    return (
        <Event>
            <Title>{name} - {location}</Title>
            <Duration>{formatDate(eventDate)}</Duration>
            <EventDetails Hidden event ={event}></EventDetails>
        </Event>
    )
}



const Event = styled.li`
list-style:none;
border: 2px solid #964B00;
marign: 0;
margin-bottom:20px;
padding:4px;
text-align:center;
`
const Title = styled.h2`
margin: 0;
font-size: 100%;
`
const Duration = styled.p`
margin:0;
`