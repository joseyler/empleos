"use client";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Encabezado } from "../../../componentes/encabezado/Encabezado";

export default function VentasTemplate({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Encabezado />
      <main>
        {children}
      </main>
    </>
  );
}
