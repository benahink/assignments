import recipes from './recipe/recipe.json';
import Axios from 'axios';
import React, { Component } from 'react';
const { Consumer, Provider } = React.createContext();

class GlobalProvider extends Component {
    constructor() {
        super();
        this.state = { 
            recipesArr: [],
            filteredRecipes: [],
            filtering: false,
            searchInput: ''
        }
    }

    componentDidMount(){
        this.setState({recipesArr: recipes.recipes})
        // const api_key = '63f9badb263245ba705ab49495786188';
        // const URL = `https://www.food2fork.com/api/search?key=${api_key}&q=&page=1`;
        // Axios.get(URL).then(response => {
        //     this.setState({recipesArr: response.data.recipes})
        // })
    }

    handleChange = (event) => {
        let { value, name } = event.target
        if(value === ''){
            this.setState({
                filtering: false,
                [name]: value
            })
        }else {
            this.setState(prevState => {
                return {
                    filteredRecipes: prevState.recipesArr.filter(recipe => recipe.title.toLowerCase().includes(value)),
                    filtering: true,
                    [name]: value
                }
            })
        }
    }

    render() { 
        const props = {
            handleChange: this.handleChange, 
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

export const withTheme = C => props => (
    <Consumer>
        {value => <C {...value} {...props} />}
    </Consumer>
)