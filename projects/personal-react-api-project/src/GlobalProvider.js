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
            searchInput: '',
            savedItemId: [],
            liked: false
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

    handleLike = (event) => {
        console.log(event.target.value)
        // const { checked, value } = event.target;
        // let { savedItemId } = this.state;
        // if(checked) {
        //     this.setState(prevState => {
        //         return {
        //             savedItemId: [...prevState.savedItemId, value]
        //         }
        //     })
        //     console.log('this fired')
        // } else {
        //     this.setState({
        //         savedItemId: savedItemId
        //     })
        //     console.log('no, this fired')
        // }
        // this.setState({
        //     savedItemId: savedItemId
        // })
        this.setState({
            liked: !this.state.liked
        })
    }

    render() { 
        console.log(this.state.savedItemId)
        const props = {
            handleChange: this.handleChange, 
            handleLike: this.handleLike,
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