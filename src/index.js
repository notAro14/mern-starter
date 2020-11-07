import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom'
// router
import { Router } from '@reach/router'
// components
import { NavBar } from './components/NavBar'
// styles
import './main.scss'

const Home = lazy(() => import('./views/Home'))
const About = lazy(() => import('./views/About'))
const Profile = lazy(() => import('./views/Profile'))

function Fallback() {
  return <div>Loading...</div>
}

function App() {
  return (
    <div>
      <NavBar />
      <Suspense fallback={<Fallback />}>
        <Router>
          <Home path='/' />
          <About path='/about' />
          <Profile path='/profile' />
        </Router>
      </Suspense>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
