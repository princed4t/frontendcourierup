import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    
    <div className='container-fluid'>
  <a className="navbar-brand" href="#">CourierWala by AAGMITECH</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className='margin'>
 
 
    </div>
   <Link className='btn btn-outline-light'   to="/login">Login</Link>
  
   
     </div>

  
  
 
</nav>


    </div>
  )
}

export default Navbar