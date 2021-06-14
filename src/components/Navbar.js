import  'react-bootstrap/Navbar'; 
import React from 'react';
import { Link } from 'react-router-dom'

 const Navbar = ()=>{
    return(
        <nav class="navbar navbar-inverse navbar-fixed top">
        <div class="container">
      <div class="navbar-header ">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#mynav">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
          </button>
          <Link to="/" class="navbar-brand" >Lifestyle Store</Link>
       </div>
            <div class="collapse navbar-collapse" id="mynav" >
            <ul class="nav navbar-nav navbar-right"> 
                <li ><Link to="/">Collections</Link></li>
                <li ><Link to="/cart"><span class="glyphicon glyphicon-shopping-cart"></span> My cart</Link></li>
      </ul>  
         </div>       
        </div>  
  </nav> 
    )
}

export default Navbar;