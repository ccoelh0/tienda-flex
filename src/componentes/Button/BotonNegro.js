import React from "react";
import { Link } from "react-router-dom";

export const BotonNegro = ({ texto, link, clase }) => {
  return (
    <Link to={link}>
      <button className={`${clase}`} style={{ color: "white" }}>
        {texto}
      </button>
    </Link>
  );
};
