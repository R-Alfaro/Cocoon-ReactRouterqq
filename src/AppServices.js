import React, { Component } from 'react'
import './App.css';

class AppServices extends Component {
     render() {
          const bgImageStyle = {
               color: 'blue',
               backgroundImage: 'url("assets/img/bg/service_bg.png")',
          };

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
                                    <li className="active"><a href="services.html">Services</a>
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
                                        <a href="elements.html">Elements</a>
                                    </li>
                                </ul>
                            </div>
                            {/* <!--main menu end --> */}

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
                        {/* <!--=================== side menu end====================--> */}

                        {/* <!--=================== content body ====================--> */}
                        <div className="col-lg-10 col-md-9 col-12 body_block align-content-center">
                                {/* <!--=================== image card start here  (has two section left and right )====================--> */}
                                <div className="img_card">
                                    <div className="row justify-content-center">
                                        <div className="col-md-6 col-7 content_section">
                                            <div className="content_box">
                                                <div className="content_box_inner">
                                                    <div className="row justify-content-center">
                                                        {/* <!--=================== services boxes start here  ====================--> */}
                                                        <div className="col-md-6 col-12">
                                                            <div className="img_box_one text-left">
                                                                <img src="assets/img/icons/typo.png" alt="services icon" />
                                                                <div className="content">
                                                                    <h5>
                                                                        Typography Courses
                                                                    </h5>
                                                                    <p>
                                                                        Lorem ipsum dolor sit amet,
                                                                        consectetur adipiscing elit.
                                                                        Curabitur leo est, feugiat nec
                                                                        elementum.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-12">
                                                            <div className="img_box_one text-left">
                                                                <img src="assets/img/icons/flask.png" alt="services icon" />
                                                                <div className="content">
                                                                    <h5>
                                                                        Mix and Match
                                                                    </h5>
                                                                    <p>
                                                                        Lorem ipsum dolor sit amet,
                                                                        consectetur adipiscing elit.
                                                                        Curabitur leo est, feugiat nec
                                                                        elementum.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-12">
                                                            <div className="img_box_one text-left">
                                                                <img src="assets/img/icons/compass.png" alt="services icon" />
                                                                <div className="content">
                                                                    <h5>
                                                                        Architecture Plans
                                                                    </h5>
                                                                    <p>
                                                                        Lorem ipsum dolor sit amet,
                                                                        consectetur adipiscing elit.
                                                                        Curabitur leo est, feugiat nec
                                                                        elementum.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-12">
                                                            <div className="img_box_one text-left"> 
                                                                <img src="assets/img/icons/magic.png" alt="services icon" />
                                                                <div className="content">
                                                                    <h5>
                                                                        Brand Identity
                                                                    </h5>
                                                                    <p>
                                                                        Lorem ipsum dolor sit amet,
                                                                        consectetur adipiscing elit.
                                                                        Curabitur leo est, feugiat nec
                                                                        elementum.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-12">
                                                            <div className="img_box_one text-left">
                                                                <img src="assets/img/icons/idea.png" alt="services icon" />
                                                                <div className="content">
                                                                    <h5>
                                                                        Interior Design
                                                                    </h5>
                                                                    <p>
                                                                        Lorem ipsum dolor sit amet,
                                                                        consectetur adipiscing elit.
                                                                        Curabitur leo est, feugiat nec
                                                                        elementum.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-12">
                                                            <div className="img_box_one text-left">
                                                                <img src="assets/img/icons/satelite.png" alt="services icon" />
                                                                <div className="content">
                                                                    <h5>
                                                                        Collateral Design
                                                                    </h5>
                                                                    <p>
                                                                        Lorem ipsum dolor sit amet,
                                                                        consectetur adipiscing elit.
                                                                        Curabitur leo est, feugiat nec
                                                                        elementum.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* <!--=================== services boxes end here  ====================--> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-md-6 col-5 img_section" style={bgImageStyle}></div>
                                </div>
                                {/* <!--=================== image card end here ====================--> */}
                            </div>
                        </div>
                        {/* <!--=================== content body end ====================--> */}
                    </div>
                </div>
            
            </div>
          );
     }
}

export default AppServices;
