import React from 'react'
import classes from '../styles/common.module.scss'

export default () => {
  const { title, textBody } = classes
  return (
    <div>
      <h1 className={title}>Profile page</h1>
      <p className={textBody}>
        While happily ignoring when being called chase the pig around the house.
        Chase red laser dot scratch the postman wake up lick paw wake up owner
        meow meow or eat the rubberband stare out the window love you, then bite
        you yet meow meow, i tell my human.
      </p>
    </div>
  )
}
