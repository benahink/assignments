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
            liked: false,
            likedRecipes: []
        }
    }

    componentDidMount(){
        // this.setState({recipesArr: recipes.recipes})
        const app_key = 'e250bb76cf85354c8322f287686a2323';
        const app_id = '9ed8e16e';
        const URL = `https://api.edamam.com/search?q=top+recipes&to=40&app_id=${app_id}&app_key=${app_key}`;
        Axios.get(URL).then(response => {
            this.setState({recipesArr: response.data.hits})
        })
    }

    addLiked = (recipe) => {
        this.setState(prevState => {
            return {
                likedRecipes: [...prevState.likedRecipes, recipe]
            }
        })
    }

    //filtering through saved recipes and comparing ids. if the recipe id = id in the saved recipes array, we will not include it
    removeLiked = (recipe) => {
        this.setState(prevState => {
            return {
                likedRecipes: prevState.likedRecipes.filter(item =>  {
                    return item.recipe.label !== recipe.recipe.label
                })
            }}
        )
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
                    filteredRecipes: prevState.recipesArr.filter(recipe => recipe.recipe.label.toLowerCase().includes(value)),
                    filtering: true,
                    [name]: value
                }
            })
        }
    }

    render() { 
        const props = {
            handleChange: this.handleChange, 
            handleLike: this.handleLike,
            addLiked: this.addLiked,
            removeLiked: this.removeLiked,
            createFavList: this.createFavList,
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
        {value => <C {...value} {...props} />}
    </Consumer>
)