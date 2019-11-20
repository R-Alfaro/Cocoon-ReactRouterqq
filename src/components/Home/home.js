import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
     state = {
          posts: {}
     }

     componentDidMount() {
          // axios.get('https://jsonplaceholder.typicode.com/posts')
          axios.get('./data/home.json')
               .then(res => {
                    this.setState({
                         posts: (res.data)
                    })
               })
               .catch();
     }

     // posts.map(post => {
     //      console.log(post.title)
     // })

     render() {
          const { posts } = this.state;
          console.log(posts.name)
          const postList = posts.length ? (
               console.log(posts)) : (console.log("==============>No Post Yet"));
          return (
               <div className="portfolio">
                    <div className="container-fluid">
                         {/* =================== masaonry portfolio start====================*/}
                         <div className="grid img-container justify-content-center no-gutters">
                              <div className="grid-sizer col-sm-12 col-md-6 col-lg-3"></div>

                              <div className="grid-item fltLeft branding col-sm-12 col-md-6 col-lg-3" >
                                   <a href="assets/img/portfolio/home-port1.png" rel="noopener noreferrer" title="project name 1">
                                        <div className="project_box_one">
                                             <img src="assets/img/portfolio/home-port1.png" alt="pro1" />
                                             <div className="product_info">
                                                  <div className="product_info_text">
                                                       <div className="product_info_text_inner">
                                                            <i className="ion ion-plus"></i>
                                                            <h4>project name</h4>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </a>
                              </div>

                              <div className="grid-item fltLeft branding architecture col-sm-12 col-md-6" >
                                   <a href="assets/img/portfolio/home-port2.png" rel="noopener noreferrer" title="project name 2">
                                        <div className="project_box_one">
                                             <img src="assets/img/portfolio/home-port2.png" alt="pro1" />
                                             <div className="product_info">
                                                  <div className="product_info_text">
                                                       <div className="product_info_text_inner">
                                                            <i className="ion ion-plus"></i>
                                                            <h4>project name</h4>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </a>
                              </div>

                              <div className="grid-item fltLeft design col-sm-12 col-md-6 col-lg-3" >
                                   <a href="assets/img/portfolio/home-port3.png" rel="noopener noreferrer" title="project name 5">
                                        <div className="project_box_one">
                                             <img src="assets/img/portfolio/home-port3.png" alt="pro1" />
                                             <div className="product_info">
                                                  <div className="product_info_text">
                                                       <div className="product_info_text_inner">
                                                            <i className="ion ion-plus"></i>
                                                            <h4>project name</h4>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </a>
                              </div>

                              <div className="grid-item fltLeft photography design col-sm-12 col-md-6 col-lg-3" >
                                   <a href="assets/img/portfolio/home-port4.png" rel="noopener noreferrer" title="project name 5">
                                        <div className="project_box_one">
                                             <img src="assets/img/portfolio/home-port4.png" alt="pro1" />
                                             <div className="product_info">
                                                  <div className="product_info_text">
                                                       <div className="product_info_text_inner">
                                                            <i className="ion ion-plus"></i>
                                                            <h4>project name</h4>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </a>
                              </div>

                              <div className="grid-item fltLeft branding photography col-sm-12 col-md-6 col-lg-3" >
                                   <a href="assets/img/portfolio/home-port5.png" rel="noopener noreferrer" title="project name 5">
                                        <div className="project_box_one">
                                             <img src="assets/img/portfolio/home-port5.png" alt="pro1" />
                                             <div className="product_info">
                                                  <div className="product_info_text">
                                                       <div className="product_info_text_inner">
                                                            <i className="ion ion-plus"></i>
                                                            <h4>project name</h4>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </a>
                              </div>

                              <div className="grid-item fltLeft architecture design col-sm-12 col-md-6 col-lg-3" >
                                   <a href="assets/img/portfolio/home-port6.png" rel="noopener noreferrer" title="project name 5">
                                        <div className="project_box_one">
                                             <img src="assets/img/portfolio/home-port6.png" alt="pro1" />
                                             <div className="product_info">
                                                  <div className="product_info_text">
                                                       <div className="product_info_text_inner">
                                                            <i className="ion ion-plus"></i>
                                                            <h4>project name</h4>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </a>
                              </div>

                              <div className="grid-item fltLeft photography architecture col-sm-12 col-md-6 col-lg-3" >
                                   <a href="assets/img/portfolio/home-port7.png" rel="noopener noreferrer" title="project name 5">
                                        <div className="project_box_one">
                                             <img src="assets/img/portfolio/home-port7.png" alt="pro1" />
                                             <div className="product_info">
                                                  <div className="product_info_text">
                                                       <div className="product_info_text_inner">
                                                            <i className="ion ion-plus"></i>
                                                            <h4>project name</h4>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </a>
                              </div>

                              <div className="grid-item fltLeft branding design col-sm-12 col-md-6 col-lg-3" >
                                   <a href="assets/img/portfolio/home-port8.png" rel="noopener noreferrer" title="project name 5">
                                        <div className="project_box_one">
                                             <img src="assets/img/portfolio/home-port8.png" alt="pro1" />
                                             <div className="product_info">
                                                  <div className="product_info_text">
                                                       <div className="product_info_text_inner">
                                                            <i className="ion ion-plus"></i>
                                                            <h4>project name</h4>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </a>
                              </div>

                              <div className="grid-item fltLeft architecture col-sm-12 col-md-6 col-lg-6" >
                                   <a href="assets/img/portfolio/home-port9.png" rel="noopener noreferrer" title="project name 4">
                                        <div className="project_box_one">
                                             <img src="assets/img/portfolio/home-port9.png" alt="pro1" />
                                             <div className="product_info">
                                                  <div className="product_info_text">
                                                       <div className="product_info_text_inner">
                                                            <i className="ion ion-plus"></i>
                                                            <h4>project name</h4>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </a>
                              </div>

                         </div>
                         {/* =================== masaonry portfolio end====================*/}
                    </div>
               </div>
          )
     }
}

export default Home;
