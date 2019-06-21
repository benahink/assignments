import React, { Component } from 'react';
import { Consumer, Provider } from React.createContext();

class GlobalProvider extends Component {
    constructor() {
        super();
        this.state = { 

        }
    }


    render() { 
        const props = {
            ...this.state
        }
        return ( 
            <Provider value={props}>
                {this.props.children}
            </Provider>
        );
    }
}
 
export default GlobalProvider;

export const withProvider = C => props => (
    <Consumer>
        {value => <C {...props} {...value} />}
    </Consumer>
)