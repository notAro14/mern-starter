import React from 'react'
import styled from 'styled-components'
import { Link } from './Common'

const NavElementContainer = styled.li`
  border-bottom: 1px solid transparent;
  margin-right: 1rem;
  padding-bottom: 0.5rem;
  transition: all ease-in 150ms;
  &:hover {
    border-bottom: 1px solid green;
  }
`
export function NavElement({ linkTo, textContent }) {
  return (
    <NavElementContainer>
      <Link to={linkTo}>{textContent}</Link>
    </NavElementContainer>
  )
}
