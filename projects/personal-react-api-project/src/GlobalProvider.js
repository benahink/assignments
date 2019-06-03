import recipes from './recipe/recipe.json';
// import Axios from 'axios';
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
        this.setState({recipesArr: recipes.recipes})
        // const api_key = '63f9badb263245ba705ab49495786188';
        // const URL = `https://www.food2fork.com/api/search?key=${api_key}&q=&page=1`;
        // Axios.get(URL).then(response => {
        //     this.setState({recipesArr: response.data.recipes})
        // })
    }

    addLiked = (recipe) => {
        this.setState(prevState => {
            return {
                likedRecipes: [...prevState.likedRecipes, recipe]
            }
        })
        localStorage.setItem('likedRecipes', recipe)
    }

    //filtering through saved recipes and comparing ids. if the recipe id = id in the saved recipes array, we will not include it
    removeLiked = (recipe) => {
        console.log(recipe)
        this.setState(prevState => {
            return {
                likedRecipes: prevState.likedRecipes.filter(item =>  item.recipe_id !== recipe.recipe_id)
            }}
        )
    }

    createFavList = (event) => {
        event.preventdefault()
        this.setState(prevState => {
            window.localStorage.setItem('savedList', JSON.stringify(prevState.likedRecipes));
        })
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
        console.log(this.state.likedRecipes)
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