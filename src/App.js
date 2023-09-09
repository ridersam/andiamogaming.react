import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import HomePage from './features/pages/HomePage';
import AboutUs from './features/pages/AboutUs';
import EMployeesList from './features/employees/EMployeesList';
import ProductPage from './features/pages/ProductPage';
import ProductDetailPage from './features/pages/ProductDetailPage';
import GamePage from './features/pages/GamePage';
import GameDetailPage from './features/pages/GameDetailPage';
import BlogPage from './features/pages/BlogPage';

function App() {
  return (
    <div className="App page-background">
      <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='aboutus' element={<AboutUs />} />
          <Route path='products' element={<ProductPage/>} />
          <Route 
            path='products/:productId'
            element={<ProductDetailPage />}  
          />
          <Route path='games' element={<GamePage/>} />
          <Route
            path='games/:gameId'
            element={<GameDetailPage />}
          />
          <Route path='blogs' element={<BlogPage />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
