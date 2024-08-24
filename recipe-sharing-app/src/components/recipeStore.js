import {create} from 'zustand';



export const useRecipeStore = create(set => ({
    recipes: [],
    searchTerm: '',
    favorites: [],
    addFavorite: (recipeId) => set(state => ({ favorites: [...state.favorites, recipeId] })),
    removeFavorite: (recipeId) => set(state => ({
        favorites: state.favorites.filter(id => id !== recipeId)
    })),
    recommendations: [],
    generateRecommendations: () => set(state => {
        // Mock implementation based on favorites
        const recommended = state.recipes.filter(recipe =>
        state.favorites.includes(recipe.id) && Math.random() > 0.5
        );
        return { recommendations: recommended };
    }),
    addRecipe : (newRecipe) => set(state => ({recipes : [...state.recipes , newRecipe]})),
    deleteRecipe : (deletedRecipe) => set(state => ({
        recipes: state.recipes.filter(recipe => recipe.id !== deletedRecipe.id)
    })),
    updateRecipe : (updateData) => set(state => ({
        recipes: state.recipes.map(recipe => recipe.id === updateData.id ? 
            {...recipe, id : updateData.id ,  title : updateData.title , description : updateData.description} 
            : recipe
    )})),
    setSearchTerm: (term) => set({ searchTerm: term }),
        filteredRecipes: [],
        filterRecipes: () => set(state => ({
            filteredRecipes: state.recipes.filter(recipe =>
            recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
            )})),
    setRecipes: (recipes) => set({ recipes })
}));