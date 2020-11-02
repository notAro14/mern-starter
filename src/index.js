import React from 'react'
import ReactDOM from 'react-dom'
import nietzsche from './images/nietzsche.png'
import { Button, Image, TextBody, Title } from './components/Common/index'

function App() {
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

ReactDOM.render(<App />, document.getElementById('root'))
