import logo from './logo.svg';
import './App.css';
import Header from './components/Head/Header';
import Home from './components/Hero/Home';
import Features from './components/Feautures/Features';
import Resume from './components/Resume/Resume';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Features/>
      <Resume/>

    </div>
  );
}

export default App;
