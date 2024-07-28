// RecipeList.js
import React from 'react';

const RecipeList = ({ recipes }) => {
    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Recipes</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {recipes.map((recipe) => (
                    <li key={recipe.id} className="border rounded p-4 bg-white shadow">
                        <h3 className="text-xl font-semibold">{recipe.name}</h3>
                        <p>Type: {recipe.type}</p>
                        <p>Ingredients: {recipe.ingredients.join(', ')}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecipeList;
