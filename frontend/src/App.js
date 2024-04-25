import { Routes, Route, Link } from 'react-router-dom';

import './App.css';
import Home from './pages/home';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import NoMatch from './pages/nomatch';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;