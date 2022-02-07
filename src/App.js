import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import './responsive.css';
import './grid.css';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Dashboard from './components/Dashboard';
import Forms from './components/Forms';
import Tables from './components/Tables';
import Charts from './components/Charts';
import Login from './components/Login';
import Register from './components/Register';


function App() {

  return (
      <BrowserRouter>
        
        <Slider />

        <div className="main-content">
          <Navbar />

          <div className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/forms" element={<Forms />} />
              <Route path="/tables" element={<Tables />} />
              <Route path="/charts" element={<Charts />} />

            </Routes>
          </div>
        </div>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>

      </BrowserRouter>
  );
}

export default App;
