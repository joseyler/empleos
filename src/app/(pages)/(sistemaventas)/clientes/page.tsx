"use client";

import Link from "next/link";

export default function Clientes() {
  
  return (
    <>
      <main>
        <div className="d-flex flex-row">
          Pagina de clientes
        </div>
        <Link
            className="btn btn-info"
            href={
              {
                pathname: '/ventas',
              }
          }
          >
            Ventas link
          </Link>
      </main>
    </>
  );
}