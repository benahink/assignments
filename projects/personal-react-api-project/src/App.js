import React from 'react';
import Recipe from './recipe/Recipe.js';
import Navbar from './navbar/Navbar.js';
import Header from './Header.js'

const App = () => {
   return (
        <>
            <Header />
            <Navbar />
            <Recipe />
        </>
   )
}
 
export default App;