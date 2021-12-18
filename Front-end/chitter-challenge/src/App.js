import './App.css';
import { Routes, Route } from 'react-router-dom';
import PeepForm from './Components/PeepForm';

function App() {
  return (
    <>
      <body className="app">
        <h1 className="chitterTitle">Chitter </h1><h1 className="bird">🐤</h1>
        <Routes>
          <Route exact path="/" element={<PeepForm />} />
        </Routes>
      </body>
    </>
  );
}

export default App;
