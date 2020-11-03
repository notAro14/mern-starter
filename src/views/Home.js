import React, { Suspense, lazy } from 'react'
import { Button, TextBody, Title, Image } from '../components/Common/index'
import nietzsche from '../images/nietzsche.png'

export default () => {
  const [reveal, setReveal] = React.useState(false)
  return (
    <div>
      <Title>My own Webpack config for React</Title>
      <TextBody>Hello world</TextBody>
      <Button onClick={() => setReveal(!reveal)}>
        {reveal ? 'Hide' : 'Reveal me'}
      </Button>
      <br />
      {reveal && <Image src={nietzsche} />}
    </div>
  )
}
