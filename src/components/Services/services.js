/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import axios from 'axios';
import ServicesBoxes from './servicesBoxes';

class Services extends Component {
     constructor(props) {
          super(props);

          this.state = {
               data: ''
          };
     }

     UNSAFE_componentWillMount() {
          this.getData();
     }

     getData = () => {
          console.log("########################################### inputfile");
          axios.get('./data/serviceData.json')
               .then(res => {
                    this.setState({
                         data: JSON.parse(JSON.stringify(res.data)),
                    })
               })
               .catch(function (error) {
                    console.log(error);
               })

          return this.state.data;
     }

     render() {
          const { data } = this.state;
          const bgImageStyle = {
               color: 'blue',
               backgroundImage: 'url("assets/img/bg/service_bg.png")',
          };
          let ListServices = [];

          if (data !== '') {
               ListServices = data.ServicelList.map((data) =>
                    <ServicesBoxes key={data.key} data={data} />
               );
          };

          return (
               <div className="body-container container-fluid">
                    <a className="menu-btn" href="#" onClick={e => e.preventDefault()}>
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
                                                                 {ListServices}
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
}

export default Services;

