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
          <label className="form-label">Email:</label>
          <input
            type="email"
            name="email"
            className="form-control"
            /* onChange={(ev) => handleChange(ev)}
            //si (ev) o cualquier arg esta en el paso a las dos funcines 
            se puede no colocar */
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="form-label">Nombre:</label>
          <input type="text" name="nombre" className="form-control" onChange={handleChange} />
        </div>
        <pre>{JSON.stringify(formulario)}</pre>
      </form>
    </>
  );
}
