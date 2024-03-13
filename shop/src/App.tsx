import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import {Home} from "./pages/home";
import {Navbar} from "./components/navbar"
import {Women} from "./pages/women";
import {Men} from "./pages/men";
import {Jewelry} from "./pages/jewelry";
import {Tech} from "./pages/tech";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/women" element={<Women />}/>
          <Route path="/men" element={<Men />}/>
          <Route path="/jewelry" element={<Jewelry />}/>
          <Route path="/tech" element={<Tech />}/>
          <Route path="*" element={<h1>PAGE NOT FOUND</h1>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
