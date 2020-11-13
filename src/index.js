import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom'
// router
import { Router } from '@reach/router'
// components
import { Navbar } from './components/Navbar'
// styles
import './main.scss'

const HomePage = lazy(() => import('./views/HomePage'))
const InstallationPage = lazy(() => import('./views/InstallationPage'))

function Fallback() {
  return <div>Loading...</div>
}

function App() {
  return (
    <div>
      <Navbar />
      <Suspense fallback={<Fallback />}>
        <Router>
          <HomePage path='/' />
          <InstallationPage path='/installation' />
        </Router>
      </Suspense>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
