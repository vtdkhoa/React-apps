import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './Navbar.components'
import Characters from './Characters/Characters.component'
import Episodes from './Episodes/Episodes.component'
import Quotes from './Quotes/Quotes.component'
import './App.style.css'

const style = {
  marginTop: '5px'
}

function App() {
  return (
    <Router>
      <div className="ui container" style={style}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Characters} />
          <Route exact path="/episodes" component={Episodes} />
          <Route exact path="/quotes" component={Quotes} />
        </Switch>
      </div>
    </Router>
  )
}

export default App