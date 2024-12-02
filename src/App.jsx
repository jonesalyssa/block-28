import { Routes, Route, Link } from "react-router-dom"; // Link added here
import "./App.css";
import Blue from "./components/Blue";
import Red from "./components/Red";
import Home from "./components/Home"; // Import the Home component

function App() {
  return (
    <div id="container">
      {/* Navigation Bar */}
      <div id="navbar">
        <nav>
          <ul>
            <li>
              <Link to="/blue">Blue</Link>
            </li>
            <li>
              <Link to="/red">Red</Link>
            </li>
            <li>
              <Link to="/">Home</Link> {/* Link to Home added */}
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Section for Routes */}
      <div id="main-section">
        <Routes>
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
          <Route path="/" element={<Home />} /> {/* Route for Home added */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
