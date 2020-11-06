import React from 'react'
import { Button, TextBody, Title, Image } from '../components/Common/index'
// import nietzsche from '../images/nietzsche.png'

export default () => {
  const [reveal, setReveal] = React.useState(false)
  return (
    <div>
      <Title>About Page</Title>
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
      {/* {reveal && <Image src={nietzsche} />} */}
    </div>
  )
}
