import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';

import SideMainMenu from './components/sideMainMenu';
import Home from './components/Home/home';
import About from "./components/About/about";
import Services from './components/Services/services';
import Portfolio from "./components/Protfolio/portfolio";
import Blog from "./components/Blog/blog";
import Contact from './components/Contact/contact';
import Element from './components/Element/element';

import './App.css';

class App extends Component {
     render() {
          return (
               <BrowserRouter>
                    <div class="App">
                         <div className="loader">
                              <div className="loader-outter"></div>
                              <div className="loader-inner"></div>
                         </div>
                         <div className="body-container container-fluid">
                              <a className="menu-btn" href="javascript:void(0)">
                                   <i className="ion ion-grid"></i>
                              </a>
                              <div className="row justify-content-center">

                                   {/* =================== side menu ==================== */}
                                   <div className="col-lg-2 col-md-3 col-12 menu_block">
                                        {/* <!--logo --> */}
                                        <div className="logo_box">
                                             <a href="#">
                                                  <img src="assets/img/logo.png" alt="cocoon" />
                                             </a>
                                        </div>
                                        {/* <!--logo end--> */}

                                        {/* main menu */}
                                        <SideMainMenu />
                                        {/* main menu end */}

                                        {/* <!--filter menu --> */}
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
                                                       <p className="copyright">Copyright &copy;<script>document.write(new Date().getFullYear());</script>
                                                            All rights reserved | This template is made with <i className="fa
                                                                 fa-heart-o" aria-hidden="true"></i> by <a
                                                                 href="https://colorlib.com" target="_blank">Colorlib</a></p>
                                                       {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                                                  </div>
                                             </div>
                                        </div>
                                        {/* <!--social and copyright end --> */}
                                   </div>
                                   {/* =================== side menu end====================*/}

                                   {/* =================== content body ====================*/}
                                   <div className="col-lg-10 col-md-9 col-12 body_block align-content-center">
                                        <h1>Hello React Router</h1>
                                        <Route exact path='/' component={Home} />
                                        <Route path='/about' component={About} />
                                        <Route path='/services' component={Services} />
                                        <Route path='/portfolio' component={Portfolio} />
                                        <Route path='/blog' component={Blog} />
                                        <Route path='/contact' component={Contact} />
                                        <Route path='/element' component={Element} />
                                   </div>
                                   {/* =================== content body End ================*/}
                              </div>
                         </div>
                    </div>
               </BrowserRouter>
          );
     }
}

export default App;
