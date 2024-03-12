import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import {Home} from "./pages/home";
import {Navbar} from "./components/navbar"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
