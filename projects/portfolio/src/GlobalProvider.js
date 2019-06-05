import React, { Component } from 'react';
import { Consumer, Provider } from React.createContext();

class GlobalProvider extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            projects = []
        }
    }

    addProjects = () => {

    } 

    render() { 
        const props = {
            ...this.state
        }

        return ( 
            <Provider>
                {this.props.children}
            </Provider>    
        );
    }
}
 
export default GlobalProvider;