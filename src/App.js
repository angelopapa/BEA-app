import './App.css';
import Navbar from './components/navbar';
import Login from './components/login';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Payment from './components/payment';



function App() {
  return (
   
    <Router>
    
     <Routes>
    <Route path="/" element={<Navbar />} />
    <Route path="/login" element={<Login />} />
    <Route path="/pay" element={<Payment />} />
    </Routes> 
 
    </Router>
   
  );
}

export default App;
