import React from 'react'
import { Button, TextBody, Title, Image } from '../components/Common/index'
import nietzsche from '../images/nietzsche.png'

export default () => {
  const [reveal, setReveal] = React.useState(false)
  return (
    <div>
      <Title>Webpack config for React</Title>
      <TextBody>
        Cat ipsum dolor sit amet,
        ccccccccccccaaaaaaaaaaaaaaatttttttttttttttttssssssssssssssss so pee on
        walls it smells like breakfast scamper. Lick the curtain just to be
        annoying soft kitty warm kitty little ball of furr but fall asleep
        upside-down yet rub against owner because nose is wet. Snuggles up to
        shoulders or knees and purrs you to sleep human is behind a closed door,
        emergency! abandoned! meeooowwww!!!.
      </TextBody>
      <TextBody>
        While happily ignoring when being called chase the pig around the house.
        Chase red laser dot scratch the postman wake up lick paw wake up owner
        meow meow or eat the rubberband stare out the window love you, then bite
        you yet meow meow, i tell my human.
      </TextBody>
      <Button onClick={() => setReveal(!reveal)}>
        {reveal ? 'Hide' : 'Reveal me'}
      </Button>
      <br />
      {reveal && <Image src={nietzsche} />}
    </div>
  )
}
