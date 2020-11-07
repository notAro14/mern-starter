import React, { Suspense, lazy } from 'react'
import classes from '../styles/common.module.scss'
import Fallback from '../components/Fallback'

// lazy loads
const Nietzsche = lazy(() => import('../components/Nietzsche'))

export default () => {
  const [reveal, setReveal] = React.useState(false)
  const { title, textBody, button, image } = classes
  return (
    <div>
      <h1 className={title}>Webpack config for React</h1>
      <p className={textBody}>
        Cat ipsum dolor sit amet,
        ccccccccccccaaaaaaaaaaaaaaatttttttttttttttttssssssssssssssss so pee on
        walls it smells like breakfast scamper. Lick the curtain just to be
        annoying soft kitty warm kitty little ball of furr but fall asleep
        upside-down yet rub against owner because nose is wet. Snuggles up to
        shoulders or knees and purrs you to sleep human is behind a closed door,
        emergency! abandoned! meeooowwww!!!.
      </p>
      <p className={textBody}>
        While happily ignoring when being called chase the pig around the house.
        Chase red laser dot scratch the postman wake up lick paw wake up owner
        meow meow or eat the rubberband stare out the window love you, then bite
        you yet meow meow, i tell my human.
      </p>
      <button className={button} onClick={() => setReveal(!reveal)}>
        {reveal ? 'Hide' : 'Reveal me'}
      </button>
      <br />
      <Suspense fallback={<Fallback />}>{reveal && <Nietzsche />}</Suspense>
    </div>
  )
}
