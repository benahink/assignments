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
                    <h3>Full Stack Developer</h3>
                    <div className="line-through"></div>
                    <ul className="font-awesome-fa">
                        <a href="https://www.linkedin.com/in/benahin-kur-542634139/">
                            <i class="fab fa-linkedin-in fa-3x"> <a href=""></a></i>
                        </a>
                        <a href="https://github.com/benahink">
                            <i class="fab fa-github fa-3x"></i>
                        </a>
                        <a href="https://twitter.com/BenahinK">
                            <i class="fab fa-twitter fa-3x"></i>
                        </a>
                    </ul>
                </div>
            </div>
        );
    }
}
 
export default Home;