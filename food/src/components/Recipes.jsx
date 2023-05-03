import React, { useState, useEffect } from 'react';
import Faker from 'faker';

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const newRecipes = [];

    for (let i = 0; i < 500; i++) {
      newRecipes.push(Faker.food());
    }

    setRecipes(newRecipes); 
  }, []);

  return (
    <div>
      <h1>Recipe List</h1>
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index}>{recipe}</li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;
