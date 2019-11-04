import React, { Component } from 'react'
//import logo from './logo.svg';
import './App.css';
import Sidemenu from './LandingPage/SideMenu/Sidemenu';
import Contentbody from './LandingPage/ConentBody/Contentbody';

class App extends Component {
    render() {
        return (
            <div class="App">

                <div className="loader">
                    <div className="loader-outter"></div>
                    <div className="loader-inner"></div>
                </div>

                <div className="body-container container-fluid">
                    <a className="menu-btn" href="javascript:void(0)" alt="test">
                        <i className="ion ion-grid"></i>
                    </a>

                    <div className="row justify-content-center">
                        {/* =================== side menu ==================== */}
                        <Sidemenu />
                        {/* =================== side menu end====================*/}

                        {/* =================== content body ====================*/}
                        {/* Do router in tis location
                            Home
                            About 
                            Portfolio
                            Blog 
                            Contact */}
                        <Contentbody />
                        {/* =================== content body end ====================*/}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
