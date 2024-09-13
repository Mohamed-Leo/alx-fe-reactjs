import { useState } from "react";

// target.value , steps

function AddRecipeForm() {
    const [newRecipe , setAddNewRecipe] = useState({
        title : "",
        ingredients: "",
        instructions : ""
    });

    const [errors, setErrors] = useState({
        titleError : "",
        ingredientsError : "",
        instructionsError : ""
    }); 


    const handleChanges = (e) => {
        const {name , value} = e.currentTarget;
        setAddNewRecipe({...newRecipe , [name] : value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const {title , ingredients , instructions} = newRecipe;

        if (!title || !ingredients || !instructions) {
            setErrors({
                titleError : !title ? "Title is required" : "",
                ingredientsError : !ingredients ? "ingredients is required" : "",
                instructionsError : !instructions ? "instructions is required" : "",
            });

            return;
        };

        if(ingredients.split(" ").length < 2) {
            setErrors({...errors , ingredientsError : "At least two ingredients required"});
            return;
        }

        // Process form submission
        console.log(newRecipe);

        // Clear
        setAddNewRecipe({
            title : "",
            ingredients: "",
            instructions : ""
        });
        setErrors({
            titleError : "",
            ingredientsError : "",
            instructionsError : ""
        });
    }

    return (
        <div className="max-w-4xl mx-auto my-10 p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-6">Add New Recipe</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="title" className="block text-lg font-medium mb-1">Recipe Title</label>
                    <input
                        id="title"
                        name="title"
                        type="text"
                        onChange={e => handleChanges(e)}
                        value={newRecipe.title}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.title ? 'border-red-500' : 'border-gray-300'} focus:ring-blue-500`}
                    />
                    {errors.titleError && <p className="text-red-500 text-sm mt-1">{errors.titleError}</p>}
                </div>
                <div>
                    <label htmlFor="ingredients" className="block text-lg font-medium mb-1">Ingredients</label>
                    <textarea
                        id="ingredients"
                        name="ingredients"
                        value={newRecipe.ingredients}
                        onChange={handleChanges}
                        rows="4"
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.ingredients ? 'border-red-500' : 'border-gray-300'} focus:ring-blue-500`}
                    />
                    {errors.ingredientsError && <p className="text-red-500 text-sm mt-1">{errors.ingredientsError}</p>}
                </div>
                <div>
                    <label htmlFor="instructions" className="block text-lg font-medium mb-1">instructions</label>
                    <textarea
                        id="instructions"
                        name="instructions"
                        value={newRecipe.instructions}
                        onChange={handleChanges}
                        rows="4"
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.instructions ? 'border-red-500' : 'border-gray-300'} focus:ring-blue-500`}
                    />
                    {errors.instructionsError && <p className="text-red-500 text-sm mt-1">{errors.instructionsError}</p>}
                </div>
                <button
                    type="submit"
                    className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default AddRecipeForm;