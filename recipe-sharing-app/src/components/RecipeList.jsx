// RecipeList component
import { useRecipeStore } from './recipeStore';
import { SearchBar } from './SearchBar';
import { Link } from 'react-router-dom';

const RecipeList = () => {
    const recipes = useRecipeStore(state => state.filteredRecipes);

    return (
        <div>
            <SearchBar />
            {recipes.map(recipe => (
                <div key={recipe.id}>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.description}</p>
                </div>
            ))}
        </div>
    );
};

export default RecipeList;