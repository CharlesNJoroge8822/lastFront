import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from "./pages/home"
import Login from './pages/login';
import Logout from './pages/logout';
import Register from './pages/register';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
      <Navbar />  {/* Navbar appears on all pages */}

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />

        </Routes>

      </div> 
      <Footer/>
   
    </Router>
  );
}

export default App;
