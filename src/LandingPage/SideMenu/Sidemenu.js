import React from 'react'

function Sidemenu() {
     return (
          <div className="col-lg-2 col-md-3 col-12 menu_block">

               {/* logo */}
               <div className="logo_box">
               <a href="#"><img src="assets/img/logo.png" alt="cocoon"/></a>
               </div>
               {/* logo end*/}

               {/* main menu */}
               <div className="side_menu_section">
                    <ul className="menu_nav">
                         <li className="active">
                              <a href="index.html">Home</a>
                         </li>
                         <li>
                              <a href="about.html">About Us</a>
                         </li>
                         <li>
                              <a href="services.html">Services</a>
                         </li>
                         <li>
                              <a href="portfolio.html">Portfolio</a>
                         </li>
                         <li>
                              <a href="blog.html">Blog</a>
                         </li>
                         <li>
                              <a href="contact.html">Contact</a>
                         </li>
                         <li>
                              <a href="contact.html">Ramiro</a>
                         </li>
                    </ul>
               </div>
               {/* main menu end */}

               {/* filter menu */}
               <div className="side_menu_section">
                    <h4 className="side_title">filter by:</h4>
                    <ul id="filtr-container" className="filter_nav">
                         <li data-filter="*" className="active"><a href="javascript:void(0)">all</a></li>
                         <li data-filter=".branding"> <a href="javascript:void(0)">branding</a></li>
                         <li data-filter=".design"><a href="javascript:void(0)">design</a></li>
                         <li data-filter=".photography"><a href="javascript:void(0)">photography</a></li>
                         <li data-filter=".architecture"><a href="javascript:void(0)">architecture</a></li>
                    </ul>
               </div>
               {/* filter menu end */}

               {/* social and copyright */}
               <div className="side_menu_bottom">
                    <div className="side_menu_bottom_inner">
                         <ul className="social_menu">
                              <li>
                                   <a href="#"> <i className="ion ion-social-pinterest"></i> </a>
                              </li>
                              <li>
                                   <a href="#"> <i className="ion ion-social-facebook"></i> </a>
                              </li>
                              <li>
                                   <a href="#"> <i className="ion ion-social-twitter"></i> </a>
                              </li>
                              <li>
                                   <a href="#"> <i className="ion ion-social-dribbble"></i> </a>
                              </li>
                         </ul>
                         <div className="copy_right">
                              {/*  Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                              <p className="copyright">Copyright &copy;<script>document.write(new Date().getFullYear());</script>
                                   All rights reserved | This template is made with <i className="fa
                                        fa-heart-o" aria-hidden="true"></i> by <a
                                        href="https://colorlib.com" target="_blank">Colorlib</a></p>
                              {/*  Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                         </div>
                    </div>
               </div>
               {/* social and copyright end */}
          </div>
     )
}

export default Sidemenu;