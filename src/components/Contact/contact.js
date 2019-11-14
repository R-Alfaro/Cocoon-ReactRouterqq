import React from 'react'

const Contact = () => {
     const bgColorStyle = {
          backgroundcolor: '#000'
     };

     return (
<div>
     <div className='img_card'>
          <div className='row justify-content-center'>
               <div className='col-md-6 col-7 content_section'>
                    {/* <!--=================== contact info and form start====================--> */}
                    <div className='content_box'>
                         <div className='content_box_inner'>
                              <div>
                                   <h3>Get in touch with us</h3>
                                   <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Curabitur leo est, feugiat nec
                                        elementum id, suscipit id nulla. Nulla sit amet
                                        luctus dolor. Etiam finibus consequat ante ac
                                        congue.
                                   </p>
                                   <ul className='nosyely_list pt50'>
                                        <li>
                                             <div className='img_box_two'>
                                                  <img src='assets/img/icons/satelite.png' alt='info list' />
                                                  <div className='content align-items-center'>
                                                       <p>
                                                            Rosia Road , No234/56<br/>
                                                            Gibraltar , UK
                                                            </p>
                                                   </div>
                                             </div>
                                        </li>
                                        <li>
                                             <div className='img_box_two'>
                                                  <img src='assets/img/icons/scheme.png' alt='info list' />
                                                  <div className='content align-items-center'>
                                                       <p>contact@cocoontemplate.com</p>
                                                  </div>
                                             </div>
                                        </li>
                                        <li>
                                             <div className='img_box_two'>
                                                  <img src='assets/img/icons/smartphone.png' alt='info list' />
                                                  <div className='content align-items-center'>
                                                       <p>+5463 834 53 2245</p>
                                                  </div>
                                             </div>
                                        </li>
                                   </ul>
                                   <div className='mt75 row justify-content-center'>
                                        <div className='col-lg-6 col-12'>
                                             <input type='text' placeholder='Name'
                                                  className='form-control' />
                                        </div>
                                        <div className='col-lg-6 col-12'>
                                             <input type='email' placeholder='E-Mail'
                                                  className='form-control' />
                                        </div>
                                        <div className='col-12'>
                                             <input type='text' placeholder='Subject'
                                                  className='form-control' />
                                        </div>
                                        <div className='col-12'>
                                             <textarea placeholder='Massage'
                                                  className='form-control' cols='4'
                                                  rows='4'></textarea>
                                        </div>
                                        <div className='col-12'>
                                             <button type='submit' className='btn
                                                  btn-primary'>Send</button>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
                    {/* <!--=================== contact info and form end====================--> */}
               </div>
               <div className='col-md-6 col-5 img_section' style={bgColorStyle}  >
                    {/* <!--map --> */}
                    <div id='map' data-lon='24.036176' data-lat='57.039986' className='map'></div>
                    {/* <!--map end--> */}
               </div>
          </div>
     </div>
</div>
                         
     )
}

export default Contact;