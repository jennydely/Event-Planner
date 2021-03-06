import styled from 'styled-components/macro'

export default styled.p`
  display: inline;
  color: var(--errorMessages);
  font-size: 75%;
  text-align: right;
  margin: 0;
  margin-right: 4px;
  pointer-events: none;

  ::before {
    display: inline;
    content: '⚠ ';
  }
`
