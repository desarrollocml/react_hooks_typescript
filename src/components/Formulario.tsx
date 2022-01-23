import { useForm } from "../hooks/useForm";

interface FormData {
    email:string;
    nombre:string;
    edad:number
}
export default function Formulario() {
  const { formulario, handleChange } = useForm<FormData>({
    email: "cml@gmail.com",
    nombre: "juan perez",
    edad:35,
  });
  const {email,nombre,edad}=formulario;
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
            value={email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="form-label">Nombre:</label>
          <input
            type="text"
            name="nombre"
            className="form-control"
            value={nombre}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="form-label">Edad:</label>
          <input
            type="number"
            name="edad"
            className="form-control"
            value={edad}
            onChange={handleChange}
          />
        </div>
        <pre>{JSON.stringify(formulario)}</pre>
      </form>
    </>
  );
}
