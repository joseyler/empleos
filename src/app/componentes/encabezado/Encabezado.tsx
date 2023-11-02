import { useContext } from 'react';
import { SesionContext } from "../../context/SesionContext";

export const Encabezado = () => {

  const { usuario } : { usuario: any } = useContext(SesionContext)

  return (
    <header>
        <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand">Sistema Postulaciones y Ventas minoristas</a>
    <form className="d-flex">
      Bienvenido {usuario.apellido}, {usuario.nombre}
    </form>
  </div>
</nav>
      </header>
  );
}