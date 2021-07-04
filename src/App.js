import React from 'react'
import Home from './Pages/Home'

import { Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <h1>Social App</h1>
      <Switch>
            {/* <Route exact path='/' component={LandingPage}/> */}
            <Route exact path='/' component={Home}/>
            {/* <Route exact path='/user/:id' component={Details}/> */}
        </Switch>
    </div>
  )
}

export default App