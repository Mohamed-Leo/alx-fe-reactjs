import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function RecipeDetail() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState();

    useEffect(() => {
        fetch("src/data.json")
        .then((response) => response.json())
        .then((data) => {
            const selectedRecipe  = data.recipes.find((recipe) => recipe.id === parseInt(id));
            setRecipe(selectedRecipe );
        })
        .catch((error) => console.error('Error fetching recipes:', error));
    }, [id]);


    if(!recipe) return <p>Loading...</p>;

    return (
        <div className="max-w-4xl mx-auto my-10 p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
            <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <p className="text-lg mb-4">{recipe.summary}</p>
            <h2 className="text-2xl font-semibold mb-2">Ingredients:</h2>
            <ul className="list-disc list-inside mb-6">
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="text-lg">{ingredient}</li>
                ))}
            </ul>
            <h2 className="text-2xl font-semibold mb-2">Instructions:</h2>
            <ol className="list-decimal list-inside space-y-2">
                {recipe.instructions.map((step, index) => (
                    <li key={index} className="text-lg">{step}</li>
                ))}
            </ol>
        </div>
    )
}

export default RecipeDetail;