import React from 'react'

const SideFilter = () => {
     return (
          <div className="side_menu_section">
               <h4 className="side_title">filter by:</h4>
               <ul id="filtr-container" className="filter_nav">
                    <li data-filter="*" className="active"><a href="javascript:void(0)">all</a></li>
                    <li data-filter=".branding"> <a href="javascript:void(0)">branding</a></li>
                    <li data-filter=".design"><a href="javascript:void(0)">design</a></li>
                    <li data-filter=".photography"><a href="javascript:void(0)">photography</a></li>
                    <li data-filter=".architecture"><a href="javascript:void(0)">architecture</a></li>
               </ul>
          </div>
     )
}

export default SideFilter;
