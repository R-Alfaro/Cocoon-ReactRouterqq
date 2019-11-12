import React, { Component } from 'react'
import './App.css';

class App extends Component {
     render() {
          return (
               <div class="App">
                    <div className="loader">
                         <div className="loader-outter"></div>
                         <div className="loader-inner"></div>
                    </div>
                    <div className="body-container container-fluid">
                         <div className="body-container container-fluid">
                              <a href="home.html"><h1>Ramiro Alfaro - App</h1></a>
                         </div>
                    </div>
                    <div className="body-container container-fluid">
                         <a className="menu-btn" href="javascript:void(0)" alt="test">
                              <i className="ion ion-grid"></i>
                         </a>
          
                         <div className="row justify-content-center">
                              {/* =================== side menu ==================== */}
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
                                                  <a href="home.html">Home</a>
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
                                        </ul>
                                   </div>
                                   {/* main menu end */}

                                   {/* filter menu */}
                                   <div className="side_menu_section">
                                        <h4 className="side_title">filter by:</h4>
                                        <ul id="filtr-container" className="filter_nav">
                                             <li data-filter="*" className="active">
                                                  <a href="javascript:void(0)">all</a>
                                             </li>
                                             <li data-filter=".branding">
                                                  <a href="javascript:void(0)">branding</a>
                                             </li>
                                             <li data-filter=".design">
                                                  <a href="javascript:void(0)">design</a>
                                             </li>
                                             <li data-filter=".photography">
                                                  <a href="javascript:void(0)">photography</a>
                                             </li>
                                             <li data-filter=".architecture">
                                                  <a href="javascript:void(0)">architecture</a>
                                             </li>
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
                              {/* =================== side menu end====================*/}

                              {/* =================== content body ====================*/}
                              <div className="col-lg-10 col-md-9 col-12 body_block align-content-center">
                                   <div className="portfolio">
                                        {/* =================== masaonry portfolio start====================*/}
                                        <div className="container-fluid">
                                             <div className="grid img-container justify-content-center no-gutters">
                                                  <div className="grid-sizer col-sm-12 col-md-6 col-lg-3"></div>
                                                  <div className="grid-item branding col-sm-12 col-md-6 col-lg-3">
                                                       <a href="assets/img/portfolio/home-port1.png" title="project
                                                            name 1">
                                                            <div className="project_box_one">
                                                                 <img src="assets/img/portfolio/home-port1.png"
                                                                      alt="pro1" />
                                                                 <div className="product_info">
                                                                      <div className="product_info_text">
                                                                           <div className="product_info_text_inner">
                                                                                <i className="ion ion-plus"></i>
                                                                                <h4>project name</h4>
                                                                           </div>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </a>
                                                  </div>
                                                  <div className="grid-item branding architecture col-sm-12 col-md-6">
                                                       <a href="assets/img/portfolio/home-port2.png" title="project
                                                            name 2">
                                                            <div className="project_box_one">
                                                                 <img src="assets/img/portfolio/home-port2.png"
                                                                      alt="pro1" />
                                                                 <div className="product_info">
                                                                      <div className="product_info_text">
                                                                           <div className="product_info_text_inner">
                                                                                <i className="ion ion-plus"></i>
                                                                                <h4>project name</h4>
                                                                           </div>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </a>
                                                  </div>
                                                  <div className="grid-item design col-sm-12 col-md-6 col-lg-3">
                                                       <a href="assets/img/portfolio/home-port3.png" title="project
                                                            name 5">
                                                            <div className="project_box_one">
                                                                 <img src="assets/img/portfolio/home-port3.png"
                                                                      alt="pro1" />
                                                                 <div className="product_info">
                                                                      <div className="product_info_text">
                                                                           <div className="product_info_text_inner">
                                                                                <i className="ion ion-plus"></i>
                                                                                <h4>project name</h4>
                                                                           </div>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </a>
                                                  </div>
                                                  <div className="grid-item photography design col-sm-12 col-md-6
                                                       col-lg-3">
                                                       <a href="assets/img/portfolio/home-port4.png" title="project
                                                            name 5">
                                                            <div className="project_box_one">
                                                                 <img src="assets/img/portfolio/home-port4.png"
                                                                      alt="pro1" />
                                                                 <div className="product_info">
                                                                      <div className="product_info_text">
                                                                           <div className="product_info_text_inner">
                                                                                <i className="ion ion-plus"></i>
                                                                                <h4>project name</h4>
                                                                           </div>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </a>
                                                  </div>
                                                  <div className="grid-item branding photography col-sm-12 col-md-6
                                                       col-lg-3">
                                                       <a href="assets/img/portfolio/home-port5.png" title="project
                                                            name 5">
                                                            <div className="project_box_one">
                                                                 <img src="assets/img/portfolio/home-port5.png"
                                                                      alt="pro1" />
                                                                 <div className="product_info">
                                                                      <div className="product_info_text">
                                                                           <div className="product_info_text_inner">
                                                                                <i className="ion ion-plus"></i>
                                                                                <h4>project name</h4>
                                                                           </div>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </a>
                                                  </div>
                                                  <div className="grid-item architecture design col-sm-12 col-md-6
                                                       col-lg-3">
                                                       <a href="assets/img/portfolio/home-port6.png" title="project
                                                            name 5">
                                                            <div className="project_box_one">
                                                                 <img src="assets/img/portfolio/home-port6.png"
                                                                      alt="pro1" />
                                                                 <div className="product_info">
                                                                      <div className="product_info_text">
                                                                           <div className="product_info_text_inner">
                                                                                <i className="ion ion-plus"></i>
                                                                                <h4>project name</h4>
                                                                           </div>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </a>
                                                  </div>
                                                  <div className="grid-item photography architecture col-sm-12 col-md-6
                                                       col-lg-3">
                                                       <a href="assets/img/portfolio/home-port7.png" title="project
                                                            name 5">
                                                            <div className="project_box_one">
                                                                 <img src="assets/img/portfolio/home-port7.png"
                                                                      alt="pro1" />
                                                                 <div className="product_info">
                                                                      <div className="product_info_text">
                                                                           <div className="product_info_text_inner">
                                                                                <i className="ion ion-plus"></i>
                                                                                <h4>project name</h4>
                                                                           </div>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </a>
                                                  </div>
                                                  <div className="grid-item branding design col-sm-12 col-md-6 col-lg-3">
                                                       <a href="assets/img/portfolio/home-port8.png" title="project
                                                            name 5">
                                                            <div className="project_box_one">
                                                                 <img src="assets/img/portfolio/home-port8.png"
                                                                      alt="pro1" />
                                                                 <div className="product_info">
                                                                      <div className="product_info_text">
                                                                           <div className="product_info_text_inner">
                                                                                <i className="ion ion-plus"></i>
                                                                                <h4>project name</h4>
                                                                           </div>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </a>
                                                  </div>
                                                  <div className="grid-item architecture col-sm-12 col-md-6 col-lg-6">
                                                       <a href="assets/img/portfolio/home-port9.png" title="project
                                                            name 4">
                                                            <div className="project_box_one">
                                                                 <img src="assets/img/portfolio/home-port9.png"
                                                                      alt="pro1" />
                                                                 <div className="product_info">
                                                                      <div className="product_info_text">
                                                                           <div className="product_info_text_inner">
                                                                                <i className="ion ion-plus"></i>
                                                                                <h4>project name</h4>
                                                                           </div>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </a>
                                                  </div>
                                             </div>
                                        {/* =================== masaonry portfolio end====================*/}
                                        </div>
                                   </div>
                              {/* =================== content body end ====================*/}
                              </div>                       
                         </div>
                    </div>
               </div>
          );
     }
}

export default App;
