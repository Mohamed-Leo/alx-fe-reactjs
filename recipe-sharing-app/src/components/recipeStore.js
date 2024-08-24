import {create} from 'zustand';



export const useRecipeStore = create(set => ({
    recipes: [],
    addRecipe : (newRecipe) => set(state => ({recipes : [...state.recipes , newRecipe]})),
    deleteRecipe : (deletedRecipe) => set(state => ({
        recipes: state.recipes.filter(recipe => recipe.id !== deletedRecipe.id)
    })),
    setRecipes: (recipes) => set({ recipes })
}));