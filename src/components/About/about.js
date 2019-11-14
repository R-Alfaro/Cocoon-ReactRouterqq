import React from 'react'

const About = () => {
     const bgImageStyle = {
          color: 'blue',
          backgroundImage: 'url("assets/img/bg/about.png")',
     };
     return (
          <div>
               <div className="img_card">
                    <div className="row justify-content-center">
                         <div className="col-md-6 col-7 content_section">
                              <div className="content_box">
                                   <div className="content_box_inner">
                                        <div>
                                             <h3>Just a few words about us</h3>
                                             <p>
                                                  Lorem ipsum dolor sit amet, consectetur
                                                  adipiscing elit. Curabitur leo est, feugiat nec
                                                  elementum id, suscipit id nulla. Nulla sit amet
                                                  luctus dolor. Etiam finibus consequat ante ac
                                                  congue. Quisque porttitor porttitor tempus.
                                                  Donec maximus ipsum non ornare vestibulum. Sed
                                                  libero nibh, feugiat at enim id, bibendum
                                                  sollicitudin arcu. Aliquam elit nibh, finibus
                                                  eget mauris non, pretium vehicula ipsum. Class
                                                  aptent taciti sociosqu ad litora torquent per
                                                  conubia nostra, per inceptos himenaeos.
                                                  </p>
                                             {/* <!--=================== counter start====================--> */}
                                             <div className="pt50">
                                                  <div className="row justify-content-center">
                                                       <div className="col-12 col-md-4">
                                                            <div className="counter_box">
                                                                 <div className="divider"></div>
                                                                 <span className="counter">12</span>
                                                                 <h5>Years of experience</h5>
                                                            </div>
                                                       </div>
                                                       <div className="col-12 col-md-4">
                                                            <div className="counter_box">
                                                                 <div className="divider"></div>
                                                                 <span className="counter">257</span>
                                                                 <h5>happy clients</h5>
                                                            </div>
                                                       </div>
                                                       <div className="col-12 col-md-4">
                                                            <div className="counter_box">
                                                                 <div className="divider"></div>
                                                                 <span className="counter">192</span>
                                                                 <h5>projects completed</h5>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                             {/* <!--=================== counter end====================--> */}
                                        </div>
                                        {/* <!--===================testimonial start====================--> */}
                                        <div className="testimonial_carousel mt50">

                                             <div className="testimonial_box">
                                                  <p>
                                                       Lorem ipsum dolor sit amet, consectetur
                                                       adipiscing elit. Curabitur leo est, feugiat
                                                       nec elementum id, suscipit id nulla. Nulla
                                                       sit amet luctus dolor. Etiam finibus
                                                       consequat ante ac congue. Quisque porttitor
                                                       porttitor tempus.
                                                       </p>
                                                  <div className="testimonial_author">
                                                       <img src="assets/img/user.png" alt="author" />
                                                       <h5>maria smith</h5>
                                                       <p>project manager <span>company</span></p>
                                                  </div>
                                             </div>

                                             <div className="testimonial_box">
                                                  <p>
                                                       Lorem ipsum dolor sit amet, consectetur
                                                       adipiscing elit. Curabitur leo est, feugiat
                                                       nec elementum id, suscipit id nulla. Nulla
                                                       sit amet luctus dolor. Etiam finibus
                                                       consequat ante ac congue. Quisque porttitor
                                                       porttitor tempus.
                                                       </p>
                                                  <div className="testimonial_author">
                                                       <img src="assets/img/user.png" alt="author" />
                                                       <h5>maria smith</h5>
                                                       <p>project manager <span>company</span></p>
                                                  </div>
                                             </div>

                                             <div className="testimonial_box">
                                                  <p>
                                                       Lorem ipsum dolor sit amet, consectetur
                                                       adipiscing elit. Curabitur leo est, feugiat
                                                       nec elementum id, suscipit id nulla. Nulla
                                                       sit amet luctus dolor. Etiam finibus
                                                       consequat ante ac congue. Quisque porttitor
                                                       porttitor tempus.
                                                       </p>
                                                  <div className="testimonial_author">
                                                       <img src="assets/img/user.png" alt="author" />
                                                       <h5>maria smith</h5>
                                                       <p>project manager <span>company</span></p>
                                                  </div>
                                             </div>

                                             <div className="testimonial_box">
                                                  <p>
                                                       Lorem ipsum dolor sit amet, consectetur
                                                       adipiscing elit. Curabitur leo est, feugiat
                                                       nec elementum id, suscipit id nulla. Nulla
                                                       sit amet luctus dolor. Etiam finibus
                                                       consequat ante ac congue. Quisque porttitor
                                                       porttitor tempus.
                                                       </p>
                                                  <div className="testimonial_author">
                                                       <img src="assets/img/user.png" alt="author" />
                                                       <h5>maria smith</h5>
                                                       <p>project manager <span>company</span></p>
                                                  </div>
                                             </div>
                                        </div>
                                        {/* <!--===================testimonial end====================--> */}
                                   </div>
                              </div>
                         </div>
                         <div className="col-md-6 col-5 img_section" style={bgImageStyle}></div>
                    </div>
               </div>
          </div>
     )
}

export default About;