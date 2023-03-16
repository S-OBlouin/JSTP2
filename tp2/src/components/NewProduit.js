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
    <div className="card mt-5">
      <form onSubmit={onSubmit}>
        <div className="card-header text-center">
          <h2>Nouveau Produit</h2>
        </div>
        <div className="card-body">
          <label className="form-label">Nom</label>
          <input type="text" placeholder="Nom" value={nom} className="form-control" onChange={(e) => setNom(e.target.value)} />
          <label className="form-label">Description</label>
          <textarea placeholder="Description du produit" className="form-control" value={desc} onChange={(e) => setDesc(e.target.value)} />
          <label className="form-label">Prix</label>
          <input type="text" placeholder="Prix" className="form-control" value={prix} onChange={(e) => setPrix(e.target.value)} />
        </div>
        <div className="text-center ">
          <button type="submit" className="btn bg-primary text-white mb-2 me-2">
            Enregistrer
          </button>
          {isEdit && (
            <button type="button" className="btn bg-danger text-white mb-2" onClick={() => setIsEdit(null)}>
              Retour
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default NewProduit;
