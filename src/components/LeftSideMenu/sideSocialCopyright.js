import React from 'react'
//import { Link, NavLink } from 'react-router-dom';

const SideSocialCopyRight = () => {
     return (
          <div className="side_menu_bottom">
               <div className="side_menu_bottom_inner">
                    <ul className="social_menu">
                         <li>
                              <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer"> <i className="ion ion-social-pinterest"></i> </a>
                         </li>
                         <li>
                              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"> <i className="ion ion-social-facebook"></i> </a>
                         </li>
                         <li>
                              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> <i className="ion ion-social-twitter"></i> </a>
                         </li>
                         <li>
                              <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer"> <i className="ion ion-social-dribbble"></i> </a>
                         </li>
                    </ul>

                    <div className="copy_right">
                         {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                         <p className="copyright">Copyright &copy;<script>document.write(new Date().getFullYear());</script>
                              All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by
                              <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a>
                         </p>
                         {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                    </div>
               </div>
          </div>
     )
}

export default SideSocialCopyRight;
