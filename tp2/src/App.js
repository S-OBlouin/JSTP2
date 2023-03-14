import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Accueil from "./components/Accueil.js";
import Produit from "./components/Produit.js";

function App() {
  return (
    <BrowserRouter>
      <nav class="navbar navbar-expand-lg bg-success text-dark bg-opacity-50">
        <div class="container-fluid">
          <p className="fw-bold fs-4">Les Arbres Forest</p>
          <div class="navbar-nav">
            <Link to="/" className="nav-link">
              <p className="fw-bold fs-4">Accueil</p>
            </Link>
            <Link to="/produit" className="nav-link">
              <p className="fw-bold fs-4">Produit</p>
            </Link>
          </div>
        </div>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/produit" element={<Produit />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
