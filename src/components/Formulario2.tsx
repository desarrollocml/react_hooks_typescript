import React, { ChangeEvent, useState } from "react";
import { useForm } from "../hooks/useForm";

export default function Formulario2() {
  const {postal,ciudad,formulario,handleChange}=useForm({
    postal:"ABC",
    ciudad:"Valparaiso"
  })
  //const {postal,ciudad} = formulario;
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
            value={postal}
          />
        </div>
        <div>
          <label className="form-label">Ciudad:</label>
          <input value={ciudad} type="text" name="ciudad" className="form-control" onChange={handleChange} />
        </div>
        <pre>{JSON.stringify(formulario)}</pre>
      </form>
    </>
  );
}
