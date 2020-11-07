import React from 'react'
import { NavElement } from './NavElement'
import classes from '../styles/common.module.scss'

export function NavBar() {
  return (
    <ul className={classes.navbar}>
      <NavElement linkTo='/' textContent='Home' />
      <NavElement linkTo='/profile' textContent='Profile' />
      <NavElement linkTo='/about' textContent='About' />
    </ul>
  )
}
