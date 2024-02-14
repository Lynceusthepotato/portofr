import { Route, Routes } from 'react-router-dom';
import './assets/App.css';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Experiences from './pages/Experiences';


function App() {
  return (
    <Routes>
      <Route path='/' element={<> <Home/> <About/> <Experiences/> </>}></Route>
    </Routes>
  );
}

export default App;
