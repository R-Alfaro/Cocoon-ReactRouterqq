import React from 'react'

const HomeProfolio = (props) => {
     if (props !== '') {
          return (
               <a href={props.homeObj.image} rel="noopener noreferrer" title={props.homeObj.title}>
                    <div className="project_box_one">
                         <img src={props.homeObj.image} alt={props.homeObj.alt} />
                         <div className="product_info">
                              <div className="product_info_text">
                                   <div className="product_info_text_inner">
                                        <i className="ion ion-plus"></i>
                                        <h4>{props.homeObj.header}</h4>
                                   </div>
                              </div>
                         </div>
                    </div>
               </a>
          )
     } else {
          console.log("_____________ Get image Skipped")
     }
}

export default HomeProfolio;
