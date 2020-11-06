import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@reach/router'
import { GlobalStyle } from './globalStyle'
import { NavBar } from './components/NavBar'

const Home = lazy(() => import('./views/Home'))
const Profile = lazy(() => import('./views/Profile'))

function Fallback() {
  return <div>Loading...</div>
}

function App() {
  return (
    <div>
      <GlobalStyle />
      <NavBar />
      <Suspense fallback={<Fallback />}>
        <Router>
          <Home path='/' />
          <Profile path='/profile' />
        </Router>
      </Suspense>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
