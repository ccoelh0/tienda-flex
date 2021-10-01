import React from "react";

const Talles = ({ talles }) => {
  return (
    <div>
      <h4>Talles disponibles</h4>
      <div className="contenedor-talles">
        {talles.map((talle, index) => (
          <button key={index}>{talle}</button>
        ))}
      </div>
    </div>
  );
};

export default Talles;
