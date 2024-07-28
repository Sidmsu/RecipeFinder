// App.js
import React, { useState } from 'react';
import RecipeList from './components/RecipeList';
import RecipeForm from './components/RecipeForm';
import SearchBar from './components/SearchBar';
import './index.css';

const App = () => {
    const [recipes, setRecipes] = useState([
        { id: 1, name: 'Pasta', ingredients: ['pasta', 'tomato sauce'], type: 'vegetarian' },
        // Add more recipes
    ]);

    const addRecipe = (recipe) => {
        setRecipes([...recipes, { ...recipe, id: recipes.length + 1 }]);
    };

    const handleSearch = (query) => {
        const filteredRecipes = recipes.filter(recipe => 
            recipe.ingredients.some(ingredient => ingredient.includes(query))
        );
        setRecipes(filteredRecipes);
    };

    return (
        <div className="container mx-auto p-4">
            <SearchBar onSearch={handleSearch} />
            <RecipeForm addRecipe={addRecipe} />
            <RecipeList recipes={recipes} />
        </div>
    );
};

export default App;
