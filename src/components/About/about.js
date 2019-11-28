import React, { Component } from 'react';
import axios from 'axios';
import AboutCounter from './aboutCounter';
import AboutTestimonials from './aboutTestimonials';

class About extends Component {
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
          axios.get('./data/aboutData.json')
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
               backgroundImage: 'url("assets/img/bg/about.png")',
          };

          let ListCounter = [];
          let ListTestimonials = [];

          if (data !== '') {
               ListCounter = data.counterList.map((data) =>
                    <AboutCounter key={data.key} data={data} />
               );
               ListTestimonials = data.testimonialList.map((data) =>
                    <AboutTestimonials key={data.key} data={data} />
               );              
          };

          return (
               <div>
                    <div className="img_card">
                         <div className="row justify-content-center">
                              <div className="col-md-6 col-7 content_section">
                                   <div className="content_box">
                                        <div className="content_box_inner">
                                             <div>
                                                  <h3>{data.aboutTitle}</h3>
                                                  <p>{data.aboutParagraph}</p>
                                                  {/* <!--=================== counter start====================--> */}
                                                  <div className="pt50">
                                                       <div className="row justify-content-center">
                                                            {ListCounter}
                                                       </div>
                                                  </div>
                                                  {/* <!--=================== counter end====================--> */}
                                             </div>
                                             {/* <!--===================testimonial start====================--> */}
                                             <div className="testimonial_carousel mt50">
                                                  {ListTestimonials}
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
}

export default About;