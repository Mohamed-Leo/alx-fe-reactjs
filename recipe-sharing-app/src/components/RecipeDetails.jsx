// RecipeDetails component
import DeleteRecipeButton from './DeleteRecipeButton';
import { useRecipeStore } from './recipeStore';
import { EditRecipeForm } from './recipeStore';

const RecipeDetails = ({ recipeId }) => {
    const recipe = useRecipeStore(state =>
        state.recipes.find(recipe => recipe.id === recipeId)
    );

    return (
        <div>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
            {/* Render EditRecipeForm and DeleteRecipeButton here */}
            <EditRecipeForm />
            <DeleteRecipeButton />
        </div>
    );
};

export default RecipeDetails;