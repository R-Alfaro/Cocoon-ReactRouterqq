import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const Sidemainenu = () => {
     return (
          <div className="side_menu_section">
               <ul className="menu_nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/element">Element</Link></li>
               </ul>
          </div>
     )
}

export default Sidemainenu;
