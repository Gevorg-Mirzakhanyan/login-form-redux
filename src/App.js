

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Login from './page/Login/Login';
import User from './page/User/User';

function App() {


  return (
    <div className="App">
        <Header />

        <Routes>
          <Route path={'/'} element={<User />} />
          <Route path={'/Login'} element={<Login />} />
        </Routes>
    </div>
  );
}

export default App;
