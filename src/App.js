import React,{useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ChatPage from './pages/ChatPage';
import Home from './Components/Home';
import Login from './pages/Login';


function App() {
  const [user, setUser] = useState('');
  return (

  
    <Router>
    <div className="App">

    {
     user ? (<Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chatpage" element={<ChatPage />} />
   

    </Routes>) : (<Login/>)
   }
      
     
    </div>
    </Router>
  );
}

export default App;
