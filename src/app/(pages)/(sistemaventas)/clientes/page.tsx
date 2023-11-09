"use client";

import { useRouter } from "next/navigation";

export default function Clientes() {
  const router = useRouter();

  const goToCreacion = () => {
    router.push("clientes/creacion");
  };
  return (
    <>
      <main>
        <div className="d-flex flex-row">Pagina de clientes</div>
        <button onClick={goToCreacion}>Nuevo Cliente</button>
      </main>
    </>
  );
}
