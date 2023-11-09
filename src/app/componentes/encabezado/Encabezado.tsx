import { useRouter } from "next/navigation";
import { useContext } from "react";
import { SesionContext } from "../../context/SesionContext";

export const Encabezado = () => {
  const router = useRouter();
  const { usuario }: { usuario: any } = useContext(SesionContext);
  const goBack = () => {
    router.back();
  };

  return (
    <header>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">
            Sistema Postulaciones y Ventas minoristas
          </a>
          <button onClick={goBack}> atras </button>
          <form className="d-flex">
            Bienvenido {usuario.apellido}, {usuario.nombre}
          </form>
        </div>
      </nav>
    </header>
  );
};
