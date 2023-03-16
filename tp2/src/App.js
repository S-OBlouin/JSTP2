import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Accueil from "./components/Accueil.js";
import Produit from "./components/Produit.js";

function App() {
  const [produits, setProduit] = useState([]);

  useEffect(() => {
    const getProduits = async () => {
      const produitFromServer = await fetchProduits();
      setProduit(produitFromServer);
    };
    getProduits();
  }, []);

  const fetchProduits = async () => {
    const res = await fetch("http://localhost:5000/produits");
    const data = await res.json();
    return data;
  };
  const fetchProduit = async (id) => {
    const res = await fetch(`http://localhost:5000/produits/${id}`);
    const data = await res.json();
    return data;
  };

  const addProduit = async (produit) => {
    const res = await fetch("http://localhost:5000/produits", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(produit),
    });
    // let id;
    // while (true) {
    //   id = Math.random() * 1000;
    //   const sameId = produits?.some((produit) => produit.id === id);
    //   if (!sameId) {
    //     break;
    //   }
    // }
    const newProduit = await res.json();
    setProduit([...produits, { ...newProduit, id }]);
  };

  const editProduit = async (id) => {
    const produitToUpd = await fetchProduit(id);
    const updProduit = { nom: produitToUpd.nom, desc: produitToUpd.desc, prix: produitToUpd.prix };
    const res = await fetch(`http://localhost:5000/produits/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updProduit),
    });
    const data = await res.json();
    setProduit(produits.map((produit) => (produit.id === id ? { ...produit, data } : produit)));
  };

  const deleteProduit = async (id) => {
    await fetch(`http://localhost:5000/produits/${id}`, {
      method: "DELETE",
    });
    setProduit(produits.filter((produit) => produit.id !== id));
  };

  return (
    <BrowserRouter>
      <nav class="navbar navbar-expand-lg bg-success text-dark bg-opacity-50">
        <div class="container-fluid">
          <p className="fw-bold fs-4">Les Arbres Forest</p>
          <div class="navbar-nav">
            <Link to="/build" className="nav-link">
              <p className="fw-bold fs-4">Accueil</p>
            </Link>
            <Link to="/build/produit" className="nav-link">
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
