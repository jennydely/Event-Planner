import React from 'react'
import { animated } from 'react-spring'
import styled from 'styled-components/macro'
import { useHistory } from 'react-router-dom'

export default function EventDetails({ event, style, bind }) {
  const {
    poster,
    name,
    street,
    zip,
    location,
    price,
    website,
    packlistCategory,
  } = event
  const defaultImg =
    'https://delyed.de/wp-content/uploads/2018/01/5d737e918441914a9d2743268ef65439.jpg'
  const history = useHistory()
  function handleBackButtonClick() {
    history.push('/packlist/' + packlistCategory)
  }

  return (
    <Details name={event.category} style={style} {...bind}>
      <LinkPoster href={poster ? poster : website} target="blank">
        {' '}
        <EventPoster
          src={poster ? poster : defaultImg}
          alt={name + ' Poster'}
        />
      </LinkPoster>
      <Address>Address: </Address>
      <Price>Price: </Price>
      <Name>{name}</Name>
      <Street>{street}</Street>
      <Location>
        {zip} {location}
      </Location>
      <PriceValue>{price ? price + ' €' : 'kostenlos'} </PriceValue>
      <TicketLabel id="Ticket" price={price}>
        Ticket
      </TicketLabel>
      <Ticket type="checkbox" htmlFor="Ticket" price={price} />
      <ButtonContainer>
        <button onClick={handleBackButtonClick}>PackList</button>
        <ExternalLink href={website} target="blank" title="link">
          Website
        </ExternalLink>
        <ExternalLink
          href="https://www.google.de/maps"
          target="blank"
          title="link"
        >
          Googlemaps
        </ExternalLink>
      </ButtonContainer>
    </Details>
  )
}

const Details = styled(animated.section)`
  display: grid;
  grid-template-columns: 20% repeat(4, auto);
  grid-template-rows: repeat(8, auto) 30px auto;
  margin: 0;
  margin-top: -2px;
  border: 2px solid
    ${({ name }) =>
      name === 'sand'
        ? 'rgba(248,149,17,0.46)'
        : name === 'metal'
        ? 'rgba(49,42,42,0.75)'
        : name === 'medieval'
        ? 'rgba(67,40,24,0.70)'
        : name === 'other'
        ? 'rgba(153,88,42,0.70)'
        : 'rgb(96,99,104)'};
  border-top: 0;
  overflow: hidden;

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &::before {
    height: 0;
  }

  &::after {
    height: 8px;
    bottom: 0;
  }
`
const LinkPoster = styled.a`
  grid-column: 1;
  grid-row: 1 / span 5;
`
const EventPoster = styled.img`
  grid-column: 1 / span 1;
  grid-row: 1 / span 5;
  margin: 7px;
  object-fit: cover;
  width: 90%;
  max-height: 90%;
`
const Address = styled.p`
  grid-column: 2;
  grid-row: 1 / span 4;
  text-align: right;
  margin: 2px;
  margin-top: 7px;
  font-weight: bold;
  font-size: 100%;
`
const Price = styled.p`
  grid-column: 2;
  grid-row: 5;
  text-align: right;
  margin: 2px;
  font-weight: bold;
  font-size: 100%;
`
const TicketLabel = styled.label`
  grid-column: 2;
  grid-row: 6;
  text-align: right;
  margin: 2px;
  font-weight: bold;
  font-size: 100%;
  display: ${({ price }) => (price ? '' : 'none')};
`
const Name = styled.p`
  grid-column: 3/5;
  grid-row: 1;
  text-align: left;
  margin: 2px;
  margin-top: 7px;
  font-size: 100%;
`
const Street = styled.p`
  grid-column: 3/5;
  grid-row: 2;
  text-align: left;
  margin: 2px;
  font-size: 100%;
`
const Location = styled.p`
  grid-column: 3/5;
  grid-row: 3;
  text-align: left;
  margin: 2px;
  font-size: 100%;
`
const PriceValue = styled.p`
  grid-column: 3/5;
  grid-row: 5;
  text-align: left;
  margin: 2px;
  font-size: 100%;
`
const Ticket = styled.input`
  grid-column: 3;
  grid-row: 6;
  text-align: right;
  margin: 2px;
  font-weight: bold;
  font-size: 100%;
  display: ${({ price }) => (price ? '' : 'none')};
`
const ButtonContainer = styled.div`
  grid-column: 1/6;
  grid-row: 7;
  display: flex;
  width: 100%;
  padding: 7px;
  justify-content: space-around;
`
const ExternalLink = styled.a`
  display: inline-block;
  min-width: 50px;
  min-height: 50px;
  width: fit-content;
  height: fit-content;
  margin: 2px;
  padding: 6px 6px;
  border: solid 2px rgb(49, 42, 42);
  border-radius: 6px;
  background-color: rgba(49, 42, 42, 0.75);
  color: rgb(187, 148, 87);
  font-size: 130%;
  text-align: center;
`
