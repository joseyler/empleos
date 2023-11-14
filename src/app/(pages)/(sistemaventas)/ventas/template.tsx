"use client";
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Encabezado } from "../../../componentes/encabezado/Encabezado";

export default function VentasTemplate({
  children,
}: {
  children: React.ReactNode
}) {

  const path = usePathname();

  return (
    <>
      <main>
        <div>En template el path es {path}</div>
        {children}
      </main>
    </>
  );
}
