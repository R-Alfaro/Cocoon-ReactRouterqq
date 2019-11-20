import React from 'react'

const Home = () => {
     return (
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
     )
}

export default Home;