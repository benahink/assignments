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
                <div className="home-page">
                    <h2>Benahin Kur</h2>
                    <br/>
                    <h3>Full Stack Developer</h3>
                    <ul className="font-awesome-fa">
                        <i class="fab fa-linkedin-in fa-2x"></i>
                        <i class="fab fa-github fa-2x"></i>
                        <i class="fab fa-twitter fa-2x"></i>
                    </ul>
                </div>
            </div>
        );
    }
}
 
export default Home;