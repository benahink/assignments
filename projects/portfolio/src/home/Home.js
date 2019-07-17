import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="home">
                {/* <h1 className="home-page-header">hello</h1> */}
                <div className="home-page">
                    <h2>Benahin Kur</h2>
                    <br/>
                    <h3>Full Stack Developer</h3>
                </div>
            </div>
        );
    }
}
 
export default Home;