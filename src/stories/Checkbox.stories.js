import React from 'react'
import styled from 'styled-components/macro'
import Checkbox from '../common/Checkbox'
import ListItem from '../common/ListItem'

export default {
  title: 'EventPlanner/Checkbox',
  component: Checkbox,
}

const Template = (args) => (
  <>
    <ListItemStyled key="Zelt">
      <Checkbox {...args} type="Checkbox" /> <span>Zelt</span>
    </ListItemStyled>
  </>
)

export const box = Template.bind({})
box.args = {}

const ListItemStyled = styled(ListItem)`
  justify-content: flex-start;
`