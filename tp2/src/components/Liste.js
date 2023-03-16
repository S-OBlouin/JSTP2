const Liste = ({ produits, setIsEdit, onDelete }) => {
  return (
    <ul className="list-group col-5">
      {produits.map((produit) => {
        return (
          <li className="list-group-item d-flex justify-content-between">
            <span>
              {produit.nom} | {produit.prix}
            </span>
            <div>
              <button
                onClick={() => {
                  setIsEdit(produit.id);
                }}
                className="btn bg-warning ms-2">
                Modifier
              </button>
              <button
                onClick={() => {
                  onDelete(produit.id);
                }}
                className="btn bg-danger ms-2 text-white">
                Supprimer
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Liste;
