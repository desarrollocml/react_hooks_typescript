import React, { ChangeEvent, useState } from "react";

export default function Formulario() {
  const [formulario, setFormulario] = useState({
    email: "",
    nombre: "",
  });
  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    console.log(ev.target.name);
    console.log(ev.target.value);
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
          <input type="text" name="nombre" className="form-control" />
        </div>
        <pre>{JSON.stringify(formulario)}</pre>
      </form>
    </>
  );
}
