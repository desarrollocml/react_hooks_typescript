import React, { ChangeEvent, useState } from "react";

export default function Formulario() {
  const [formulario, setFormulario] = useState({
    email: "",
    nombre: "",
  });
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setFormulario({
      ...formulario,
      [name]: value,
    });
  };
  return (
    <>
      <form autoComplete="off">
        <div className="mb-3">
          <label className="form-label">Codigo Postal:</label>
          <input
            type="text"
            name="postal"
            className="form-control"
            /* onChange={(ev) => handleChange(ev)}
            //si (ev) o cualquier arg esta en el paso a las dos funcines 
            se puede no colocar */
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="form-label">Ciudad:</label>
          <input type="text" name="ciudad" className="form-control" onChange={handleChange} />
        </div>
        <pre>{JSON.stringify(formulario)}</pre>
      </form>
    </>
  );
}
