import React, { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import "../../componentes-css/CartStyle/tarjetaDeCredito.css";

const TarjetaDeCredito = (props) => {
  const { name, setName, number, setNumber, cvc, setCVC, expiry, setExpiry } =
    props;

  const [focus, setFocus] = useState("");

  const handleInputFocus = (e) => {
    setFocus(e.target.name);
  };

  return (
    <div>
      <div id="PaymentForm">
        <Cards
          cvc={cvc}
          expiry={expiry}
          name={name}
          number={number}
          focused={focus}
        />
        <div className="tarjetasForm">
          <div className="number">
            <label htmlFor="number">Card number</label>
            <input
              type="number"
              name="number"
              placeholder=" #### #### #### ####"
              value={number}
              onChange={(evento) => {
                const number = evento.target.value.slice(0, 16);
                setNumber(number);
              }}
              onFocus={handleInputFocus}
            />
          </div>
          <div className="name">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder=" JOHN DOE"
              value={name}
              onChange={(evento) => setName(evento.target.value)}
              onFocus={handleInputFocus}
            />
          </div>
          <div className="expiry">
            <label htmlFor="expiry">Expiry</label>
            <input
              type="text"
              name="expiry"
              placeholder="12/27"
              value={expiry}
              onChange={(evento) => {
                const expiry = evento.target.value.slice(0, 5);
                setExpiry(expiry);
              }}
              onFocus={handleInputFocus}
            />
          </div>
          <div className="cvc">
            <label htmlFor="cvc">CVC</label>
            <input
              type="number"
              name="cvc"
              placeholder="###"
              value={cvc}
              onChange={(evento) => {
                const cvc = evento.target.value.slice(0, 3);
                setCVC(cvc);
              }}
              onFocus={handleInputFocus}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TarjetaDeCredito;
