import React, { Component } from 'react'
import './App.css';

class AppBlog extends Component {
     render() {
          return (
               <div className="App">
                    <div className="loader">
                         <div className="loader-outter"></div>
                         <div className="loader-inner"></div>
                    </div>

                    <div className="body-container container-fluid">
                         <a className="menu-btn" href="javascript:void(0)">
                              <i className="ion ion-grid"></i>
                         </a>
                         <div className="row justify-content-center">
                              {/* <!--=================== side menu ====================--> */}
                              <div className="col-lg-2 col-md-3 col-12 menu_block">

                                   {/* <!--logo --> */}
                                   <div className="logo_box">
                                        <a href="#">
                                             <img src="assets/img/logo.png" alt="cocoon" />
                                        </a>
                                   </div>
                                   {/* <!--logo end--> */}

                                   {/* <!--main menu --> */}
                                   <div className="side_menu_section">
                                        <ul className="menu_nav">
                                             <li>
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
                                             <li className="active">
                                                  <a href="blog.html">Blog</a>
                                             </li>
                                             <li>
                                                  <a href="contact.html">Contact</a>
                                             </li>
                                        </ul>
                                   </div>
                                   {/* <!--main menu end --> */}

                                   {/* <!--filter menu --> */}
                                   <div className="side_menu_section">
                                        <h4 className="side_title">filter by:</h4>
                                        <ul id="filtr-container" className="filter_nav">
                                             <li data-filter="*" className="active"><a href="javascript:void(0)" >all</a></li>
                                             <li data-filter=".branding"> <a href="javascript:void(0)">branding</a></li>
                                             <li data-filter=".design"><a href="javascript:void(0)">design</a></li>
                                             <li data-filter=".photography"><a href="javascript:void(0)">photography</a></li>
                                             <li data-filter=".architecture"><a href="javascript:void(0)">architecture</a></li>
                                        </ul>
                                   </div>
                                   {/* <!--filter menu end --> */}


                                   {/* <!--social and copyright --> */}
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
                                                  {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                                                  <p className="copyright">Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a></p>
                                                  {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                                             </div>
                                        </div>
                                   </div>
                                   {/* <!--social and copyright end --> */}

                              </div>
                              {/* <!--=================== side menu end====================--> */}

                              {/* <!--=================== content body ====================--> */}
                              <div className="col-lg-10 col-md-9 col-12 body_block  align-content-center">
                                   <div className="blog">
                                        <div className="row justify-content-center">
                                             <div className="col-lg-4 col-md-12 col-12">
                                                  <div className="sidebar">
                                                       <div className="widget widget_search">
                                                            <div className="search-form">
                                                                 <input type="text" className="search-field" placeholder="Search" />
                                                            </div>
                                                       </div>
                                                       <div className="widget widget_categories">
                                                            <h4 className="widget-title">Categories</h4>
                                                            <ul>
                                                                 <li><a href="#">Vestibulum maximus</a></li>
                                                                 <li><a href="#">Nisi eu lobortis pharetra</a></li>
                                                                 <li><a href="#">Orci quam accumsan </a></li>
                                                                 <li><a href="#">Auguen pharetra massa</a></li>
                                                            </ul>
                                                       </div>
                                                       <div className="widget widget_instagram">
                                                            <h4 className="widget-title">Instagram</h4>
                                                            <ul>
                                                                 <li><a href="#"><img src="assets/img/blog/instagram/inst5.png" alt="instagram" /></a></li>
                                                                 <li><a href="#"><img src="assets/img/blog/instagram/inst2.png" alt="instagram" /></a></li>
                                                                 <li><a href="#"><img src="assets/img/blog/instagram/inst3.png" alt="instagram" /></a></li>
                                                                 <li><a href="#"><img src="assets/img/blog/instagram/inst4.png" alt="instagram" /></a></li>
                                                                 <li><a href="#"><img src="assets/img/blog/instagram/inst5.png" alt="instagram" /></a></li>
                                                                 <li><a href="#"><img src="assets/img/blog/instagram/inst6.png" alt="instagram" /></a></li>
                                                            </ul>
                                                       </div>
                                                       <div className="widget widget_tags">
                                                            <h4 className="widget-title">Tags</h4>
                                                            <ul>
                                                                 <li><a href="#">branding</a></li>
                                                                 <li><a href="#">identity</a></li>
                                                                 <li><a href="#">design</a></li>
                                                                 <li><a href="#">inspiration</a></li>
                                                                 <li><a href="#">web design</a></li>
                                                                 <li><a href="#">video</a></li>
                                                                 <li><a href="#">photography</a></li>
                                                            </ul>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div className="col-lg-8 col-md-12 col-12">
                                                  <article className="blog_card">
                                                       <div className="blog_card_top">
                                                            <img src="assets/img/blog/blog1.png" alt="blog title " />
                                                            <div className="blog_date">30
                                                                 <span>October 2017</span>
                                                            </div>
                                                       </div>
                                                       <div className="blog_card_bottom">
                                                            <h4>
                                                                 <a href="#">A short blog post about design</a>
                                                            </h4>
                                                            <div className="meta_data">
                                                                 <span>By Loredana Papp-Dinea</span>
                                                                 <span>Design, Inspiration, Creative</span>
                                                                 <span>3 Comments</span>
                                                            </div>
                                                            <p>
                                                                 Etiam finibus consequat ante ac congue. Quisque porttitor porttitor tempus. Donec maximusLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur leo est, feugiat nec elementum id, suscipit id nulla. Nulla sit amet luctus dolor. Etiam finibus consequat ante ac congue. Quisque porttitor porttitor tempus. Donec maximus ipsum non ornare vestibulum...
                                                            </p>
                                                       </div>
                                                  </article>
                                                  <article className="blog_card">
                                                       <div className="blog_card_top">
                                                            <img src="assets/img/blog/blog2.png" alt="blog title " />
                                                            <div className="blog_date">31
                                                                 <span>
                                                                      October 2017
                                                                 </span>
                                                            </div>
                                                       </div>
                                                       <div className="blog_card_bottom">
                                                            <h4>
                                                                 <a href="#">
                                                                      A short blog post about design
                                                                 </a>
                                                            </h4>
                                                            <div className="meta_data">
                                                                 <span>By Loredana Papp-Dinea</span>
                                                                 <span>Design, Inspiration, Creative</span>
                                                                 <span>3 Comments</span>
                                                            </div>
                                                            <p>
                                                                 Etiam finibus consequat ante ac congue. Quisque porttitor porttitor tempus. Donec maximusLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur leo est, feugiat nec elementum id, suscipit id nulla. Nulla sit amet luctus dolor. Etiam finibus consequat ante ac congue. Quisque porttitor porttitor tempus. Donec maximus ipsum non ornare vestibulum...
                                                            </p>
                                                       </div>
                                                  </article>
                                                  <article className="blog_card">
                                                       <div className="blog_card_top">
                                                            <img src="assets/img/blog/blog3.png" alt="blog title " />
                                                            <div className="blog_date">31
                                                                 <span>
                                                                      October 2017
                                                                 </span>
                                                            </div>
                                                       </div>
                                                       <div className="blog_card_bottom">
                                                            <h4>
                                                                 <a href="#">
                                                                      A short blog post about design
                                                                 </a>
                                                            </h4>
                                                            <div className="meta_data">
                                                                 <span>By Loredana Papp-Dinea</span>
                                                                 <span>Design, Inspiration, Creative</span>
                                                                 <span>3 Comments</span>
                                                            </div>
                                                            <p>
                                                                 Etiam finibus consequat ante ac congue. Quisque porttitor porttitor tempus. Donec maximusLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur leo est, feugiat nec elementum id, suscipit id nulla. Nulla sit amet luctus dolor. Etiam finibus consequat ante ac congue. Quisque porttitor porttitor tempus. Donec maximus ipsum non ornare vestibulum...
                                                            </p>
                                                       </div>
                                                  </article>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              {/* <!--=================== content body end ====================--> */}
                         </div>
                    </div>
               </div>
          );
     }
}

export default AppBlog;
