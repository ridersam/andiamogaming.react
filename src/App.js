import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Products from './app/shared/pages/Product';
import AboutUs from './app/shared/pages/AboutUs';
import HomePage from './app/shared/pages/HomePage';

function App() {
  return (
    <div className="App page-background">
      <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='employees' element={<AboutUs />} />
          <Route path='products' element={<Products/>} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
