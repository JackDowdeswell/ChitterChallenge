import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import PeepForm from './Components/PeepForm';
import AllPeeps from './Components/AllPeeps';
import SignUp from './Components/SignUp';
import Login from './Components/Login';

function App() {
  const [user, setLoginUser] = useState({});

  return (
    <body className="app">
      <h1 className="chitterTitle">Chitter </h1><h1 className="bird">🐤</h1>
      <Routes>
        <Route path="/peeps" element={<AllPeeps />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Login setLoginUser={setLoginUser} />} />
        <Route exact path="/newpeep" element={<PeepForm setLoginUser={setLoginUser} user={user} />} />
      </Routes>
    </body>
  );
}

export default App;
