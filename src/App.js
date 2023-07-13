import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Form from './components/Form';
import PersonContent from './components/PersonContent';
import PlanetContent from './components/PlanetContent';

function App() {


  return (
    <div className="App">
      <h1>Luke APIwalker</h1>
      <Form/>
      <Routes>
        <Route path='/people/:id' element={<PersonContent/>} />
        <Route path='/planet/:id' element={<PlanetContent/>} />
      </Routes>
    </div>
  );
}

export default App;
