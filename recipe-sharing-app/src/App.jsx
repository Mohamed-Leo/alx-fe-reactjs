import './App.css';
import RecipeList from './components/RecipeList';

import { Routes , Route } from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails';


function App() {
  
  return (
    <>
    <Routes>
      <Route path='/' element = {<RecipeList/>}/>
      <Route path='RecipeDetails' element = {<RecipeDetails />}/>
      </Routes>
    </>
  )
}

export default App;
