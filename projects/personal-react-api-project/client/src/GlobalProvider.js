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
            likedRecipes: [], 
            recipes: [], 
            users: JSON.parse(localStorage.getItem("user")) || {}, 
            token: localStorage.getItem("token") || ""
        }
    }

    // componentDidMount(){
    //     const app_key = 'e250bb76cf85354c8322f287686a2323';
    //     const app_id = '9ed8e16e';
    //     const URL = `https://api.edamam.com/search?q=&to=5&app_id=${app_id}&app_key=${app_key}`;
    //     Axios.get(URL).then(response => {
    //         this.setState({recipesArr: response.data.hits})
    //     })
    // }

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

    handleChange = event => {
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

    signup = async userInfo => {
        const response = await Axios.post("/auth/signup", userInfo);
        const { users, token } = response.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(userInfo));
        this.setState({
            users,
            token
        });
        return response;
    }

    login = (credentials) => {
        return Axios.post("/auth/login", credentials)
        .then(response => {
            let { token, user } = response.data;
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("token", token);
            this.setState({
                users: user,
                token
            })
            // this.getLikedRecipes();
            return response;
        })
    }

    getLikedRecipes = () => {
        return Axios.get("/api/recipe")
        .then(response => {
            this.setState({likedRecipes: response.data})
            return response;
        })
    }

    logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        this.setState({
            users: {}, 
            token: ""
        })
        this.state.history.push("/login");
    }

    render() { 
        const props = {
            handleChange: this.handleChange, 
            handleLike: this.handleLike,
            addLiked: this.addLiked,
            removeLiked: this.removeLiked,
            createFavList: this.createFavList,
            signup: this.signup,
            login: this.login,
            logout: this.logout,
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