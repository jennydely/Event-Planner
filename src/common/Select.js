import React from 'react'
import styled from 'styled-components/macro'

export function Input({ register, name, ...rest }) {
  return <input name={name} ref={register} {...rest} />
}

export default function Select({ register, options, name, ...rest }) {
  return (
    <select name={name} ref={register} {...rest}>
      {options.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  )
}
