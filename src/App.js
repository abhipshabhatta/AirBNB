import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Index from './pages/index';
import About from './pages/About';
import Appartment from './pages/Apartment';
import './styles/about.css';
import './styles/footer.css';
import './styles/header.css';
import './styles/accordion.css';
import './styles/card.css';
import './styles/home-banner.css';
import './styles/variables.css';
import './styles/carousel.css';


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/apartment/:id" element={<Appartment />} />
        </Routes>
    </Router>
  );
}

export default App;
