/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Blog = () => {
     return (
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
     )
}

export default Blog;

