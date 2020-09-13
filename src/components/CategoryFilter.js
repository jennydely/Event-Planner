import React from 'react'
import styled from 'styled-components/macro'
import SelectCategory from '../common/SelectCategory'

export default function CategoryFilter({ onSelectFilter }) {
  const categories = ['all', 'metal', 'medieval', 'holiday', 'other']

  return (
    <FilterContainer>
      <SelectCategory
        id="category"
        name={categories}
        options={categories}
        onSelectFilter={onSelectFilter}
      />
    </FilterContainer>
  )
}

const FilterContainer = styled.div`
  margin: 5px;
  background: grey;
`
