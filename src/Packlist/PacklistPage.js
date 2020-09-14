import React from 'react'
import styled from 'styled-components/macro'
import { useParams, useHistory } from 'react-router-dom'
import usePacklists from './usePacklists'
import ListItem from '../common/ListItem'
import ListContainer from '../common/ListContainer'
import Checkbox from '../common/Checkbox'
import { comparePacklists } from '../services/comparePacklists'
import { onCheckboxClick } from '../services/onCheckboxClick'

export default function PackListPage() {
  const { packlistName } = useParams()
  const { packlists } = usePacklists()
  const chosenPacklist = comparePacklists(packlists, packlistName)
  const history = useHistory()
  function goBackButton() {
    history.goBack()
  }
  return (
    <>
      <main>
        {packlistName ? <h1>PackList</h1> : <h1>No PackList</h1>}
        {packlistName ? <PacklistButton>{packlistName}</PacklistButton> : ''}

        {chosenPacklist ? (
          <ListContainer>
            {chosenPacklist.packlist.sort().map((item) => (
              <ListItemStyled key={item}>
                <Checkbox
                  type="checkbox"
                  checked={chosenPacklist.item.completed}
                  onCLick={handleCheckbox()}
                />
                <span>{item.item}</span>
                <div></div>
              </ListItemStyled>
            ))}
          </ListContainer>
        ) : (
          <NoPacklistText>
            There is no packlist added to this event
          </NoPacklistText>
        )}
      </main>
      <>
        <footer>
          <button type="button" onClick={goBackButton}>
            Back
          </button>
        </footer>
      </>
    </>
  )
  function handleCheckbox() {
    onCheckboxClick(packlist.id)
}

const NoPacklistText = styled.p`
  text-align: center;
`
const ListItemStyled = styled(ListItem)`
  justify-content: flex-start;
`
const PacklistButton = styled.button`
  border: var(--border-darkgrey);
  margin: 4px 0 0 7px;
  padding-bottom: 0;
`
