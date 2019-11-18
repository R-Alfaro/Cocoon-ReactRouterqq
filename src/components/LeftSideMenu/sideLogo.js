import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const SideLogo = () => {
     return (
          <div className="logo_box">
               <Link to="/" rel="noopener noreferrer">
                    <img src="assets/img/logo.png" alt="cocoon" />
               </Link>
          </div>
     )
}

export default SideLogo;
