// RecipeForm.js
import React, { useState } from 'react';

const RecipeForm = ({ addRecipe }) => {
    const [name, setName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [type, setType] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addRecipe({ name, ingredients: ingredients.split(','), type });
        setName('');
        setIngredients('');
        setType('');
    };

    return (
        <div className="p-4 bg-gray-100 my-4">
            <form onSubmit={handleSubmit} className="flex flex-col">
                <input 
                    type="text" 
                    className="border rounded p-2 mb-2"
                    placeholder="Recipe name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input 
                    type="text" 
                    className="border rounded p-2 mb-2"
                    placeholder="Ingredients (comma separated)"
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                />
                <input 
                    type="text" 
                    className="border rounded p-2 mb-2"
                    placeholder="Type (e.g., vegetarian)"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                />
                <button 
                    type="submit"
                    className="bg-green-500 text-white p-2 rounded"
                >
                    Add Recipe
                </button>
            </form>
        </div>
    );
};

export default RecipeForm;
