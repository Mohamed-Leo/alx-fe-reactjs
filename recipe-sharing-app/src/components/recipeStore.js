import {create} from 'zustand';



export const useRecipeStore = create(set => ({
    recipes: [],
    addRecipe : (newRecipe) => set(state => ({recipes : [...state.recipes , newRecipe]})),
    deleteRecipe : (deletedRecipe) => set(state => ({
        recipes: state.recipes.filter(recipe => recipe.id !== deletedRecipe.id)
    })),
    updateRecipe : (updateData) => set(state => ({
        recipes: state.recipes.map(recipe => recipe.id === updateData.id ? 
            {...recipe, id : updateData.id ,  title : updateData.title , description : updateData.description} 
            : recipe
    )})),
    setRecipes: (recipes) => set({ recipes })
}));