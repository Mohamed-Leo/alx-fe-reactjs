import './App.css';
import RecipeList from './components/RecipeList';

import { Routes , Route , BrowserRouter as Router} from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails';
import AddRecipeForm from './components/AddRecipeForm';


function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element = {<RecipeList/>}/>
        <Route path='RecipeDetails' element = {<RecipeDetails />}/>
        <Route path='AddRecipeForm' element = {<AddRecipeForm />}/>
      </Routes>
      </Router>
    </>
  )
}

export default App;
