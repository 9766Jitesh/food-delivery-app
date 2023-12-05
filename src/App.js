import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import NavbarComponent from './components/NavbarComponent';
import HeroComponent from './components/HeroComponent'
import HeadLineCompCard from './components/HeadLineCompCard';
import CategoryComponent from './components/CategoryComponent';
import FoodComponent from './components/FoodComponent';
import Login from './components/Login';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
      
      <Router>
      <div>
        {/* Your other components or content */}
        <HomePage/>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
      
    </div>
  );
}

export default App;
