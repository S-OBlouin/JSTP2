import { useState } from "react";
import NewProduit from "./NewProduit.js";
import Liste from "./Liste.js";

const Produit = ({ onAdd, produits, onEdit, onDelete }) => {
  const [isEdit, setIsEdit] = useState(null);

  const handleSetIsEdit = (id) => {
    setIsEdit(id);
    console.log(id);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <NewProduit onAdd={onAdd} isEdit={isEdit} setIsEdit={setIsEdit} produits={produits} onEdit={onEdit} />
        <Liste produits={produits} onDelete={onDelete} setIsEdit={handleSetIsEdit} />
      </div>
    </div>
  );
};

export default Produit;
