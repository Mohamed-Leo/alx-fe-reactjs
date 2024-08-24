import './App.css';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';

import { Routes , Route } from 'react-router-dom';


function App() {

  return (
    <>
    <Routes>
      <Route path='/' element = {<RecipeList/>}/>
      <Route path='RecipeDetails' element = {<AddRecipeForm />}/>
      </Routes>
    </>
  )
}

export default App;
