import { useState, useEffect } from "react";

const NewProduit = ({ onAdd, produits, isEdit, setIsEdit, onEdit }) => {
  const [nom, setNom] = useState("");
  const [desc, setDesc] = useState("");
  const [prix, setPrix] = useState("");
  useEffect(() => {
    const produit = produits.find((produit) => produit.id === isEdit);
    if (produit) {
      setNom(produit.nom);
      setDesc(produit.desc);
      setPrix(produit.prix);
    } else {
      setNom("");
      setDesc("");
      setPrix("");
    }
  }, [isEdit]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (isEdit) {
      onEdit({ id: isEdit, nom, desc, prix });
      setIsEdit(null);
    } else {
      onAdd({ nom, desc, prix });
    }
    setNom("");
    setDesc("");
    setPrix("");
  };

  return (
    <div className="card">
      <form className="mt-5" onSubmit={onSubmit}>
        <div className="card-header">
          <h2>Nouveau Produit</h2>
        </div>
        <div className="card-body">
          <div className="form-control">
            <label>Nom</label>
            <input type="text" placeholder="Nom" value={nom} onChange={(e) => setNom(e.target.value)} />
          </div>
          <div className="form-control">
            <label>Description</label>
            <textarea placeholder="Description du produit" value={desc} onChange={(e) => setDesc(e.target.value)} />
          </div>
          <div className="form-control">
            <label>Prix</label>
            <input type="text" placeholder="Prix" value={prix} onChange={(e) => setPrix(e.target.value)} />
          </div>
        </div>
        <button type="submit" className="btn bg-primary">
          Enregistrer
        </button>
        {isEdit && (
          <button type="button" className="btn bg-danger" onClick={() => setIsEdit(null)}>
            Retour
          </button>
        )}
      </form>
    </div>
  );
};

export default NewProduit;
