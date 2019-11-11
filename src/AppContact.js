import React, { Component } from 'react'
import './App.css';

class AppContact extends Component {

     render() {
          const bgColorStyle = {
               backgroundcolor: '#000'
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
                                <a href="index.html">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="about.html">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="services.html">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="portfolio.html">
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <a href="blog.html">
                                    Blog
                                </a>
                            </li>
                            <li className="active">
                                <a href="contact.html">
                                    Contact
                                </a>
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
                    <div>
                        <div className="img_card">
                            <div className="row justify-content-center">
                                <div className="col-md-6 col-7 content_section">
                                    {/* <!--=================== contact info and form start====================--> */}
                                    <div className="content_box">
                                        <div className="content_box_inner">
                                            <div>
                                                <h3>
                                                    Get in touch with us
                                                </h3>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit. Curabitur leo est, feugiat nec
                                                    elementum id, suscipit id nulla. Nulla sit amet
                                                    luctus dolor. Etiam finibus consequat ante ac
                                                    congue.
                                                </p>

                                                <ul className="nosyely_list pt50">
                                                    <li>
                                                        <div className="img_box_two">
                                                            <img src="assets/img/icons/satelite.png"
                                                                alt="info list" />
                                                            <div className="content align-items-center">
                                                                <p>
                                                                    Rosia Road , No234/56<br/>
                                                                        Gibraltar , UK
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="img_box_two">
                                                                <img
                                                                    src="assets/img/icons/scheme.png"
                                                                    alt="info list" />
                                                                <div className="content
                                                                    align-items-center">
                                                                    <p>
                                                                        contact@cocoontemplate.com
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="img_box_two">
                                                                <img
                                                                    src="assets/img/icons/smartphone.png"
                                                                    alt="info list" />
                                                                <div className="content
                                                                    align-items-center">
                                                                    <p>
                                                                        +5463 834 53 2245
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>

                                                    <div className="mt75 row justify-content-center">
                                                        <div className="col-lg-6 col-12">
                                                            <input type="text" placeholder="Name"
                                                                className="form-control" />
                                                        </div>
                                                        <div className="col-lg-6 col-12">
                                                            <input type="email" placeholder="E-Mail"
                                                                className="form-control" />
                                                        </div>
                                                        <div className="col-12">
                                                            <input type="text" placeholder="Subject"
                                                                className="form-control" />
                                                        </div>
                                                        <div className="col-12">
                                                            <textarea placeholder="Massage"
                                                                className="form-control" cols="4"
                                                                rows="4"></textarea>
                                                        </div>
                                                        <div className="col-12">
                                                            <button type="submit" className="btn
                                                                btn-primary">Send</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--=================== contact info and form end====================--> */}
                                    </div>
                                        <div className="col-md-6 col-5 img_section" style={bgColorStyle}>
                                        {/* <!--map --> */}
                                        <div id="map" data-lon="24.036176" data-lat="57.039986"
                                            className="map"></div>
                                        {/* <!--map end--> */}
                                    </div>
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

export default AppContact;
