import React, { Component } from 'react';
import axios from 'axios';
import HomeProfolio from './homeProfolio';

class Home extends Component {
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
          axios.get('./data/homeData.json')
               .then(res => {
                    this.setState({
                         data: JSON.parse(JSON.stringify(res.data)),
                    })
                    console.log("...... getDataHome", this.state.data);
               })
               .catch(function (error) {
                    console.log(error);
               })

          return this.state.data;
     }

     render() {
          const { data } = this.state;
          let object1 = {};
          let object2 = {};
          let object3 = {};
          let object4 = {};
          let object5 = {};
          let object6 = {};
          let object7 = {};
          let object8 = {};
          let object9 = {};


          if (data !== '') {
               object1 = this.state.data.HomePortFolioList[0];
               object2 = this.state.data.HomePortFolioList[1];
               object3 = this.state.data.HomePortFolioList[2];
               object4 = this.state.data.HomePortFolioList[3];
               object5 = this.state.data.HomePortFolioList[4];
               object6 = this.state.data.HomePortFolioList[5];
               object7 = this.state.data.HomePortFolioList[6];
               object8 = this.state.data.HomePortFolioList[7];
               object9 = this.state.data.HomePortFolioList[8];
               // data.HomePortFolioList.map((port) =>
               //      console.log("_____________ Get Image List ", port.image)
               // );
          } else {
               console.log("_____________ Get Content Skipped")
          }

          return (
               <div className="portfolio">
                    <div className="container-fluid">
                         {/* =================== masaonry portfolio start====================*/}
                         <div className="grid img-container justify-content-center no-gutters">
                              <div className="grid-sizer col-sm-12 col-md-6 col-lg-3"></div>
                              <div className="grid-item fltLeft branding col-sm-12 col-md-6 col-lg-3" >
                                   <HomeProfolio homeObj={object1} />
                              </div>
                              <div className="grid-item fltLeft branding architecture col-sm-12 col-md-6" >
                                   <HomeProfolio homeObj={object2} />
                              </div>
                              <div className="grid-item fltLeft design col-sm-12 col-md-6 col-lg-3" >
                                   <HomeProfolio homeObj={object3} />
                              </div>
                              <div className="grid-item fltLeft photography design col-sm-12 col-md-6 col-lg-3" >
                                   <HomeProfolio homeObj={object4} />
                              </div>
                              <div className="grid-item fltLeft branding photography col-sm-12 col-md-6 col-lg-3" >
                                   <HomeProfolio homeObj={object5} />
                              </div>
                              <div className="grid-item fltLeft architecture design col-sm-12 col-md-6 col-lg-3" >
                                   <HomeProfolio homeObj={object6} />
                              </div>
                              <div className="grid-item photography architecture col-sm-12 col-md-6 col-lg-3">
                                   <HomeProfolio homeObj={object7} />
                              </div>
                              <div className="grid-item branding design col-sm-12 col-md-6 col-lg-3">
                                   <HomeProfolio homeObj={object8} />
                              </div>
                              <div className="grid-item architecture col-sm-12 col-md-6  col-lg-6">
                                   <HomeProfolio homeObj={object9} />
                              </div>
                         </div>
                    </div>
               </div>
          )
     }
}

export default Home;