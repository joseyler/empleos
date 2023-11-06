"use client";
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Ventas() {
  const router = useRouter();

  const navegarAReportes = () => {
    router.push('/ventas/reportes');
  }
  return (
    <>
        <div className="d-flex flex-row">
          Ventas
        </div>
        <div className="d-flex flex-row">
        <button 
          onClick={() => navegarAReportes()}>
          Reportes
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
