"use client";
import { useState, useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function Ventas() {
  const router = useRouter();
  const path = usePathname();
  const variables = useSearchParams();
  const [renders, setRenders] = useState(0);

  const navegarAReportes = () => {
    router.push('/ventas/reportes');
  }

  const navegarAClientes = () => {
    router.push('/clientes');
  }

  useEffect(() => {
    console.log(variables?.get('mes'));
    console.log(variables?.get('anio'));
  }, []);

  return (
    <>
        <div className="d-flex flex-row">
          Ventas ath {path}
        </div>
        <div className="d-flex flex-row" style={ { height: '2000px'} }>
        <button 
          onClick={() => navegarAReportes()}>
          Reportes
            </button>
        </div>
        <div>
        <button
          id="boton" 
          onClick={() => navegarAClientes()}>
          Clientes
            </button>
        </div>
        <div className="d-flex flex-row">
        <Link
            className="btn btn-info"
            href={
              {
                pathname: '/ventas/reportes',
              }
          }
          >
            Reportes link
          </Link>
        </div>
    </>
  );
}
