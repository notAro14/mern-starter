import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom'
import { Router, Link } from '@reach/router'

// import Home from './views/Home'
// import Profile from './views/Profile'

const Home = lazy(() => import('./views/Home'))
const Profile = lazy(() => import('./views/Profile'))

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/profile'>Profile</Link>
        </li>
      </ul>
      <Suspense fallback={() => <div>Loading...</div>}>
        <Router>
          <Home path='/' />
          <Profile path='/profile' />
        </Router>
      </Suspense>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
