import React from 'react'
import '../styles/Nav.css'

function Nav() {
  return (
    <div className='Nav'>
      <header>
        <div>
          <h1 className='Go'>Go<h2 className='Money'>Money</h2></h1>
        </div>
        <nav>
          <div className="nav-items">
            <a href="#">HOME</a>
            <a href="#">PRICES</a>
            <a href="#">FAQ</a>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Nav