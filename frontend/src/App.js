import './App.css';
import Nav from './components/Nav';
import {BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import Create from './components/Create';
import Home from './components/Home';
import Update from './components/Update';
import Organize from './trip/Organize';
import Reschedule from './trip/Reschedule';
import Trips from './trip/Trips';
import Delete from './components/Delete';
import Remove from './trip/Remove';

function App() {
  return (
    <Router>
      <div className="App">
      <Nav />
        <header className="App-header">
        <Routes>
            <Route path="/trucks" element={<Home/>} />
            <Route path="/Create" element={<Create/>} />
            <Route path="/trucks/update" element={<Update/>} />
            <Route path="/trucks/delete" element={<Delete/>} />
            <Route path="/trips" element={<Trips/>} />
            <Route path="/organize" element={<Organize/>} />
            <Route path="/trips/update" element={<Reschedule/>} />
            <Route path="/trips/delete" element={<Remove/>} />

          </Routes>     
        </header>
      </div>
    </Router>
  );
}

export default App;
