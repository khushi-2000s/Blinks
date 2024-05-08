import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <div className='container'>
<nav class="navbar navbar-expand-lg navbar-light bg-transparent">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse ps-5 " id="navbarTogglerDemo01">
      <a class="navbar-brand fs-3 fw-bolder" href="#">ZONATO</a>
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 pe-5">
        <li class="nav-item">
         <Link className='nav-link' to="/">Home</Link> 
        </li>
        <li class="nav-item">
         <Link className='nav-link' to="menu">Menu</Link>
        </li>
        <li class="nav-item">
         <Link className='nav-link' to="service">Service</Link>
        </li>
        <li class="nav-item">
         <Link className='nav-link' to="login" >Sign in</Link>
        </li>
          {/* list */}
      </ul>
      
    </div>
  </div>
</nav>

  


    </div>
  )
}
