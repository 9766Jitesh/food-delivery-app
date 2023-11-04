
import './App.css';
import NavbarComponent from './components/NavbarComponent';
import HeroComponent from './components/HeroComponent'
import HeadLineCompCard from './components/HeadLineCompCard';
import CategoryComponent from './components/CategoryComponent';
import FoodComponent from './components/FoodComponent';
function App() {
  return (
    <div className="App">
      <NavbarComponent></NavbarComponent>
      <HeroComponent></HeroComponent>
      <HeadLineCompCard></HeadLineCompCard>
      <CategoryComponent></CategoryComponent>
      <FoodComponent></FoodComponent>
      
    </div>
  );
}

export default App;
