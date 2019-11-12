import React, { Component } from 'react'
import './App.css';

class App extends Component {
     render() {
          return (
               <div class="App">

                    <div className="loader">
                         <div className="loader-outter"></div>
                         <div className="loader-inner"></div>
                    </div>

                    <div className="body-container container-fluid">
                         <a href="home.html"><h1>Ramiro Alfaro - App</h1></a>
                    </div>
               </div>
          );
     }
}

export default App;
