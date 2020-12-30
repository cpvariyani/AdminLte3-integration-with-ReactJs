import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Menu from './Menu';
import Dashboard from './Dashboard';
import Footer from './Footer';

function App() {
  return (
    <div class="wrapper">
      <Header/>
      <Menu/>
      <Dashboard/>
      <Footer/>
    </div>
  );
}

export default App;
