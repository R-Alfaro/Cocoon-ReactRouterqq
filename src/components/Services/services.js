import React from 'react'

const Services = () => {
     const bgImageStyle = {
          color: 'blue',
          backgroundImage: 'url("assets/img/bg/service_bg.png")',
     };

     return (
          <div className="body-container container-fluid">
               <a className="menu-btn" href="javascript:void(0)">
                    <i className="ion ion-grid"></i>
               </a>

               <div className="row justify-content-center">
                    {/* <!--=================== content body ====================--> */}
                    <div className="col-lg-10 col-md-9 col-12 body_block align-content-center">
                         <div>
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
                              </div>
                              {/* <!--=================== image card end here ====================--> */}
                         </div>
                    </div>
                    {/* <!--=================== content body end ====================--> */}
               </div>
          </div>
     )
}

export default Services;

