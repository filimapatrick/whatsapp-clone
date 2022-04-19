import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ChatPage from './pages/ChatPage';
import Home from './Components/Home';


function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chatpage" element={<ChatPage />} />
     

      </Routes>
     
    </div>
    </Router>
  );
}

export default App;
