import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Apartment from "./pages/Apartment";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/apartment/:id" element={<Apartment />} />
        {/* <Route path="*" element={<NotFound />} // optional */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
