import React from 'react'
import classes from '../styles/common.module.scss'

export default () => {
  const [reveal, setReveal] = React.useState(false)
  return (
    <div>
      <h1 className={classes.title}>About Page</h1>
      <p className={classes['textBody']}>
        While happily ignoring when being called chase the pig around the house.
        Chase red laser dot scratch the postman wake up lick paw wake up owner
        meow meow or eat the rubberband stare out the window love you, then bite
        you yet meow meow, i tell my human.
      </p>
      <button className={classes.button} onClick={() => setReveal(!reveal)}>
        {reveal ? 'Hide' : 'Reveal me'}
      </button>
      <br />
    </div>
  )
}
