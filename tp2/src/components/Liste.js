const Liste = ({ produits, setIsEdit, onDelete }) => {
  return (
    <ul>
      {produits.map((produit) => {
        return (
          <li>
            <span>{produit.nom}</span>
            <button
              onClick={() => {
                setIsEdit(produit.id);
              }}>
              Modifier
            </button>
            <button
              onClick={() => {
                onDelete(produit.id);
              }}>
              Supprimer
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Liste;
