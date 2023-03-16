import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Accueil from "./components/Accueil.js";
import Produit from "./components/Produit.js";

function App() {
  const [produits, setProduit] = useState([
    {
      id: 1,
      nom: "Bouleau",
      desc: "Arbre à écorce blanc",
      prix: "$72",
    },
    {
      id: 2,
      nom: "Érable",
      desc: "Arbre emblème du Canada",
      prix: "$37",
    },
    {
      id: 3,
      nom: "Chène",
      desc: "Arbre répandu en ville",
      prix: "$114",
    },
  ]);

  const addProduit = (newProduit) => {
    let id;
    while (true) {
      id = Math.random() * 1000;
      const sameId = produits?.some((produit) => produit.id === id);
      if (!sameId) {
        break;
      }
    }
    setProduit([...produits, { ...newProduit, id }]);
  };

  const editProduit = (newProduit) => {
    const prod = produits.filter((produit) => produit.id !== newProduit.id);
    setProduit([...prod, newProduit]);
  };

  const deleteProduit = (id) => {
    setProduit(produits.filter((produit) => produit.id !== id));
  };

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
          <Route path="/produit" element={<Produit onAdd={addProduit} onDelete={deleteProduit} onEdit={editProduit} produits={produits} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
