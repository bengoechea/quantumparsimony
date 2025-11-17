import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navigation() {
  const location = useLocation()
  
  const isActive = (path) => location.pathname === path ? 'active' : ''
  
  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-brand">
          <span>Quantum Parsimony</span> Hub
        </Link>
        <ul className="nav-links">
          <li><Link to="/" className={isActive('/')}>Home</Link></li>
          <li><Link to="/entropy-clarity" className={isActive('/entropy-clarity')}>Entropy vs Information</Link></li>
          <li><Link to="/danger-theory" className={isActive('/danger-theory')}>Danger Theory</Link></li>
          <li><Link to="/computational-modeling" className={isActive('/computational-modeling')}>Computational Modeling</Link></li>
          <li><Link to="/quantum-parsimony" className={isActive('/quantum-parsimony')}>Quantum Parsimony</Link></li>
          <li><Link to="/timeline" className={isActive('/timeline')}>Historical Timeline</Link></li>
          <li><Link to="/philosophy" className={isActive('/philosophy')}>Philosophy of Science</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
