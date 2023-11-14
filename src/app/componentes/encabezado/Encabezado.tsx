import { useContext } from 'react';
import { SesionContext } from "../../context/SesionContext";

export const Encabezado = (props: any) => {

  const { usuario } : { usuario: any } = props;

  return (
    <header>
        <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand">Sistema Postulaciones y Ventas minoristas</a>
    <div className="d-flex">
      Bienvenido {usuario?.apellido}, {usuario?.nombre}
    </div>
  </div>
</nav>
      </header>
  );
}