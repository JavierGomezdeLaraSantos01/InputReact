import React, { useState } from "react";

const Dolares = () => {
  const [dinero, setDinero] = useState(0);
  const handleChange= (e) =>{
    setDinero(e.target.value);
  }
  return (
    <div>
      <p>{dinero * 1.1}$</p>
      <input 
        type="number"
        id="dinero"
        name="dinero"
        value={dinero}
        onChange={handleChange}></input>
    </div>
  );
};

const Input = () => {
  return <Dolares />;
};

export default Input;