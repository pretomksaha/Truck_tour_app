import './App.css';
import Nav from './components/Nav';
import {BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import Create from './components/Create';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
      <Nav />
        <header className="App-header">
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Create" element={<Create/>} />
          </Routes>     
        </header>
      </div>
    </Router>
  );
}

export default App;
