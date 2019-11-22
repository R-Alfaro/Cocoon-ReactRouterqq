import React from 'react'

const Element = () => {
     const left80 = {
          left : '80%'
     };
     const left85 = {
          left : '85%'
     };
     const left90 = {
          left : '90%'
     };

     return (
          <div className="elements">
               <h3>Elements</h3>
               {/* <!--button elements--> */}
               <div className="element_section mt30 mb50">
                    <div className="section_title">
                         <h4>buttons</h4>
                    </div>
                    <div className="section_content mt30">
                         <a href="#" className="btn btn-primary">Button</a>
                         <a href="#" className="btn btn-primary-outline">Button</a>
                         <a href="#" className="btn btn-dark">Button </a>
                         <a href="#" className="btn btn-primary btn-rounded">Button</a>
                    </div>
               </div>
               {/* <!--button elements end--> */}

               {/* <!--progress bars elements--> */}
               <div className="element_section mt30 mb50">
                    <div className="section_title">
                         <h4>progress bars & accordion</h4>
                    </div>
                    <div className="section_content mt30">
                         <div className="row justify-content-center">
                              <div className="col-12 col-md-6">
                                   <div className="progress_container">
                                        <div className="single_progressbar">
                                             <div className="progress">
                                                  <div className="progress-bar" role="progressbar" data-transitiongoal="80"></div>
                                             </div>
                                             <div className="progress_text">
                                                  <span>Management</span>
                                                  <span className="progress_num" style={left80}>80%</span>
                                             </div>
                                        </div>
                                        <div className="single_progressbar">
                                             <div className="progress">
                                                  <div className="progress-bar" role="progressbar" data-transitiongoal="90"></div>
                                             </div>
                                             <div className="progress_text">
                                                  <span>Design</span>
                                                  <span className="progress_num" style={left90}>90%</span>
                                             </div>
                                        </div>
                                        <div className="single_progressbar">
                                             <div className="progress">
                                                  <div className="progress-bar" role="progressbar" data-transitiongoal="85"></div>
                                             </div>
                                             <div className="progress_text">
                                                  <span>Development</span>
                                                  <span className="progress_num" style={left85}>85%</span>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div className="col-12 col-md-6">
                                   <div id="accordion" role="tablist">
                                        <div className="card accordion_card">
                                             <div className="card-header" role="tab" id="headingOne">
                                                  <h5>
                                                       <a data-toggle="collapse" href="#collapseOne" role="button" aria-expanded="true" aria-controls="collapseOne">
                                                            Collapsible Group Item #1
                                                       </a>
                                                  </h5>
                                             </div>
                                             <div id="collapseOne" className="collapse" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
                                                  <div className="card-body">
                                                       Anim pariatur cliche reprehenderit, enim
                                                       eiusmod high life accusamus terry richardson
                                                       ad squid. 3 wolf moon officia aute, non
                                                       cupidatat skateboard dolor brunch. Food
                                                       truck quinoa nesciunt laborum eiusmod.
                                                       Brunch 3 wolf moon tempor, sunt aliqua put a
                                                       bird on it squid single-origin coffee nulla
                                                       assumenda shoreditch et. Nihil anim keffiyeh
                                                       helvetica, craft beer labore wes anderson
                                                       cred nesciunt sapiente ea proident. Ad vegan
                                                       excepteur butcher vice lomo. Leggings
                                                       occaecat craft beer farm-to-table, raw denim
                                                       aesthetic synth nesciunt you probably
                                                       haven't heard of them accusamus labore
                                                       sustainable VHS.
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="card accordion_card">
                                             <div className="card-header" role="tab" id="headingTwo">
                                                  <h5>
                                                       <a className="collapsed" data-toggle="collapse" href="#collapseTwo" role="button" aria-expanded="false"
                                                            aria-controls="collapseTwo">
                                                            Collapsible Group Item #2
                                                       </a>
                                                  </h5>
                                             </div>
                                             <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion">
                                                  <div className="card-body">
                                                       Anim pariatur cliche reprehenderit, enim
                                                       eiusmod high life accusamus terry richardson
                                                       ad squid. 3 wolf moon officia aute, non
                                                       cupidatat skateboard dolor brunch. Food
                                                       truck quinoa nesciunt laborum eiusmod.
                                                       Brunch 3 wolf moon tempor, sunt aliqua put a
                                                       bird on it squid single-origin coffee nulla
                                                       assumenda shoreditch et. Nihil anim keffiyeh
                                                       helvetica, craft beer labore wes anderson
                                                       cred nesciunt sapiente ea proident. Ad vegan
                                                       excepteur butcher vice lomo. Leggings
                                                       occaecat craft beer farm-to-table, raw denim
                                                       aesthetic synth nesciunt you probably
                                                       haven't heard of them accusamus labore
                                                       sustainable VHS.
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="card accordion_card">
                                             <div className="card-header" role="tab" id="headingThree">
                                                  <h5>
                                                       <a className="collapsed" data-toggle="collapse" href="#collapseThree" role="button" aria-expanded="false"
                                                            aria-controls="collapseThree">
                                                            Collapsible Group Item #3
                                                       </a>
                                                  </h5>
                                             </div>
                                             <div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
                                                  <div className="card-body">
                                                       Anim pariatur cliche reprehenderit, enim
                                                       eiusmod high life accusamus terry richardson
                                                       ad squid. 3 wolf moon officia aute, non
                                                       cupidatat skateboard dolor brunch. Food
                                                       truck quinoa nesciunt laborum eiusmod.
                                                       Brunch 3 wolf moon tempor, sunt aliqua put a
                                                       bird on it squid single-origin coffee nulla
                                                       assumenda shoreditch et. Nihil anim keffiyeh
                                                       helvetica, craft beer labore wes anderson
                                                       cred nesciunt sapiente ea proident. Ad vegan
                                                       excepteur butcher vice lomo. Leggings
                                                       occaecat craft beer farm-to-table, raw denim
                                                       aesthetic synth nesciunt you probably
                                                       haven't heard of them accusamus labore
                                                       sustainable VHS.
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               {/* <!--progress bars  elements end--> */}

               {/* <!--counter elements--> */}
               <div className="element_section mt30 mb50">
                    <div className="section_title">
                         <h4>Milestones</h4>
                    </div>
                    <div className="section_content mt30">
                         <div className="row justify-content-center">
                              <div className="col-12 col-sm-6 col-md-3">
                                   <div className="counter_box">
                                   <div className="divider"></div>
                                   <span className="counter">12</span>
                                   <h5>Years of experience</h5>
                                   </div>
                              </div>
                              <div className="col-12 col-sm-6 col-md-3">
                                   <div className="counter_box">
                                   <div className="divider"></div>
                                   <span className="counter">257</span>
                                   <h5>happy clients</h5>
                                   </div>
                              </div>
                              <div className="col-12 col-sm-6 col-md-3">
                                   <div className="counter_box">
                                   <div className="divider"></div>
                                   <span className="counter">192</span>
                                   <h5>projects completed</h5>
                                   </div>
                              </div>
                              <div className="col-12 col-sm-6 col-md-3">
                                   <div className="counter_box">
                                   <div className="divider"></div>
                                   <span className="counter">12</span>
                                   <h5>Years of experience</h5>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               {/* <!--counter elements end--> */}

               {/* <!--Image icon box elements--> */}
               <div className="element_section mt30 mb50">
                    <div className="section_title">
                         <h4>icon image box</h4>
                    </div>
                    <div className="section_content mt30">
                         <div className="row justify-content-center">
                              <div className="col-lg-4 col-12">
                                   <div className="img_box_one text-left">
                                   <img src="assets/img/icons/typo.png" alt="services
                                        icon" />
                                   <div className="content">
                                        <h5>
                                             Typography Courses
                                        </h5>
                                        <p>
                                             Lorem ipsum dolor sit amet, consectetur
                                             adipiscing elit. Curabitur leo est, feugiat nec
                                             elementum.
                                        </p>
                                   </div>
                                   </div>
                              </div>
                              <div className="col-lg-4 col-12">
                                   <div className="img_box_one text-left">
                                   <img src="assets/img/icons/flask.png" alt="services
                                        icon" />
                                   <div className="content">
                                        <h5>
                                             Mix and Match
                                        </h5>
                                        <p>
                                             Lorem ipsum dolor sit amet, consectetur
                                             adipiscing elit. Curabitur leo est, feugiat nec
                                             elementum.
                                        </p>
                                   </div>
                                   </div>
                              </div>
                              <div className="col-lg-4 col-12">
                                   <div className="img_box_one text-left">
                                   <img src="assets/img/icons/compass.png" alt="services
                                        icon" />
                                   <div className="content">
                                        <h5>
                                             Architecture Plans
                                        </h5>
                                        <p>
                                             Lorem ipsum dolor sit amet, consectetur
                                             adipiscing elit. Curabitur leo est, feugiat nec
                                             elementum.
                                        </p>
                                   </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               {/* <!--Image icon box end--> */}

               {/* <!--Fonts icon box elements--> */}
               <div className="element_section mt30 mb50">
                    <div className="section_title">
                         <h4>Fonts icon box</h4>
                    </div>
                    <div className="section_content mt30">
                         <div className="row justify-content-center">
                              <div className="col-lg-4 col-12">
                                   <div className="icon_box_one text-left">
                                   <i className="lnr lnr-heart-pulse"></i>
                                   <div className="content">
                                        <h5>
                                             Typography Courses
                                        </h5>
                                        <p>
                                             Lorem ipsum dolor sit amet, consectetur
                                             adipiscing elit. Curabitur leo est, feugiat nec
                                             elementum.
                                        </p>
                                   </div>
                                   </div>
                              </div>
                              <div className="col-lg-4 col-12">
                                   <div className="icon_box_one text-center">
                                   <i className="lnr lnr-apartment"></i>
                                   <div className="content">
                                        <h5>
                                             Mix and Match
                                        </h5>
                                        <p>
                                             Lorem ipsum dolor sit amet, consectetur
                                             adipiscing elit. Curabitur leo est, feugiat nec
                                             elementum.
                                        </p>
                                   </div>
                                   </div>
                              </div>
                              <div className="col-lg-4 col-12">
                                   <div className="icon_box_one text-right">
                                   <i className="lnr lnr-rocket"></i>
                                   <div className="content">
                                        <h5>
                                             Architecture Plans
                                        </h5>
                                        <p>
                                             Lorem ipsum dolor sit amet, consectetur
                                             adipiscing elit. Curabitur leo est, feugiat nec
                                             elementum.
                                        </p>
                                   </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               {/* <!--Fonts icon box end--> */}
          </div>
     )
}

export default Element;
