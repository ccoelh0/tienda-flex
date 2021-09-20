import React from "react";

const ItemListContainer = (prop) => {
  const { greeting } = prop;

  return (
    <div className="titulo">
      <h2>{greeting}</h2>
    </div>
  );
};

export default ItemListContainer;
