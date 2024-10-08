import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function HomePage() {

    const [recipes, setRecipes] = useState([]); 

    useEffect(() => {
        fetch('src/data.json')
        .then((response) => response.json())
        .then((data) => setRecipes(data))
        .catch((error) => console.error('Error fetching recipes:', error));
    } , []);

    return (
        <div className="container mx-auto mt-10">
            <h1 className="text-4xl font-bold text-center mb-8">Recipe Sharing Platform</h1>
            <Link to="/add-recipe" className="text-blue-500 hover:underline my-6 block pl-4">Add a New Recipe</Link>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-3">
                {recipes?.map((recipe) => (
                    <div
                    key={recipe.id}
                    className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >
                        <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
                            <p className="text-gray-600">{recipe.summary}</p>
                            <Link
                            to={`recipe/${recipe.id}`}
                            className="text-blue-500 hover:text-blue-700 mt-4 inline-block"
                            >
                            View Recipe
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HomePage;