import './App.css';
import EmployeesList from './features/employees/EmployeesList';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App page-background">
      <Header />
        <EmployeesList />
        <Footer />
    </div>
  );
}

export default App;
