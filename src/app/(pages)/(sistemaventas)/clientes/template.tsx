"use client";
import { Encabezado } from "../../../componentes/encabezado/Encabezado";

export default function ClientesTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Encabezado />
      <div>
        {" "}
        Este es el template de clientes, a continuacion se dibuja el page.tsx
        correspondiente al path.
      </div>
      {children}
      <div>abajo de page.tsx</div>
    </>
  );
}
