import React from "react";

export const SeleccionarTalle = ({ talle, talleSelect }) => {
  return (
    <div>
      <select
        onChange={(e) => {
          const talleElegido = e.target.value;
          talleSelect(talleElegido);
        }}
      >
        <option value={0}>Available stock</option>
        {talle &&
          talle.map((t) => (
            <option value={t} key={`talle-${t}`}>
              {t}
            </option>
          ))}
      </select>
    </div>
  );
};
