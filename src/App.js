/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';

import SideMainMenu from './components/LeftSideMenu/sideMainMenu';
import SideLogo from './components/LeftSideMenu/sideLogo';
import SideFilter from './components/LeftSideMenu/sideFilter';
import SideSocialCopyRight from './components/LeftSideMenu/sideSocialCopyright';

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
                    <div className="App">
                         <div className="loader">
                              <div className="loader-outter"></div>
                              <div className="loader-inner"></div>
                         </div>

                         <div className="body-container container-fluid">
                              <a className="menu-btn" href="#" onClick={e => e.preventDefault()}>
                                   <i className="ion ion-grid"></i>
                              </a>
                              <div className="row justify-content-center">
                                   {/* =================== side menu ==================== */}
                                   <div className="col-lg-2 col-md-3 col-12 menu_block">
                                        {/* <!--logo --> */}
                                        <SideLogo />
                                        {/* <!--logo end--> */}

                                        {/* main menu */}
                                        <SideMainMenu />
                                        {/* main menu end */}

                                        {/* <!--filter menu --> */}
                                        <SideFilter />
                                        {/* <!--filter menu end --> */}

                                        {/* <!--social and copyright --> */}
                                        <SideSocialCopyRight />
                                        {/* <!--social and copyright end --> */}
                                   </div>
                                   {/* =================== side menu end====================*/}

                                   {/* =================== content body ====================*/}
                                   <div className="col-lg-10 col-md-9 col-12 body_block align-content-center">
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