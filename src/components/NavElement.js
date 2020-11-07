import React from 'react'
import { Link } from '@reach/router'
import classes from '../styles/common.module.scss'

export function NavElement({ linkTo, textContent }) {
  return (
    <li className={classes['navbar-element']}>
      <Link className={classes.link} to={linkTo}>
        {textContent}
      </Link>
    </li>
  )
}
