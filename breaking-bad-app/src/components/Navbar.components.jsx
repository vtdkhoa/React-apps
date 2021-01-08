import React from 'react'
import { Link, withRouter } from 'react-router-dom'

function Navbar({ history: { location } }) {
  return (
    <div className="ui secondary menu">
      <Link to="/" className={`${location.pathname === '/' ? 'active' : ''} item`}>
        Characters
      </Link>
      <Link to="/episodes" className={`${location.pathname === '/episodes' ? 'active' : ''} item`}>
        Episodes
      </Link>
      <Link to="/quotes" className={`${location.pathname === '/quotes' ? 'active' : ''} item`}>
        Quotes
      </Link>
    </div>
  )
}

export default withRouter(Navbar)