import React, { useState } from 'react'
import { useSpring } from 'react-spring'
import useHeight from './useHeight'
import styled from 'styled-components/macro'
import { formatDate } from '../services/date'
import EventDetails from './EventDetails'

export default function EventItem({ event }) {
  const { name, location, category, eventStartDate, eventEndDate } = event
  const { height, bind } = useHeight([event])
  const [isEventDetailVisible, setIsEventDetailVisible] = useState(false)
  const detailStyle = {
    ...useSpring({
      height: isEventDetailVisible ? height : 0,
    }),
  }

  return (
    <Event>
      <EventHeader name={category} onClick={toggleEventDetail}>
        <h2>
          {name} - {location}
        </h2>
        <h3>{formatDate(eventStartDate, eventEndDate)}</h3>
      </EventHeader>
      <EventDetails event={event} style={detailStyle} bind={bind} />
    </Event>
  )

  function toggleEventDetail() {
    setIsEventDetailVisible(!isEventDetailVisible)
  }
}

const Event = styled.li`
  list-style: none;
  margin: 0;
  margin-bottom: 20px;
  padding: 4px;
  text-align: center;
`
const EventHeader = styled.div`
  margin: 0;
  background: ${({ name }) =>
    name === 'sand'
      ? 'rgba(248,149,17,0.46)'
      : name === 'metal'
      ? 'rgba(49,42,42,0.75)'
      : name === 'medieval'
      ? 'rgba(67,40,24,0.70)'
      : name === 'other'
      ? 'rgba(153,88,42,0.70)'
      : 'rgb(96,99,104)'};
`