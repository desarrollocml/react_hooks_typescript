import { useState } from "react";

interface User {
    uid:string;
    name:string;
}

export default function Usuario() {
    const [user, setUser] = useState<User>();
    const login = ()=>{
        setUser({
            uid: "ABC123",
            name: "Fernando Perez"
        })
    }
  return (
    <div className="mt-1">
        <h4>Usuario:</h4>
        <button 
        onClick={login}
        className="btn btn-outline-primary">
        Login
        </button>
        {
            (!user)
            ?<pre>No hay usuario</pre>
            :<pre>{JSON.stringify(user)}</pre>
        }
    </div>

  )
  }