import React from 'react'
import styled from 'styled-components'
import { NavElement } from './NavElement'

const NavBarContainer = styled.ul`
  align-items: center;
  display: flex;
  margin-bottom: 0.9rem;
`

export function NavBar() {
  return (
    <NavBarContainer>
      <NavElement linkTo='/' textContent='Home' />
      <NavElement linkTo='/profile' textContent='Profile' />
    </NavBarContainer>
  )
}
