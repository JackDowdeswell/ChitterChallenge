import './App.css';
import { Routes, Route } from 'react-router-dom';
import PeepForm from './Components/PeepForm';
import AllPeeps from './Components/AllPeeps';

function App() {
  return (
    <body className="app">
      <h1 className="chitterTitle">Chitter </h1><h1 className="bird">🐤</h1>
      <Routes>
        <Route path="/peeps" element={<AllPeeps />} />
        <Route exact path="/" element={<PeepForm />} />
      </Routes>
    </body>
  );
}

export default App;
